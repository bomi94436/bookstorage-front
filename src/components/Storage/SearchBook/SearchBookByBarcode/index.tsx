import { getBook } from '@apis/book';
import { Card, Divider, Title, Text, ButtonGroup, Button } from '@stories';
import { IBook } from 'types';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import BarcodeScanner from './BarcodeScanner';
import { content, contentRight } from './BarcodeScanner.styles';
import React from 'react';

const SearchBookByBarcode = () => {
  const [isbn, setISBN] = useState<string>('9788966262601'); // ex - 9788966262601
  const [selectedISBN, setSelectedISBN] = useState<string>('');

  const { isLoading, error, data } = useQuery<IBook | undefined, Error>(
    ['book', isbn],
    () => {
      if (isbn.length) return getBook({ isbn });
    },
    {
      onSuccess: () => {
        setSelectedISBN('');
      },
    }
  );

  const onClickBook = useCallback(() => {
    if (data) selectedISBN ? setSelectedISBN('') : setSelectedISBN(data.isbn);
  }, [selectedISBN, data]);

  return (
    <React.Fragment>
      <Title>책 검색</Title>
      <Text size="large" color="gray">
        바코드나 QR코드를 통해 독후감을 작성할 책을 선택하세요.
      </Text>

      <div css={[content]}>
        <div>
          <BarcodeScanner isbn={isbn} setISBN={setISBN} />
        </div>

        <Divider direction="column" />

        <div css={[contentRight]}>
          <Title level="3">검색 결과</Title>

          {data && (
            <Card imgSrc={data.image} onClick={onClickBook} active={data.isbn === selectedISBN}>
              <Title level="3">{data.title}</Title>
            </Card>
          )}
        </div>
      </div>

      <ButtonGroup css={{ marginTop: '48px' }} rowAlign="flex-end">
        <Button onClick={onClickBook} disabled={!Boolean(selectedISBN)}>
          내 스토리지에 추가
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default SearchBookByBarcode;

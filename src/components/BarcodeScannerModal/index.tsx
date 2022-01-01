import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import BarcodeScanner from './BarcodeScanner';
import { style } from './BarcodeScanner.styles';
import { Card, Divider, Modal, Title } from '@stories/.';
import { IBook } from 'types';
import { getBook } from '@apis/book';

interface BarcodeScannerModalProps {
  close: () => void;
}

const BarcodeScannerModal = ({ close }: BarcodeScannerModalProps) => {
  const [isbn, setISBN] = useState<string>('9788966262601');
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
    <div css={style}>
      <Modal
        visible={true}
        title="책 검색"
        description="바코드나 QR코드를 통해 독후감을 작성할 책을 선택하세요."
        confirmText="다음"
        size="fullscreen"
        cancellable
        disableConfirm={!Boolean(selectedISBN.length)}
        onCancel={close}
      >
        <div className="content">
          <div className="content-left">
            <BarcodeScanner isbn={isbn} setISBN={setISBN} />
          </div>

          <Divider direction="column" />

          <div className="content-right">
            <Title level="3">검색 결과</Title>

            {data && (
              <Card imgSrc={data.image} onClick={onClickBook} active={data.isbn === selectedISBN}>
                <Title level="3">{data.title}</Title>
              </Card>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BarcodeScannerModal;

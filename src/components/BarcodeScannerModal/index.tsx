import API from '@lib/api';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import BarcodeScanner from './BarcodeScanner';
import { style } from './BarcodeScanner.styles';
import { Card, Modal } from '@stories/.';
import Divider from '@stories/Divider/Divider';

interface BarcodeScannerModalProps {
  close: () => void;
}

interface IBook {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  price: string;
  pubdate: string;
  publisher: string;
  title: string;
}

const BarcodeScannerModal = ({ close }: BarcodeScannerModalProps) => {
  const [isbn, setISBN] = useState<string>('9788966262601');
  const [selectedISBN, setSelectedISBN] = useState<string>('');

  const { isLoading, error, data } = useQuery<IBook, Error>(['book', isbn], async () => {
    if (isbn.length) {
      const { data } = await API.get(`/books/isbn/${isbn}`);
      setSelectedISBN('');
      return data;
    }
  });

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
            <h3 className="content-right-title">검색 결과</h3>

            {data && (
              <Card imgSrc={data.image} onClick={onClickBook} active={data.isbn === selectedISBN}>
                <h4 className="card-title">{data.title}</h4>
              </Card>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BarcodeScannerModal;

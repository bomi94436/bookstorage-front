import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

interface props {
  isbn: string;
  setISBN: React.Dispatch<React.SetStateAction<string>>;
}

const BarcodeScanner = ({ isbn, setISBN }: props) => {
  return (
    <>
      <BarcodeScannerComponent
        onUpdate={(err, result) => {
          if (result && isbn !== result.text) setISBN(result.text);
        }}
      />
      <p>isbn: {isbn}</p>
    </>
  );
};

export default BarcodeScanner;

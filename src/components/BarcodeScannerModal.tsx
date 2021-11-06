import { css } from '@emotion/react';
import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const modal = css`
  width: 50vw;
  height: 50vh;
  padding: 100px;
`;

const BarcodeScannerModal = () => {
  const [data, setData] = React.useState('Not Found');

  return (
    <>
      <div css={modal}>
        <BarcodeScannerComponent
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            // else setData('Not Found');
          }}
        />
        <p>{data}</p>
      </div>
    </>
  );
};

export default BarcodeScannerModal;

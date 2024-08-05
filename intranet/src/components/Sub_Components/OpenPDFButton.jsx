import React from 'react';

const OpenPDFButton = ({ fileName }) => {
  const openPDF = () => {
    window.open(`../${fileName}`, '_blank');
  };

  return (
    <button onClick={openPDF}>Open {fileName}</button>
  );
};

export default OpenPDFButton;
import React from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
  return (
    <Document file="../../resume/resume2021.pdf">
      <Page pageNumber={1} />
    </Document>
  );
};

export default Resume;

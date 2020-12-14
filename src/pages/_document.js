import AuikDocument from 'a-uik/c/AuikDocument';
import NextDocument from 'next/document';
import React from 'react';

class Document extends NextDocument {
  render() {
    return <AuikDocument {...this.props} />;
  }
}

export default Document;

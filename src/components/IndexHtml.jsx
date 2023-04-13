import React, { useEffect, useState } from 'react';

function IndexHtml() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/index.html')
      .then(response => response.text())
      .then(html => setHtml(html));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default IndexHtml;

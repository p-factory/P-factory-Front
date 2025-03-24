import React from 'react';

const Cursor = ({
  mode,
  children,
}: {
  mode: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={mode === 'highlight' ? 'highlight-cursor' : ''}>
      {children}
    </div>
  );
};

export default Cursor;

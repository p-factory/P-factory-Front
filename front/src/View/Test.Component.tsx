import React, { useState } from 'react';

type Props = {
  title: string;
};

const test = () => {
  console.log('test');
};

const TestComponent: React.FC<Props> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click Me: {count}
      </button>
    </div>
  );
};

export default TestComponent;

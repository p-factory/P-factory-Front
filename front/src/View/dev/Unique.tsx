import React, { useState } from 'react';

type TestProps = {
  title: string;
};

// const test = () => {
//   console.log('test');
// };

const Unique: React.FC<TestProps> = ({ title }) => {
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

export default Unique;

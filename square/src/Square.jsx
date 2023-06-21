import React from 'react';

const Square = ({ n }) => {
  const squares = [];

  for (let i = 0; i < n; i++) {
    squares.push(
      <div
        key={i}
        style={{
          width: `${20 * (n - i)}px`,
          height: `${20 * (n - i)}px`,
          border: '1px solid black',
          margin: '10px auto',
        //   position:'absolute',
        }}
      ></div>
    );
  }

  return <div>{squares}</div>;
};

export default Square;

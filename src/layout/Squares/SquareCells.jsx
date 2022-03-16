import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';

const colorPallete = [
  '#256ADC',
  '#AAFCD8',
  '#1F4068',
];

const alignment = [
  'start',
  'center',
  'end',
];

export const Cell = styled.div`
  ${tw`
    border
    border-[#00172A]
    flex 
    justify-center 
    items-center
  `}
`;

const createSizes = (size) => {
  const numOfSquares = random(3);

  const squares = [];
  let start = size;
  for (let i = 0; i < numOfSquares; i += 1) {
    const newSizes = start - (1 / 5) * size;
    squares.push(newSizes);
    start = newSizes;
  }

  return squares;
};

const RecursiveCells = ({ squares }) => {
  const currentSquare = squares[0];
  const background = colorPallete[random(colorPallete.length) - 1];

  if(!currentSquare) return null;

  const lastMiddleSquare = squares.length === 1;

  return (
    <div
      style={{
        width: currentSquare,
        height: currentSquare,
        border: 'black 2px solid',
        backgroundColor: background,
        padding: '5%',
        justifyContent: alignment[random(alignment.length) - 1],
        alignItems: alignment[random(alignment.length) - 1],
        display: 'flex',
      }}
    >
      <RecursiveCells squares={squares.slice(1)} />
      {
          lastMiddleSquare && (
            <div
              style={{
                width: currentSquare * (1 / 2),
                height: currentSquare * (1 / 2),
                border: '#232325 2px solid',
                backgroundColor: colorPallete[random(colorPallete.length) - 1],
                padding: '5%',
                justifyContent: alignment[random(alignment.length) - 1],
                alignItems: alignment[random(alignment.length) - 1],
                display: 'flex',
              }}
            >
              <div
                style={{
                  background: 'black',
                  width: '6px',
                  height: '6px',
                }}
              >

              </div>
            </div>
          )
        }
    </div>
  );
};

const SquareCells = ({ size }) => {
  const background = colorPallete[random(colorPallete.length) - 1];

  const squares = createSizes(size);
  return (
    <Cell
      style={{
        backgroundColor: background,
        width: size,
        height: size,
      }}
    >
      <RecursiveCells squares={squares} />
    </Cell>
  );
};

export default SquareCells;

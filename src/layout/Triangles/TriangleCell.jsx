import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';

const colorPallete = [
  '#B4DF9A',
  '#FFEAB1',
  '#D44534',
  '#0B937B',
  '#1F2533',
];

const rotate = [
  0,
  180,
];

// Make this utility function
const getColor = () => {
  return colorPallete[random(colorPallete.length) - 1];
};

const recursiveGetColor = (colorOne) => {
  const colorTwo = getColor();

  if(colorTwo === colorOne) {
    return recursiveGetColor(colorOne);
  }

  return colorTwo;
};

export const CellContainer = styled.div`
  ${tw`
    overflow-hidden 
    relative 
    flex 
    items-center 
    justify-center
  `}
`;

const TriangleCell = ({ triangleSize, cellSize }) => {
  const colorOne = getColor();
  const colorTwo = recursiveGetColor(colorOne);
  const border = `${triangleSize / 2}px solid transparent`;
  const triangle = `${triangleSize}px solid ${colorTwo}`;
  const rotation = rotate[random(rotate.length) - 1];

  return (
    <CellContainer
      style={{
        width: cellSize,
        height: cellSize,
        backgroundColor: '#191919',
      }}
    >
      <div
        style={{
          width: triangleSize,
          height: triangleSize,
          backgroundColor: colorOne,
          borderRight: border,
          borderLeft: border,
          borderBottom: triangle,
          transform: `rotate(${rotation}deg)`,
        }}
      >
      </div>
    </CellContainer>
  );
};

export default TriangleCell;

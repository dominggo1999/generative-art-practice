import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';
import { hiragana } from '../../data/hiragana';

export const CellWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center
    relative 
    overflow-hidden
  `}
`;

export const Char = styled.p`
  ${tw`
    font-bold
  `}
`;

const colorPallete = [
  '#368E35',
  '#1F8A29',
  '#51A652',
  '#082106',
];

const rotate = [
  0,
  90,
  180,
  270,
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

const HiraganaCell = ({ size, backgroundColor }) => {
  const char = hiragana[random(hiragana.length) - 1];
  const colorOne = recursiveGetColor(backgroundColor);
  const rotation = rotate[random(rotate.length) - 1];

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
      }}
    >
      <Char
        style={
          {
            color: colorOne,
            fontSize: `${(2 / 3) * size}px`,
            transform: `rotate(${rotation}deg)`,
          }
        }
      >
        {char}
      </Char>
    </CellWrapper>
  );
};

export default HiraganaCell;

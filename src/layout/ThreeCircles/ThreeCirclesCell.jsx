import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';

export const CellWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center
    relative 
    overflow-hidden
  `}

  & > div{
    ${tw`
      absolute 
      left-0
      top-0
    `}
  }
`;

export const Circle = styled.div`
  ${tw`
    rounded-full 
    flex 
    items-center 
    justify-center
  `}
`;

const colorPallete = [
  '#EAE4D4',
  '#EA808A',
  '#F0563A',
];
const translate = ['0', '-50%'];

const shuffle = (arr) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

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

const getRotation = () => {
  const translateX = translate[random(translate.length) - 1];
  const translateY = translate[random(translate.length) - 1];

  return `translate(${translateX},${translateY})`;
};

const RecursiveCells = ({ sizes, size, colors }) => {
  const currentCircle = sizes[0];
  const currentColor = colors[0];
  const isFirst = sizes.length === 4;

  if(!currentCircle) return null;

  return (
    <Circle
      style={{
        width: currentCircle,
        height: currentCircle,
        borderWidth: size / 4,
        borderColor: currentColor,
        borderStyle: 'solid',
        background: 'transparent',
        transform: isFirst && getRotation(),
      }}
    >
      <RecursiveCells
        size={size}
        sizes={sizes.slice(1)}
        colors={colors.slice(1)}
      />
    </Circle>
  );
};

const ThreeCirclesCell = ({ size, sizes }) => {
  const colorOne = getColor();
  const colors = shuffle(colorPallete);

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
        backgroundColor: colorOne,
      }}
    >
      <RecursiveCells
        size={size}
        sizes={sizes}
        colors={colors}
      />
    </CellWrapper>
  );
};

export default ThreeCirclesCell;

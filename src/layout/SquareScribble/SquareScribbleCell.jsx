import React from 'react';
import tw, { styled } from 'twin.macro';
import short from 'short-uuid';
import { random } from '../../util/random';

export const CellWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center
    relative 
  `}
`;

const colorPallete = [
  '#D9CBC2',
  '#77A9C2',
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

export const ScribbleWrapper = styled.div`
  ${tw`
    flex
    relative
  `}
`;

export const StyledScribble = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0
    bg-transparent 
    border
    w-full 
    h-full
  `}
`;

const direction = [1, -1];
const getDirection = () => {
  return direction[random(2) - 1];
};

const Scribble = ({ color }) => {
  const scale = 1 + random(40) * 0.01;
  const rotate = random(360) * getDirection();
  const skewX = random(30) * getDirection();
  const skewY = random(30) * getDirection();
  const translateX = random(10) * getDirection();
  const translateY = random(10) * getDirection();

  return (
    <StyledScribble
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg) skew(${skewX}deg, ${skewY}deg) translate(${translateX}px, ${translateY}px)`,
        borderColor: color,
      }}
    >

    </StyledScribble>
  );
};

const SquareScribbleCell = ({ size, scribbleSize }) => {
  const numOfScribbles = 1 + random(16);
  const scribbles = Array.from(Array(numOfScribbles).keys());
  const color = getColor();

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
      }}
    >
      <ScribbleWrapper
        style={{
          width: scribbleSize,
          height: scribbleSize,
        }}
      >
        {
          scribbles.map((item) => {
            return (
              <Scribble
                key={short.generate()}
                color={color}
              />
            );
          })
        }
      </ScribbleWrapper>
    </CellWrapper>
  );
};

export default SquareScribbleCell;

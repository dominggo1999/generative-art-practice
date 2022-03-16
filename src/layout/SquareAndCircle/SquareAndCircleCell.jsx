import React from 'react';
import tw, { styled } from 'twin.macro';
import short from 'short-uuid';
import { random } from '../../util/random';

export const CellWrapper = styled.div`
  ${tw`
    flex
  `}
`;

const colorPallete = [
  '#1286A8',
  '#F9D8B9',
  '#F7F7DA',
  '#F07167',
  '#00AFB9',
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

const TriangleLayer = ({ size }) => {
  const colorOne = getColor();
  const colorTwo = recursiveGetColor(colorOne);
  const rotation = rotate[random(rotate.length) - 1];

  return (
    <div
      style={{
        backgroundColor: colorOne,
        width: size,
        height: size,
        border: `solid ${(1 / 2) * size}px`,
        borderColor: `${colorOne} ${colorOne} ${colorTwo} ${colorTwo}`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
};

export const Circle = styled.div`
  ${tw`
    w-full 
    h-full 
    rounded-full 
    flex 
    flex-wrap
  `}
`;

const CircleLayer = ({ size, colorOne }) => {
  const colorTwo = recursiveGetColor(colorOne);
  const numOfSquareMasks = 1 + random(2);
  const rotation = rotate[random(rotate.length) - 1];
  const squareMasks = Array.from(Array(numOfSquareMasks).keys());

  return (
    <Circle
      style={{
        backgroundColor: colorTwo,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {
        squareMasks.length > 0 && squareMasks.map((item) => {
          return (
            <div
              style={{
                width: 0.5 * size,
                height: 0.5 * size,
                backgroundColor: colorOne,
              }}
              key={short.generate()}
            />
          );
        })
      }
    </Circle>
  );
};

const SquareAndCircleCell = ({ size }) => {
  const background = getColor();
  const chooseShape = random(2);

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
        backgroundColor: background,
      }}
    >
      {
        chooseShape === 1 ? (
          <CircleLayer
            size={size}
            colorOne={background}
          />
        )
          : (
            <TriangleLayer size={size} />
          )
      }

    </CellWrapper>
  );
};

export default SquareAndCircleCell;

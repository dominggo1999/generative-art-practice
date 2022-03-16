import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';

export const CellContainer = styled.div`
  ${tw`
    overflow-hidden 
    relative
  `}
`;

export const Circle = styled.div`
  ${tw`
    rounded-full
    bg-blue-500 
    absolute 
  `}

  transform : translate(0,-50%);
`;

const colorPallete = [
  '#D4CFB1',
  '#0D3149',
  '#F2822B',
  '#F7BC47',
];

const translate = ['0', '-50%'];

const CircleCell = ({ size }) => {
  const background = colorPallete[random(colorPallete.length) - 1];
  const translateX = translate[random(translate.length) - 1];
  const translateY = translate[random(translate.length) - 1];

  return (
    <CellContainer
      style={{
        width: size,
        height: size,
      }}
    >
      <Circle
        style={{
          width: 2 * size,
          height: 2 * size,
          backgroundColor: background,
          transform: `translate(${translateX},${translateY})`,
        }}
      />
    </CellContainer>
  );
};

export default CircleCell;

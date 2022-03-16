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
`;

export const StyledCircle = styled.div`
  ${tw`
    bg-transparent 
    rounded-full 
    absolute
  `}
`;

const Circle = ({
  size, backgroundColor, borderColor, one,
}) => {
  const circleSize = (4 / 3) * size;

  return (
    <StyledCircle
      style={{
        width: circleSize,
        height: circleSize,
        backgroundColor,
        borderColor,
        borderStyle: 'solid',
        borderWidth: (1 / 3) * size,
        left: one ? 0 : null,
        top: one ? 0 : null,
        bottom: one ? null : 0,
        right: one ? null : 0,
        transform: one ? 'translate(25%,25%)' : 'translate(-25%,-25%)',
      }}
    >

    </StyledCircle>
  );
};

const rotation = [
  0,
  90,
  180,
  270,
];

const DoubleCircleCell = ({ size }) => {
  const rot = rotation[random(rotation.length - 1)];

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
        backgroundColor: '#4C5576',
        transform: `rotate(${rot}deg)`,
      }}
    >
      <Circle
        size={size}
        backgroundColor="#495678"
        borderColor="#77A9C2"
        one
      />
      <Circle
        size={size}
        backgroundColor="#77A9C2"
        borderColor="#D9CBC2"
      />
    </CellWrapper>
  );
};

export default DoubleCircleCell;

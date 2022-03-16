import React from 'react';
import tw, { styled } from 'twin.macro';
import { random } from '../../util/random';

export const CellWrapper = styled.div`
  ${tw`
    flex
    relative 
    overflow-hidden
  `}
`;

export const QuarterWrapper = styled.div`
  ${tw`
    absolute
    left-0
    rounded-full 
    z-10
  `}
`;

export const HalfWrapper = styled(QuarterWrapper)`
  ${tw`
    z-20 
  `}
`;

const colorPallete = [
  '#F15638',
  '#0F0426',
  '#EBE8D7',
  '#A17552',
];

const translateList = ['0%', '-50%'];

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

const Half = ({ size, translate, colorOne }) => {
  const halfTranslate = translate === '-50%' ? '-50%' : '50%';

  return (
    <HalfWrapper
      style={{
        width: size,
        height: size,
        backgroundColor: recursiveGetColor(colorOne),
        transform: `translateX(${halfTranslate})`,
      }}
    />
  );
};

const Quarter = ({
  size,
  translate,
}) => {
  return (
    <QuarterWrapper
      style={{
        width: size * 2,
        height: size * 2,
        backgroundColor: getColor(),
        transform: `translate(${translate},${translate})`,
      }}
    />
  );
};

const HalfAndQuarterCell = ({ size }) => {
  const colorOne = getColor();
  const translate = translateList[random(translateList.length) - 1];

  return (
    <CellWrapper
      style={{
        width: size,
        height: size,
        backgroundColor: colorOne,
      }}
    >
      <Quarter
        translate={translate}
        size={size}
      />
      <Half
        size={size}
        translate={translate}
        colorOne={colorOne}
      />
    </CellWrapper>
  );
};

export default HalfAndQuarterCell;

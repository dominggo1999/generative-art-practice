import React, { useRef } from 'react';
import short from 'short-uuid';
import { Canvas, Container } from '../../common/Canvas';
import ThreeCirclesCell from './ThreeCirclesCell';

const x = 6;
const y = 6;
const getSizes = (size) => {
  const sizes = [];
  let start = 0;
  const quarter = size * 0.25;

  for (let i = 0; i < 4; i += 1) {
    sizes.push((start + quarter) * 2);
    start += quarter;
  }

  return sizes;
};

const ThreeCircles = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();
  const sizes = getSizes(600 / x).reverse();

  return (
    <Container>
      <Canvas ref={canvasRef}>
        {
          area.map((i) => {
            return (
              <ThreeCirclesCell
                size={600 / x}
                key={short.generate()}
                sizes={sizes}
              />
            );
          })
        }
      </Canvas>
    </Container>
  );
};

export default ThreeCircles;

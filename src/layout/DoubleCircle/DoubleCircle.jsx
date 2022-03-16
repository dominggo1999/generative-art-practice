import React, { useRef } from 'react';
import short from 'short-uuid';
import { Canvas, Container } from '../../common/Canvas';
import DoubleCircleCell from './DoubleCircleCell';

const x = 6;
const y = 6;

const DoubleCircle = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();

  return (
    <Container>
      <Canvas ref={canvasRef}>
        {
          area.map((i) => {
            return (
              <DoubleCircleCell
                size={600 / x}
                key={short.generate()}
              />
            );
          })
        }
      </Canvas>
    </Container>
  );
};

export default DoubleCircle;

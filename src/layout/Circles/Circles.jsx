import React, { useRef } from 'react';
import short from 'short-uuid';
import CircleCell from './CircleCell';
import { Canvas, Container } from '../../common/Canvas';

const x = 6;
const y = 6;

const Circle = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();

  return (
    <Container>
      <Canvas ref={canvasRef}>
        {
            area.map((i) => {
              return (
                <CircleCell
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

export default Circle;

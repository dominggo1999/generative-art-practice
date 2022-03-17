import React, { useRef } from 'react';
import short from 'short-uuid';
import { Canvas, Container } from '../../common/Canvas';
import SquareScribbleCell from './SquareScribbleCell';

const x = 8;
const y = 8;

const SquareScribble = () => {
  const area = Array.from(Array((x - 2) * (y - 2)).keys());
  const canvasRef = useRef();
  const cellSize = 600 / x;
  const padding = (1 / 10) * cellSize;
  const scribbleSize = cellSize - (2 * padding);

  return (
    <Container>
      <Canvas
        style={{
          padding: cellSize,
          backgroundColor: '#4C5576',
        }}
        ref={canvasRef}
      >
        {
          area.map((i) => {
            return (
              <SquareScribbleCell
                size={600 / x}
                key={short.generate()}
                scribbleSize={scribbleSize}
              />
            );
          })
        }
      </Canvas>
    </Container>
  );
};

export default SquareScribble;

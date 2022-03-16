import React, { useRef } from 'react';
import short from 'short-uuid';
import { Canvas, Container } from '../../common/Canvas';
import TriangleCell from './TriangleCell';

const x = 8;
const y = 8;

const Triangles = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();
  const cellSize = 600 / x;
  const padding = (1 / 16) * cellSize;
  const triangleSize = cellSize - (2 * padding);

  return (
    <Container>
      <Canvas ref={canvasRef}>
        {
          area.map((i) => {
            return (
              <TriangleCell
                cellSize={cellSize}
                triangleSize={triangleSize}
                key={short.generate()}
              />
            );
          })
        }
      </Canvas>
    </Container>
  );
};

export default Triangles;

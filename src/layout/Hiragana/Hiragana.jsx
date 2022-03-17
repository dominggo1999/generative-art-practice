import React, { useRef } from 'react';
import short from 'short-uuid';
import { Canvas, Container } from '../../common/Canvas';
import HiraganaCell from './HiraganaCell';

const x = 18;
const y = 18;

const Hiragana = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();
  const backgroundColor = '#020401';

  return (
    <Container>
      <Canvas
        style={{
          backgroundColor,
        }}
        ref={canvasRef}
      >
        {
          area.map((i) => {
            return (
              <HiraganaCell
                size={600 / x}
                key={short.generate()}
                backgroundColor={backgroundColor}
              />
            );
          })
        }
      </Canvas>
    </Container>
  );
};

export default Hiragana;

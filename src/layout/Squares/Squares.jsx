import React, { useRef } from 'react';
import short from 'short-uuid';
import DomToImage from '@yzfe/dom-to-image';
import SquareCells from './SquareCells';
import { Canvas, Container } from '../../common/Canvas';

const x = 6;
const y = 6;

const Squares = () => {
  const area = Array.from(Array(x * y).keys());
  const canvasRef = useRef();

  const download = async () => {
    await DomToImage.toPng(canvasRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-beautiful-image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  };

  return (
    <Container>
      <button onClick={download}>Download</button>
      <Canvas ref={canvasRef}>
        {
          area.map((i) => {
            return (
              <SquareCells
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

export default Squares;

import React, { useRef } from 'react';
import tw, { styled } from 'twin.macro';
import short from 'short-uuid';
import DomToImage from '@yzfe/dom-to-image';
import RectCell from './RectCell';

const x = 6;
const y = 6;

export const Canvas = styled.div`
  ${tw`
    w-[600px] 
    h-[600px]
    bg-[#1E1E1E] 
    flex 
    flex-wrap
  `}
`;

export const Container = styled.div`
  ${tw`
    w-full 
    min-h-screen 
    bg-black 
    flex 
    items-center 
    justify-center 
    text-white
  `}

  button {
    ${tw`
      fixed 
      left-0
      top-0
    `}
  }
`;

const App = () => {
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
              <RectCell
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

export default App;

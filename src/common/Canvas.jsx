import tw, { styled } from 'twin.macro';

export const Canvas = styled.div`
  ${tw`
    w-[600px] 
    h-[600px]
    min-w-[600px] 
    min-h-[600px]
    bg-[#CE2B32] 
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

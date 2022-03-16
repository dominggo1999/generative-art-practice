import React from 'react';
import Squares from './layout/Squares/Squares';
import Circles from './layout/Circles/Circles';
import SquareAndCircle from './layout/SquareAndCircle/SquareAndCircle';
import HalfAndQuarter from './layout/HalfAndQuarter/HalfAndQuarter';
import ThreeCircles from './layout/ThreeCircles/ThreeCircles';
import Triangles from './layout/Triangles/Triangles';
import DoubleCircle from './layout/DoubleCircle/DoubleCircle';

const App = () => {
  return (
    <>
      <DoubleCircle />
      <Triangles />
      <ThreeCircles />
      <HalfAndQuarter />
      <SquareAndCircle />
      <Squares />
      <Circles />
    </>
  );
};

export default App;

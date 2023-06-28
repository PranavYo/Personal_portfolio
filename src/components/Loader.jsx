import React from 'react'
import { Triangle } from 'react-loader-spinner'
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <span className='canvas-loader'></span> */}
      <Triangle
        height="80"
        width="80"
        color="#915eff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <p
        style={{
          fontSize: 14,
          color: "#915eff",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;

// You cannot directly load the HTML element in a Three.js canvas.
// The Html component from react-three/drei is used in React Three Fiber (R3F) to render HTML elements inside a Three.js scene.
// It allows you to overlay HTML content on top of your 3D graphics, creating interactive and dynamic user interfaces.
// The Html component works by creating a separate HTML layer on top of the WebGL canvas used by Three.js. 
// This layer can contain standard HTML elements like <div>, <button>, <p>, and so on. You can position and style these elements using CSS, and they will be rendered on top of your 3D scene.
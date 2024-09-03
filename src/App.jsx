import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-mono">
      <div className="line navbar flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 ">
        {["iphone", "iPad", "mac", "services", "product"].map(e => 
          <a href="" className="text-white font-[400] text-md">{e}</a>
        )}
      </div>
      <div className="absolute flex flex-col items-center top-1/2 top-32 left-1/2 -translate-x-1/2 text-white">
        <h3 className="masked text-7xl tracking-tighter font-[700]">macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className="text-center w-3/5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem delectus, doloribus dicta sit fugit</p>
      </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 220]}}>
          <Environment 
          files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/wide_street_01_4k.exr",
          ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />  
          </ScrollControls>
        </Canvas>
    </div>
  );
};
export default App;
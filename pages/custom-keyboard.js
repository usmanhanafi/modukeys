import Loading from "@/components/Loading";
import Wrapper3d from "@/components/Wrapper3d";
import { Model } from "@/public/3d-file/keyboard-basic/Scene";
import { Icon } from "@iconify/react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Image from "next/image";
import { Suspense, useState } from "react";
import { HexColorPicker } from "react-colorful";
const imgLogo = "/logo.svg";

const CustomKeyboard = () => {
  const [bigButtonscolor, setbigButtonsColor] = useState("#aabbcc");
  const [caseButtonscolor, setcaseButtonsColor] = useState("#aabbcc");
  const [smallButtonscolor, setsmallButtonsColor] = useState("#aabbcc");
  const [selectedModul, setselectedModul] = useState("big-buttons");
  function changeColor(value) {
    if (selectedModul == "big-buttons") {
      setbigButtonsColor(value);
    } else if (selectedModul == "case") {
      setcaseButtonsColor(value);
    } else if (selectedModul == "small-buttons") {
      setsmallButtonsColor(value);
    }
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Design your dream mechanical keyboard with ModuKeys' Custom Keyboard feature. Personalize every aspect, from key switches and keycaps to RGB lighting and layout. Create a keyboard that matches your unique style and typing preferences. Get started on your custom keyboard journey with ModuKeys today."
        />
        <meta
          name="keywords"
          content="ModuKeys Custom Keyboard, custom mechanical keyboard, personalized keyboard design, keyboard customization, unique keyboard, keyboard layout, key switches, keycaps, RGB lighting"
        />
        <title>ModuKeys Custom Keyboard - Design Your Perfect Keyboard</title>
      </Head>
      <div className="min-h-screen">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className=" pb-24 pt-10 mx-auto px-4">
            <div className="w-100 lg:w-4/5 mx-auto flex flex-wrap justify-center md:justify-start">
              <div className="w-100 lg:w-2/3 h-full object-cover object-center rounded border border-gray-200 relative">
                <Suspense
                  fallback={
                    <div
                      role="status"
                      className="flex gap-4 p-10 justify-center items-center"
                    >
                      <svg
                        ariaHidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span>Loading...</span>
                    </div>
                  }
                >
                  <div className="absolute right-4 bottom-4 opacity-40 z-10">
                    <Image src={imgLogo} width="60" height="60" alt="logo" />
                  </div>
                  <Canvas
                    shadows
                    style={{ height: "50vh", width: "100%" }}
                    camera={{ position: [0, 10, 8], fov: 20 }}
                    frameloop="demand"
                    performance={{ min: 0.5 }}
                  >
                    <ambientLight intensity={0.7} />
                    <spotLight
                      intensity={0.5}
                      angle={0.1}
                      penumbra={1}
                      position={[10, 15, 10]}
                      castShadow
                    />
                    {/* <Shoe /> */}
                    <Model
                      colorBigButton={bigButtonscolor}
                      colorChassis={caseButtonscolor}
                      colorSmallButton={smallButtonscolor}
                    />
                    <Environment preset="city" />
                    <ContactShadows
                      position={[0, -0.8, 0]}
                      opacity={0.25}
                      scale={10}
                      blur={1.5}
                      far={0.8}
                    />
                    <OrbitControls
                      // minPolarAngle={Math.PI / 2}
                      // maxPolarAngle={Math.PI / 2}
                      enableZoom={true}
                      enablePan={true}
                    />
                  </Canvas>
                </Suspense>
              </div>
              <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="hidden md:block text-gray-900 text-2xl title-font font-medium mb-1">
                  Personalizing Your Keyboard
                </h1>
                <div className="flex gap-4 flex-col md:flex-row mt-1 mb-10 md:mt-10">
                  <div className="flex md:flex-col gap-4 justify-center">
                    <button
                      onClick={() => setselectedModul("big-buttons")}
                      className={`flex gap-2 flex-col items-center text-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded ${
                        selectedModul == "big-buttons"
                          ? "bg-gray-200 border-gray-300 border-2"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        icon="mdi:keyboard-outline"
                        color="black"
                        width="40"
                        height="40"
                        className="hidden md:block"
                      />
                      <p>Big Buttons</p>
                    </button>
                    <button
                      onClick={() => setselectedModul("case")}
                      className={`flex gap-2 flex-col items-center text-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded ${
                        selectedModul == "case"
                          ? "bg-gray-200 border-gray-300 border-2"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        icon="fluent:keyboard-layout-one-handed-left-20-filled"
                        color="black"
                        width="40"
                        height="40"
                        className="hidden md:block"
                      />
                      <p>Case</p>
                    </button>
                    <button
                      onClick={() => setselectedModul("small-buttons")}
                      className={`flex gap-2 flex-col items-center text-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded ${
                        selectedModul == "small-buttons"
                          ? "bg-gray-200 border-gray-300 border-2"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        icon="icon-park-outline:enter-the-keyboard"
                        color="black"
                        width="40"
                        height="40"
                        className="hidden md:block"
                      />
                      <p>Small Buttons</p>
                    </button>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <HexColorPicker
                      color={
                        selectedModul == "big-buttons"
                          ? bigButtonscolor
                          : selectedModul == "case"
                          ? caseButtonscolor
                          : selectedModul == "small-buttons"
                          ? smallButtonscolor
                          : "#000000"
                      }
                      onChange={(value) => changeColor(value)}
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    $58.00
                  </span>
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomKeyboard;

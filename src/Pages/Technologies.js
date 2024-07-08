import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {

  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    postman,
    mongodb,
    nodejs
  } = techStackDetails;

  return (

    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Skills and Technologies
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div><img  src={html} title="html" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
  HTML
</button></div>
<div><img src={css} title="CSS" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
  CSS
</button></div>
<div><img src={js} title="JavaScript" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
  JavaScript
</button></div>
<div><img src={react} title="React" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        React
      </button></div>
      <div><img src={redux} title="Redux" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        Redux
      </button></div>
      <div><img style={{height:"100px"}} src={mongodb} title="Redux" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        mongodb
      </button></div>
      <div><img style={{height:"100px"}} src={nodejs} title="Redux" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-2 px-4 rounded-full">
        nodejs
      </button></div>
      <div ><img  src={tailwind} title="Tailwind CSS" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        TailWind
      </button></div>
        <div><img src={bootstrap} title="Bootstrap" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        Bootstrap
      </button></div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      <div><img src={vscode} title="Visual Studio Code" alt="" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        VsCode
      </button></div>
      <div><img src={git} title="Git" alt="Git" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        Git
      </button></div>
      <div><img src={github} title="Github" alt="Github" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        GitHub
      </button></div>

      <div><img src={postman} title="Postman" alt="Postman" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white resume1 font-bold py-2 mt-4 px-4 rounded-full">
        Postman
      </button></div>
      </section>
    </main>
  );
}

export default Technologies;
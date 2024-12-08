import React from 'react';

export default function Home() {
    return (
        <section id="home" className="flex flex-col items-center justify-center h-screen bg-teal-700 text-white">
      <div className="text-center">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Kevin Ruiz" 
          className="rounded-full w-32 h-32 mx-auto mb-4" 
        />
        <h1 className="text-4xl font-bold">Kevin Ruiz</h1>
        <p className="mt-4 max-w-md mx-auto">
          Soy desarrollador web apasionado por la tecnología y el diseño, buscando mejorar cada día.
        </p>
      </div>
    </section>
    );
};
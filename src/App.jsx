import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      {/* Gradient Image  */}

      <img
        className="absolute top-0 right-0 opacity-60 -z-1 "
        src="/gradient.png"
      />

      {/* Blur EFFECT  */}

      <div className="h-0 w-[40rem] absolute top-20% right-[-5%] shadow-[0_0_1000px_25px_#e99b63] -rotate-[30deg] -z-10"></div>

      {/* header Comopnet  */}
      <Header />
      <Hero/>

      <div className="mt-20 text-4xl text-center">. . . This Project is Still in Development . . .</div>

      <div className="mt-1 text-md text-center">(and Do Not Try to Copy 🧐, Nahi to pulis case Kar Dunga 😂🤣🤣 )</div>

    </main>
  );
};

export default App;

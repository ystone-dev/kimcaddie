// import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <aside>
          <Carousel />
          <Section />
        </aside>
        <div></div>
      </main>
      <footer>
        <img src="" alt="문의" />
      </footer>
    </>
  );
}

export default App;

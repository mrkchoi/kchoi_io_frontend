import React, { useEffect, useState } from "react";
import { VersionContext, VERSION } from "./components/VersionContext";
import { BrowserRouter } from "react-router-dom";
import Chat from "./components/Chat";
import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import SkillsGrid from "./components/SkillsGrid";

function App() {
  let [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <VersionContext.Provider value={VERSION.V1}>
      <BrowserRouter>
        <Element name="top_scroll"></Element>
        <Header />
        <Chat showIntro={showIntro} setShowIntro={setShowIntro} />
        <About />
        <SkillsGrid />
        <Experience />
        <Footer />
      </BrowserRouter>
    </VersionContext.Provider>
  );
}

export default App;

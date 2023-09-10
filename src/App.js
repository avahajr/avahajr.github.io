// import { createMedia } from "@artsy/fresnel";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import DesktopMenu from "./components/Desktop/DesktopMenu";
import MobileMenu from "./components/Mobile/MobileMenu";

import DesktopAbout from "./components/Desktop/About/DesktopAbout";
import MobileAbout from "./components/Mobile/About/MobileAbout";

import MobileProjects from "./components/Mobile/Projects/MobileProjects";
import MobileAcademics from "./components/Mobile/Academics/MobileAcademics";
import DesktopAcademics from "./components/Desktop/Academics/DesktopAcademics";
import DesktopProjects from "./components/Desktop/Projects/DesktopProjects";
import MobileHeading from "./components/Mobile/MobileHeading";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHeading /> : <DesktopMenu />}
      <Routes>
        <Route
          path="/"
          element={isMobile ? <MobileAbout /> : <DesktopAbout />}
        />
        <Route
          path="/academics"
          element={isMobile ? <MobileAcademics /> : <DesktopAcademics />}
        />
        <Route
          path="/projects"
          element={isMobile ? <MobileProjects /> : <DesktopProjects />}
        />
      </Routes>

      {isMobile ? <MobileMenu style={{ marginTop: "95px" }} /> : <></>}
    </>
  );
}

export default App;

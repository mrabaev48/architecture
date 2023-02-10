import React, { Suspense } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

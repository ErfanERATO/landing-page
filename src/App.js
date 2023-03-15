import React from "react";
import "../src/assets/style/index.scss";
import "antd/dist/reset.css";
import { Routes, Route, useLocation } from "react-router-dom";
import router from "./router/index.js";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      {router.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          const Page = route.component;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


import "./App.css";
import Home from "./pages/HomePage/Home";
import Collections from "./pages/CollectionsPage/Collections";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<Home />} />
          <Route path="collections" element={<Outlet />}>
            <Route index element={<Collections />} />
            <Route path="handbag" element={<Collections />} />
            <Route path="jewellery" element={<Collections />} />
            <Route path="necklace" element={<Collections />} />
            <Route path="sunglasses" element={<Collections />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

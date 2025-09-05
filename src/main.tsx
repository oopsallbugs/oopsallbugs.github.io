import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="projects" element={<Projects />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

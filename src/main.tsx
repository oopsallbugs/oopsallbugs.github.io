import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Resume from "./pages/resume/Resume.tsx";
import Contact from "./pages/contact/Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

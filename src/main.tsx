import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";

// Lazy load page components
const Home = lazy(() => import("./pages/home/Home.tsx"));
const Projects = lazy(() => import("./pages/projects/Projects.tsx"));
const Resume = lazy(() => import("./pages/resume/Resume.tsx"));
const Contact = lazy(() => import("./pages/contact/Contact.tsx"));

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

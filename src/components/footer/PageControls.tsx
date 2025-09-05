import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface PageTogglesProps {
  children: ReactNode;
}

const PageControls = ({ children }: PageTogglesProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById("page-controls");

    if (!element) {
      // Create the element if it doesn't exist
      element = document.createElement("div");
      element.id = "page-controls";
      element.style.position = "fixed";
      element.style.bottom = "20px";
      element.style.right = "20px";
      element.style.zIndex = "1000";
      document.body.appendChild(element);
    }

    setTarget(element);

    return () => {
      // Clean up if component unmounts
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (!target) return null;

  return createPortal(
    <div
      className="page-controls"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      {children}
    </div>,
    target
  );
};

export default PageControls;

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[v0] main.tsx loading...");

const rootElement = document.getElementById("root");
console.log("[v0] root element:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log("[v0] App rendered successfully");
} else {
  console.error("[v0] Root element not found!");
}

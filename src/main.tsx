import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";
// import { LoadingProvider } from "./context/LoadingContext";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <LoadingProvider>
  <App />

  //   </LoadingProvider>

  // </StrictMode>
);

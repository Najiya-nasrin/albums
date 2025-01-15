import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";
import { Provider } from "./src/context/books.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

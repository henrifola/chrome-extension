import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";
import App from "./App";
import "./styles/popup.css";
// import "./styles/global.scss";

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

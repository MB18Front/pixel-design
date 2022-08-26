import "./style.css";
import "./bootstrap/bootstrap.min.css";
import {createRoot} from "react-dom/client";
import App from "./App";
const container = document.getElementById('root');
const root = createRoot(container);

document.body.className = "bg-black";
root.render(
  <>
    <App />
  </>
);

container.className += "bg-black";
import { useEffect } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import MiniMenu from "./mini-menu/mini-menu";

const Content = ({showContent}) => {
  useEffect(() => { showContent() });//light mode dark mode toggle
  
  let darkMode = true;
  const toggleMode = () => {
    if (darkMode) {
      document.querySelector('*').style.filter = "invert(1)";
      document.getElementById('mode-name').innerHTML = "light";
    } else {
      document.querySelector('*').style.filter = "invert(0)";
      document.getElementById('mode-name').innerHTML = "dark";
    }
    darkMode = !darkMode;
  };
  

  return (
    <>
      <div className="position-fixed bg-primary toggle-st">
        <div className="mode-toggle text-light p-2 d-flex align-items-center">
          <label class="switch">
            <input type="checkbox" onClick={toggleMode}/>
            <span class="slider round"></span>
          </label>
          <span id="mode-name" className="p-2">light</span>
        </div>
      </div>
      <Header />
      <Main />
      <MiniMenu />
      <Footer />
    </>
  );
};
export default Content;
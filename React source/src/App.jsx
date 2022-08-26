import Content from "./content/content";
import PreLoader from "./preloader/preloader";
import { useEffect } from "react";


const App = () => {
  useEffect( //corsur move effect
    () => {
      const light = document.getElementById('light');
      document.body.addEventListener('mousemove', ({ pageX, pageY }) => {
        light.style.top = `${pageY + 5}px`;
        light.style.left = `${pageX + 5}px`;
      });
      document.body.onmousedown = () => {
        light.style.transform = "scale(120%)";
      };
      document.body.onmouseup = () => {
        light.style.transform = "scale(100%)";
      };
    }
  );

  /////////////////////////////////////////////////
  const showContent = () => {
    //preloader function : for hide the preloader
    document.querySelector('.progress').className += " start";
    setTimeout(hideEffect, 1000);//I used setTimout because we have a animation , this function start after progress animation end
    function hideEffect  () {
      document.querySelector('.loading-bar').className += " hideEffect";
      setTimeout(() => {
        let massage = "HELLO USER!";
        let massageChar = 0;
        const massageType = setInterval(() => {
          document.getElementById('massage-place').innerHTML += massage[massageChar];
          massageChar++;
          if (massageChar === massage.length) {
            document.querySelector('.preloader').className += " GOUP";
            clearInterval(massageType);
          }
        } , 1000 / 10) // fps
      },1000)
    } 
  };
  ////////////////////////////////////////////////////////
  return (
    <>
      <div id="light" className="d-lg-block d-none"></div>
      <PreLoader />
      <Content showContent={showContent} />
    </>
  );
};

export default App;
import { useEffect } from "react";
import AboutUs from "./about/about-us";
import Events from "./events/event"
import "./main.css";
import Services from "./services/services";

const Main = () => {
  let isTyped = false;
  const inner1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quo voluptatem in exercitationem soluta expedita dignissimos aliquam officiis nemo, nisi excepturi molestias amet sed, repudiandae possimus eligendi ea culpa. Quo.";
  let character = 0;
  let typed = false;
  useEffect(
    () => {
      document.body.onscroll = () => {
        if (!isTyped) {
          if (document.documentElement.scrollTop > 200) {
            const Speed = setInterval(() => {
              document.querySelector('#text-ground').innerHTML += inner1[character];
              character++;
              if (character === inner1.length) { clearInterval(Speed) };
            }, 10)
            isTyped = true;
          }
        };

        if (!typed) {
          if (document.documentElement.scrollTop > 200) {
            let inner = "about us";
            let char = 0;
            const typeSpeed = setInterval(() => {
              document.querySelector('.about-topic').innerHTML += inner[char];
              char++;
              if (char === inner.length) { clearInterval(typeSpeed) };
            }, 1000 / 10)
            typed = true;
          }
        };

        if (document.documentElement.scrollTop >= 1300) {
          document.querySelector('footer').style.background = "#00d";
        } else {
          document.querySelector('footer').style.background = "var(--bs-black)";
        }

      }
    }
  )
  return (
    <>
      <main className="position-relative text-white bg-black mt-5 mb-10 container">
        <div className="d-lg-flex">
          <AboutUs />
          <Services />

        </div>

        <Events />
      </main>
    </>
  );
}

export default Main;
import { useEffect } from "react";
import "./header.css";
const Header = () => {
  useEffect(
    () => {
      const light = document.getElementById('light');
      const header = document.querySelector('header');
    
      header.addEventListener('mousemove', ({pageX , pageY}) => {
        light.style.top = `${pageY}px`;
        light.style.left = `${pageX}px`;
      })
    }
  )
  return (
    <>
      <header id="top" className="header container bg-black d-flex align-items-center text-white">
        <div className="col-lg-6">
          <h1 className="header-heading">
            <span>Lorem</span> <span>ipsum</span> <span>dolor</span> <span>sit</span> <span>amet.</span>
          </h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto asperiores itaque qui delectus, eveniet aperiam accusamus perspiciatis aliquid sed praesentium alias voluptas dolor nemo nesciunt adipisci sapiente ullam facere perferendis.
          </p>
        </div>
        <div dir="rtl" className="design-el d-flex position-absolute">
          <div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
          </div>
          <div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
          </div>
          <div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
          </div>
          <div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
          </div>
          <div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
          </div>
          <div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape1"></div>
            <div className="shape1"></div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
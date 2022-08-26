import "./mini-menu.css";
const MiniMenu = () => {
  let menuOpen = false;
  const menuToggle = event => {
    if (menuOpen) {
      event.target.style.transform = "rotate(-90deg)";
      document.querySelector('.menu-items').style.left = "0";
      document.querySelector('.menu-items').style.borderRadius = "0";
    } else {
      event.target.style.transform = "rotate(0deg)";
      document.querySelector('.menu-items').style.left = "-100%";
      document.querySelector('.menu-items').style.borderRadius = "100%";
    }
    menuOpen = !menuOpen;
  };
  return (
    <>
      <div className="menu-items position-fixed d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row text-light">
            <div className="col-lg-6">
              <ul>
                <li><a href="#top">home</a></li>
                <hr />
                <li><a href="#about-us">about us</a></li>
                <hr />
                <li><a href="#">services</a></li>
                <hr />
                <li><a href="#">contact us</a></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <p className="m-lg-5 mt-5">
                if you like it please star this project in github
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary mini-menu">
          <button className="btn-menu" onClick={menuToggle}>
            <img src="https://img.icons8.com/material-outlined/40/ffffff/menu-2.png" alt="menu"/>
          </button>
      </div>
    </>
  );
}

export default MiniMenu;
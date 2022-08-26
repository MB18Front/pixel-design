
import "./footer.css";

const Footer = () => {


  return (
    <>
      <footer className="m-1 rounded d-flex align-items-center text-center justify-content-center text-white">
          <div id="follow-me-Dm-me">
            <h3>follow Me on : </h3>
            <a className="p-2" href="https://www.instagram.com/mb18.mobin/"><img alt="instagram" src="https://img.icons8.com/ios-glyphs/60/ffffff/instagram-new.png"/></a>
            <a className="p-2" href="https://github.com/MB18Front"><img alt="github" src="https://img.icons8.com/glyph-neue/64/ffffff/github.png"/></a>
            <a className="p-2" href="https://codepen.io/MBN-DEV-COM"><img alt="code pen" id="cdp" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/64/ffffff/external-multi-platform-online-code-editor-and-open-source-learning-service-logo-color-tal-revivo.png"/></a>
            <h3>And you can DM me on : </h3>
            <a className="p-2" href="https://t.me/momo806"><img alt="telegram" src="https://img.icons8.com/ios-filled/64/ffffff/telegram-app.png"/></a>
            <div>
                <p>mbn.frontend.dev@gmail.com</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;


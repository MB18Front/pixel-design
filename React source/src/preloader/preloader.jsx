import "./preloader.css";
const PreLoader = () => {
  return (
    <>
      <div className="preloader d-flex justify-content-center align-items-center position-fixed">
        <div className="container">
          <div className="loading-bar bg-white rounded-5 position-relative">
            <div className="progress position-absolute bg-primary rounded-5">

            </div>
          </div>
          <div id="hello-massage">
            <p id="massage-place" className="text-center text-white font-90">
              <b>
                
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PreLoader;
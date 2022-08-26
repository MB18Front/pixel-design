import "./event.css";
const Events = () => {

  return (
    <>
      <h2 className="text-center mt-5">Events</h2>
      <div className="selectd-event text-center">
        <div className="row mt-2 d-flex justify-content-center">
          <div id="event-1" className="event col-lg-2 col-6 m-1" onClick={event => {document.getElementById('event-name').innerHTML = event.target.innerHTML}}>
              event 1
          </div>
          <div id="event-2" className="event col-lg-2 col-6 m-1" onClick={event => {document.getElementById('event-name').innerHTML = event.target.innerHTML}}>
              event 2
          </div>
          <div id="event-3" className="event col-lg-2 col-6 m-1" onClick={event => {document.getElementById('event-name').innerHTML = event.target.innerHTML}}>
            <span className="p-1">
              event 3
            </span>
          </div>
          <div id="event-4" className="event col-lg-2 col-6 m-1" onClick={event => {document.getElementById('event-name').innerHTML = event.target.innerHTML}}>
            <span className="p-1">
              event 4
            </span>
          </div>
        </div>
        <div id="event-content" className="mt-5 text-justify">
          <h5 id="event-name">
            event 1
          </h5>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, laboriosam molestiae similique, dolor explicabo quibusdam atque sed sunt officia voluptates quam, magni quia. A, perspiciatis maiores enim officiis reiciendis voluptatibus.
          </p>
        </div>
      </div>
    </>
  );
}

export default Events;



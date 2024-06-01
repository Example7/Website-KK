import "./HeroComponent.css";

export function VideoComponent() {
  return (
    <div className="vh-100 w-100 d-flex flex-column align-items-center object-fit-contain position-relative">
      <img
        src="/images/img-main-desktop.jpg"
        alt="Main Image"
        className="justify-item-center w-100"
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100">
        <h1 className="vidoe-header w-75 m-auto" style={{ fontSize: "100px" }}>
          "Styl, który inspiruje"
        </h1>
        <p className="my-2 fs-1">Na co czekasz?</p>
        <div className="d-flex flex-column justify-content-center gap-3 flex-md-row">
          <button className="px-5 py-2 my-2 fs-5 video-btn video-btn-active">
            Przeglądaj
          </button>
          <button className="px-5 py-2 my-2 fs-5 video-btn">Kupuj teraz</button>
        </div>
      </div>
    </div>
  );
}

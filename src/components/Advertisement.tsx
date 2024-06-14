import { NavLink } from "react-router-dom";

export function Advertisement() {
  return (
    <section className="bg-primary d-flex flex-column align-items-center justify-content-center py-3">
      <div className="text-dark">OTRZYMAJ ZNIŻKĘ 20%</div>
      <NavLink
        to="/newsletter"
        className="text-dark fw-bold"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        DOŁĄCZ DO SHOPI CLUB
      </NavLink>
    </section>
  );
}

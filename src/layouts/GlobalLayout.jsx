import { NavBar, Footer } from "$components";
import { Outlet } from "react-router-dom";

import "./GlobalLayout.sass";

export default function GlobalLayout() {
  return (
    <>
      <NavBar />
      <section className="PageContainer">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

import { NavLink } from "react-router-dom";
import routes from "$pages";

import "./NavBar.sass";

export default function NavBar() {
  return (
    <nav className="GlobalNavBar">
      <ul>
        {routes.map((route, index) => {
          if (!route.navigable) return null;
          return (
            <li key={index}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import { createElement } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalLayout } from "$layouts";
import routes from "$pages";

export default function Router() {
  return (
    <Routes>
      <Route element={createElement(GlobalLayout)}>
        {routes.map((route, index) => {
          const routeName = route.path.toLowerCase();
          return (
            <Route
              key={index}
              path={routeName}
              element={createElement(route.component)}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

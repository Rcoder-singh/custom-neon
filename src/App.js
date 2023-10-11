import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/Routes"
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

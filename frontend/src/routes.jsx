import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Error404 from "./pages/404";
import Base from "./pages/Base";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="*" element={<Error404 />} />
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/contatos" element={<Contacts />}></Route>
          <Route path="/projetos" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../components/RootLayout";
import About from "../pages/About";
import Repositories from "../pages/Repositories";
import Skills from "../pages/Skills";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<About />}></Route>
      <Route index path="/skills" element={<Skills />}></Route>
      <Route index path="/repositories" element={<Repositories />}></Route>
    </Route>
  )
);
export default router;

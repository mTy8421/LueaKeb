import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Homes from "./components/pages/Homes";
import NotFound from "./components/pages/NotFound";
import Works from "./components/pages/Works";
import Challenge from "./components/pages/Challenge";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/challenge" element={<Challenge />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

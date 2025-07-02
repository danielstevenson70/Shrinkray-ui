import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import AddLink from "./Pages/AddLink";
import Links from "./Pages/Links";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/addLink" element={<AddLink />}>
        </Route>
      </Route> 
    </Routes>
  );
};

export default App;

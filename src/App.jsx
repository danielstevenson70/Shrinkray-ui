import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import addLink from "./Pages/AddLink";
import Home from "./Pages/Home";
import Links from "./components/Links";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Links />} />
        <Route path="/links" element={<Links />} />
        <Route path="/addLink" element={<Links />}>
        </Route>
      </Route> 
    </Routes>
  )
}

export default App;

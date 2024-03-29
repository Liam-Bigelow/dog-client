import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css"
import Dashboard from "./dashboard/Dashboard";
import Layout from "./layout/Layout";
import Pets from "./pets/Pets";
import Entry from "./entry/Entry";

const App = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entry" element={<Entry />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate index to="/home" />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="schedule" element={<Pets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

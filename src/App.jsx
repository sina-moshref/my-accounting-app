import "./App.css";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/Home";
import PersonOfInterest from "./pages/PersonOfinterest";
import Layout from "./layout/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tarafhesab" element={<PersonOfInterest />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

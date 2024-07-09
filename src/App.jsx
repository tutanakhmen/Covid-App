import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/covid/About";
import Indonesian from "./pages/covid/Indonesian";
import Provincy from "./pages/covid/Provincy";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/covid/Indonesian" element={<Indonesian />}/>
          <Route path="/covid/Provincy" element={<Provincy />}/>
          <Route path="/covid/About" element={<About />}/>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;

// import Basic_Link1 from "./React_2nd_Lab/Basic_Link1"
// import Basic_Link2 from "./React_2nd_Lab/Basic_Link2"
// import Basic_pagedesign from "./React_2nd_Lab/Basic_pagedesign"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./React_5th_Lab/Home";
import About from "./React_5th_Lab/About";
import Contect from "./React_5th_Lab/Contect";
import Galary from "./React_5th_Lab/Galary";
import Login from "./React_5th_Lab/Login";
import Layout from "./React_5th_Lab/Layout";

// import Map_List from "./React_4th_Lab/Map_List"
// import Map_Card from "./React_4th_Lab/Map_Card"
// import Map_Card_places from "./React_4th_Lab/Map_Card_places"
// import Map_Table from "./React_4th_Lab/Map_Table"

// import Parents from "./React_3ed_Lab/Parent"
// import Display from "./React_3ed_Lab/Display"

function App() {
  return (
    <>
      {/* --Lab 2 of react-- */}
      {/* <Basic_Link1 /> */}
      {/* <Basic_Link2 /> */}
      {/* <Basic_pagedesign /> */}

      {/* --Lab 3 of react-- */}
      {/* <Parents /> */}
      {/* <Display /> */}

      {/* --Lab 4 of react-- */}
      {/* <Map_Table /> */}
      {/* <Map_Card /> */}
      {/* <Map_Card_places /> */}
      {/* <Map_List /> */}

      {/* --Lab 5 of react-- */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contect" element={<Contect />} />
            <Route path="/Galary" element={<Galary />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

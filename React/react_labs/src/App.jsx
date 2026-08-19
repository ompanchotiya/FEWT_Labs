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
import A01 from "./React_5th_Lab/A01";
import A02 from "./React_5th_Lab/A02";
import A03 from "./React_5th_Lab/A03";
import A04 from "./React_5th_Lab/A04";
import A05 from "./React_5th_Lab/A05";
import A06 from "./React_5th_Lab/A06";
import A07 from "./React_5th_Lab/A07";
import A08 from "./React_5th_Lab/A08";
import A09 from "./React_5th_Lab/A09";
import A10 from "./React_5th_Lab/A10";

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
            <Route path="/A01" element={<A01 />}/>
            <Route path="/A02" element={<A02 />}/>
            <Route path="/A03" element={<A03 />}/>
            <Route path="/A04" element={<A04 />}/>
            <Route path="/A05" element={<A05 />}/>
            <Route path="/A06" element={<A06 />}/>
            <Route path="/A07" element={<A07 />}/>
            <Route path="/A08" element={<A08 />}/>
            <Route path="/A09" element={<A09 />}/>
            <Route path="/A10" element={<A10 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

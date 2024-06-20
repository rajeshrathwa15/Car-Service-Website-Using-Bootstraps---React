import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Component/About";
import BookService from "./Component/BookService";
import Contact from "./Component/Contact";
import Furnitures from "./Component/Furnitures";
import Index from "./Component/Index";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";     

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="py-3">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route path="/bookservice" exact element={<BookService />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/furnitures" exact element={<Furnitures />} />
            <Route path="" exact element={<Index />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/Register" exact element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
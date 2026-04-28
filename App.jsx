import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp"
import Page2 from "./components/pages/page2";
import Page3 from "./components/pages/page3";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

        </Routes>
      </Router>
      <Footer />
    </>
  )

}

export default App

import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Reviews from "./Component/Reviews/Reviews";
import Dashboard from "./Component/Dashboard/Dashboard";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";
import Notfound from "./Component/Notfound/Notfound";

function App() {
    return (
        <div className="App relative">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard></Dashboard>}
                ></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="*" element={<Notfound></Notfound>}></Route>
            </Routes>
        </div>
    );
}

export default App;

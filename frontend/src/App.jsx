import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Jobs from "./pages/Jobs.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PostApplication from "./pages/PostApplication.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/jobs" element={<Jobs/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/post/application/:jobId" element={<PostApplication/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
                <ToastContainer position="top-right" theme="dark"/>
            </Router>
        </>
    )
}

export default App

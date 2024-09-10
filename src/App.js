import "./styles/main.css";
import "./styles/reset.css";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import SelfProject from "./pages/SelfProject.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/skrollToTop.js";
import Repos from "./components/repos/Repos.js";
import Login from "./pages/Login.js";
import Firebase from "./firebase.js";
import { auth } from "./firebase.js"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const username = process.env.USERNAME;
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/self-project/:id" element={<SelfProject />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route
            path="/repos"
            element={<Repos username={username} token={token} />}
          /> */}
          <Route
            path="/repos"
            element={
              user ? <Repos username={username} token={token} /> : <Login />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

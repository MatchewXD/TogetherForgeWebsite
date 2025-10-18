import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import IdeaForm from "./pages/IdeaForm";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import WhatsNew from "./pages/WhatsNew";
import InteractiveDemo from "./pages/InteractiveDemo";
import Feedback from "./pages/Feedback";




function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ideaform" element={<IdeaForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/interactivedemo" element={<InteractiveDemo />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>

  );
}

export default App;

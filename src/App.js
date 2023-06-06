import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => (<h1>Nie znaleziono elementu '/'</h1>)
const About = () => (<h1>Nie znaleziono elementu '/About'</h1>)
const Services = () => (<h1>Nie znaleziono elementu '/Services'</h1>)
const Contact = () => (<h1>Nie znaleziono elementu '/Contact'</h1>)
const ContactUs = () => (<h1>Nie znaleziono elementu '/Contact/Us'</h1>)
const ContactPl = () => (<h1>Nie znaleziono elementu '/Contact/Pl'</h1>)
const ContactDe = () => (<h1>Nie znaleziono elementu '/Contact/De'</h1>)



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/us" element={<ContactUs />} />
          <Route path="/contact/pl" element={<ContactPl />} />
          <Route path="/contact/de" element={<ContactDe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

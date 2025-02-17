import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Paris Loizou</div>
        <ul className="nav-links">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="content">
        <header className="hero">
          <h1>
            <Typewriter
              words={["Everything Cybersecurity."]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={100000} // Long delay to avoid deletion
            />
          </h1>
          <p>
            <Typewriter
              words={[
                "Welcome to my digital playground where I explore the world of cybersecurity, share personal insights, and break down complex tech topics in a way that's easy to digest. Join me on a journey through the latest trends, real-life stories, and practical tips to help you stay safe online."
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={100000}
            />
          </p>
          <button className="about-button">About Me</button>
        </header>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

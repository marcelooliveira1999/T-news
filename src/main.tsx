import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/content.css";

import twitterLogo from "./assets/logoTwitter.svg";

import NavButton from "./components/NavButton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <div className="logoContainer">
          <img className="logo" src={twitterLogo} alt="" />
        </div>

        <nav className="mainNavegation">
          <NavButton />
        </nav>

        <button className="newTweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">content</div>
    </div>
  </React.StrictMode>
);

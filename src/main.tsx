import React from "react";
import ReactDOM from "react-dom/client";
import TimeLineHeader from "./components/TimeLineHeader";

import "./global.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/content.css";

import twitterLogo from "./assets/logoTwitter.svg";

import NavButton from "./components/NavButton";
import NewTweetForm from "./components/NewTweetForm";
import Separator from "./components/Separator";

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

      <div className="content">
        <main className="timeLine">
          <TimeLineHeader />
          <NewTweetForm />
          <Separator />
        </main>
      </div>
    </div>
  </React.StrictMode>
);

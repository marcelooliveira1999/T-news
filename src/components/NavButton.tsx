import "../styles/sidebar.css";
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from "@phosphor-icons/react";

function NavButton() {
  return (
    <>
      <div className="navButtonsContainer">
        <a className="active" href="">
          <House weight="fill" /> Home
        </a>
        <a href="">
          <Hash /> Explore
        </a>
        <a href="">
          <Bell /> Notifications
        </a>
        <a href="">
          <Envelope /> Messages
        </a>
        <a href="">
          <BookmarkSimple /> Bookmarks
        </a>
        <a href="">
          <FileText /> Lists
        </a>
        <a href="">
          <User /> Profile
        </a>
        <a href="">
          <DotsThreeCircle /> More
        </a>
      </div>
    </>
  );
}

export default NavButton;

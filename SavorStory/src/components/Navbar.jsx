import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content rounded-box shadow-2xl justify-between">
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-fancy font-normal text-neutral-content hover:bg-transparent hover:text-primary"
        >
          SavorStory
        </Link>
      </div>
      <div className="navbar-end w-auto justify-end">
        <MobileNavbar />
        <DesktopNavbar />
      </div>
    </nav>
  );
};

export default Navbar;

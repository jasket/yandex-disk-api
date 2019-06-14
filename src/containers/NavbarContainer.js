import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;

import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const mapStateToProps = state => {
  return {
    userName: state.user.name
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;

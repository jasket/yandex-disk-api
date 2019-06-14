import { connect } from "react-redux";
import Welcome from "../components/Welcome";

const mapStateToProps = state => {
  return {
    logged: !!state.user.name
  };
};

const LoginPage = connect(mapStateToProps)(Welcome);

export default LoginPage;

import React from "react";
import { Button } from "reactstrap";
import styles from "./HeaderBar.module.css";
import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <div className={styles.HeaderBar}>
      <Link to="/home">
        <Button outline color="info" style={{ margin: "10px", float: "left" }}>
          Home
        </Button>
      </Link>
      <Link to="/login">
        <Button
          outline
          color="primary"
          style={{ margin: "5px", float: "right" }}
        >
          Login
        </Button>
      </Link>
    </div>
  );
};
export default Header;

import React from "react";
import { makeStyles } from "@mui/styles";
import Mtlogo from "../../assets/mt-logo.svg"; // Import as a path

const useStyles = makeStyles((theme) => ({
  svgHover: {
    transition: "all 0.5s ease",
    "&:hover": {
      filter: "brightness(0.8)", // Example hover effect for image
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <img src={Mtlogo} alt="Logo"  height= "50px" width= "50px" className={classes.svgHover} />
  );
};

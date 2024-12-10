/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import  TextDecrypt from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Bonjour!";
  const aboutme = `Je m'appelle ${FirstName} ${LastName}, un développeur junior front-end. Je suis toujours à la recherche de quelque chose de nouveau et de stimulant!
 Je suis là pour vous aider à créer des sites Web magnifiquement formatés.
 Mes projets incluent principalement le développement Web.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="100vw">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Envoyez moi un message :)</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

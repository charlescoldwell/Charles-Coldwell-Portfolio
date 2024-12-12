/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import  TextDecrypt  from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Kasa from '../../assets/recentprojects/kasa.png';
import Events from '../../assets/recentprojects/724Events.png';
import ArgentBank from '../../assets/recentprojects/argentBank.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Kasa', 
      description: `Un projet Openclassrooms pour une entreprise de location d’appartements entre particuliers en France utilisant React.`,
      alter: 'Kasa Project',
      image: `${Kasa}`,
      github: 'https://github.com/charlescoldwell/Kasa',
      githubpages: 'https://charlescoldwell.github.io/Kasa/',
    },
    { 
      id: 2,
      title: '724 Events', 
      description: `Un projet Openclassrooms de débuggage d'un site d'une agence d'événementiel. (cahier de recette,test unitaire et fonctionels)`,
      alter: '724 Events',
      image: `${Events}`,
      github: 'https://github.com/charlescoldwell/724eventsProjetOC',
      githubpages: 'https://charlescoldwell.github.io/724eventsProjetOC',
    },
    { 
      id: 3,
      title: 'Argent Bank', 
      description: `Un projet Openclassrooms sur le développement front-end d’une application bancaire en utilisant React et Redux. (front-end, back-end, routes API)`,
      alter: 'Argent Bank',
      image: `${ArgentBank}`,
      github: 'https://github.com/charlescoldwell/724eventsProjetOC',
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="100vw">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img onClick={() =>handleLinkClick(project.githubpages?project.githubpages:project.github)} src={ project.image } alt={ project.alter } style={{ cursor: 'pointer' }}/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
              <i className="fab fa-3x fa-github" onClick={() => handleLinkClick(project.github)} style={{ cursor: 'pointer' }}/>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

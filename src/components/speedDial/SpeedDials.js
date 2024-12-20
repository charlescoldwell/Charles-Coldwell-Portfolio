import React from 'react';
import { makeStyles } from '@mui/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'fixed', // Make SpeedDial fixed
    top: theme.spacing(6),
    right: theme.spacing(6),
    transition: 'opacity 0.5s ease', // Smooth opacity transition
    zIndex: 1000, // Ensure SpeedDial stays on top
  },
  iconColor: {
    color: theme.palette.foreground.default,
  },
}));

export const SpeedDials = ({ visible }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = Resume.basics.profiles.map((action) => (
    <SpeedDialAction
      key={action.network.toLowerCase()}
      icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
      tooltipTitle={action.network}
      onClick={handleClose}
      href={action.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    />
  ));

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        hidden={!visible} // Hide SpeedDial when "visible" is false
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actionIcons}
      </SpeedDial>
    </>
  );
};

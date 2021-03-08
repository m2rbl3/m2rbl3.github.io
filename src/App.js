import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import WorkExperience from './components/WorkExperience'
import ProjectExperience from './components/Project';
import Skill from './components/Skill';
import globalTheme from './globalTheme';
import { Divider, CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import { Card } from './components/common';
import {
  ContactInfo,
  Education,
  PersonalRecognition,
  PersonalInfo
} from './components/PersonalInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main
    }
  },
  drawerHeaderPlaceholder: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: theme.spacing(2),
    marginLeft: -theme.drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const App = function (props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {
        !isMatch ? (
          <AppBar
            isDrawerOpen={isDrawerOpen}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          >
            <PersonalInfo />
            <Divider />
            <ContactInfo />
            <Divider />
            <Education />
            <Divider />
            <PersonalRecognition />
          </AppBar>
        ) : null
      }
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen,
        })}
      >
        {
          !isMatch ? (
            <div className={classes.drawerHeaderPlaceholder} />
          ) : null
        }
        <Grid
          container
          direction="column"
          spacing={1}
        >
          {
            isMatch ? (
              <Grid item>
                <Card>
                  <PersonalInfo />
                  <ContactInfo />
                </Card>
              </Grid>
            ) : null
          }
          <Grid item>
            <WorkExperience />
          </Grid>
          <Grid item>
            <ProjectExperience />
          </Grid>
          <Grid item>
            <Skill />
          </Grid>
          {
            isMatch ? (
              <Grid item>
                <Card>
                  <Education />
                  <PersonalRecognition />
                </Card>
              </Grid>
            ) : null
          }
        </Grid>
      </main>
    </div >
  );
};

export default function () {
  return (
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  );
}
import React, { useEffect, useState, useRef } from "react";
import { Grid, AppBar, Toolbar, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { FormControl, InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';

import * as tf from '@tensorflow/tfjs';
import * as posenet from "@tensorflow-models/posenet";
import '@tensorflow/tfjs-backend-webgl';
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

const useStyles = makeStyles((theme) => ({
  backgroundAppBar: {
    background: '#1875d2'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  statsCard: {
    width: '250px',
    margin: '10px',
  },
  singleLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function App() {
  const classes = useStyles();

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const poseEstimationLoop = useRef(null);
  const [isPoseEstimation, setIsPoseEstimation] = useState(false)

  const [workoutState, setWorkoutState] = useState({
    workout: '',
    name: 'hai',
  });

  useEffect(() => {
    loadPosenet();
  }, [])

  const loadPosenet = async () => {
    let loadedModel = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: { width: 800, height: 600 },
      multiplier: 0.75
    });

    setModel(loadedModel)
    console.log("Posenet Model Loaded..")
  };

  const startPoseEstimation = () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Run pose estimation each 100 milliseconds
      poseEstimationLoop.current = setInterval(() => {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Do pose estimation
        var tic = new Date().getTime()
        model.estimateSinglePose(video, {
          flipHorizontal: false
        }).then(pose => {
          var toc = new Date().getTime();
          console.log(toc - tic, " ms");
          console.log(tf.getBackend());
          console.log(pose);

          drawCanvas(pose, videoWidth, videoHeight, canvasRef);
        });
      }, 100);
    }
  };

  const drawCanvas = (pose, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.5, ctx);
    drawSkeleton(pose["keypoints"], 0.5, ctx);
  };

  const stopPoseEstimation = () => clearInterval(poseEstimationLoop.current);

  const handlePoseEstimation = () => {
    if (isPoseEstimation)
      stopPoseEstimation();
    else
      startPoseEstimation();

    setIsPoseEstimation(current => !current)
  };

  const handleWorkoutSelect = (event) => {
    const name = event.target.name;
    setWorkoutState({
      ...workoutState,
      [name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar position="static" className={classes.backgroundAppBar}>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" className={classes.title}>
                Fitness Assistant
              </Typography>
              <Button color="inherit">Start Workout</Button>
              <Button color="inherit">History</Button>
              <Button color="inherit">Reset</Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Webcam
                ref={webcamRef}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 800,
                  height: 600,
                }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 800,
                  height: 600,
                }}
              />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Toolbar style={{ justifyContent: 'center' }}>
                    <Card className={classes.statsCard}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Jumping Jacks
                          </Typography>
                        <Typography variant="h2" component="h2" color="secondary">
                          75
                          </Typography>
                      </CardContent>
                    </Card>
                    <Card className={classes.statsCard}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Wall-Sit
                          </Typography>
                        <Typography variant="h2" component="h2" color="secondary">
                          200
                          </Typography>
                      </CardContent>
                    </Card>
                    <Card className={classes.statsCard}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Lunges
                          </Typography>
                        <Typography variant="h2" component="h2" color="secondary">
                          5
                          </Typography>
                      </CardContent>
                    </Card>
                  </Toolbar>
                </Grid>
                <Grid item xs={12} className={classes.singleLine}>
                  <FormControl className={classes.formControl} required>
                    <InputLabel htmlFor="age-native-helper">Workout</InputLabel>
                    <NativeSelect
                      value={workoutState.workout}
                      onChange={handleWorkoutSelect}
                      inputProps={{
                        name: 'workout',
                        id: 'age-native-helper',
                      }}>
                      <option aria-label="None" value="" />
                      <option value={'JUMPING_JACKS'}>Jumping Jacks</option>
                      <option value={'WALL_SIT'}>Wall-Sit</option>
                      <option value={'LUNGES'}>Lunges</option>
                    </NativeSelect>
                    <FormHelperText>Select training data type</FormHelperText>
                  </FormControl>
                  <Toolbar>
                    <Typography style={{ marginRight: 16 }}>
                      <Button variant="contained">
                        Collect Data
                        </Button>
                    </Typography>
                    <Typography>
                      <Button variant="contained">
                        Train Model
                        </Button>
                    </Typography>
                  </Toolbar>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
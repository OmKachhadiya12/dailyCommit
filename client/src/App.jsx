import {Container,Button,Typography,Grow,Grid,AppBar} from "@mui/material";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";
import useStyles from "./styles.jsx";

import memories from "./images/memories.png";

function App() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
                Memories
                <img className={classes.image} src={memories} alt="Memories images" height="60"/>
            </Typography>
            
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
                <Grid item xs={12} sm={7}>
                  <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form/>
                </Grid>
              </Grid>
            </Container>
          </Grow>
      </Container>
    </>
  )
}

export default App

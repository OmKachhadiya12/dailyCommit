import {Container,Button,Typography,Grow,Grid,AppBar} from "@mui/material";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";

import memories from "./images/memories.png";

function App() {
  
  return (
    <>
      <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">
                Memories
            </Typography>
            <img src={memories} alt="Memories images" height="500"/>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justif="space-between" alignItems="stretch" spacing={4}>
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

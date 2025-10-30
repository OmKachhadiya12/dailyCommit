import {Container,Button,Typography,Grow,Grid,AppBar} from "@mui/material";

import memories from "./images/memories.png";

function App() {
  
  return (
    <>
      <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">
                Memories
            </Typography>
            <img src={memories} alt="Memories images" height="60"/>
          </AppBar>
      </Container>
    </>
  )
}

export default App

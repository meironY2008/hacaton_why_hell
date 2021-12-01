import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import db from "../utils/firebase";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [capacity, setCapacity] = useState();
  const [range, setRange] = useState();
  const [carNumber, setCarNumber] = useState();
  const handleClickClear = () => {
    setCarNumber();
    setRange();
    setCapacity();
    setName();
    setEmail();
  };

  const validReq = () => {
    if (
      email == null ||
      capacity == null ||
      range == null ||
      carNumber == null ||
      name == null
    )
      return false;
    return true;
  };
  const addDocToCol = async () => {
    if (validReq()) {
      const collectionRef = collection(db, "users");
      const payload = {
        name,
        mail: email,
        capacity,
        range,
        carId: carNumber,
        reliability: 10,
      };
      const newUser = await addDoc(collectionRef, payload);
      console.log(newUser);
    } else {
      console.log("fail");
    }

    handleClickClear();
  };

  return (
    <div>
      <Container maxWidth="md">
        <h6>ADD New User</h6>
        <form>
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", minWidth: "250px" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Name"
                  name="Name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="email"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="capacity"
                  name="capacity"
                  label="capacity"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setCapacity(e.target.value)}
                  value={capacity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="start"
                  name="start"
                  label="range of km"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setRange(e.target.value)}
                  value={range}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="carNumber"
                  name="carNumber"
                  label="carNumber"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setCarNumber(e.target.value)}
                  value={carNumber}
                />
              </Grid>
            </Grid>
          </Box>
          <Button onClick={handleClickClear}>Cancel</Button>
          <Button onClick={addDocToCol}>Ok</Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;

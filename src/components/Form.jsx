import React, { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import db from "../utils/firebase";

const Form = () => {
  const [email, setEmail] = useState();
  const [precentBattery, setPrecentBattery] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [emails, setEmails] = useState([]);
  const handleClickClear = () => {
    setStart();
    setEnd();
    setPrecentBattery("");
    setEmail();
  };
  console.log(end, "start:", start);

  useEffect(() => {
    return onSnapshot(collection(db, "users"), (snapshot) =>
      setEmails(snapshot.docs.map((doc) => doc.data().mail))
    );
  }, []);
  const reformatDate = (time) => {
    return new Date(time).getTime() / 60000;
  };

  const validReq = () => {
    console.log(email, start, end, precentBattery);
    if (email == null || start == null || end == null || precentBattery == null)
      return false;
    console.log("here");
    if (reformatDate(end) <= reformatDate(start)) return false;
    console.log("here2");
    if (!emails.includes(email)) return false;
    console.log("here3");
    return true;
  };

  const addDocToCol = async () => {
    if (validReq()) {
      const collectionRef = collection(db, "requests");
      const payload = {
        mail: email,
        end: reformatDate(end),
        start: reformatDate(start),
        battery: precentBattery,
      };
      const newReq = await addDoc(collectionRef, payload);
      console.log(newReq);
    } else {
      console.log("fail");
    }
    handleClickClear();
  };

  return (
    <div>
      <Container maxWidth="md">
        <h6>ADD New Request</h6>
        <form>
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", minWidth: "250px" }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <TextField
                  required
                  id="recentBattery"
                  name="precentBattery"
                  label="Precent of Battery"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setPrecentBattery(parseInt(e.target.value))}
                  value={precentBattery}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6>start</h6>
                <input
                  type="datetime-local"
                  required
                  label="start"
                  onChange={(e) => setStart(e.target.value)}
                  value={start}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6>end</h6>
                <input
                  type="datetime-local"
                  required
                  label="end"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
          <Button onClick={handleClickClear}>Clear</Button>
          <Button onClick={addDocToCol}>Ok</Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;

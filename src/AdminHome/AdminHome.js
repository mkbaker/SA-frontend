import React, { Component } from "react";

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

//defines height for grid components
const gridBox = {
    height: "450px"
}

class AdminHome extends Component {
  render() {
    return (
      <div className="adminHomeContainerDiv">
        <h1>Welcome back.</h1>
        <Grid container spacing={2}>
          {/* left box: view past auctions */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <h3>View Auctions</h3>
              <ul>
                <li>
                  <Link>Spongebob Squarepants</Link>
                </li>
                <li>
                  <Link>Patrick Star</Link>
                </li>
                <li>
                  <Link>Eugene Krabs</Link>
                </li>
              </ul>
            </Paper>
          </Grid>

          {/* middle box: create a new auction */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <h3>Create a New Auction</h3>
              <TextField
                id="auctionNameInput"
                label="Auction Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                defaultValue="2020-01-01"
              />
              <TextField
                id="endDate"
                label="End Date"
                type="date"
                defaultValue="2020-01-01"
              />
              <Button variant="contained">Create Auction</Button>
            </Paper>
          </Grid>

          {/* third box: add new contact  */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <h3>Add a New Contact</h3>
              <TextField
                id="firstname-input"
                label="First Name"
                type="name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="lastname-input"
                label="Last Name"
                type="name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="email-input"
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="phone-input"
                value="(1  )    -    "
                label="Phone Number"
                type="phone"
                margin="normal"
                variant="outlined"
              />
              <Button variant="contained">Add Contact</Button>
              <br />
              <br />
              <Link>View All Contacts</Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AdminHome;

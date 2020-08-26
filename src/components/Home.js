import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Route } from "react-router-dom";

const Home = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography>홈</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <TextField
          id="standard-full-width"
          // label="아이디"
          placeholder="술사님 아이디, 키워드 검색"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
      </Container>
      <BottomNavigation
        // position="fixed"
        // style={{ top: "auto", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Fragment>
  );
};

export default Home;

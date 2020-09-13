import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
  Button,
} from "@material-ui/core";

const SignUpForm2 = (props) => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography>회원가입</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <TextField
          id="standard-full-width"
          label="휴대폰 인증"
          //   placeholder="Placeholder"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="인증번호"
          //   placeholder="Placeholder"
          //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.history.push("/Home");
          }}
        >
          가입완료
        </Button>
      </Container>
    </Fragment>
  );
};

export default SignUpForm2;

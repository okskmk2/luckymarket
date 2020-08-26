import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";

const LoginForm = () => {
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
          label="아이디"
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
          label="닉네임"
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
          label="비밀번호"
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
          label="비밀번호 확인"
        //   placeholder="Placeholder"
        //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Container>
    </Fragment>
  );
};

export default LoginForm;

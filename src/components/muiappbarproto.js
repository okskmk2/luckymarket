import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Button,
} from "@material-ui/core";
import { Route } from "react-router-dom";

const Test = (props) => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
        <FormGroup row>
          <Typography>서비스 이용약관 동의</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="내용보기"
            labelPlacement="start"
          />
        </FormGroup>
        <FormGroup row>
          <Typography>개인정보취급방침 동의</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
            label="내용보기"
            labelPlacement="start"
          />
        </FormGroup>
        <FormGroup row>
          <Typography>개인정보 이용/수집 동의</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            }
            label="내용보기"
            labelPlacement="start"
          />
        </FormGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.history.push("/SignUpForm2");
          }}
        >
          다음
        </Button>
      </Container>
    </Fragment>
  );
};

export default Test;

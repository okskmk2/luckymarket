import React from "react";

const IndexPage = (props) => {
  return (
    <div className="initialPage vh">
      <img
        src="/initial_logo.jpg"
        alt="logo"
        style={{
          width: "15rem",
        }}
      />
      <div className="btn-group">
        <button className="fullWidth" onClick={()=>{props.history.push('/LoginForm')}}>로그인</button>
        <button className="fullWidth" style={{marginTop:'1rem'}} onClick={()=>{props.history.push('/SignUpForm')}}>회원가입</button>
      </div>
    </div>
  );
};

export default IndexPage;

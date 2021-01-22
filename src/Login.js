import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { LoginAPI } from "./data/APIs";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idCheck, setIdCheck] = useState(false);

  const inputID = (e) => {
    setId(e.target.value);
    setIdCheck(true);

    if (e.target.value.includes("@" && ".")) {
      setIdCheck(false);
    }
  };

  const passID = (e) => {
    if (e.key === "Enter") {
      LoginFunction();
    }
  };

  const inputPW = (e) => {
    setPw(e.target.value);
  };

  const passPW = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      LoginFunction();
    }
  };

  const LoginFunction = () => {
    axios({
      method: "post",
      url: `${LoginAPI}`,
      data: {
        id,
        pw
      }
    })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        alert("로그인 되었습니다.");
      })
      .catch((response) => {
        alert(response.response.data.message);
      });
  };

  return (
    <>
      <LoginContainer>
        <div className="title">
          <span>학생 로그인</span>
        </div>
        <InputForm>
          <span className="idPw">이메일 주소</span>
          <input onChange={inputID} onKeyDown={passID} type="text" />
          <Validation idCheck={idCheck}>
            올바른 양식을 기입해 주십시오.
          </Validation>
        </InputForm>
        <InputForm>
          <span className="idPw">비밀번호</span>
          <input onChange={inputPW} onKeyDown={passPW} type="password" />
        </InputForm>
        <button onClick={LoginFunction} className="loginButton">
          로그인
        </button>
        <div className="etc">
          <span>수파자 계정이 없으신가요?</span>
          <span className="signUp">회원가입</span>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin: 120px 500px;
  padding: 30px 25px;
  width: 500px;
  height: 420px;

  .title {
    margin-bottom: 60px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

  .loginButton {
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #ffffff;
    background-color: #6f63e9;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }

  .etc {
    margin-top: 20px;
    padding: 0px 110px;

    span {
      margin-right: 10px;
    }

    .signUp {
      font-weight: bold;
      color: #6f63e9;
      cursor: pointer;
    }
  }
`;

const InputForm = styled.div`
  margin-bottom: 30px;

  .idPw {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    display: inline-block;
    margin-bottom: 5px;
    width: 99%;
    height: 35px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
  }
`;

const Validation = styled.span`
  display: ${(props) => (props.idCheck ? "inline" : "none")};
  color: red;
  font-size: 14px;
`;

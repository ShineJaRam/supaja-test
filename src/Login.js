import styled from "styled-components";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <div className="title">
          <span>학생 로그인</span>
        </div>
        <InputForm>
          <span>휴대폰 번호</span>
          <input type="text" />
        </InputForm>
        <InputForm>
          <span>비밀번호</span>
          <input type="password" />
        </InputForm>
        <button>로그인</button>
        <div>
          <span>수파자 계정이 없으신가요?</span>
          <button>회원가입</button>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin: 200px auto;

  .title {
    font-size: 30px;
    font-weight: bold;
  }
`;

const InputForm = styled.div``;

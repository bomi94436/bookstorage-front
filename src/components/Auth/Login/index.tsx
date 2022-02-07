import { Button, Input, Title } from '@stories';
import React from 'react';
import { content, field, signupLink, style } from './Login.styles';
import { Text } from '@stories';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div css={[style]}>
      <div css={[content]}>
        <Title>로그인</Title>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            아이디
          </Text>
          <Input placeholder="아이디 또는 이메일 입력" />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호
          </Text>
          <Input placeholder="비밀번호 입력" type="password" />
        </div>

        <div css={field}>
          <Button label="로그인" width="100%" />

          <div css={signupLink}>
            <NavLink to="/signup">
              <Text color="main" bold={true}>
                회원가입 하러가기
              </Text>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

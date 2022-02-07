import { Title, Text, Input, Button } from '@stories';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { content, field, loginLink, style } from './Signup.styles';

const Signup = () => {
  return (
    <div css={[style]}>
      <div css={[content]}>
        <Title>회원가입</Title>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            아이디
          </Text>
          <Input placeholder="아이디 입력" />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            이메일
          </Text>
          <Input placeholder="이메일 입력" />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호
          </Text>
          <Input placeholder="비밀번호 입력" type="password" />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호 확인
          </Text>
          <Input placeholder="비밀번호 확인 입력" type="password" />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            닉네임
          </Text>
          <Input placeholder="닉네임 입력" />
        </div>

        <div css={field}>
          <Button label="회원가입" width="100%" />

          <div css={loginLink}>
            <NavLink to="/login">
              <Text color="main" bold={true}>
                로그인 하러가기
              </Text>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

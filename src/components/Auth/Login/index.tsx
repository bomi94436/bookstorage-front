import { Button, Input, Title } from '@stories';
import React, { useState } from 'react';
import { content, field, signupLink, style } from './Login.styles';
import { Text } from '@stories';
import { NavLink, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { login } from '@apis/user';

type LoginInput = {
  email?: string;
  password?: string;
};

const Login = () => {
  const { mutate: callLogin } = useMutation(login, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      console.error(err);
      alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.');
    },
  });

  const navigate = useNavigate();
  const [input, setInput] = useState<LoginInput | null>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) =>
      !prev
        ? {
            [e.target.name]: e.target.value,
          }
        : {
            ...prev,
            [e.target.name]: e.target.value,
          }
    );
  };

  const onSubmit = () => {
    if (!input?.email || !input?.password) {
      alert('아이디 또는 비밀번호를 입력해주세요.');
      return;
    }

    callLogin({ email: input.email, password: input.password });
  };

  return (
    <div css={[style]}>
      <div css={[content]}>
        <Title>로그인</Title>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            아이디
          </Text>
          <Input placeholder="아이디 또는 이메일 입력" name="email" onChange={onChangeInput} />
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호
          </Text>
          <Input
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            onChange={onChangeInput}
          />
        </div>

        <div css={field}>
          <Button label="로그인" width="100%" onClick={onSubmit} />

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

import { singup } from '@apis/user';
import { SignupRequest } from '@apis/user/types';
import { Title, Text, Input, Button } from '@stories';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import { content, field, loginLink, style } from './Signup.styles';

type SignupInput = {
  userId?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  nickname?: string;
};

const Signup = () => {
  const { mutate: callSignup } = useMutation(singup, {
    onSuccess: (data) => {
      console.log(data);
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    },
    onError: () => {
      alert('문제가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const navigate = useNavigate();
  const [input, setInput] = useState<SignupInput | null>(null);
  const [errorMessage, setErrorMessage] = useState<SignupInput | null>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateInput(e.target.name as keyof typeof errorMessage, e.target.value);
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

  const onChangeErrorMessage = (name: keyof SignupInput, value: string | null) => {
    setErrorMessage((prev) =>
      !prev
        ? {
            [name]: value,
          }
        : {
            ...prev,
            [name]: value,
          }
    );
  };

  const validateInput = (field: keyof SignupInput, value: string | null) => {
    switch (field) {
      case 'userId': {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;

        if (value && !userIdRegex.test(value)) {
          onChangeErrorMessage(
            'userId',
            '아이디는 숫자 또는 영어로 이루어진 5글자 이상이어야 합니다.'
          );
        } else {
          onChangeErrorMessage('userId', null);
        }
        break;
      }

      case 'email': {
        const emailRegex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (value && !emailRegex.test(value)) {
          onChangeErrorMessage('email', '이메일 형식이 올바르지 않습니다.');
        } else {
          onChangeErrorMessage('email', null);
        }
        break;
      }

      case 'password': {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (value && !passwordRegex.test(value)) {
          onChangeErrorMessage(
            'password',
            '비밀번호는 숫자, 영어를 포함하는 8글자 이상이어야 합니다.'
          );
        } else {
          onChangeErrorMessage('password', null);
        }
        break;
      }

      case 'passwordConfirm': {
        if (value && value !== input?.password) {
          onChangeErrorMessage('passwordConfirm', '비밀번호가 일치하지 않습니다.');
        } else {
          onChangeErrorMessage('passwordConfirm', null);
        }
        break;
      }

      case 'nickname': {
        if (value && value.length < 3) {
          onChangeErrorMessage('nickname', '닉네임은 세 글자 이상 가능합니다.');
        } else {
          onChangeErrorMessage('nickname', null);
        }
        break;
      }
    }
  };

  const onSubmit = () => {
    if (input && errorMessage) {
      Object.keys(input).forEach((field) => {
        if (!input[field as keyof SignupInput] || errorMessage[field as keyof SignupInput]) {
          alert('입력하지 않은 항목이 있습니다.');
          return;
        }
      });

      const data: SignupRequest = Object.keys(input).reduce((prev, curr) => {
        if (curr === 'passwordConfirm') return prev;
        else
          return {
            ...prev,
            [curr]: input[curr as keyof SignupInput],
          };
      }, {} as SignupRequest);

      callSignup(data);
    } else {
      alert('입력하지 않은 항목이 있습니다.');
      return;
    }
  };

  return (
    <div css={[style]}>
      <div css={[content]}>
        <Title>회원가입</Title>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            아이디
          </Text>
          <Input
            placeholder="아이디 입력"
            name="userId"
            value={input?.userId ?? ''}
            onChange={onChangeInput}
          />
          {errorMessage?.userId && <Text color="red">{errorMessage?.userId}</Text>}
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            이메일
          </Text>
          <Input
            placeholder="이메일 입력"
            name="email"
            value={input?.email ?? ''}
            onChange={onChangeInput}
          />
          {errorMessage?.email && <Text color="red">{errorMessage?.email}</Text>}
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호
          </Text>
          <Input
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            value={input?.password ?? ''}
            onChange={onChangeInput}
          />
          {errorMessage?.password && <Text color="red">{errorMessage?.password}</Text>}
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            비밀번호 확인
          </Text>
          <Input
            placeholder="비밀번호 확인 입력"
            type="password"
            name="passwordConfirm"
            value={input?.passwordConfirm ?? ''}
            onChange={onChangeInput}
          />
          {errorMessage?.passwordConfirm && (
            <Text color="red">{errorMessage?.passwordConfirm}</Text>
          )}
        </div>

        <div css={field}>
          <Text size="large" color="gray" bold={true}>
            닉네임
          </Text>
          <Input
            placeholder="닉네임 입력"
            name="nickname"
            value={input?.nickname ?? ''}
            onChange={onChangeInput}
          />
          {errorMessage?.nickname && <Text color="red">{errorMessage?.nickname}</Text>}
        </div>

        <div css={field}>
          <Button label="회원가입" width="100%" onClick={onSubmit} />

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

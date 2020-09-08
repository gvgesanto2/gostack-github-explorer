import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

interface UserCredantials {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [userCredentials, setCredentials] = useState<UserCredantials>({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={() => { }}>
        <FormInput
          name="email"
          type="email"
          onChange={() => { }}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={() => { }}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button">Sign in with Google</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

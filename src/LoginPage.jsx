import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';

// Styled components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  color: white;
  padding: 0 1rem; /* Added horizontal padding for better responsiveness */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px; /* Increased max-width for a more spacious form */
  background-color: #1e1e1e;
  padding: 2.5rem;
  border-radius: 10px; /* Added rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Soft shadow for a floating effect */
`;

const InputField = styled.div`
  margin-bottom: 1.8rem; /* Increased spacing between fields */
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
 
`;

const Input = styled.input`
  width: 100%;
   max-width:92%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 6px;
  background-color: #333;
  color: white;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077ff; /* Blue border on focus */
  }
`;

const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  font-size: 0.9rem;
  color: #0077ff;
  margin-top: 0.6rem;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  padding: 1.2rem;
  background-color: #0077ff;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #005bb5;
    transform: scale(1.05); /* Slight scaling on hover */
  }
`;

const PasswordStrengthMessage = styled.p`
  margin-top: 0.7rem;
  color: ${props => (props.isStrong ? 'green' : 'red')};
  font-size: 0.9rem;
  font-weight: 500;
`;

const LoginPage = () => {
  const [errormsg, setErrorMessage] = useState(" ");
  const [password, setPassword] = useState("");

  const validate = (val) => {
    setPassword(val);
    if (validator.isStrongPassword(val, { 
      minLength: 8, minLowercase: 1, 
      minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
      setErrorMessage('Strong Password');
    } else { 
      setErrorMessage('Weak Password');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form>
        <InputField>
          <Label htmlFor="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username" />
        </InputField>
        <InputField>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password" 
            onChange={(e) => validate(e.target.value)} 
            value={password} 
          />
          <PasswordStrengthMessage isStrong={errormsg === 'Strong Password'}>
            {errormsg}
          </PasswordStrengthMessage>
          <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        </InputField>
        <SignInButton type="submit">Sign In</SignInButton>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;

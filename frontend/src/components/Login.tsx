import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
`;

const Card = styled.div`
  background-color: #14252f;
  border-radius: 6px;
  padding: 2rem;
`;
const Header = styled.h1`
  color: #009688;
  font-size: 40px;
  font-family: sans-serif;
  text-align: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25vw;
  gap: 1rem;
`;
const FormHeader = styled.h1`
  color: white;
  font-size: 20px;
`;
const Input = styled.input`
  padding: 15px;
  border: 1px solid #1c2c35;
  border-radius: 10px;
  background-color: #14252f;
  font-size: 16px;
  color: #a3a3a3;
  &:focus {
    border-color: #009688;
    outline: none;  
  }
`;
const Label = styled.label`
  color: #a3a3a3;
  font-weight: 600;
  font-size: 1rem;
`;
const Button = styled.button`
  padding: 15px;
  color: white;
  border-radius: 10px;
  background-color: #009688;
  border: none;
  cursor: pointer;
`;
const LinkContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 1rem 0;
`
const Paragraph = styled.div`
    color: white;
`
const Login = () => {
  return (
    <Container>
      <Card>
        <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
        <FormContainer>
          <FormHeader>Sign In</FormHeader>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="Email address" />
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="passord" placeholder="Password"/>
          <LinkContainer> <Paragraph>don't you have account?</Paragraph></LinkContainer>
          <Button>Login</Button>
        </FormContainer>
      </Card>
    </Container>
  );
};
export default Login;

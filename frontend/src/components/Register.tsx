import styled from "@emotion/styled";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IRegisterUser } from "../types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/user.schema";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "../features/user/userSlice";
import { ToastContainer } from "react-toastify";

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
const FormContainer = styled.form`
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
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;
const Paragraph = styled.div`
  color: white;
`;

const Error = styled.span`
  color: #ef4444;
`;

const PasswodContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  position: relative;
`;

const Register = () => {
  const [isVisibe, setIsvisible] = useState(false);
  const { loading } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<IRegisterUser> = async (user) => {
    try {
      dispatch(createUserAction({user, navigate}));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container>
      <Card>
        <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>Sign up</FormHeader>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email address"
            {...register("email")}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
          <Label htmlFor="password">Password</Label>
          <PasswodContainer>
            <Input
              style={{ width: "100%" }}
              type={`${isVisibe ? "text" : "password"}`}
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            {isVisibe ? (
              <MdVisibility
                onClick={() => setIsvisible(!isVisibe)}
                color="#a3a3a3"
                size={25}
                style={{
                  marginLeft: "-4",
                  position: "absolute",
                  right: 10,
                  cursor: "pointer",
                }}
              />
            ) : (
              <MdVisibilityOff
                onClick={() => setIsvisible(!isVisibe)}
                color="#a3a3a3"
                size={25}
                style={{
                  marginLeft: "-4",
                  position: "absolute",
                  right: 10,
                  cursor: "pointer",
                }}
              />
            )}
          </PasswodContainer>
          {errors.password && <Error>{errors.password.message}</Error>}
          <LinkContainer>
            {" "}
            <Paragraph>do you have account?</Paragraph>{" "}
            <Link to="/register" style={{ color: "#009688" }}>
              Login
            </Link>
          </LinkContainer>
          <Button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </FormContainer>
      </Card>
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
  );
};
export default Register;

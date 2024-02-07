import styled from "@emotion/styled";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { MdSupervisorAccount } from "react-icons/md";

import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #010f17;
  height: calc(100vh);
  width: 35vh;
  padding: 1rem;
  position: sticky;
  overflow-y: auto;
  padding: 0 20px;

  &::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }
`;

const Header = styled.h1`
  color: #009688;
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  position: sticky;
`;
const ActionsHeader = styled.div`
  display: flex;
  color: #a3a3a3;
  font-weight: 600;
  font-size: 0.75rem;
`;

const AuctionItem = styled.button`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 10px;
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  border-radius: 2px;
  color: white;
  font-size: 1rem;

  &:hover {
    background-color: #14252f;
    color: #009688;
  }
`;

const SideNav = () => {
  return (
    <Container>
      <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
      <div>
        <ActionsHeader>MENU</ActionsHeader>
        <AuctionItem>
          <Link
            to="/music-list"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            <IoPlayCircleOutline /> Discover
          </Link>
        </AuctionItem>
        <AuctionItem>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            <BsBrowserChrome />
            Browse
          </Link>
        </AuctionItem>
        <AuctionItem>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            <MdOutlineManageSearch />
            Search{" "}
          </Link>
        </AuctionItem>
      </div>
      <div>
        <ActionsHeader>ACTIONS</ActionsHeader>
        <AuctionItem>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            <MdAddCircle />
            Create Music
          </Link>
        </AuctionItem>
      </div>
      <div>
        <ActionsHeader>ACCOUNT</ActionsHeader>
        <AuctionItem>
          <Link
            to="/register"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            {" "}
            <MdSupervisorAccount /> Sign Up{" "}
          </Link>
        </AuctionItem>
        <AuctionItem>
          <Link
            to="/login"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".70rem",
              color: "inherit",
            }}
          >
            <CiLogin /> Sign In
          </Link>
        </AuctionItem>
      </div>
    </Container>
  );
};

export default SideNav;

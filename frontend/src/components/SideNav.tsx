import styled from "@emotion/styled";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { MdSupervisorAccount } from "react-icons/md";

import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #010f17;
  height: calc(100vh);
  width: 35vh;
  padding: 1rem;
`;

const Header = styled.h1`
  color: #009688;
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  position: sticky;
`;
const ActionsHeader = styled.div`
  display:flex;
  color: #a3a3a3;
  font-weight: 600;
  font-size: .75rem;
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

    &:hover{
        background-color: #14252f;
        color: #009688;
    }
`


const SideNav = () => {
  return (
    <Container>
      <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
      <div>
        <ActionsHeader>MENU</ActionsHeader>
        <AuctionItem><Link to='/music-list'><IoPlayCircleOutline /> Discover</Link></AuctionItem>
        <AuctionItem> <BsBrowserChrome />Browse</AuctionItem>
        <AuctionItem> <MdOutlineManageSearch />Search</AuctionItem>
      </div>
      <div>
        <ActionsHeader>ACTIONS</ActionsHeader>
        <AuctionItem> <MdAddCircle />Create Music</AuctionItem>
      </div>
      <div>
        <ActionsHeader>ACCOUNT</ActionsHeader>
        <AuctionItem> <MdSupervisorAccount /> Sign Up</AuctionItem>
        <AuctionItem> <CiLogin /> Sign In</AuctionItem>
      </div>
    </Container>
  );
};

export default SideNav;

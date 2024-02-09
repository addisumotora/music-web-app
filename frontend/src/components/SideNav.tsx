import styled from "@emotion/styled";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { MdSupervisorAccount } from "react-icons/md";

import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { openModal } from "../features/modal/modalSlice";

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
  cursor: pointer;
  &:hover {
    background-color: #14252f;
    color: #009688;
  }
`;

const SideNav = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
      <div>
        <ActionsHeader>MENU</ActionsHeader>
        <Link
          to="/music-list"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".70rem",
            color: "inherit",
          }}
        >
          <AuctionItem>
            <IoPlayCircleOutline /> Discover
          </AuctionItem>
        </Link>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".70rem",
            color: "inherit",
          }}
        >
          <AuctionItem>
            <BsBrowserChrome />
            Browse
          </AuctionItem>
        </Link>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".70rem",
            color: "inherit",
          }}
        >
          <AuctionItem>
            <MdOutlineManageSearch />
            Search{" "}
          </AuctionItem>
        </Link>
      </div>
      <div>
        <ActionsHeader>ACTIONS</ActionsHeader>
        <AuctionItem onClick={() => dispatch(openModal())}>
          <MdAddCircle />
          Create Music
        </AuctionItem>
      </div>
      <div>
        <ActionsHeader>ACCOUNT</ActionsHeader>
        <Link
          to="/register"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".70rem",
            color: "inherit",
          }}
        >
          <AuctionItem>
            {" "}
            <MdSupervisorAccount /> Sign Up{" "}
          </AuctionItem>
        </Link>
        <Link
          to="/login"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".70rem",
            color: "inherit",
          }}
        >
          <AuctionItem>
            <CiLogin /> Sign In
          </AuctionItem>
        </Link>
      </div>
    </Container>
  );
};

export default SideNav;

import styled from "@emotion/styled";
import { IoCloseOutline, IoPlayCircleOutline } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { MdSupervisorAccount } from "react-icons/md";

import { MdAddCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, sidebarAction, sidebarFalse } from "../features/modal/modalSlice";
import { RootState } from "../features/store";
import { LuLogOut } from "react-icons/lu";
import { logout } from "../features/user/userSlice";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #010f17;
  height: calc(100vh);
  padding: 1rem;
  position: sticky;
  overflow-y: auto;
  padding: 0 20px;
  transition: transform, width 0.3s ease-in-out;

  &::-webkit-scrollbar {
    display: hidden;
    width: 0;
  }

  @media (max-width: 840px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
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

const IconContainer = styled.div`
  display: none;

  @media (max-width: 840px) {
    display: flex;
  }
`;

const SideNav = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { isSideBaropen } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const dispatch = useDispatch();

  const handleResize = () => {
    if (window.innerWidth <= 840) {
      dispatch(sidebarFalse());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerStyles = {
    transform: !isSideBaropen ? "translateX(0)" : "translateX(-100%)",
    width: isSideBaropen ? "0" : "300px",
  };

  return (
    <>
      <Container style={containerStyles}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Header>𝒜𝒹𝒹𝒾𝓈𝒱𝒾𝒷𝑒𝓈</Header>
          <IconContainer
            onClick={() => {
              dispatch(sidebarAction());
            }}
          >
            {" "}
            <IoCloseOutline size={30} cursor={"pointer"} />
          </IconContainer>
        </div>
        <div>
          <ActionsHeader>MENU</ActionsHeader>
          <NavLink
            to="/"
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
          </NavLink>
          <AuctionItem>
            <BsBrowserChrome />
            Browse
          </AuctionItem>
          <AuctionItem>
            <MdOutlineManageSearch />
            Search{" "}
          </AuctionItem>
        </div>
        <div>
          <ActionsHeader>ACTIONS</ActionsHeader>
          <AuctionItem onClick={() => dispatch(openModal())}>
            <MdAddCircle />
            Add Music
          </AuctionItem>
        </div>
        <div>
          <ActionsHeader>ACCOUNT</ActionsHeader>
          {!user ? (
            <div>
              <NavLink
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
              </NavLink>
              <NavLink
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
              </NavLink>
            </div>
          ) : (
            <div>
              <AuctionItem onClick={() => dispatch(logout())}>
                <LuLogOut /> Logout
              </AuctionItem>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default SideNav;

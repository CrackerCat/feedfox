import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";
import ChangeAccent from "./ChangeAccent";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.accent};
    font-weight: 500;
    margin-right: 0.8rem;
  }

  svg {
    position: relative;
    top: 2px;
    margin: 0 0.4rem;
  }
`;

const Header = () => (
  <>
    <Wrapper>
      <Link to="/">
        <h1>FeedFox</h1>
      </Link>
      <ToggleTheme />
      <ChangeAccent />
    </Wrapper>
  </>
);

export default Header;

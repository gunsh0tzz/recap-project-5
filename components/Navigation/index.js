import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  fontsize: 2rem;
  color: black;

  &:hover {
    text-decoration: underline red;
    background-color: lightgray;
  }
`;

const StyledNav = styled.nav`
  align-items: center;
  border-bottom: solid 2px black;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
`;

export default function Navigation() {
  return (
    <>
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Spotlight</StyledLink>
          </li>
          <li>
            <StyledLink href="/art-pieces">Art Pieces</StyledLink>
          </li>
          <li>
            <StyledLink href="/">Favorites</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
    </>
  );
}

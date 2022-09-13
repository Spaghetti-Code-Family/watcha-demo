import React from 'react';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const Base = styled.header``;

const Navigation = styled.nav``;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul``;

const Menu = styled.li``;

const MenuButton = styled.button``;

const SearchMenu = styled.li``;

const Link = styled.a``;

const TextLogo = styled.h1``;

const SearchContainer = styled.div``;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label``;

const SearchInput = styled.input``;

const SignIn = styled.button``;

const SignUp = styled.button``;

const Header: React.FC = () => {
  const keywordHandler = () => {};
  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">WATCHA</span>
                  <span>by Jade</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="javascript:void(0)">
                <MenuButton>Movie</MenuButton>
              </Link>
              <Link href="javascript:void(0)">
                <MenuButton>TV Program</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel />
                    <SearchInput
                      placeholder="Search by contents, name, or collection"
                      onChange={keywordHandler}
                    />
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
            </SearchMenu>
            <Menu>
              <SignIn>Log In</SignIn>
            </Menu>
            <Menu>
              <SignIn>Sign Up</SignIn>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

export default Header;

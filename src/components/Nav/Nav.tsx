import { useState } from 'react';
import { styled } from "styled-components";
import NavHeader from './NavHeader';
import NavBody from './NavBody';

interface Props {
  activeSection: number,
  setSection: (id: number) => void,
}

export default function Nav(props: Props) {
  const [navHover, setNavHover] = useState<boolean>(false);

  const openNav = () => {
    setNavHover(true);
  }

  const closeNav = () => {
    setNavHover(false);
  }

  return (
    <NavMenu onMouseEnter={openNav} onMouseLeave={closeNav}>
      { navHover === true ? 
      (
        <div>
          <NavHeader />
          <NavBody activeSection={props.activeSection} setSection={props.setSection} />
        </div>
      ) :
      (
        null
      )}
    </NavMenu>
  )
}

const NavMenu = styled.div`
  height: 100vh;
  width: 20px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 0px;
  background-color: #cfcfcf;
  color: #13262f;
  &:hover {
    width: 250px;
  }
`;
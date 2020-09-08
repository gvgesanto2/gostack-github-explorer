import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { HeaderContainer } from './header.styles';
import logoImg from '../../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer className="mb-xlg">
      <img src={logoImg} alt="Github Explorer" />
      <nav>
        <Link to="/">
          <FiChevronLeft size={16} />
          <span>BACK</span>
        </Link>
        <Link to="/">
          <span>ALL MY REPOSITORIES</span>
        </Link>
        <Link to="/">
          <span>FAVORITES</span>
        </Link>
        <Link to="/">
          <span>SIGN IN</span>
        </Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

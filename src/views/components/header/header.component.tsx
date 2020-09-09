import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { HeaderContainer } from './header.styles';
import logoImg from '../../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer className="mb-xlg">
      <Link to="/">
        <img src={logoImg} alt="Github Explorer" />
      </Link>
      <nav>
        <Link to="/">
          <FiChevronLeft size={16} />
          <span>BACK</span>
        </Link>
        <Link to="/collections">
          <span>MY COLLECTIONS</span>
        </Link>
        <Link to="/my">
          <span>MY REPOSITORIES</span>
        </Link>
        <Link to="/">
          <span>FAVORITES</span>
        </Link>
        <Link to="/signin">
          <span>SIGN IN</span>
        </Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

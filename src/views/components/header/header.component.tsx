import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { HeaderContainer } from './header.styles';
import logoImg from '../../../assets/images/logo.svg';

const Header: React.FC = () => {
  console.log('@@Header/rendered');
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Github Explorer" />
      </Link>
      <nav>
        <div>
          <Link to="/">
            <FiChevronLeft size={16} />
            BACK
          </Link>
        </div>

        <div>
          <Link to="/signin">SIGN IN</Link>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

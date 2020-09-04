import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repository, RepositoryList } from './home.styles';
import logoImg from '../../../assets/images/logo.svg';
import profileTestImg from '../../../assets/images/profile.jpg';

const Home: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" className="mb-xlg" />
      <Title className="mb-md">Explore repositories in Github</Title>

      <Form className="mb-xlg">
        <input type="text" placeholder="Type the repository..." />
        <button type="submit">Search</button>
      </Form>

      <RepositoryList>
        <Repository>
          <a href="#">
            <img src={profileTestImg} alt="User" />
            <div>
              <strong>Repository Title</strong>
              <p>Repository Description bla bla bla balba bla</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        </Repository>

        <Repository>
          <a href="#">
            <img src={profileTestImg} alt="User" />
            <div>
              <strong>Repository Title</strong>
              <p>Repository Description bla bla bla balba bla</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        </Repository>

        <Repository>
          <a href="#">
            <img src={profileTestImg} alt="User" />
            <div>
              <strong>Repository Title</strong>
              <p>Repository Description bla bla bla balba bla</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        </Repository>
      </RepositoryList>
    </>
  );
};

export default Home;

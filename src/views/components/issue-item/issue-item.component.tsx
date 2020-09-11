import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './issue-item.styles';

import { Issue } from '../../../redux/ducks/common/common.types';

interface IssueItemProps {
  issue: Issue;
}

const IssueItem: React.FC<IssueItemProps> = ({
  issue: {
    title,
    html_url,
    user: { login },
  },
}) => {
  return (
    <Container>
      <a href={html_url} target="_blank" rel="noreferrer">
        <div>
          <strong>{title}</strong>
          <p>{login}</p>
        </div>

        <FiChevronRight />
      </a>
    </Container>
  );
};

export default IssueItem;

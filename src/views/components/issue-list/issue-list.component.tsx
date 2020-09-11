import React from 'react';

import { Container } from './issue-list.styles';

import { Issue } from '../../../redux/ducks/common/common.types';
import IssueItem from '../issue-item/issue-item.component';

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <Container>
      {issues &&
        issues.map(issue => <IssueItem key={issue.id} issue={issue} />)}
    </Container>
  );
};

export default IssueList;

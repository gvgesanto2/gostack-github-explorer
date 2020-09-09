import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Title, Error } from './home.styles';

import SearchBar from '../../components/search-bar/search-bar.component';
import RepositoryList from '../../components/repository-list/repository-list.component';
import {
  selectExplorerErrorMessage,
  selectTmpRepositories,
} from '../../../redux/ducks/explorer/explorer.selectors';
import { RootState } from '../../../redux/root/root.types';
import { fetchRepositoryStart } from '../../../redux/ducks/explorer/explorer.actions';
import { Repository } from '../../../redux/ducks/explorer/explorer.types';

interface StateProps {
  inputError?: string | null;
  repositories: Repository[];
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  inputError: state => selectExplorerErrorMessage(state),
  repositories: state => selectTmpRepositories(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRepository: (repoFullName: string) =>
    dispatch(fetchRepositoryStart(repoFullName)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ExplorerProps = PropsFromRedux;

const ExplorerPage: React.FC<ExplorerProps> = ({
  inputError,
  repositories,
  fetchRepository,
}) => {
  return (
    <>
      <Title className="mb-md">Explore repositories in Github</Title>

      <SearchBar
        submitCallback={fetchRepository}
        hasError={!!inputError}
        placeholder="Enter a repository..."
      />
      {inputError && <Error className="mt-xxm">{inputError}</Error>}

      <RepositoryList
        className="mt-xlg"
        emptyListMsg="No repositories added."
        repositories={repositories}
      />
    </>
  );
};

export default connector(ExplorerPage);

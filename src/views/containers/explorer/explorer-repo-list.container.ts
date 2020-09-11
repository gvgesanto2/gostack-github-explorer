// Import vendors modules
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import the root state type
import { RootState } from '../../../redux/root/root.types';

// Import data types
import { Repository } from '../../../redux/ducks/common/common.types';
import { RepositoryListData } from '../../../redux/ducks/explorer/explorer.types';

// Import selectors
import {
  selectTmpRepositories,
  selectExplorerRepositoryListData,
} from '../../../redux/ducks/explorer/explorer.selectors';

// Import action creators
import { removeRepository } from '../../../redux/ducks/explorer/explorer.actions';

// Import the presentational component
import RepositoryList from '../../components/repository-list/repository-list.component';

// Defining the state props passed to the presentational component
interface StateProps {
  repositories: Repository[];
  data: RepositoryListData;
}

// Mapping the state to the presentational component props
const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  repositories: state => selectTmpRepositories(state),
  data: state => selectExplorerRepositoryListData(state),
});

// Mapping the actions to the presentational component props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleRemoveRepository: (repositoryId: number) =>
    dispatch(removeRepository(repositoryId)),
});

// Connecting the props to the presentational component
const connector = connect(mapStateToProps, mapDispatchToProps);

// Debug - delete me later
console.log('Container - @@ExplorerRepoList/executed');

export default connector(RepositoryList);

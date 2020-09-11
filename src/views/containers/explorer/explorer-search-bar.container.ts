// Import vendors modules
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import the root state type
import { RootState } from '../../../redux/root/root.types';

// Import data types
import { SearchBarData } from '../../../redux/ducks/explorer/explorer.types';

// Import selectors
import {
  selectExplorerSearchBarData,
  selectExplorerHasError,
} from '../../../redux/ducks/explorer/explorer.selectors';

// Import action creators
import { fetchRepositoryStart } from '../../../redux/ducks/explorer/explorer.actions';

// Import the presentational component
import SearchBar from '../../components/search-bar/search-bar.component';

// Defining the state props passed to the presentational component
interface StateProps {
  hasError: boolean;
  data: SearchBarData;
}

// Mapping the state to the presentational component props
const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  hasError: state => selectExplorerHasError(state),
  data: state => selectExplorerSearchBarData(state),
});

// Mapping the actions to the presentational component props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitCallback: (repoFullName: string) =>
    dispatch(fetchRepositoryStart(repoFullName)),
});

// Connecting the props to the presentational component
const connector = connect(mapStateToProps, mapDispatchToProps);

// Debug - delete me later
console.log('Container - @@ExplorerSearchBar/executed');

export default connector(SearchBar);

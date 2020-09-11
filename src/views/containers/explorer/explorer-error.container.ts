// Import vendors modules
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import the root state type
import { RootState } from '../../../redux/root/root.types';

// Import selectors
import { selectExplorerErrorMessage } from '../../../redux/ducks/explorer/explorer.selectors';

// Import the presentational component
import Error from '../../components/error/error.component';

// Defining the state props passed to the presentational component
interface StateProps {
  errorMessage?: string | null;
}

// Mapping the state to the presentational component props
const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  errorMessage: state => selectExplorerErrorMessage(state),
});

// Connecting the props to the presentational component
const connector = connect(mapStateToProps);

// Debug - delete me later
console.log('Container - @@ExplorerError/executed');

export default connector(Error);

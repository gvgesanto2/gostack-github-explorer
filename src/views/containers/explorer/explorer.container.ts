// Import vendors modules
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import the root state type
import { RootState } from '../../../redux/root/root.types';

// Import selectors
import { selectExplorerTitle } from '../../../redux/ducks/explorer/explorer.selectors';

// Import the presentational component
import ExplorerPage from '../../pages/explorer/explorer.component';

// Defining the state props passed to the presentational component
interface StateProps {
  title: string;
}

// Mapping the state to the presentational component props
const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  title: state => selectExplorerTitle(state),
});

// Connecting the props to the presentational component
const connector = connect(mapStateToProps);

// Debug - delete me later
console.log('Container - @@ExplorerPage/executed');

export default connector(ExplorerPage);

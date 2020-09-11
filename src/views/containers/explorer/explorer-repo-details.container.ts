// Import vendors modules
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';

// Import the root state type
import { RootState } from '../../../redux/root/root.types';

// Import data types
import { Repository } from '../../../redux/ducks/common/common.types';

// Import selectors
import { selectTmpRepository } from '../../../redux/ducks/explorer/explorer.selectors';

// Import the presentational component
import RepositoryDetailsPage from '../../pages/repository-details/repository-details.component';

// Defining the state props passed to the presentational component
interface StateProps {
  repository?: Repository;
}

interface OwnProps {
  location: {
    search: string;
  };
  match: {
    params: {
      fullName: string;
    };
  };
}

// Mapping the state to the presentational component props
const mapStateToProps = createStructuredSelector<
  RootState,
  OwnProps,
  StateProps
>({
  repository: (state, ownProps) => {
    const { search } = ownProps.location;

    const parsed = search
      ? queryString.parse(search, {
        parseBooleans: true,
      })
      : '';

    console.log(parsed);
    if (parsed) {
      console.log('Parsed!');
    } else {
      console.log('NOT Parsed!');
    }

    return selectTmpRepository(ownProps.match.params.fullName)(state);
  },
});

// Connecting the props to the presentational component
const connector = connect(mapStateToProps);

// Debug - delete me later
console.log('Container - @@RepositoryDetailsPage/executed');

export default connector(RepositoryDetailsPage);

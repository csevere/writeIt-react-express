// This is our master reducer...the root reducer,
// the reducers hold pieces of state. The root reducer holds all the reducers.
// I.e., the rrotreducer holds ALL the pieces of state, or application state.

// We need to get the combineReducers method from redux, to make a rootReducer
// that the Provider can use
import { combineReducers } from 'redux';

// Import each reducer here
// First: imort the StudentReducer
// import StudentReducer from './studentReducer';
// Import the Register reducer which contains {msg, token}
import RegisterReducer from './RegisterReducer';
import LoginReducer from './LoginReducer';
import CharacterReducer from './CharacterReducer';
import PlotReducer from './PlotReducer';
import QueryLetterReducer from './QueryLetterReducer';
import ChaptersReducer from './ChaptersReducer'


// create a rootReducer using the combineReducer method, so we can export it
// to the Store in index.js
const rootReducer = combineReducers({
	// Inside her, we pass ech reducer as a key/value
	// Each key will be available as a piece of state later
	registerReducer: RegisterReducer,
	loginReducer: LoginReducer,
	characterReducer: CharacterReducer,
	plotReducer: PlotReducer,
	queryletterReducer: QueryLetterReducer,
	chaptersReducer: ChaptersReducer,
	
})

export default rootReducer;
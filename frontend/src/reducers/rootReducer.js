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
import CritiqueReducer from './CritiqueReducer';
import SynopsisReducer from './SynopsisReducer'; 
import NewBookReducer from './NewBookReducer';
import NotePadReducer from './NotePadReducer';
import PostReducer from './PostReducer';



// create a rootReducer using the combineReducer method, so we can export it
// to the Store in index.js
const rootReducer = combineReducers({
	// Inside here, we pass each reducer as a key/value
	// Each key will be available as a piece of state later
	registerReducer: RegisterReducer,
	loginReducer: LoginReducer,
	characterReducer: CharacterReducer,
	plotReducer: PlotReducer,
	queryletterReducer: QueryLetterReducer,
	chaptersReducer: ChaptersReducer,
	critiqueReducer: CritiqueReducer,
	synopsisReducer: SynopsisReducer,
	newBookReducer: NewBookReducer,
	notePadReducer: NotePadReducer,
	postReducer: PostReducer
});

export default rootReducer;
import './App.css';
import { SearchTerm } from "./features/searchTerm/SearchTerm.js";
import { Hobby } from "./features/hobby/Hobby.js";
import { Posts } from "./features/posts/Posts.js";

import { appStyles, toTopButtonStyles } from "./styles/styles.js";


function App({ state, dispatch }) {


  return (
    <div data-testid="app" className="App" style={appStyles(state.hobby)}>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} hobby={state.hobby} />
      <main>
        <Hobby dispatch={dispatch} hobby={state.hobby} />
        <Posts data={state.data} hobby={state.hobby} searchTerm={state.searchTerm} dispatch={dispatch} />
      </main>
      <footer>
        <button type="button" className="otherButton" style={toTopButtonStyles(state.hobby)}>
          <a href="#buttons"><span>Back to top</span></a>
        </button>
      </footer>
    </div>
  );
}

export default App;

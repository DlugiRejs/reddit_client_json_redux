import './App.css';
import { SearchTerm } from "./features/searchTerm/SearchTerm.js";
import { Hobby } from "./features/hobby/Hobby.js";
import { Posts } from "./features/posts/Posts.js";
import { useSelector } from 'react-redux';
import { selectHobby } from './features/hobby/hobbySlice.js';
import { appStyles, toTopButtonStyles } from "./styles/styles.js";


function App() {

  const hobby = useSelector(selectHobby);

  return (
    <div data-testid="app" className="App" style={appStyles(hobby)}>
      <SearchTerm />
      <main>
        <Hobby />
        <Posts />
      </main>
      <footer>
        <button type="button" className="otherButton" style={toTopButtonStyles(hobby)}>
          <a href="#buttons"><span>Back to top</span></a>
        </button>
      </footer>
    </div>
  );
}

export default App;

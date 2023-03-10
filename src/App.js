// Import data
import { postings } from './postings'
// Import components
import './App.css';
import Gallery from './gallery';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;

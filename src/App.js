import './App.css';
import { Slide } from './components/Slide/Slide';
import { Nav } from './components/Nav/Nav';
import pages from './components/Pages/pages';

const style = {
  gridTemplateColumns: `repeat(${pages.length}, 100vw)`
}

function App() {
  return (
    <div className="App" style={style}>
      {
        pages.map(
          el => <Slide id={el.id} key={el.id}>{el.content}</Slide>
        )
      }
      <Nav slides={pages} />
    </div>
  );
}

export default App;

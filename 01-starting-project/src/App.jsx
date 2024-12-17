import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples';
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts/>
       <Examples/>
      </main>
    </div>
  );
}

export default App;

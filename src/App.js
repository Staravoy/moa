import './App.css';
import Information from './Components/generalInformation/information';
import Calculate from './Components/Calculate/Calculate'

function App() {
  return (
    <div className="notebook">
      <Information />
      <Calculate/>
    </div>
  );
}

export default App;

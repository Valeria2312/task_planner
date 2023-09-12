import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import {AlertingService} from "../AlertingService/AlertingService";

function App() {
  return (
    <div className="App">
        <AlertingService
            horizontal={'right'}
            vertical={'top'}
        />
        <Header/>
        <Main/>
      <footer></footer>
    </div>
  );
}

export default App;

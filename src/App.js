import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {orginals,actions,comedy,horror} from './urls'
function App() {
  return (
  <div className="App">
  <NavBar/>
  <Banner/>
  <RowPost url ={orginals} title = "NetFlixOrginals" />
  <RowPost url={actions} title = "Action" isSmall />
  <RowPost url={comedy} title = "Comedy" isSmall />
  <RowPost url={horror} title = "Horror" isSmall />
  
  </div>
  );
}

export default App;

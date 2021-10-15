import Menu from "./components/Menu";
import Section from "./components/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import Testimony from "./components/Testimony";
import Prices from "./components/Prices";

function App() {
	return (
		<div className="App">
			<Menu />
			<Section />
			<Testimony />
			<Prices />
		</div>
	);
}

export default App;

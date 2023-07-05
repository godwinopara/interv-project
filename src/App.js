import "./App.css";
import Climb from "./components/Climb";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";
import StickyNav from "./components/StickyNav";

function App() {
	return (
		<div className="App">
			<Header />
			<StickyNav />
			<main>
				<History />
				<Climb />
			</main>
			<Footer />
		</div>
	);
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Categories/Category/Category";
import Drink from "./Pages/Drink/Drink";
import Categories from "./Components/Categories/Categories";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/categories" component={Categories} />
				<Route path="/category" component={Category} />
				<Route path="/drink" component={Drink} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

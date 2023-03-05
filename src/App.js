import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Blog from '../Views/Blog';
import ListadoPeliculas from '../Views/ListadoPeliculas';

function App() {  
  return(
    <Router>
			<Routes>
				<Route path="/" element={<ListadoPeliculas/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
		</Router>
  );
}

export default App;

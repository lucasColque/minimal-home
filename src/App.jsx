import { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/Routes"
import NavbarBs from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'react-bootstrap';
import { ItemsContext, ItemsReducer } from './context/ItemsContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const initialState = [];
  const [items, dispatch] = useReducer(ItemsReducer, initialState);

  return (
    <Router>
      <ItemsContext.Provider value={{ items, dispatch }}>
        <NavbarBs />
        <AppRoutes />
        <Footer />
      </ItemsContext.Provider>

    </Router>
  );
}

export default App;

import "./App.css"
import NavBar from "./components/NadBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
/* import ProfileCard from "./ProfileCard";
import CaninMini from "./img/royalCaninMini.png";
import CaninMedium from "./img/RoyalCaninMedium.png";
import CaninAdult from "./img/RoyalCaninMiniIndor.png";
import ItemCount from "./components/ItemCount/ItemCount"; */
import "bulma/css/bulma.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>      
      </BrowserRouter>     

    </div>
    
  );
}

export default App;

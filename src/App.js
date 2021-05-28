import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HeaderItems from "./components/header-items/header-items";
import Home from "./components/home/home";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import AllItems from "./components/AllItems/allItems";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/categories/:categ">
          <HeaderItems />
          <ItemListContainer />
        </Route>
        <Route exact path="/categories/">
          <HeaderItems />
          <AllItems />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

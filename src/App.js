import TopCategoriesCard from "./components/cards/TopCategoriesCard";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import Cart from "./screens/CartScreen";
import Error from "./screens/ErrorScreen";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
     {/* <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div> */}
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products" component={ProductListScreen} />
        <Route path="/productDetail" component={ProductDetailsScreen} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;

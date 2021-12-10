import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import Cart from "./screens/CartScreen";
import Error from "./screens/ErrorScreen";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import CartTotalsCard from "./components/cards/CardToolsCard";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products" component={ProductListScreen} />
          <Route path="/product/:productId" component={ProductDetailsScreen} />
          <Route path="/cart" component={Cart} />
          <Route component={Error} />
          <Route>404 NOT FOUND</Route>
          <Route path="/cartcard" component={CartTotalsCard} />
        </Switch>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;

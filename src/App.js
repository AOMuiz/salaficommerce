import ProductCard from "./components/cards/ProductCard";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import img from "./assets/images/img1.png";

function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      {/* <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div> */}
      <GlobalStyle />
      <div>
        <ProductCard
          url={img}
          title="23% off in all products"
          subtitle="Shop Now"
        />
      </div>
    </>
  );
}

export default App;

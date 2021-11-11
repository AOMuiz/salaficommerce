import ProductCard from "./components/cards/ProductCard";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import img1 from "./assets/images/image-100.png";
import img2 from "./assets/images/img2.png";
import { colors } from "./constants/colors";

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
          url={img1}
          title="23% off in all products"
          subtitle="Shop Now"
        />
        <ProductCard
          primary
          url={img2}
          title="23% off in all products"
          subtitle="View Collection"
        />
      </div>
    </>
  );
}

export default App;

import GlobalStyle from "./constants/styles/global";

import ProductDetailsCard from "./components/cards/ProductDetailsCard";
import bag from "./assets/images/bag.png";
import bag1 from "./assets/images/bag1.png";
import bag2 from "./assets/images/bag2.png";
import bag3 from "./assets/images/bag3.png";
import HomeScreen from "./screens/HomeScreen";
import ProductHeroSection from "./components/cards/ProductHeroSection";

function App() {
  return (
    <>
      <HomeScreen />
      {/* <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div> */}
      <GlobalStyle />
    </>
  );
}

export default App;

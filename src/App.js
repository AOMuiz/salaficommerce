import GlobalStyle from "./constants/styles/global";

import ProductDetailsCard from "./components/cards/ProductDetailsCard";
import bigbag from "./assets/images/big-bag.png";
import bag1 from "./assets/images/bag1.png";
import bag2 from "./assets/images/bag2.png";
import bag3 from "./assets/images/bag3.png";
import HomeScreen from "./screens/HomeScreen";
import ProductHeroSection from "./components/cards/ProductHeroSection";

function App() {
  return (
    <>
      {/* <HomeScreen /> */}

      <div>
        <ProductDetailsCard
          url={bigbag}
          url1={bag1}
          url2={bag2}
          url3={bag3}
          title="Playwood arm chair"
          price1="$100"
          price2="$200"
        />
      </div>
      {/* <div>
        <ProductHeroSection
          title="Product Details"
          info1="Home . "
          info2="Pages . "
          info3="Product Details"
        />
      </div> */}
      <GlobalStyle />
    </>
  );
}

export default App;

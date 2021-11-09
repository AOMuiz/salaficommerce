import DiscountItems from "./components/discountItems";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <HomeScreen />
      {/* <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div> */}

      <DiscountItems />
      <GlobalStyle />
    </>
  );
}

export default App;

import TopCategoriesCard from "./components/cards/TopCategoriesCard";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import img from "./assets/images/image-20.png";
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
        <TopCategoriesCard url={img} name="show" />
      </div>
    </>
  );
}

export default App;

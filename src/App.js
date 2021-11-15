import TopCategoriesCard from "./components/cards/TopCategoriesCard";
import GlobalStyle from "./constants/styles/global";
import HomeScreen from "./screens/HomeScreen";
import img from "./assets/images/image-20.png";
import img2 from "./assets/images/image-30.png";
import img3 from "./assets/images/image-40.png";
import img4 from "./assets/images/image-50.png";
import { colors } from "./constants/colors";

function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      {/* <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div> */}
      <GlobalStyle />
      <div className="grid grid-cols-3">
        <TopCategoriesCard url={img} buttonName="View Shop" />
        <TopCategoriesCard url={img2} buttonName="View Shop" />
        <TopCategoriesCard url={img3} buttonName="View Shop" />
        <TopCategoriesCard url={img4} buttonName="View Shop" />
      </div>
    </>
  );
}

export default App;

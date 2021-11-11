import GlobalStyle from "./constants/styles/global";
import FashionItemCard from "./components/cards/FashionItemCard";
import image from "./assets/images/rect.png";
import image2 from "./assets/images/rect-2.png";
import ProductDetailsCard from "./components/cards/ProductDetailsCard";
import bag from "./assets/images/bag.png";
import bag1 from "./assets/images/bag1.png";
import bag2 from "./assets/images/bag2.png";
import bag3 from "./assets/images/bag3.png";

function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      <GlobalStyle />
      <div>
        <FashionItemCard
          img={image}
          title="My Chair"
          price1="$200"
          price2="$100"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
           in est adipiscing in phasellus non in justo."
        />

        <FashionItemCard
          img={image2}
          title="My Room"
          price1="$2,000"
          price2="$1,000"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
           in est adipiscing in phasellus non in justo."
        />
      </div>
      <div>
        <ProductDetailsCard url={bag} url1={bag1} url2={bag2} url3={bag3} />
      </div>
    </>
  );
}

export default App;

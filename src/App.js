import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import FashionItemCard from "./components/cards/FashionItemCard";
import image from "./assets/images/rect.png";
import image2 from "./assets/images/rect-2.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40">
          <Cards
            imgSrc={cantileverChair}
            title="Cantilever chair"
            code="Code - Y523201"
            price="$42.0"
          />
          <Cards
            imgSrc={comfortHandy}
            title="Comfort Handy Craft"
            code="Code - Z3456"
            price="$32.0"
          />
        </div>
      </div>
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
    </>
  );
}

export default App;

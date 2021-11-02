import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
// import FeatureCard from "./components/cards/FeatureCard";
import { colors } from "./constants/colors";
import cantileverChair from "./assets/images/cantileverChair.png";
import comfortHandy from "./assets/images/comfortHandyChair.png";
import Navbar from "./components/nav";
import Button from "./components/button";
import OfferCard from "./components/cards/HoverCard";
import vector from "./assets/images/group-1.png";

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
      <Button name="Show more" color={colors.offBlue} />
      <Button name="Proceed To Checkout" />
      <Button
        name="This is a long cart and it is even longer"
        color={colors.offPurple}
      />

      <OfferCard
        url={vector}
        title="24/7 Support"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <OfferCard
        url={vector}
        title="24/7 Support"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <GlobalStyle />
    </>
  );
}

export default App;

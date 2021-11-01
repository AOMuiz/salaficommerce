import Cards from "./components/cards/Card";
import GlobalStyle from "./constants/styles/global";
import cantileverChair from "./assets/chair.png";
import comfortHandy from "./assets/image-1169.png";
import executiveSeat from "./assets/image-3.png";
import executiveChair from "./assets/image-1.png";
import Button from "./components/button";
import { colors } from "./constants/colors";

function App() {
  return (
    <>
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
          <Cards
            imgSrc={executiveSeat}
            title="Executive Seat chair"
            code="Code - A4566"
            price="$26.0"
          />
        </div>
      </div>
      <Button name="Show more" color={colors.offBlue} />
      <Button name="Proceed To Checkout" />
      <Button
        name="This is a long cart and it is even longer"
        color={colors.offPurple}
      />

      <GlobalStyle />
    </>
  );
}

export default App;

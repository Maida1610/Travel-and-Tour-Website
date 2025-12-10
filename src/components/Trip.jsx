import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
        image = {Trip1}
        heading ="Trip in Indonesia"
        text = "Indonesia offers a perfect blend of culture, nature, and adventure. From Bali’s beaches to Yogyakarta’s temples, every destination feels magical.Explore vibrant cities, lush jungles, and world-class island escapes. A trip to Indonesia promises unforgettable moments and breathtaking beauty."
        />
        <TripData
        image = {Trip2}
        heading ="Trip in Malaysia"
        text = "Malaysia is a vibrant mix of modern cities, tropical rainforests, and rich cultural heritage. From Kuala Lumpur’s skyline to Langkawi’s beaches, every stop offers something unique. Enjoy flavorful cuisine, diverse traditions, and warm local hospitality. A trip to Malaysia promises color, culture, and unforgettable adventures."
        />
        <TripData
        image = {Trip3}
        heading ="Trip in France"
        text = "France captivates travelers with its timeless charm and elegant beauty. Explore Parisian landmarks, countryside vineyards, and stunning coastal towns. Rich art, world-class cuisine, and romantic scenery await at every turn. France offers a truly unforgettable European escape."
         />
      </div>
    </div>
  );
}

export default Trip;
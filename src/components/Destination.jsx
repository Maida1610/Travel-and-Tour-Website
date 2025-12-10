import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
      className = "first-des"
      heading = "Taal Volcano, Batangas"
      text = "Discover the breathtaking beauty of Taal Volcano, one of the Philippines’ most unique and iconic travel destinations. Nestled in the heart of Batangas and surrounded by the serene waters of Taal Lake, this natural wonder features the rare “volcano within a lake” formation that captivates visitors at first sight. From the cool overlooks of Tagaytay to boat rides across the lake, Taal offers unforgettable views, refreshing scenery, and countless photo opportunities. The nearby towns are rich with local culture, delicious Batangueño cuisine, and warm hospitality—perfect for day trips, family getaways, or romantic escapes. Whether you’re an adventure seeker or a nature lover, Taal Volcano promises an inspiring and memorable travel experience."
      img1 = {Mountain1}
      img2 = {Mountain2}
      />
       <DestinationData
       className = "first-des-reverse"
      heading = "Mt. Daguldul, Batangas"
      text = "Mt. Daguldul is a stunning outdoor destination in San Juan, Batangas, offering a perfect blend of adventure, tranquility, and natural beauty. Known for its beginner-friendly trails and refreshing forest paths, this mountain is ideal for both new and seasoned hikers. The journey features rolling terrains, lush greenery, cool sea breezes, and scenic rest stops overlooking the coastline of Laiya. At the summit, visitors are rewarded with panoramic views of the sea, surrounding mountains, and peaceful landscapes—making it a favorite spot for photography and quiet relaxation. With nearby beaches and friendly local communities, Mt. Daguldul provides a refreshing escape where travelers can reconnect with nature and enjoy an enriching Batangas adventure."
      img1 = {Mountain3}
      img2 = {Mountain4}
      />
     </div>
  );
};

export default Destination;
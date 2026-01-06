import ella1 from "../assets/ell1.jpeg";
import ella2 from "../assets/ell2.jpeg";
import ella3 from "../assets/ell3.jpeg";
import ella4 from "../assets/ell4.jpg";
import ella5 from "../assets/ell5.jpg";
import ella6 from "../assets/ell6.jpg";

import galleImg from "../assets/hikka.jpg";
import sigiriyaImg from "../assets/Seegiriya1.jpg";

import sa1 from "../assets/sa1.jpeg";
import sa2 from "../assets/sa2.jpeg";
import sa3 from "../assets/sa3.jpeg";
import sa4 from "../assets/sa4.jpeg";
import sa5 from "../assets/sa5.jpeg";
import sa6 from "../assets/sa6.jpeg";    
import sa7 from "../assets/sa7.jpeg";
import sa8 from "../assets/sa8.jpeg";    
import sa9 from "../assets/sa9.jpeg";
import sa10 from "../assets/sa10.jpeg";
import sa11 from "../assets/sa11.jpeg";
import sa12 from "../assets/sa12.jpeg";  

import ds1 from "../assets/ds1.jpeg";
import ds2 from "../assets/ds2.jpeg";
import ds3 from "../assets/ds3.jpeg";
import ds4 from "../assets/ds4.jpeg";
import ds5 from "../assets/ds5.jpeg";
import ds6 from "../assets/ds6.jpeg";

export type Tour = {
  id: string;
  title: string;
  location: string;
  image: string;          // cover image
  gallery?: string[];     // ✅ multiple photos
  price: number;
  duration: string;
  description?: string;
  itinerary?: string[];
  mapUrl?: string;
};

export const tours: Tour[] = [
  {
    id: "ella",
    title: "Ella Adventure",
    location: "Ella",
    image: ella1,
    gallery: [ella1, ella2, ella3, ella4, ella5, ella6],
    price: 180,
    duration: "3 Days",
    description: "Explore Ella’s mountains, tea plantations, and waterfalls.",
    itinerary: [
      "Arrival & Little Adam’s Peak",
      "Nine Arch Bridge & Tea Factory",
      "Waterfalls & Relaxation",
    ],
    mapUrl: "https://www.google.com/maps?q=ella+sri+lanka&output=embed",
  },
  {
    id: "galle",
    title: "Down South",
    location: "Mirissa & Galle",
    image: galleImg,
    gallery: [ds1, ds2, ds3, ds4, ds5, ds6],
    price: 120,
    duration: "2 Days",
    description: "Discover colonial history and coastal beauty.",
    itinerary: ["Galle Fort Walk", "Beach & Lighthouse"],
    mapUrl: "https://www.google.com/maps?q=galle+sri+lanka&output=embed",
  },
  {
    id: "sigiriya",
    title: "Sri Lanka Safari & Sigiriya",
    location: "Sigiriya",
    image: sigiriyaImg,
    gallery: [sa1, sa2, sa3, sa4, sa5, sa6, sa7, sa8, sa9, sa10, sa11, sa12],
    price: 120,
    duration: "2 Days",
    description: "Climb the ancient rock fortress and explore heritage sites.",
    itinerary: ["Sigiriya Rock Climb", "Village Safari"],
    mapUrl: "https://www.google.com/maps?q=sigiriya+sri_lanka&output=embed",
  },
];

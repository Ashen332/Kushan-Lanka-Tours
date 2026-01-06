import ella1 from "../assets/ell1.jpeg";
import ella2 from "../assets/ell2.jpeg";
import ella3 from "../assets/ell3.jpeg";
import ella4 from "../assets/ell4.jpg";
import ella5 from "../assets/ell5.jpg";
import ella6 from "../assets/ell6.jpg";

import galleImg from "../assets/Galle1.jpg";
import sigiriyaImg from "../assets/Seegiriya1.jpg";

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
    title: "Galle Heritage Tour",
    location: "Galle",
    image: galleImg,
    price: 120,
    duration: "2 Days",
    description: "Discover colonial history and coastal beauty.",
    itinerary: ["Galle Fort Walk", "Beach & Lighthouse"],
    mapUrl: "https://www.google.com/maps?q=galle+sri+lanka&output=embed",
  },
  {
    id: "sigiriya",
    title: "Sigiriya Rock Fortress",
    location: "Sigiriya",
    image: sigiriyaImg,
    price: 120,
    duration: "2 Days",
    description: "Climb the ancient rock fortress and explore heritage sites.",
    itinerary: ["Sigiriya Rock Climb", "Village Safari"],
    mapUrl: "https://www.google.com/maps?q=sigiriya+sri_lanka&output=embed",
  },
];

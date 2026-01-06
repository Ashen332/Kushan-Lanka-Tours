export type Review = {
  id: string;
  name: string;
  avatar?: string; // optional profile image
  rating: number; // 1-5
  comment: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Thilansa Perera",
    avatar: "/avatars/avatar1.jpg", // optional, place in /assets/avatars/
    rating: 5,
    comment: "Amazing experience! The guides were super friendly and the itinerary was perfect.",
  },
  {
    id: "r2",
    name: "Kushal Silva",
    avatar: "/avatars/avatar2.jpg",
    rating: 4,
    comment: "Beautiful locations and smooth organization. Highly recommend!",
  },
  {
    id: "r3",
    name: "Nishantha Fernando",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
    comment: "Everything was excellent, from transport to hotels. Will book again!",
  },
  {
    id: "r4",
    name: "Madhavi Jayasinghe",
    avatar: "/avatars/avatar4.jpg",
    rating: 5,
    comment: "A dream tour of Sri Lanka. The best travel experience I've ever had.",
  },
  {
    id: "r5",
    name: "Rohan de Silva",
    avatar: "/avatars/avatar5.jpg",
    rating: 4,
    comment: "Well-planned and fun. Loved the scenic routes and cultural stops.",
  },
  {
    id: "r6",
    name: "Anushka Perera",
    avatar: "/avatars/avatar6.jpg",
    rating: 5,
    comment: "Highly recommend Kushan Lanka Tours! Everything went smoothly.",
  },
];

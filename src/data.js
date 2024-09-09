export const productsData = [
  {
    id: 0,
    image: process.env.PUBLIC_URL + "/images/FarmHouse.jpg",
    title: "2024 Farm House ",
    currentBid: 100000000,
    timeRemaining: "Expired",
    isExpired: true,
    status: "completed",
    type: "auction",
  },
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/images/villa.jfif",
    title: "2018 Private Villa at Drass",
    currentBid: 120000000,
    timeRemaining: "Expired",
    isExpired: true,
    status: "completed",
    type: "fixed-price",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/images/Laptop.png",
    title: "a 2021 LG Laptop",
    currentBid: 5000,
    timeRemaining: "4",
    isExpired: false,
    status: "active",
    type: "fixed-price",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/images/Mobile.png",
    title: "2015 Samsung Mobile",
    currentBid: 3800,
    timeRemaining: "Expired",
    isExpired: true,
    status: "completed",
    type: "auction",
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + "/images/Home.png",
    title: "2024 Luxury Home",
    currentBid: 3000000,
    timeRemaining: "Expired",
    isExpired: true,
    status: "completed",
    type: "classified",
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + "/images/Coffee.jpg",
    title: "2023 Coffe Estate",
    currentBid: 25000000,
    timeRemaining: "Expired",
    isExpired: true,
    status: "completed",
    type: "classified",
  },
  {
    id: 6,
    image: process.env.PUBLIC_URL + "/images/HomeRealEstate.jpg",
    title: "c 2000 House For Sale",
    currentBid: 4000000,
    timeRemaining: "2",
    isExpired: false,
    status: "active",
    type: "auction",
  },
  {
    id: 66,
    image: process.env.PUBLIC_URL + "/images/Oil painting.jfif",
    title: "19th Century Painting",
    currentBid: 800000,
    timeRemaining: "6",
    isExpired: false,
    status: "active",
    type: "classified",
  },
  {
    id: 16,
    image: process.env.PUBLIC_URL + "/images/Car.png",
    title: "b 2021 Maruti Car",
    currentBid: 175000,
    timeRemaining: "3",
    isExpired: false,
    status: "active",
    type: "classified",
  },
  {
    id: 31,
    image: process.env.PUBLIC_URL + "/images/Home.png",
    title: "2021 Maruti Car",
    currentBid: 175000,
    timeRemaining: "1",
    isExpired: true,
    status: "active",
    type: "auction",
  },
];

export const categoriesData = [
  {
    name: "Antiques",
    quantity: 2,
    subcategories: [
      "Other Assets",
      "Real Estates"      
    ],
  },
  {
    name: "Automobiles",
    quantity: 3,
    subcategories: ["Cars", "Trucks", "Tractors"],
  },
  
 
 
  
  {
    name: "Consumer Electronics",
    quantity: 1,
    subcategories: ["Laptop"]
  },
  
  
  {
    name: "Real Estate",
    quantity: 2,
    subcategories: [ "Villas", "Independent Houses"],
  },
  
];

export const regionsData = [
  {
    name: "Region A",
    quantity: 2,
    subregions: [{ name: "Subregion 1" }, { name: "Subregion 2" }],
  },
  {
    name: "Region B",
    quantity: 3,
    subregions: [
      { name: "Subregion 4" },
      { name: "Subregion 5" },
      { name: "Subregion 6" },
    ],
  },
  {
    name: "Region C",
    quantity: 1,
    subregions: [{ name: "Subregion 7" }],
  },
];

export const sortOptions = [
  { value: "price-lowest", label: "Price Lowest" },
  { value: "price-highest", label: "Price Highest" },
  { value: "title-a-to-z", label: "Title, A to Z" },
  { value: "title-z-to-a", label: "Title, Z to A" },
];

export const filterByOptions = [
  { value: "all", label: "Filter By" },
  { value: "auction", label: "Auction" },
  { value: "fixed-price", label: "Fixed Price" },
  { value: "classified", label: "Classified" },
];

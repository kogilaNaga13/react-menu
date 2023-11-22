import './App.css';
import Card from './Card';

function App() {
  const swiggy=[
    {
      image:"./Images/ambur.webp" ,
      branch:"Ambur Star Briyani",
      rating:2.5,
      time:20,
      dish:"Briyani",
      location:"Thambaram"  
     },
     {
      image:"./Images/cake.webp" ,
      branch:"FB Cakes",
      rating:3.1,
      time:60,
      dish:"Cakes",
      location:"OMR-Perungudi",  
      
     },
     {
      image:"./Images/juice.webp" ,
      branch:"Juice Box",
      rating:1.9,
      time:32,
      dish:"Beverages, Snacks",
      location:"Guduvancherry",  
     },
     {
      image:"./Images/heaven.webp" ,
      branch:"Brownie Heaven",
      rating:2.4,
      time:20,
      dish:"Desserts, Ice Cream",
      location:"Karapakkam", 
     },
     {
      image:"./Images/burger.webp" ,
      branch:"Burger King",
      rating:5.2,
      time:53,
      dish:"Burgers, American",
      location:"Kancheepuram",  
     },
     {
      image:"./Images/kfc.webp" ,
      branch:"KFC",
      rating:2.1,
      time:42,
      dish:"Burgers, Biryani",
      location:"Nehru Nagar",  
     },
     {
      image:"./Images/geetham.webp" ,
      branch:"Astoria Veg",
      rating:6.2,
      time:27,
      dish:"Indian, Chinese, Beverages",
      location:"Perungudi", 
       
     },
     {
      image:"./Images/andhra.webp" ,
      branch:"Andhra Gunpowder",
      rating:3.2,
      time:65,
      dish:"Andhra, Biryani, South Indian",
      location:"OMR Perungudi",  
     },
     {
      image:"./Images/mani.webp" ,
      branch:"Mani's Dum Biryani",
      rating:4.3,
      time:22,
      dish:"Andhra, Biryani, North Indian",
      location:"Karapakkam",  
     },
     {
      image:"./Images/maha.webp" ,
      branch:"Night Eat",
      rating:4.9,
      time:22,
      dish:"North Indian, Chinese",
      location:"Ramalinga Nagar",  
     },
  ]
  return (
    <div className="App">
      <Card menu={swiggy}/>
    </div>
  );
}

export default App;
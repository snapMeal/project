import React from "react";
import Input from "../components/common/Input";
import Navbar from "../components/common/Navbar";
import FeaturedSection from "../components/dashboard/FeaturedSection";
import FoodItemCard from "../components/dashboard/FoodItemCard";

function DashboardPage()
{
  const items = [
    {
      canteen: "MAIN CANTEEN",
      title: "Sandwich",
      description: "Veg Sandwich",
      price: "₹30",
      time: "1 minutes",
      image: "https://www.watermelon.org/wp-content/uploads/2023/02/Sandwich_2023.jpg"
    },
    {
      canteen: "MAIN CANTEEN",
      title: "Veg Burger",
      description: "Veg Burger",
      price: "₹45",
      time: "8 minutes",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      canteen: "MAIN CANTEEN",
      title: "Chole Bhature",
      description: "Chole Bhature",
      price: "₹40",
      time: "800 minutes",
      image: "https://static.toiimg.com/photo/98230357.cms"
    }
  ]


  const [search, setSearch] = React.useState("");

  return(
    <>
      <Navbar margin/>
      <main className="container mx-auto px-4">
        <FeaturedSection />
        <section className="mt-16">
          <h1 className="font-bold text-3xl md:text-6xl mb-8">What Are You Craving?</h1>
          <Input
            value={search} onChange={(e) => setSearch(e.target.value)}
            placeHolder="Search for food"
            icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          }/>
        </section>
        {
          search.length > 0?(
            <section className="py-8">
              <h2 className="text-2xl font-bold mb-8">Search Results for {search}</h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {
                  items.map((item, index) => (
                    item && <FoodItemCard key={index} />
                  ))
                }
              </div>
            </section>
          ):(
            <section className="py-8">
              <h2 className="text-2xl font-bold mb-8">Most Ordered</h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {
                  items.map((item, index) => (
                    <FoodItemCard key={index} item={item} />
                  ))
                }
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default DashboardPage;

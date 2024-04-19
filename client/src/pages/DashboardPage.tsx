import React, { useEffect } from "react";
import Input from "../components/common/Input";
import Navbar from "../components/common/Navbar";
import FeaturedSection from "../components/dashboard/FeaturedSection";
import FoodItemCard from "../components/dashboard/FoodItemCard";
import response from "../example.json";
import { useReduxAction, useReduxState } from "../hooks/UseRedux";
function DashboardPage() {
  const { menu } = useReduxState();
  const { setMenu } = useReduxAction();
  useEffect(() => {
    //1> made api req
    //2> got response data
    const resp = response.data;
    // 3> map it in redux
    setMenu(resp);
  }, []);

  const [search, setSearch] = React.useState("");

  return (
    <>
      <Navbar  />
      <main className="container mx-auto px-4">
        <FeaturedSection />
        <section className="mt-16">
          <h1 className="font-bold text-3xl md:text-6xl mb-8">
            What Are You Craving?
          </h1>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeHolder="Search for food"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            }
          />
        </section>
        {search.length > 0 ? (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-8">
              Search Results for {search}
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {menu.map(
                (item:any, index: any) => item && <FoodItemCard key={index} />,
              )}
            </div>
          </section>
        ) : (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-8">Most Ordered</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {menu.map((item: any, index: any) => (
                <FoodItemCard key={index} index={index} item={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default DashboardPage;

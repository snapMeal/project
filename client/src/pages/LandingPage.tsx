import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 mt-48">
        <section className="flex justify-center items-center flex-col gap-8">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold tracking-tighter">
              Crave it. We Deliver.
            </h1>
            <div className="flex gap-4 justify-center">
              <Link className="w-full" to="/signup">
                <Button className="w-full" color={"primary"}>
                  Signup
                </Button>
              </Link>
              <Link className="w-full" to="/signin">
                <Button className="w-full" color={"secondary"}>
                  Signin
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="hidden lg:flex justify-center my-16">
          <img
            className="object-cover rounded-3xl"
            src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </section>
      </main>
    </>
  );
}

export default LandingPage;

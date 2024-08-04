import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import FeaturedSection from "../components/dashboard/FeaturedSection";
import Footer from "../components/common/Footer";
import Cook from "../components/landing/Cook";
import Admin from "../components/landing/Admin";
// import Hero3D from "../components/landing/Hero3D";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        {/* <Hero3D /> */}
        <section className="flex justify-center items-center flex-col md:flex-row gap-8 mt-4">
          <Cook className="h-96 w-full md:w-auto"/>
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold tracking-tighter text-pretty">
              Crave it<span className="text-primary">.</span> We Deliver<span className="text-secondary">.</span>
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
        <FeaturedSection className="my-16"/>
        <section className="flex justify-center items-center flex-col md:flex-row gap-8 mt-4">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold tracking-tighter text-pretty">
              Admin Portal<span className="text-primary">.</span>
            </h1>
            <div className="flex gap-4 justify-center">
              <Link className="w-full" to="/admin">
                <Button className="w-full" color={"primary"}>
                  Admin Portal
                </Button>
              </Link>
            </div>
          </div>
          <Admin className="h-96 w-full md:w-auto"/>
        </section>
      </main>
      <Footer>
        <a className="text-xs opacity-70" href="https://storyset.com/work">Work illustrations by Storyset</a>
      </Footer>
    </>
  );
}

export default LandingPage;

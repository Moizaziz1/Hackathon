import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Main from "./components/main";
import Top from "./components/top";
import Center from "./components/center";
import Blog from "./components/blog";
import Media from "./components/media";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Top />
      <Center />
      <Blog />
      <Media />
      <Footer />
    </div>
  );
}

import { button } from "@src/component/button/button.css";

const Home = () => {
  return (
    <div>
      <button className={button({ color: "primary", size: "large" })}>
        test
      </button>
    </div>
  );
};

export default Home;

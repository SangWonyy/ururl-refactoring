import { button } from "@src/component/button/button.css";

type TButton = {
  onClick: () => void;
  size: "large" | "small";
  color: "primary" | "secondary" | "tertiary";
  text: string;
};

const URURLButton = ({ onClick, size, color, text }: TButton) => {
  return (
    <button className={button({ color, size })} onClick={onClick}>
      {text}
    </button>
  );
};

export default URURLButton;

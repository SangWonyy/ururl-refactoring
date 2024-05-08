import { button } from "@src/component/button/button.css";

type TButton = {
  onClick: () => void;
  size: "large" | "small";
  color: "primary" | "secondary" | "tertiary";
  text: string;
  disable?: boolean;
};

const URURLButton = ({
  onClick,
  size,
  color,
  text,
  disable = false,
}: TButton) => {
  return (
    <button
      className={button({ color, size })}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default URURLButton;

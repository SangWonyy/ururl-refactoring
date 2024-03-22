import toast from "react-hot-toast";

export const successToast = (title: string) =>
  toast.success(title, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

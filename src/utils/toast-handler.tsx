import toast from "react-hot-toast";

export const showToast = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
  switch (type) {
    case "success":
      toast.success(message, { duration: 4000, position: "top-right" });
      break;
    case "warning":
      toast(message, { duration: 4000, position: "top-right" });
      break;
    case "error":
      toast.error(message, { duration: 4000, position: "top-right" });
      break;
    case "info":
    default:
      toast(message, { duration: 4000, position: "top-right" });
      break;
  }
};

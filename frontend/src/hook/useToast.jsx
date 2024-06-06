import { toast } from "react-toastify";

const useToast = (msg, status = null) => {
  if (!status) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
    });
  } else if (status === "error") {
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "dark",
    });
  }
};

export default useToast;

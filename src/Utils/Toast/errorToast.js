import { toast } from "react-toastify";

const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default showErrorToast;

import { ToastContainer } from "react-toastify";
import Login from "../pages/login/Login";

function LoginPage() {
  return (
    <>
      <Login />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      ;
    </>
  );
}

export default LoginPage;

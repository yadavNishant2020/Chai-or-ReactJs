import { useDispatch } from "react-redux";
import authService from "../../appwrite/conf";
import { logout } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;

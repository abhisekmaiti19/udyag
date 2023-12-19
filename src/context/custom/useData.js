import { useSelector } from "react-redux";
import DB from "../../appwrite/services/db";
async function useData() {
  const slector = useSelector((state) => state.auth.status);

  if (slector) {
    // console.log(JSON.parse(localStorage.user).phone.slice(3));
    return await DB.getUser(JSON.parse(localStorage.user).phone.slice(3));
  }
}

export default useData;

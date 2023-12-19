import Accessibility from "../accessibility/Accessibility";
import Searchbar from "../searchbar/Searchbar";
import Notification from "../notificaation/Notification";
import Profile from "../profile/Profile";

export default function TopBar() {
  return (
    <div className="w-full py-5 px-10 flex border-b-2 border-slate-500/10 justify-between">
      <div className="flex gap-5">
        <Accessibility />
        <Searchbar />
      </div>
      <div className="flex gap-5 ">
        <Notification />
        <Profile />
      </div>
    </div>
  );
}

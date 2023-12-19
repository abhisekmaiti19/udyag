import ProfileCard from "../../components/cards/ProfileCard";
import UpdatForms from "../../components/forms/UpdatForms";

export default function Profile() {
  return (
    <div className="relative flex flex-col gap-5 mb-14">
      <ProfileCard />
      <UpdatForms />
    </div>
  );
}

import { SearchNormal1 } from "iconsax-react";
export default function Searchbar() {
  return (
    <div className="relative rounded-xl flex items-center">
      <div className="py-5 px-[150px] bg-brand-blue/10 rounded-lg"></div>
      <div className="absolute flex font-semibold text-sm text-brand-blue  gap-5 px-5">
        <SearchNormal1 size="20" />
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="search"
          className="bg-transparent outline-none w-[200px]  "
        />
      </div>
    </div>
  );
}

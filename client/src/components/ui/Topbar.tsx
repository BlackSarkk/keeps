import { LightDark } from "../icons/lightDark";
import { Search } from "../icons/search";

export const Topbar = () => {
  return (
    <div className="flex items-center gap-[12.56rem] justify-center p-[2rem] border-b-[5px] border-x-[5px] border-gray-950 rounded-b-[1.5rem]">
      <div className="flex items-center justify-center gap-[1.44rem]">
        <p className="font-Inter font-semibold text-[2rem] text-gray-150 tracking-[0.18rem]">
          Search
        </p>
        <div className="border-[5px] border-gray-950 rounded-[1.5rem] flex items-center justify-center px-4">
          <input
            className="w-[41.625rem] h-[4.25rem] outline-none text-[1.5rem] text-gray-150 tracking-[0.18rem]"
            type="text"
            placeholder="search here"
          />
          <button className="cursor-pointer">
            <Search theme="dark" size="md" />
          </button>
        </div>
      </div>
      <div>
        <button className="cursor-pointer">
          <LightDark theme="dark" size="xl" />
        </button>
      </div>
    </div>
  );
};

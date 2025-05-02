import { HashLoader } from "react-spinners";

function Waiting() {
  return (
    <div className="@container flex w-full flex-col content-center items-center gap-7">
      <h2 className="text-primaryBlue-700 text-sm font-bold @lg:text-xl">
        لطفا منتظر بمانید.
      </h2>
      <div className="border-primaryBlue border-b-primaryBlue/40 size-14 animate-spin rounded-full border-[8px] bg-transparent"></div>
    </div>
  );
}

export default Waiting;

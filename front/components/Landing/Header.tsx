import SessionStatus from "../Ui/SessionStatus";

export default function Header() {
  return (
    <header className="flex border-b border-transparent rounded-md bg-transparent fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 items-center p-3 justify-between w-full">
      <a href="/" className="flex text-lg">
        <span className="font-bold">Sheet-</span>
        <span className="text-orange-600 font-bold">
          HUB <sup className="text-gray-600 text-[10px]">TM</sup>
        </span>
      </a>
      <div className="flex items-center justify-between ">
        <SessionStatus />
      </div>
    </header>
  );
}

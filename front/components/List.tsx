export default function List() {
  return (
    <div className="flex items-center justify-between w-full p-4 ">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="flex rounded-md bg-zinc-100 border-2 min-h-[120px] aspect-square flex-col w-fit items-center justify-between p-4 ">
      <h2>Love Babbar 450 DSA</h2>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
          Track
        </button>
      </div>
    </div>
  );
}

export default function Baner() {
    return (
        <div className="flex justify-between items-center w-screen rounded-lg h-[80vh] bg-gradient-to-r from-blue-200 to-blue-400">
            <div className="w-1/2 flex flex-col pl-5">
                <h1 className="text-7xl text-violet-700 pl-2 font-bold">450</h1>
                <h1 className="text-6xl font-bold text-black pl-2">DSA-TRACKER</h1>
                <p className="text-2xl text-black pl-2">
                    A platform to track your DSA journey and improve your skills in DSA and CP with the help of 400+ questions.
                </p>
            </div>
            <div className="w1/2 mr-10">
                {/* circle  */}
                <div className="flex justify-center items-center">
                    <div className="w-80 h-80 flex justify-center items-center rounded-full bg-neutral-300">
                        
                        <div className="w-48 h-48 rounded-full flex justify-center items-center bg-violet-300">
                            <div className="w-24 h-24 rounded-full flex justify-center items-center bg-blue-500">
                            <button className=" text-white">400+ Questions</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

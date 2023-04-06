import Link from 'next/link';

const Main = () => {
    return (
        <div className="justify-center items-center m-auto flex flex-col space-y-6">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                NEXT DRAW
            </h1>
            <h2 className="text-gray-300 text-sm">
                <span className="font-semibold underline-offset-2 underline">React</span>/<span className="font-semibold underline-offset-2 underline">Next.js</span> game built by <a href="https://mjanglin.com" target="_blank" className="text-blue-300 hover:text-blue-500 duration-200 ease-out font-semibold">MJ Anglin</a>.
            </h2>
            <div className="space-x-4 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center">
                <Link href='/playground'>
                    <div className="bg-white rounded-lg w-fit p-2 cursor-pointer text-blue-600 uppercase font-bold border border-blue-600 border-double hover:bg-blue-300 hover:text-black hover:border-gray-200 duration-300 ease-out">
                        Playground
                    </div>
                </Link>
                <div className="bg-white rounded-lg w-fit p-2 cursor-pointer text-blue-600 uppercase font-bold border border-blue-600 border-double hover:bg-blue-300 hover:text-black hover:border-gray-200 duration-300 ease-out">
                    Login
                </div>
            </div>
        </div>
    );
}

export default Main
const Footer = () => {
    return (
        <footer className="h-a flex justify-around items-center text-xl p-6 bg-opacity-80 bg-[#2A4C09] text-[#F1EEE8] z-10">
            <div className="flex flex-col gap-4 m-2 ">
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" href="https://instagram.com">
                <img className="w-5 h-5" src="/instagram.png" alt="" /> Instagram</a>
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" href="https://threads.com">
                <img className="w-5 h-5" src="/threads.png" alt="" />Threads</a>
            </div>

            <div className="flex flex-col gap-4 m-2">
            <a className="flex flex-row items-center gap-2 font-bold hover:underline" href="https://facebook.com">
                <img className="w-5 h-5" src="/facebook.png" alt="" />Facebook</a>
            <a className="flex flex-row items-center gap-1 font-bold hover:underline" href="https://tiktok.com">
                <img className="w-6 h-6" src="/tiktok.png" alt="" />Tiktok</a>
            </div>
        
            </footer>
    );
};
export default Footer
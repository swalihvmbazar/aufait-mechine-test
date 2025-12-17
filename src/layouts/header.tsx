
const Header = () => {
    return (
        <header className='px-20 bg-primary text-white flex items-center justify-between'>
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" />
                <div className="flex gap-2 items-center">
                     <img src="/icons/search.png" className="shrink-0 size-[12px]" alt="search icon" />
                    <input className="opacity-60 border-none" placeholder="Start searching..." />
                </div>
            </div>
            <nav className="flex gap-8 items-center">
                <ul className="flex items-center gap-3">
                    <li>
                        <a href="">Commercial Portal</a>       
                    </li>
                    <li><a href="">Human Capital & Admin</a></li>
                    <li> <a href="">ICT</a></li>
                </ul>

                {/* avatar */}
                <div className="size-[36px] rounded-full overflow-hidden">
                    <img src="/avatar.png" className="h-ful w-full object-fit" alt="avatar" />
                </div>

            </nav>
        </header>
    );
}

export default Header;

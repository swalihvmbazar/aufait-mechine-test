import { Search } from "lucide-react";
import Avatar from "../components/ui/avatar";

const Header = () => {
    return (
        <header className='px-20 bg-primary text-white flex items-center justify-between py-5.5'>
            <div className="flex items-center">
                <div className="mr-14">
                    <img src="/logo.png" alt="Logo" />
                </div>
                <div className="flex gap-2 items-center">
                    <Search size={16} color="white" strokeWidth={1.8} />
                    <input className="opacity-60 border-none placeholder:text-white/60 focus:outline-0" placeholder="Start searching..." />
                </div>
            </div>
            <nav className="flex gap-19 items-center font-light">
                <ul className="flex items-center gap-5">
                    <li>
                        <a href="#">Commercial Portal</a>
                    </li>
                    <li><a href="#">Human Capital & Admin</a></li>
                    <li> <a href="#">ICT</a></li>
                </ul>

                {/* avatar */}
                <Avatar src="/avatar.png" size={36} />

            </nav>
        </header>
    );
}

export default Header;

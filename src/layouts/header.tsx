import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import Avatar from "../components/ui/avatar";

const menuItems = [
    { label: 'Commercial Portal', href: '#' },
    { label: 'Human Capital & Admin', href: '#' },
    { label: 'ICT', href: '#' },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='relative  bg-primary text-white  py-3 sm:py-5.5'>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-6 md:gap-14 shrink-0">
                    <div className="w-8 sm:w-10 md:w-auto">
                        <img src="/logo.png" alt="Logo" className="w-full" />
                    </div>

                    {/* Search Bar - Hidden on small screens */}
                    <div className="hidden sm:flex gap-2 items-center">
                        <Search size={16} color="white" strokeWidth={1.8} />
                        <input
                            className="opacity-60 border-none placeholder:text-white/60 focus:outline-0 text-sm bg-transparent"
                            placeholder="Start searching..."
                        />
                    </div>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex gap-12 lg:gap-19 items-center font-light">
                    <ul className="flex items-center gap-4 lg:gap-5 text-sm lg:text-base">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:opacity-80 transition">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <Avatar src="/avatar.png" size={36} />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 hover:opacity-80 transition"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <Avatar src="/avatar.png" size={32} />
                </div>

                {/* Mobile Menu - Dropdown */}
                {mobileMenuOpen && (
                    <nav className="absolute top-full left-0 right-0 z-50 bg-primary border-t border-white/20 md:hidden">
                        <div className="px-4 py-4 space-y-4">
                            {/* Mobile Search */}
                            <div className="flex gap-2 items-center bg-white/10 rounded px-3 py-2">
                                <Search size={16} color="white" strokeWidth={1.8} />
                                <input
                                    className="opacity-80 border-none placeholder:text-white/60 focus:outline-0 bg-transparent text-sm w-full"
                                    placeholder="Start searching..."
                                />
                            </div>

                            {/* Mobile Links */}
                            <ul className="space-y-3">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className="block py-2 text-sm hover:opacity-80 transition">{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;

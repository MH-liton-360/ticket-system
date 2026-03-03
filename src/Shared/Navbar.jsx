import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const navOptions = (
        <>
            <ScrollLink to="home" smooth duration={500} className="cursor-pointer hover:text-primary transition">Home</ScrollLink>
            <ScrollLink to="faq" smooth duration={500} className="cursor-pointer hover:text-primary transition">FAQ</ScrollLink>
            <ScrollLink to="blog" smooth duration={500} className="cursor-pointer hover:text-primary transition">Blog</ScrollLink>
            <ScrollLink to="download" smooth duration={500} className="cursor-pointer hover:text-primary transition">Download</ScrollLink>
            <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-primary transition">Contact</ScrollLink>
        </>
    );

    return (
        <section className="sticky top-0 z-50 bg-base-100 shadow-md">
            <div className="navbar max-w-7xl mx-auto">

                {/* Navbar Start: Logo + Hamburger */}
                <div className="navbar-start flex-1 lg:flex-none flex justify-between lg:justify-start items-center">

                    {/* Hamburger for sm + md */}
                    <div className="dropdown md:block lg:hidden">
                        <div tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navOptions}

                            {/* Button inside dropdown for mobile only */}
                            <li className="mt-2 md:hidden">
                                <button className="btn w-full bg-[#422AD5] text-white">
                                    New Ticket
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="text-2xl font-bold text-primary text-center flex-1 lg:flex-none">
                        CS - Ticket System
                    </a>
                </div>

                {/* Medium + large: only button, not navbar-end */}
                <div className="hidden md:flex lg:hidden items-center">
                    <button className="btn bg-[#422AD5] text-white ml-auto">
                        New Ticket
                    </button>
                </div>

                {/* Large devices: horizontal menu + button */}
                <div className="navbar-end hidden lg:flex gap-6 items-center">
                    <ul className="menu menu-horizontal gap-6">{navOptions}</ul>
                    <button className="btn bg-[#422AD5] text-white">
                        New Ticket
                    </button>
                </div>

            </div>
        </section>

    );
};

export default Navbar;
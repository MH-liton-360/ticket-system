import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {

    const navOptions = (
        <>
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition"
            >
                Home
            </ScrollLink>

            <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition"
            >
                FAQ
            </ScrollLink>

            <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition"
            >
                Blog
            </ScrollLink>

            <ScrollLink
                to="download"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition"
            >
                Download
            </ScrollLink>

            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition"
            >
                Contact
            </ScrollLink>

        </>
    );

    return (
        <section className="sticky top-0 z-50 bg-base-100 shadow-md">

            <div className="navbar max-w-7xl mx-auto">

                <div className="navbar-start">

                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>

                    {/* 🔹 Logo */}
                    <a className="text-2xl font-bold text-primary">
                        CS - Ticket System
                    </a>
                </div>

                <div className="navbar-end hidden lg:flex gap-6 items-center">

                    <ul className="menu menu-horizontal gap-6">
                        {navOptions}
                    </ul>

                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Navbar;
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section>
            <main className="grow">

            </main>
            <footer className="bg-black text-white rounded-t-xl pt-10">

                <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <h3 className="text-2xl font-bold">CS-Ticket System</h3>
                        <p>
                            A streamlined platform for tracking, managing, and resolving customer issues efficiently.
                            Each ticket includes status, priority, and assignment details, ensuring transparency and faster resolutions.
                        </p>
                    </div>

                    {/* Ticket Services */}
                    <nav>
                        <h6 className="footer-title mb-2">Ticket Services</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">Create Ticket</a>
                            <a className="link link-hover">My Tickets</a>
                            <a className="link link-hover">Ticket Status</a>
                            <a className="link link-hover">Priority Support</a>
                        </div>
                    </nav>

                    {/* Support */}
                    <nav>
                        <h6 className="footer-title mb-2">Support</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">Help Center</a>
                            <a className="link link-hover">Contact Support</a>
                            <a className="link link-hover">Live Chat</a>
                            <a className="link link-hover">FAQ</a>
                        </div>
                    </nav>

                    {/* System */}
                    <nav>
                        <h6 className="footer-title mb-2">System</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">System Status</a>
                            <a className="link link-hover">User Guide</a>
                            <a className="link link-hover">Privacy Policy</a>
                            <a className="link link-hover">Terms of Service</a>
                        </div>
                    </nav>

                    {/* Social Links */}
                    <nav>
                        <h6 className="footer-title mb-2">Follow Us</h6>

                        <div className="flex gap-4 text-2xl">

                            <a href="https://web.programming-hero.com/home" className="hover:text-blue-600 cursor-pointer">
                                <FaFacebook />
                            </a>

                            <a href="https://web.programming-hero.com/home" className="hover:text-sky-500 cursor-pointer">
                                <FaTwitter />
                            </a>

                            <a href="https://web.programming-hero.com/home" className="hover:text-blue-700 cursor-pointer">
                                <FaLinkedin />
                            </a>

                        </div>

                    </nav>
                </div>

                {/* Divider */}
                <hr className="w-full border-white opacity-30 mt-6" />

                {/* Copyright */}
                <div className="text-center text-xs text-white pb-3">
                    Copyright © {new Date().getFullYear()} - cs-Ticket System. All Rights Reserved
                </div>
            </footer>
        </section>
    );
};

export default Footer;

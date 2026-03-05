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

                    {/* Services */}
                    <nav>
                        <h6 className="footer-title mb-2">Services</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                    </nav>

                    {/* Company */}
                    <nav>
                        <h6 className="footer-title mb-2">Company</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                    </nav>

                    {/* Legal */}
                    <nav>
                        <h6 className="footer-title mb-2">Legal</h6>
                        <div className="flex flex-col gap-1">
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </nav>
                </div>

                {/* Divider */}
                <hr className="w-full border-white opacity-30 mt-6" />

                {/* Copyright */}
                <div className="text-center text-xs text-white pb-3">
                    Copyright © {new Date().getFullYear()} - Global Matrimony Ltd. All Rights Reserved
                </div>
            </footer>
        </section>
    );
};

export default Footer;

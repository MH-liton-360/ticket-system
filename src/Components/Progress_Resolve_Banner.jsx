import bgImg1 from "../assets/vector1.png";

const Progress_Resolve_Banner = () => {
    return (
        <section
            id="home"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-12 pb-12"
        >
            {/* In Progress Card */}
            <div className="relative w-full lg:w-1/2 p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center bg-blue-800">
                {/* Background image */}
                <img
                    src={bgImg1}
                    alt="background"
                    className="absolute inset-0 h-full object-cover"
                />

                {/* Card content */}
                <h3 className="text-amber-100 font-bold text-lg z-10 text-center">
                    In Progress
                </h3>
                <h3 className="text-amber-100 font-bold text-3xl z-10 mt-2 text-center">
                    0
                </h3>

                <div className="flex gap-4 mt-4 z-10">
                    <img src={bgImg1} alt="icon1" className="w-12 h-12" />
                    <img src={bgImg1} alt="icon2" className="w-12 h-12" />
                </div>
            </div>

            {/* Resolve Card */}
            <div className="relative w-full lg:w-1/2 p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A]">
                {/* Background image */}
                <img
                    src={bgImg1}
                    alt="background"
                    className="absolute inset-0 h-full object-cover"
                />

                {/* Card content */}
                <h3 className="text-amber-100 font-bold text-lg z-10 text-center">
                    Resolve
                </h3>
                <h3 className="text-amber-100 font-bold text-3xl z-10 mt-2 text-center">
                    0
                </h3>

                <div className="flex gap-4 mt-4 z-10">
                    <img src={bgImg1} alt="icon1" className="w-12 h-12" />
                    <img src={bgImg1} alt="icon2" className="w-12 h-12" />
                </div>
            </div>
        </section>
    );
};

export default Progress_Resolve_Banner;
import bgImg1 from "../assets/vector1.png";

const Progress_Resolve_Banner = ({ inProgress, resolved }) => {
    return (
        <section
            id="home"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-12 pb-12"
        >

            {/* In Progress Card */}
            <div className="relative w-full lg:w-1/2 p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center bg-blue-800">

                <img
                    src={bgImg1}
                    alt="background"
                    className="absolute inset-0 h-full object-cover"
                />

                <h3 className="text-amber-100 font-bold text-lg z-10 text-center">
                    In Progress
                </h3>

                {/* Dynamic Count */}
                <h3 className="text-amber-100 font-bold text-3xl z-10 mt-2 text-center">
                    {inProgress.length}
                </h3>

            </div>


            {/* Resolve Card */}
            <div className="relative w-full lg:w-1/2 p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A]">

                <img
                    src={bgImg1}
                    alt="background"
                    className="absolute inset-0 h-full object-cover"
                />

                <h3 className="text-amber-100 font-bold text-lg z-10 text-center">
                    Resolve
                </h3>

                {/* Dynamic Count */}
                <h3 className="text-amber-100 font-bold text-3xl z-10 mt-2 text-center">
                    {resolved.length}
                </h3>

            </div>

        </section>
    );
};

export default Progress_Resolve_Banner;
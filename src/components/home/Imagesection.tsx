const Imagesection = () => {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-[#0C267B] dark:text-zinc-100 mb-4 tracking-tight">
          Everything you need.
          <br />
          <span className="text-[#0C267B] dark:text-zinc-100">Nothing you don't.</span>
        </h2>
        <p className="text-[#2c3d5f] text-base dark:text-zinc-100">
          Streamline your entire digital marketing with our AI-powered platform—
          automate SEO, social media, ads, emails, and messaging for smarter,
          and more impactful business growth.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
        {/* Card 1 */}
        <div className="rounded-3xl shadow-sm overflow-hidden relative min-w-[280px] md:w-auto h-[420px] flex-shrink-0">
          <div className="w-full h-full">
            <img
              src="/first.png"
              alt="Graph"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 p-6 w-full">
            <h3 className="text-xl md:text-2xl font-medium text-zinc-400 drop-shadow-lg">
              AI-Powered Business Growth
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden h-[420px] min-w-[280px] md:w-[313px] flex-shrink-0">
          <div className="absolute inset-0 z-0">
            <img
              src="/second.png"
              alt="AI Cube"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 flex items-center justify-center mt-44 md:mt-56 px-4">
            <div className="w-full text-center">
              <h3 className="text-lg font-semibold text-white">
                AI-Powered Business Growth
              </h3>
              <p className="text-sm text-white mt-2 mb-6 tracking-tighter">
                Discover how AI transformed a real business — see the full case study.
              </p>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-5 py-3 md:py-4 text-sm font-medium hover:bg-white/30 transition-all">
                Explore Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl shadow-lg relative flex flex-col md:flex-row overflow-hidden bg-[#101032] text-white min-w-[280px] w-full max-w-[580px] h-[420px] flex-shrink-0">
          {/* Image */}
          <div className="w-full md:w-[60%] h-[180px] md:h-auto">
            <img
              src="/Third_.png"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[40%] p-4 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold">
              Unlock AI's Potential for Your Business
            </h3>
            <p className="text-sm mt-2 tracking-tighter">
              Discover how AI can boost efficiency and drive growth. Watch now and stay ahead of the competition.
            </p>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full px-5 py-3 md:py-4 text-sm font-medium mt-4 hover:bg-white/30 transition-all">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagesection;

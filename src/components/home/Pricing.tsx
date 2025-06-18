const PricingSection = () => {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0a1b47] dark:text-zinc-100">
          Build your successful online presence, today.
        </h2>
        <p className="mt-4 text-[#2c3d5f] dark:text-zinc-100">
          Get lifetime access to all the AI automation. No recurring fees. <br />
          Just simple, transparent pricing.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          <span className="text-[#0a1b47] dark:text-zinc-100">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-300 dark:bg-zinc-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0a1b47]"></div>
          </label>
          <span className="text-[#0a1b47] dark:text-zinc-100">Yearly</span>
          <span className="text-xs text-[#4a5568] bg-white px-2 py-1 rounded-full">Save 20%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10">
        {/* Free Plan */}
        <div className="rounded-2xl p-9 shadow-sm flex flex-col justify-between bg-white text-[#0a1b47] dark:bg-[#081024] dark:text-white border dark:border-zinc-700/30">
          <div>
            <h3 className="text-lg font-semibold mb-1">Free</h3>
            <p className="text-sm mb-6 text-[#4a4a4a] dark:text-zinc-200/70">
              For everyone starting out on a website for their big idea
            </p>

            <div className="text-4xl font-bold">$0</div>
            <p className="text-sm mb-6 text-gray-600 dark:text-zinc-200/70">free for everyone</p>

            <button className="bg-gray-200 text-[#0a1b47] font-medium py-2 w-full rounded-md dark:bg-zinc-800 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">
              Get started for free
            </button>
          </div>
          <ul className="mt-6 text-sm space-y-2 dark:text-zinc-200 text-zinc-900">
            <li>✔️ 9 landing page sections</li>
            <li>✔️ 36 components</li>
            <li>✔️ 5 custom animations</li>
          </ul>
        </div>

        {/* Starter Plan */}
        <div className="rounded-2xl p-9 shadow-sm flex flex-col justify-between bg-[#f8f8f8] text-[#0a1b47] dark:bg-[#081024] dark:text-white border border-gray-300 dark:border-zinc-700/30">
          <div>
            <h3 className="text-lg font-semibold mb-1">Starter</h3>
            <p className="text-sm mb-6 text-[#4a4a4a] dark:text-zinc-200/70">
              Perfect for small teams and growing businesses
            </p>

            <div className="text-4xl font-bold">$0</div>
            <p className="text-sm mb-6 text-gray-600 dark:text-zinc-200/70">/ month billed yearly</p>

            <button className="bg-black text-white font-medium py-2 w-full rounded-md dark:bg-zinc-800  hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">
              Get started
            </button>
          </div>
          <ul className="mt-6 text-sm space-y-2 dark:text-zinc-200 text-zinc-900">
            <li>✔️ Up to 5 team members</li>
            <li>✔️ 20GB storage</li>
            <li>✔️ Basic analytics</li>
            <li>✔️ 24/7 email support</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl p-9 shadow-sm flex flex-col justify-between bg-white text-[#0a1b47] dark:bg-[#081024] dark:text-white border dark:border-zinc-700/30">
          <div>
            <h3 className="text-lg font-semibold mb-1">Enterprise</h3>
            <p className="text-sm mb-6 text-[#4a4a4a] dark:text-zinc-200/70">
              For larger teams with advanced needs
            </p>

            <div className="text-4xl font-bold">$0</div>
            <p className="text-sm mb-6 text-gray-600 dark:text-zinc-200/70">/ month billed yearly</p>

            <button className="bg-gray-200 text-[#0a1b47] font-medium py-2 w-full rounded-md dark:bg-zinc-800 dark:text-white  hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">
              Contact sales
            </button>
          </div>
          <ul className="mt-6 text-sm space-y-2 dark:text-zinc-200 text-zinc-900">
            <li>✔️ Unlimited team members</li>
            <li>✔️ Unlimited storage</li>
            <li>✔️ Advanced analytics</li>
            <li>✔️ 24/7 priority support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

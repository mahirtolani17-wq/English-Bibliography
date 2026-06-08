/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-serif flex flex-col p-8 md:p-16 box-border selection:bg-black selection:text-white">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-4 mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">Bibliography</h1>
          <p className="text-sm font-sans tracking-[0.3em] uppercase mt-2">English Project | Mahir Tolani</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs font-sans font-bold uppercase tracking-widest">Historical Perspectives</p>
          <p className="text-xs font-sans opacity-60">Archive Reference: 2024.MT.EN</p>
        </div>
      </header>

      {/* Main Bibliography Content */}
      <main className="flex-grow grid grid-cols-1 gap-y-8 md:gap-y-6 md:pl-10">
        
        {/* Entry 1 */}
        <div className="group relative">
          <span className="hidden md:block absolute -left-10 top-0 font-sans text-xs opacity-30 italic">01</span>
          <div className="flex flex-col">
            <p className="text-[15px] leading-relaxed">
              <span className="font-bold">Doepke, M., & Tertilt, M.</span> (2008). <span className="italic">Women's Liberation: What's in It for Men?.</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <a href="https://doi.org/10.3386/w13919" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans underline underline-offset-4 hover:bg-black hover:text-white transition-colors">https://doi.org/10.3386/w13919</a>
              <span className="text-[11px] font-sans font-bold uppercase tracking-tighter bg-black text-white px-1">Cited by: 544</span>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="group relative">
          <span className="hidden md:block absolute -left-10 top-0 font-sans text-xs opacity-30 italic">02</span>
          <div className="flex flex-col">
            <p className="text-[15px] leading-relaxed">
              <span className="font-bold">Evans, S. M.</span> (2013). <span className="italic">FEMINISM'S HISTORY AND HISTORICAL AMNESIA.</span> Modern Intellectual History, 10, 503–513.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <a href="https://doi.org/10.1017/s1479244313000140" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans underline underline-offset-4 hover:bg-black hover:text-white transition-colors">https://doi.org/10.1017/s1479244313000140</a>
              <span className="text-[11px] font-sans font-bold uppercase tracking-tighter bg-black text-white px-1">Cited by: 6</span>
            </div>
          </div>
        </div>

        {/* Entry 3 */}
        <div className="group relative">
          <span className="hidden md:block absolute -left-10 top-0 font-sans text-xs opacity-30 italic">03</span>
          <div className="flex flex-col">
            <p className="text-[15px] leading-relaxed">
              <span className="font-bold">Gleadle, K., & Thomas, Z.</span> (2017). <span className="italic">Global feminisms, c. 1870–1930: vocabularies and concepts—a comparative approach.</span> Women's History Review, 27, 1209–1224.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <a href="https://doi.org/10.1080/09612025.2017.1417685" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans underline underline-offset-4 hover:bg-black hover:text-white transition-colors">https://doi.org/10.1080/09612025.2017.1417685</a>
              <span className="text-[11px] font-sans font-bold uppercase tracking-tighter bg-black text-white px-1">Cited by: 14</span>
            </div>
          </div>
        </div>

        {/* Entry 4 */}
        <div className="group relative">
          <span className="hidden md:block absolute -left-10 top-0 font-sans text-xs opacity-30 italic">04</span>
          <div className="flex flex-col">
            <p className="text-[15px] leading-relaxed">
              <span className="font-bold">Miller, G.</span> (2008). <span className="italic">Women's Suffrage, Political Responsiveness, and Child Survival in American History.</span> Quarterly Journal of Economics, 123, 1287–1327.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <a href="https://doi.org/10.1162/qjec.2008.123.3.1287" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans underline underline-offset-4 hover:bg-black hover:text-white transition-colors">https://doi.org/10.1162/qjec.2008.123.3.1287</a>
              <span className="text-[11px] font-sans font-bold uppercase tracking-tighter bg-black text-white px-1">Cited by: 701</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Decorative Section */}
      <footer className="mt-16 flex justify-between items-center border-t border-black pt-4">
        <div className="text-[10px] font-sans uppercase tracking-[0.2em]">
          Academic Resource • 2024
        </div>
        <div className="flex gap-2 hidden md:flex">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full border border-black"></div>
          <div className="w-2 h-2 rounded-full border border-black opacity-20"></div>
        </div>
        <div className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">
          Final Submission
        </div>
      </footer>
    </div>
  );
}

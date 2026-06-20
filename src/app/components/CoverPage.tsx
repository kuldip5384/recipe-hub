export default function CoverPage() {
  return (
    <div className="relative h-[600px] flex flex-col items-center justify-center bg-gradient-to-br from-[#6C2BD9] via-[#8B4FE8] to-[#A66EF7] text-white p-12">
      <div className="text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          📖 Product Case Study
        </div>
        
        <h1 className="text-6xl tracking-tight">
          Recipe Hub
        </h1>
        
        <p className="text-2xl text-white/90">
          A Smart Recipe-to-Cart Experience for Quick Commerce Apps <br></br>
          (Zepto, Blinkit, Swiggy Instamart, BigBasket)
        </p>
        
        <div className="pt-8 text-lg text-white/80">
          Making grocery shopping faster by converting recipes into one-click shopping.
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 px-12">
        <div className="flex justify-between items-end">
          <div className="text-left">
            <p className="text-sm text-white/70 mb-1">Prepared By</p>
            <p className="text-xl">Kuldip</p>
            <p className="text-sm text-white/80">BCA Student</p>
            <p className="text-xs text-white/70 mt-1"> Data Analyst | Business Analyst</p>
          </div>
          
          <div className="text-white/80">
            May 2026
          </div>
        </div>
      </div>
    </div>
  );
}

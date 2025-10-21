export default function navbar() {
  return (
    <nav className="w-full bg-white px-4 py-4">
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-3 font-bold text-black text-2xl">Tamiu Tutor AI</div>
        <div className="col-span-9 justify-self-end">
          <div className="grid grid-cols-3 gap-8 mr-8">
            <a href="/explore" className="text-black hover:text-gray-600 transition-colors font-custom2">
              Explore
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-custom2">
              FAQ
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors font-custom2">
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

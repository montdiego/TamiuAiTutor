const menuItems = [
  { name: "Explore", link: "/explore" },
  { name: "FAQ", link: "/faq" },

  { name: "Dashboard", link: "/dashboard" },
];
export default function navbar() {
  return (
    <nav className="w-full bg-theme-background px-4 py-4">
      <div className="container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-3 font-bold text-white text-2xl bbh-sans-hegarty-regular">
          <a href="/">Aidvise</a>
        </div>
        <div className="col-span-9 justify-self-end">
          <div className="grid grid-cols-3 gap-8 mr-8">
            {menuItems.map((item) => (
              <a key={item.name} href={item.link} className="text-white hover:text-gray-600 transition-colors font-bold">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

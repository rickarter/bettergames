import Image from "next/image";
export default function Header() {
    const header_content = {
        logo: {
          title: "Better Game Logo",
          path: "/logo.png",
        },
        menu: [
          {
            title: "HOME",
          },
          {
            title: "RULES",
          },
          {
            title: "DISCORD",
          },
        ],
      };
      return (
        <header className="w-full bg-white py-6 shadow">
          <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8">
            {/* Logo */}
            <Image
              src={header_content?.logo?.path}
              height={50}
              width={146}
              priority
              alt={header_content?.logo?.title}
            />
    
            {/* Nav menu items */}
            <ul className="item-center hidden flex-row space-x-8 lg:flex">
              {header_content?.menu &&
                header_content?.menu.map((item, i) => (
                  <li
                    className="cursor-pointer transition hover:text-amber-400"
                    key={i}
                  >
                    <p className="text-xl font-medium">{item?.title}</p>
                  </li>
                ))}
            </ul>
    
            <div>
              {/* Buttons */}
              <div className="hidden flex-row space-x-4 md:flex">
                <button className="rounded-lg bg-yellow-400 px-8 py-4 font-medium text-dark transition hover:bg-amber-400">
                  <p className="text-lg font-medium">STORE</p>
                </button>
              </div>
            </div>
          </nav>
        </header>
      );

}
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
            link: "/",
          },
          {
            title: "RULES",
            link: "/rules",
          },
          {
            title: "DISCORD",
            link: "https://discord.gg/gxg3usmMKx",
          },
        ],
      };
      return (
        <header className="w-full bg-white py-6 shadow">
          <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8">
            {/* Logo */}
			<a href="/">
				<Image
				  src={header_content?.logo?.path}
				  height={50}
				  width={146}
				  priority
				  alt={header_content?.logo?.title}
				/>
			</a>
    
            {/* Nav menu items */}
            <ul className="item-center hidden flex-row space-x-8 lg:flex">
              {header_content?.menu &&
                header_content?.menu.map((item, i) => (
                  <li
                    className="cursor-pointer transition hover:text-amber-400"
                    key={i}
                  >
                    <a className="text-xl font-medium" href={`${item?.link}`}>{item?.title}</a>
                  </li>
                ))}
            </ul>
    
            <div>
              {/* Buttons */}
              <div className="hidden flex-row space-x-4 md:flex">
                <button className="rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-4 font-medium text-dark transition hover:bg-amber-400">
                  <p className="text-lg font-medium">STORE</p>
                </button>
              </div>
			  {/* Menu Icon */}
			  <div className="md:hidden">
				  <svg
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				  strokeWidth={1.5}
				  stroke="currentColor"
				  className="h-10 w-10"
			      >
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				  />
				  </svg>
			  </div>
            </div>
          </nav>
        </header>
      );

}

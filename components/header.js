import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "README", href: "#readme" },
  { name: "Career", href: "#career" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <>
      <header className="bg-gray-900">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-3 flex items-center justify-between border-b border-gray-900 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">Jean du Plessis</span>

                <Image
                  src="/jean-du-plessis-profile@2x.png"
                  alt="Jean du Plessis' avatar"
                  title="Jean du Plessis' avatar"
                  width={100}
                  height={103}
                />
              </a>
              <div className="hidden ml-10 space-x-10 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-serif text-white hover:text-blue-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:ml-10 ml-5 md:space-x-4 space-x-2">
              <a
                href="https://linkedin.com/in/jeandp"
                target="_blank"
                rel="noopener"
                className="inline-block bg-blue-200 py-2 px-4 border border-transparent rounded-md md:text-base text-sm font-medium text-gray-800 hover:bg-opacity-75"
              >
                LinkedIn{" "}
                <ExternalLinkIcon className="inline-block w-4 h-4 align-baseline text-gray-600 relative top-1 pb-1 left-1" />
              </a>
              <a
                href="https://github.com/jeanduplessis"
                target="_blank"
                rel="noopener"
                className="inline-block bg-blue-200 py-2 px-4 border border-transparent rounded-md md:text-base text-sm font-medium text-gray-800 hover:bg-opacity-75"
              >
                GitHub{" "}
                <ExternalLinkIcon className="inline-block w-4 h-4 align-baseline text-gray-600 relative top-1 pb-1 left-1" />
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

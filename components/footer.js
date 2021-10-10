import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://linkedin.com/in/jeandp"
            target="_blank"
            className="text-gray-600 hover:text-gray-800"
          >
            LinkedIn{" "}
            <ExternalLinkIcon className="inline-block w-4 h-4 align-baseline text-gray-600 relative top-1 pb-1 left-1" />
          </a>
          <a
            href="https://github.com/jeanduplessis"
            target="_blank"
            className="text-gray-600 hover:text-gray-800"
          >
            GitHub{" "}
            <ExternalLinkIcon className="inline-block w-4 h-4 align-baseline text-gray-600 relative top-1 pb-1 left-1" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="mb-2 text-left text-xs text-gray-600">
            This website does NOT use cookies and does not track you.
          </p>
          <p className="text-left text-sm text-gray-800">
            This work is licensed under{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
              className="inline-block font-semibold"
            >
              <span title="Creative Commons: Attribution-NonCommercial 4.0 International">
                CC BY-NC 4.0
              </span>
              <img
                className="inline-block h-5 ml-1 align-text-bottom relative"
                style={{top:"2px"}}
                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                alt="CC: Creative Commons"
                title="CC: Creative Commons"
              />
              <img
                className="inline-block h-5 ml-1 align-text-bottom relative"
                style={{top:"2px"}}
                src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                alt="BY: Credit must be given to you, the creator."
                title="BY: Credit must be given to you, the creator."
              />
              <img
                className="inline-block h-5 ml-1 align-text-bottom relative"
                style={{top:"2px"}}
                src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                alt="NC: Only noncommercial use of your work is permitted."
                title="NC: Only noncommercial use of your work is permitted."
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

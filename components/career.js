import Image from "next/image";

const entries = [
  {
    id: "upbound",
    type: "company",
    data: {
      name: "Upbound",
      href: "https://upbound.io",
      logoUrl: "/upbound-logo.webp",
      overview: "Sourcegraph todo todo todo",
      employmentStart: "August 2022",
      employmentEnd: "Current",
      title: "Senior Engineering Manager",
    },
  },
  {
    id: "sourcegraph",
    type: "company",
    data: {
      name: "Sourcegraph",
      href: "https://about.sourcegraph.com",
      logoUrl: "/sourcegraph-logo.svg",
      overview: "Sourcegraph todo todo todo",
      employmentStart: "November 2020",
      employmentEnd: "June 2022",
      title: "Director of Engineering",
    },
  },
  {
    id: "gitlab",
    type: "company",
    data: {
      name: "Gitlab",
      href: "https://about.gitlab.com",
      logoUrl: "/gitlab-logo.svg",
      overview: "Gitlab todo todo todo",
      employmentStart: "July 2019",
      employmentEnd: "October 2020",
      title: "Engineering Manager",
    },
  },
  {
    id: "samewave",
    type: "company",
    data: {
      name: "Samewave",
      href: "https://samewave.com",
      logoUrl: "/samewave-logo.webp",
      overview: "Samewave todo todo todo",
      employmentStart: "Feb 2017",
      employmentEnd: "June 2019",
      title: "Senior Engineering",
    },
  },
  {
    id: "mirum",
    type: "company",
    data: {
      name: "Mirum Agency",
      href: "https://mirumagency.com",
      logoUrl: "/mirum-logo.webp",
      overview: "Samewave todo todo todo",
      employmentStart: "Mar 2006",
      employmentEnd: "Jan 2017",
      title: "CTO",
    },
  },
];

export default function Career() {
  return (
    <>
      <section id="career" className="mt-4">
        <h2>Career</h2>
        <p>
          After completing my studies and spending my early-career as a Java
          software developer at a few places, I had the priviledge of spending
          the last 18+ years working with some amazing people at amazing
          companies who have shaped me into who I am today as a professional and
          human.
        </p>

        <p>You can read more about my role at these companies on my <a href="https://linkedin.com/in/jeandp">LinkedIn profile</a></p>

        <div className="flow-root mt-8">
          <ul role="list">
            {entries.map((entry, entryIdx) => (
              <li key={entry.id} className="!-ml-0">
                <div className="relative pb-8">
                  {entryIdx !== entries.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    {entry.type === "company" ? (
                      <>
                        <div className="relative">
                          <Image
                            src={entry.data.logoUrl}
                            alt={entry.data.name}
                            title={entry.data.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white bg-white"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <a
                                href={entry.data.href}
                                className="font-semibold text-gray-900"
                              >
                                {entry.data.name}
                              </a>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              {entry.data.employmentStart} -{" "}
                              {entry.data.employmentEnd}
                              <br />
                              <em>{entry.data.title}</em>
                            </p>
                          </div>
                          {/* <div className="mt-2 text-sm text-gray-700">
                            <p>{entry.data.overview}</p>
                          </div> */}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

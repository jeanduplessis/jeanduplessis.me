import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    (<main className="min-h-screen">
      <Image
        alt="Bus lost in dessert facing mountains"
        src="/not-found-bg.jpg"
        quality={100}
        className="fixed min-h-screen overflow-hidden"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 relative z-index-1">
        <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Uh oh! I think you’re lost.
        </h1>
        <p className="mt-2 text-lg font-medium text-black text-opacity-50">
          It looks like the page you’re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
            
              Go back home
            
          </Link>
        </div>
      </div>
    </main>)
  );
}

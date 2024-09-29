import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "CastleCare" },
  { id: 2, name: "Big Spella" },
  { id: 3, name: "QwikCal AI" },
  { id: 4, name: "Chewbuu" },
];

export default function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 to-indigo-700">
        <div className="max-w-7xl mx-auto p-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Innovate, Create, Transform
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join the NEWRGM and be apart of shaping the future
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild variant={"secondary"}>
                <Link href={"/about"}>Learn More</Link>
              </Button>
              <Button asChild>
                <Link href={"/careers"}>Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-cloud"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <Image
                  src={`/placeholder-logo.svg?height=80&width=160`}
                  alt={`Product ${product.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

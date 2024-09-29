import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Innovation at the Core",
    description:
      "Be part of groundbreaking projects that push the boundaries of technology and industry.",
  },
  {
    title: "Growth Opportunities",
    description:
      "Continuous learning and career advancement paths tailored to your aspirations.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Flexible work arrangements and a culture that values your well-being.",
  },
];

const impactItems = [
  "Revolutionizing healthcare technology",
  "Advancing sustainable energy solutions",
  "Transforming urban transportation",
];

export default function WhyUs() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Join NEWRGM INDUSTRIES?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto lg:px-8 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                At NEWRGM INDUSTRIES, we&apos;re not just creating products;
                we&apos;re shaping industries and improving lives.
              </p>
              <ul className="space-y-2">
                {impactItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Impact"
                objectFit="cover"
                className="rounded-lg"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

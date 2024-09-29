import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Engineer",
    quote:
      "Working at NEWRGM INDUSTRIES has been the most rewarding experience of my career. The challenges we tackle and the impact we make are unparalleled.",
  },
  {
    name: "Samantha Lee",
    role: "Product Manager",
    quote:
      "The collaborative culture here is amazing. Every day, I get to work with brilliant minds from diverse backgrounds, all united in our mission to innovate.",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    quote:
      "NEWRGM INDUSTRIES truly values creativity and user-centric design. I&apos;ve grown so much as a designer since joining the team.",
  },
];

export default function ImpactArea() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto lg:px-8 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            What Our Employees Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    &quot;{testimonial.quote}&quote;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto lg:px-8 px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="mx-auto max-w-[700px] text-xl mb-8">
            Join our team of innovators, creators, and problem-solvers. Explore
            exciting career opportunities at NEWRGM INDUSTRIES.
          </p>
          <Button asChild size={"lg"} variant={"secondary"}>
            <Link href={"/careers"}>View Open Positions</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

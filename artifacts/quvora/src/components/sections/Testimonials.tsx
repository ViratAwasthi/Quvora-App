import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Quvora Consulting transformed our hiring process. Their expertise helped us recruit exceptional talent faster than ever.",
    author: "Sarah Johnson",
    title: "HR Director",
    company: "TechCorp"
  },
  {
    quote: "Professional, responsive, and highly reliable. They truly understand our business needs and delivered beyond expectations.",
    author: "Raj Patel",
    title: "Startup Founder",
    company: "InnovateCo"
  },
  {
    quote: "Their executive hiring process exceeded our expectations. Confidential, precise, and results-driven.",
    author: "Amanda Chen",
    title: "CEO",
    company: "GrowthVentures"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            What Our Clients Say
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {testimonials.map((test, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-8 h-full bg-background rounded-2xl border border-border shadow-sm">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg text-primary/80 italic mb-8 min-h-[80px]">"{test.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {test.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{test.author}</h4>
                        <p className="text-sm text-muted-foreground">{test.title}, {test.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

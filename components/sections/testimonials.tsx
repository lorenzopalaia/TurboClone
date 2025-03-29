import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "Mark Reynolds",
    handle: "@markdev",
    avatar: "/assets/mark.webp",
    content:
      "TurboClone has completely transformed my workflow! Right-click, clone, done. I can't believe how much time I've saved on my MacOS setup.",
    url: "https://twitter.com/markdev",
  },
  {
    name: "Sophia Chen",
    handle: "@sophiacodes",
    avatar: "/assets/sophia.webp",
    content:
      "The clipboard detection in TurboClone is magic. I copy a GitHub URL, right-click, and boom—repository cloned. No more command line juggling for simple tasks.",
    url: "https://twitter.com/sophiacodes",
  },
  {
    name: "James Wilson",
    handle: "@jwilson_dev",
    avatar: "/assets/james.webp",
    content:
      "Finally, a GitHub tool that understands what Mac developers actually need. TurboClone is the epitome of Apple's 'it just works' philosophy.",
    url: "https://twitter.com/jwilson_dev",
  },
  {
    name: "Emma Rodriguez",
    handle: "@emmacodes",
    avatar: "/assets/emma.webp",
    content:
      "The attention to detail in TurboClone is impressive. The way it integrates with Finder feels native to MacOS. Perfect for my daily development work.",
    url: "https://twitter.com/emmacodes",
  },
  {
    name: "Alex Thompson",
    handle: "@alexdevops",
    avatar: "/assets/alex.webp",
    content:
      "Been using @turboclone for my projects and I'm blown away by how seamless it makes repository management. Right-click cloning should have been a thing years ago!",
    url: "https://twitter.com/alexdevops",
  },
  {
    name: "Esme Davis",
    handle: "@esmedavis",
    avatar: "/assets/esme.webp",
    content:
      "TurboClone has eliminated all the friction in my GitHub workflow. The clipboard detection feature is genius - I literally copy a URL and it's ready to clone. Pure MacOS elegance.",
    url: "https://twitter.com/priyatech",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-background text-foreground w-full overflow-hidden px-0 py-12 sm:py-24 md:py-32">
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Loved by developers across the Mac ecosystem
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Here&apos;s what people are saying about TurboClone
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Prima riga - scorre da sinistra a destra */}
          <div className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md leading-none font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <p className="sm:text-md text-muted-foreground mt-4 text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Seconda riga - scorre da destra a sinistra */}
          <div className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-direction:reverse] group-hover:[animation-play-state:paused]"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md leading-none font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <p className="sm:text-md text-muted-foreground mt-4 text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradienti laterali */}
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r sm:block" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l sm:block" />
        </div>
      </div>
    </Section>
  );
}

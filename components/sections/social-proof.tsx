import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "Mark Reynolds",
    handle: "@markdev",
    content:
      "TurboClone has completely transformed my workflow! Right-click, clone, done. I can't believe how much time I've saved on my MacOS setup.",
    url: "https://twitter.com/markdev",
  },
  {
    name: "Sophia Chen",
    handle: "@sophiacodes",
    content:
      "The clipboard detection in TurboClone is magic. I copy a GitHub URL, right-click, and boom—repository cloned. No more command line juggling for simple tasks.",
    url: "https://twitter.com/sophiacodes",
  },
  {
    name: "James Wilson",
    handle: "@jwilson_dev",
    content:
      "Finally, a GitHub tool that understands what Mac developers actually need. TurboClone is the epitome of Apple's 'it just works' philosophy.",
    url: "https://twitter.com/jwilson_dev",
  },
  {
    name: "Emma Rodriguez",
    handle: "@emmacodes",
    content:
      "The attention to detail in TurboClone is impressive. The way it integrates with Finder feels native to MacOS. Perfect for my daily development work.",
    url: "https://twitter.com/emmacodes",
  },
  {
    name: "Alex Thompson",
    handle: "@alexdevops",
    content:
      "Been using @turboclone for my projects and I'm blown away by how seamless it makes repository management. Right-click cloning should have been a thing years ago!",
    url: "https://twitter.com/alexdevops",
  },
  {
    name: "Priya Sharma",
    handle: "@priyatech",
    content:
      "TurboClone has eliminated all the friction in my GitHub workflow. The clipboard detection feature is genius - I literally copy a URL and it's ready to clone. Pure MacOS elegance.",
    url: "https://twitter.com/priyatech",
  },
];

const testimonials2 = [
  {
    name: "David Garcia",
    handle: "@davidg",
    content:
      "As someone who works with multiple repos daily, TurboClone has been a lifesaver. The context menu integration on MacOS is brilliant - so intuitive!",
    url: "https://twitter.com/davidg",
  },
  {
    name: "Leila Khan",
    handle: "@leilacodes",
    content:
      "TurboClone is the perfect example of how developer tools should work. Simple, fast, and it gets out of your way. The clipboard detection feature is pure genius.",
    url: "https://twitter.com/leilacodes",
  },
  {
    name: "Michael Chen",
    handle: "@michaelc",
    content:
      "I was skeptical at first, but TurboClone has become essential in my MacOS development setup. The right-click to clone feature saves me so much time every day.",
    url: "https://twitter.com/michaelc",
  },
  {
    name: "Nina Williams",
    handle: "@ninacodes",
    content:
      "TurboClone makes GitHub interactions feel native to MacOS. I love how it just detects repository URLs from my clipboard automatically!",
    url: "https://twitter.com/ninacodes",
  },
  {
    name: "Omar Hassan",
    handle: "@omardev",
    content:
      "MacOS + GitHub + TurboClone = Perfect workflow. This app is the missing link I didn't know I needed until I tried it.",
    url: "https://twitter.com/omardev",
  },
  {
    name: "Tara Johnson",
    handle: "@tarajohnson",
    content:
      "TurboClone has simplified my GitHub workflow immensely. The integration with MacOS is flawless, and the clipboard detection feels like magic. Easily worth 10x the price!",
    url: "https://twitter.com/tarajohnson",
  },
];

export default function SocialProof() {
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
                  <Link
                    key={index}
                    href={testimonial.url}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${testimonial.handle}`}
                          alt={testimonial.name}
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
                  </Link>
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
                {testimonials2.map((testimonial, index) => (
                  <Link
                    key={index}
                    href={testimonial.url}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${testimonial.handle}`}
                          alt={testimonial.name}
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
                  </Link>
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

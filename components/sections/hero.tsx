import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import Github from "@/components/logos/github";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

export default function Hero() {
  return (
    <Section className="sm:fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              Try TurboClone for free
            </span>
            <Link href="#installation" className="flex items-center gap-1">
              Get started
              <ArrowRightIcon className="h-3 w-3" />
            </Link>
          </Badge>
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-gradient-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Instantly Clone GitHub Repositories
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[550px] font-medium opacity-0 delay-100 sm:text-xl">
            Right-click any folder, and TurboClone instantly clones your GitHub
            repository. It&apos;s that easy and fast.
          </p>
          <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
            <Button variant="default" size="lg" asChild>
              <Link href="#installation">Get Started</Link>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <Link
                href="https://github.com/lorenzopalaia/TurboClone"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
          <div className="relative hidden pt-12 sm:block">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={1248}
                  height={765}
                  preload="metadata"
                >
                  <source src="/assets/demo.mp4" type="video/mp4" />
                </video>
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

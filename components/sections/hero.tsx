"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";

import Link from "next/link";

export default function Hero() {
  return (
    <Section className="fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Instantly Clone GitHub Repositories
          </h1>

          <p className="text-md animate-appear text-muted-foreground max-w-[550px] font-medium opacity-0 delay-100 sm:text-xl">
            Right-click any folder, and TurboClone instantly clones your GitHub
            repository. It&apos;s that easy and fast.
          </p>

          <div className="animate-appear relative z-10 flex flex-col items-center justify-center gap-4 self-stretch opacity-0 delay-300">
            <div className="flex w-full max-w-[420px] justify-center gap-2">
              <Button variant="default" size="lg" asChild>
                <Link href="#installation">Get Started</Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-xs">
              Free and open source forever.
            </p>
          </div>

          <div className="relative w-full pt-12">
            <div className="relative w-full pt-[20%]">
              {/* Animated gradient circles */}
              <div className="border-brand bg-background/50 absolute top-0 -left-[50%] z-10 w-[200%] overflow-hidden rounded-[100%] border-4 pt-[100%] shadow-[0px_0px_12px_hsla(var(--brand)/0.8),_0px_0px_64px_hsla(var(--brand-foreground)/0.5),0px_0px_12px_hsla(var(--brand)/0.8)_inset]">
                <div
                  className="animate-pulse-hover bg-brand-foreground/50 absolute top-0 -left-[50%] h-[200%] w-[200%] rounded-[100%]"
                  style={{
                    maskImage:
                      "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
                  }}
                />
                <div
                  className="animate-pulse-hover bg-brand/50 absolute top-0 -left-[50%] h-[200%] w-[200%] rounded-[100%]"
                  style={{
                    maskImage:
                      "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
                  }}
                />
                <div
                  className="animate-pulse-hover bg-brand absolute -top-[5%] -left-[50%] h-[200%] w-[200%] rounded-[100%] dark:bg-white"
                  style={{
                    maskImage:
                      "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)",
                  }}
                />
              </div>

              {/* Glow effects */}
              <div className="absolute top-[50%] w-full">
                <Glow className="-translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)]" />
                <Glow className="-translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

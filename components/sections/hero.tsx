"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";

import Link from "next/link";

export default function Hero() {
  return (
    <Section className="fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        <div className="flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
          <h1 className="inline-block animate-appear bg-linear-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight dark:to-muted-foreground">
            Instantly Clone GitHub Repositories
          </h1>

          <p className="text-md max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Right-click any folder, and TurboClone instantly clones your GitHub
            repository. It&apos;s that easy and fast.
          </p>

          <div className="relative z-10 flex animate-appear flex-col items-center justify-center gap-4 self-stretch opacity-0 delay-300">
            <div className="flex justify-center w-full max-w-[420px] gap-2">
              <Button variant="default" size="lg" asChild>
                <Link href="#installation">Get Started</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Free and open source forever.
            </p>
          </div>

          <div className="relative w-full pt-12">
            <div className="relative w-full pt-[20%]">
              {/* Animated gradient circles */}
              <div className="absolute -left-[50%] top-0 z-10 w-[200%] overflow-hidden rounded-[100%] border-4 border-brand bg-background/50 pt-[100%] shadow-[0px_0px_12px_hsla(var(--brand)/0.8),_0px_0px_64px_hsla(var(--brand-foreground)/0.5),0px_0px_12px_hsla(var(--brand)/0.8)_inset]">
                <div
                  className="absolute -left-[50%] top-0 h-[200%] w-[200%] animate-pulse-hover rounded-[100%] bg-brand-foreground/50"
                  style={{
                    maskImage:
                      "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
                  }}
                />
                <div
                  className="absolute -left-[50%] top-0 h-[200%] w-[200%] animate-pulse-hover rounded-[100%] bg-brand/50"
                  style={{
                    maskImage:
                      "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
                  }}
                />
                <div
                  className="absolute -left-[50%] -top-[5%] h-[200%] w-[200%] animate-pulse-hover rounded-[100%] bg-brand dark:bg-white"
                  style={{
                    maskImage:
                      "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)",
                  }}
                />
              </div>

              {/* Glow effects */}
              <div className="absolute w-full top-[50%]">
                <Glow className="w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] -translate-y-1/2" />
                <Glow className="w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

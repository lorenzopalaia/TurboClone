import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
  return (
    <Section
      className="w-full overflow-hidden pt-0 md:pt-0"
      id="get-started"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-container relative mx-auto flex flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        <Badge variant="outline">
          <span className="text-muted-foreground">Get started</span>
        </Badge>

        <h2
          id="cta-heading"
          className="max-w-[600px] text-3xl font-semibold sm:text-5xl"
        >
          Streamline GitHub Cloning on Your Mac Today
        </h2>

        <p
          className="text-muted-foreground max-w-[650px] md:text-lg"
          itemProp="description"
        >
          TurboClone lets you clone any GitHub repository with a simple
          right-click. No more command lines, just instant access to your
          projects.
        </p>

        <Button variant="default" size="lg" asChild className="group">
          <Link
            href="#installation"
            aria-label="Learn how to install TurboClone for Mac"
            title="Get started with TurboClone installation guide"
            className="flex items-center"
          >
            Install TurboClone Now
            <ArrowRightIcon
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Button>

        <div
          className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-[0_-16px_128px_0_hsla(var(--brand-foreground)_/_0.5)_inset,0_-16px_32px_0_hsla(var(--brand)_/_0.5)_inset]"
          aria-hidden="true"
        ></div>
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Clipboard, Github, MousePointerClick } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Installation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "curl -sS https://turboclone.lorenzopalaia.com/install.sh | sh"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const BASE_URL =
    process.env.VERCEL_ENV === "production"
      ? "https://turboclone.lorenzopalaia.com"
      : "http://localhost:3000";

  const installCommand = `curl -sS ${BASE_URL}/install.sh | sh`;

  return (
    <Section
      id="installation"
      className="bg-background py-12 text-foreground sm:py-24 w-full overflow-hidden"
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 px-4">
        <Badge variant="outline">
          <span className="text-muted-foreground">Installation</span>
        </Badge>

        <h2 className="max-w-[720px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Setup in seconds, save hours
        </h2>
        <p className="text-md max-w-[600px] text-center font-medium text-muted-foreground sm:text-xl">
          Three simple steps to revolutionize your GitHub workflow on Mac
        </p>

        <div className="grid gap-8 w-full max-w-[800px] mt-6">
          {/* Step 1 */}
          <div className="flex flex-col gap-6 glass-3 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                <span className="text-brand font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Install TurboClone</h3>
            </div>

            <p className="text-muted-foreground">
              Open Terminal and run the following command:
            </p>

            <div className="relative">
              <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto flex items-center">
                <code>{installCommand}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto shrink-0"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <BadgeCheck className="h-4 w-4" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              This script installs TurboClone and configures the necessary
              Finder integration.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-6 glass-3 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                <span className="text-brand font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold">
                Copy GitHub Repository URL
              </h3>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex-1 min-w-[280px]">
                <p className="text-muted-foreground">
                  Visit any GitHub repository and copy its URL. TurboClone will
                  automatically detect it from your clipboard.
                </p>
              </div>
              <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
                <Github className="h-12 w-12 text-brand" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-6 glass-3 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                <span className="text-brand font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold">
                Clone with a Right-Click
              </h3>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex-1 min-w-[280px]">
                <p className="text-muted-foreground">
                  Right-click on any folder in Finder and select TurboClone from
                  the context menu. If you&apos;ve copied a GitHub URL, it will
                  start cloning immediately. Otherwise, you&apos;ll be prompted
                  to enter a repository URL.
                </p>
              </div>
              <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
                <MousePointerClick className="h-12 w-12 text-brand" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6">
            That&apos;s it! No complex setup, no configuration files, just
            instant GitHub cloning power at your fingertips.
          </p>
        </div>
      </div>
    </Section>
  );
}

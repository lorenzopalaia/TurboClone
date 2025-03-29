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
      "curl -sS https://turboclone.lorenzopalaia.com/install.sh | sh",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const BASE_URL =
    process.env.VERCEL_ENV === "production"
      ? process.env.BASE_URL
      : "http://localhost:3000";

  const installCommand = `curl -sS ${BASE_URL}/install.sh | sh`;

  return (
    <Section
      id="installation"
      className="bg-background text-foreground w-full overflow-hidden py-12 sm:py-24"
    >
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 px-4">
        <Badge variant="outline">
          <span className="text-muted-foreground">Installation</span>
        </Badge>

        <h2 className="max-w-[720px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Setup in seconds, save hours
        </h2>
        <p className="text-md text-muted-foreground max-w-[600px] text-center font-medium sm:text-xl">
          Three simple steps to revolutionize your GitHub workflow on Mac
        </p>

        <div className="text-muted-foreground mt-2 mb-6 max-w-[600px] text-center text-sm">
          <strong>Note:</strong> TurboClone requires Python to be installed on
          your system. While Git will be installed automatically using Homebrew
          if needed, Python must be installed separately.
        </div>

        <div className="grid w-full max-w-[800px] gap-8">
          {/* Step 1 */}
          <div className="glass-3 flex flex-col gap-6 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                <span className="text-brand font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Install TurboClone</h3>
            </div>

            <p className="text-muted-foreground">
              Open Terminal and run the following command:
            </p>

            <div className="relative">
              <div className="bg-muted flex items-center overflow-x-auto rounded-lg p-4 font-mono text-sm">
                <code>{installCommand}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto shrink-0 cursor-pointer"
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

            <p className="text-muted-foreground text-sm">
              This script installs TurboClone and configures the necessary
              Finder integration. Python must be installed on your system. If
              Git is not present, the script will attempt to install it via
              Homebrew if available.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-3 flex flex-col gap-6 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                <span className="text-brand font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold">
                Copy GitHub Repository URL
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="min-w-[280px] flex-1">
                <p className="text-muted-foreground">
                  Visit any GitHub repository and copy its URL. TurboClone will
                  automatically detect it from your clipboard.
                </p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg p-4">
                <Github className="text-brand h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-3 flex flex-col gap-6 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="bg-brand/10 flex h-10 w-10 items-center justify-center rounded-full">
                <span className="text-brand font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold">
                Clone with a Right-Click
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="min-w-[280px] flex-1">
                <p className="text-muted-foreground">
                  Right-click on any folder in Finder and select TurboClone from
                  the context menu. If you&apos;ve copied a GitHub URL, it will
                  start cloning immediately. Otherwise, you&apos;ll be prompted
                  to enter a repository URL.
                </p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg p-4">
                <MousePointerClick className="text-brand h-12 w-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            That&apos;s it! No complex setup, no configuration files, just
            instant GitHub cloning power at your fingertips.
          </p>
        </div>
      </div>
    </Section>
  );
}

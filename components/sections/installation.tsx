"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Clipboard,
  Github,
  MousePointerClick,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ItemIcon } from "@/components/ui/item";

export default function Installation() {
  const [copied, setCopied] = useState(false);
  const [copiedUninstall, setCopiedUninstall] = useState(false);

  const BASE_URL = "https://turboclone.lorenzopalaia.com";

  const installCommand = `curl -sS ${BASE_URL}/install.sh | sh`;
  const uninstallCommand = `curl -sS ${BASE_URL}/uninstall.sh | sh`;

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyUninstall = () => {
    navigator.clipboard.writeText(uninstallCommand);
    setCopiedUninstall(true);
    setTimeout(() => setCopiedUninstall(false), 2000);
  };

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

            <div className="group relative">
              <div className="bg-muted flex items-center rounded-lg p-4 font-mono text-sm">
                <code className="pr-8 break-all">{installCommand}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
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
              <div className="glass-4 hover:from-primary/15 flex items-center self-center rounded-lg p-4">
                <ItemIcon>
                  <Github className="text-brand h-8 w-8 stroke-1" />
                </ItemIcon>
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
              <div className="glass-4 hover:from-primary/15 flex items-center self-center rounded-lg p-4">
                <ItemIcon>
                  <MousePointerClick className="text-brand h-8 w-8 stroke-1" />
                </ItemIcon>
              </div>
            </div>
          </div>

          {/* Uninstallation */}
          <div className="glass-3 flex flex-col gap-6 rounded-lg border border-red-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
                <Trash2 className="h-5 w-5 stroke-[1.5] text-red-500" />
              </div>
              <h3 className="text-xl font-semibold">Uninstall TurboClone</h3>
            </div>

            <p className="text-muted-foreground">
              If you need to uninstall TurboClone, run this command in Terminal:
            </p>

            <div className="group relative">
              <div className="bg-muted flex items-center rounded-lg p-4 font-mono text-sm">
                <code className="pr-8 break-all">{uninstallCommand}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={handleCopyUninstall}
                >
                  {copiedUninstall ? (
                    <BadgeCheck className="h-4 w-4" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              This will safely remove all TurboClone components from your
              system, including the Finder service and installed scripts.
            </p>
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

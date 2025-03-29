import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";
import { GitForkIcon, ClipboardCopyIcon, ComputerIcon } from "lucide-react";

export default function Features() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Streamlined GitHub Cloning for Mac
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          <Item>
            <div className="text-foreground flex flex-row items-center gap-4 p-4">
              <div className="glass-4 hover:from-primary/15 flex items-center self-center rounded-lg p-4">
                <ItemIcon>
                  <GitForkIcon className="text-brand h-8 w-8 stroke-1" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm leading-none font-semibold tracking-tight sm:text-base">
                  One-Click Cloning
                </ItemTitle>
                <ItemDescription className="text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance">
                  Right-click any folder in Finder and clone GitHub repositories
                  instantly. No terminal commands needed, just pure MacOS
                  simplicity.
                </ItemDescription>
              </div>
            </div>
          </Item>

          <Item>
            <div className="text-foreground flex flex-row items-center gap-4 p-4">
              <div className="glass-4 hover:from-primary/15 flex items-center self-center rounded-lg p-4">
                <ItemIcon>
                  <ClipboardCopyIcon className="text-brand h-8 w-8 stroke-1" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm leading-none font-semibold tracking-tight sm:text-base">
                  Smart Clipboard Detection
                </ItemTitle>
                <ItemDescription className="text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance">
                  Copy a GitHub URL and TurboClone automatically detects it.
                  Just right-click where you want it, and the repo is already
                  set to clone.
                </ItemDescription>
              </div>
            </div>
          </Item>

          <Item>
            <div className="text-foreground flex flex-row items-center gap-4 p-4">
              <div className="glass-4 hover:from-primary/15 flex items-center self-center rounded-lg p-4">
                <ItemIcon>
                  <ComputerIcon className="text-brand h-8 w-8 stroke-1" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm leading-none font-semibold tracking-tight sm:text-base">
                  Native MacOS Experience
                </ItemTitle>
                <ItemDescription className="text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance">
                  Designed exclusively for Mac, TurboClone integrates perfectly
                  with your workflow. Install once and enjoy seamless GitHub
                  integration.
                </ItemDescription>
              </div>
            </div>
          </Item>
        </div>
      </div>
    </Section>
  );
}

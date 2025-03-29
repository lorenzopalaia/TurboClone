import { EclipseIcon, MonitorSmartphoneIcon, ScanFaceIcon } from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../ui/item";
import { Section } from "../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Streamlined GitHub Cloning for Mac
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          <Item>
            <div className="flex gap-4 p-4 text-foreground flex-row items-center">
              <div className="flex items-center glass-4 self-center rounded-lg p-4 hover:from-primary/15">
                <ItemIcon>
                  <ScanFaceIcon className="h-8 w-8 stroke-1 text-brand" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm font-semibold leading-none tracking-tight sm:text-base">
                  One-Click Cloning
                </ItemTitle>
                <ItemDescription className="flex max-w-[240px] flex-col gap-2 text-balance text-sm text-muted-foreground">
                  Right-click any folder in Finder and clone GitHub repositories
                  instantly. No terminal commands needed, just pure MacOS
                  simplicity.
                </ItemDescription>
              </div>
            </div>
          </Item>

          <Item>
            <div className="flex gap-4 p-4 text-foreground flex-row items-center">
              <div className="flex items-center glass-4 self-center rounded-lg p-4 hover:from-primary/15">
                <ItemIcon>
                  <MonitorSmartphoneIcon className="h-8 w-8 stroke-1 text-brand" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm font-semibold leading-none tracking-tight sm:text-base">
                  Smart Clipboard Detection
                </ItemTitle>
                <ItemDescription className="flex max-w-[240px] flex-col gap-2 text-balance text-sm text-muted-foreground">
                  Copy a GitHub URL and TurboClone automatically detects it.
                  Just right-click where you want it, and the repo is already
                  set to clone.
                </ItemDescription>
              </div>
            </div>
          </Item>

          <Item>
            <div className="flex gap-4 p-4 text-foreground flex-row items-center">
              <div className="flex items-center glass-4 self-center rounded-lg p-4 hover:from-primary/15">
                <ItemIcon>
                  <EclipseIcon className="h-8 w-8 stroke-1 text-brand" />
                </ItemIcon>
              </div>
              <div className="flex flex-col gap-2">
                <ItemTitle className="text-sm font-semibold leading-none tracking-tight sm:text-base">
                  Native MacOS Experience
                </ItemTitle>
                <ItemDescription className="flex max-w-[240px] flex-col gap-2 text-balance text-sm text-muted-foreground">
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

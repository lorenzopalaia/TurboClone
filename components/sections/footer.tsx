import { ModeToggle } from "../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../ui/footer";
import TurboClone from "../logos/turboclone";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <TurboClone />
                <h3 className="text-xl font-bold">TurboClone</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <Link
                href="https://github.com/lorenzopalaia/"
                className="text-sm text-muted-foreground"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/lorenzopalaia/"
                className="text-sm text-muted-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/lorenzopalaia/TurboClone"
                className="text-sm text-muted-foreground"
              >
                Repository
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Lorenzo Palaia. All rights reserved</div>
            <div className="flex items-center gap-4">
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

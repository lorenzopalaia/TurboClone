import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { ModeToggleButton } from "@/components/ui/mode-toggle";
import TurboClone from "@/components/logos/turboclone";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <TurboClone />
              TurboClone
            </Link>
          </NavbarLeft>
          <NavbarRight>
            <ModeToggleButton />
            <Button variant="default" asChild>
              <Link href="#installation">Get Started</Link>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

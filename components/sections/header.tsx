import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import TurboClone from "@/components/logos/turboclone";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4" role="banner">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
              aria-label="TurboClone homepage"
              title="TurboClone - Instantly Clone GitHub Repositories"
              rel="index"
            >
              <TurboClone aria-hidden="true" />
              <span>TurboClone</span>
            </Link>
          </NavbarLeft>
          <nav aria-label="Navigazione principale">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/#features"
                  className="text-muted-foreground hover:text-foreground text-sm font-medium"
                  title="TurboClone Features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-muted-foreground hover:text-foreground text-sm font-medium"
                  title="User Testimonials"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>
          <NavbarRight>
            <Button variant="default" asChild>
              <Link
                href="#installation"
                title="Install TurboClone"
                aria-label="Get Started with TurboClone"
                rel="nofollow"
              >
                Get Started
              </Link>
            </Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}

import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import TurboClone from "@/components/logos/turboclone";
import Link from "next/link";
import { Github, Linkedin, Mail, Laptop } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background w-full px-4 py-8"
      role="contentinfo"
      aria-label="Site information and contacts"
    >
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  title="TurboClone - Return to homepage"
                  aria-label="TurboClone logo, return to homepage"
                >
                  <TurboClone aria-hidden="true" />
                  <h3 className="text-xl font-bold">TurboClone</h3>
                </Link>
                <p className="text-muted-foreground max-w-[300px] text-sm">
                  Clone GitHub repositories instantly with a simple right-click.
                  Streamline your development workflow on Mac.
                </p>
              </div>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Navigation</h3>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      href="/#features"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      title="TurboClone Features"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#installation"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      title="How to install TurboClone"
                    >
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#testimonials"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      title="TurboClone user testimonials"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </nav>
            </FooterColumn>

            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold" id="contact-heading">
                Contact
              </h3>
              <nav aria-labelledby="contact-heading">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <Link
                      href="https://github.com/lorenzopalaia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                      title="Lorenzo Palaia on GitHub"
                      aria-label="Visit Lorenzo Palaia's GitHub profile"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com/in/lorenzopalaia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                      title="Lorenzo Palaia on LinkedIn"
                      aria-label="Connect with Lorenzo Palaia on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/lorenzopalaia/TurboClone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                      title="TurboClone source code on GitHub"
                      aria-label="View TurboClone source code repository on GitHub"
                    >
                      <Laptop className="h-4 w-4" aria-hidden="true" />
                      Repository
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:lorenzopalaia53@gmail.com"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                      title="Email Lorenzo Palaia"
                      aria-label="Contact Lorenzo Palaia via email"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Email
                    </Link>
                  </li>
                </ul>
              </nav>
            </FooterColumn>
          </FooterContent>

          <FooterBottom className="border-border/40 mt-6 border-t pt-6">
            <div>
              © {currentYear} Lorenzo Palaia. All rights reserved
              <span className="mx-2">•</span>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                title="TurboClone Privacy Policy"
              >
                Privacy
              </Link>
              <span className="mx-2">•</span>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                title="TurboClone Terms of Service"
              >
                Terms
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

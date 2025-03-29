import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions of use for TurboClone, the application to clone GitHub repositories simply and quickly.",
};

export default function TermsPage() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="max-w-container mx-auto px-4">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
            Terms of Service
          </h1>

          <p className="text-muted-foreground mb-8">
            Last updated: March 29, 2025
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            1. Acceptance of Terms
          </h2>
          <p>
            By using TurboClone, you agree to be bound by these Terms of
            Service. If you do not accept these terms, please do not use the
            application.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            2. Service Description
          </h2>
          <p>
            TurboClone is a macOS application that allows you to clone GitHub
            repositories with a simple right-click. The application facilitates
            integration with macOS Finder and automates the repository cloning
            process.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            3. Requirements for Use
          </h2>
          <div className="space-y-2">
            <p>To use TurboClone you need:</p>
            <ul className="list-disc pl-6">
              <li>A computer with macOS operating system</li>
              <li>Python installed on your system</li>
              <li>Git installed (or permission to install it via Homebrew)</li>
            </ul>
          </div>

          <h2 className="mt-8 mb-4 text-xl font-semibold">4. License</h2>
          <p>
            TurboClone is released as open source software. The use of the
            software is subject to the conditions of the MIT license, which
            allows the use, copying, modification, merging, publishing,
            distribution, sublicensing and/or selling of copies of the software.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p>
            The software is provided &quot;as is&quot;, without warranty of any
            kind, express or implied. In no event shall the authors or copyright
            holders be liable for any claim, damages or other liability, whether
            in an action of contract, tort or otherwise, arising from, out of or
            in connection with the software or the use or other dealings in the
            software.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify or replace these terms at any time.
            Changes will take effect immediately after posting the updated
            terms. It is your responsibility to periodically check the terms for
            any updates.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">7. Contact</h2>
          <p>
            If you have questions regarding these terms, you can contact us at:{" "}
            <a
              href="mailto:lorenzopalaia53@gmail.com"
              className="text-brand hover:underline"
            >
              lorenzopalaia53@gmail.com
            </a>
          </p>

          <div className="border-border/40 text-muted-foreground mt-12 border-t pt-6 text-sm">
            <p>
              By returning to the site, you accept these terms of service. Also
              see our{" "}
              <Link href="/privacy" className="text-foreground hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how we handle your data.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

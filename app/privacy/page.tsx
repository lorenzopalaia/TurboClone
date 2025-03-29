import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Information on how TurboClone handles data and respects users' privacy.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="max-w-container mx-auto px-4">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-8">
            Last updated: March 29, 2025
          </p>

          <p className="lead">
            This Privacy Policy describes how your data is collected, used, and
            shared when you use TurboClone.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            1. Data Collection
          </h2>
          <div className="space-y-2">
            <p>
              TurboClone is designed to work locally on your computer without
              sending your data to remote servers. The application only collects
              the following information:
            </p>
            <ul className="list-disc pl-6">
              <li>
                URLs of GitHub repositories you intend to clone, limited to the
                moment of the cloning operation
              </li>
              <li>
                Local paths of folders where you want to clone repositories
              </li>
            </ul>
            <p>
              This data is not permanently stored or shared with us or third
              parties.
            </p>
          </div>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            2. How We Use Data
          </h2>
          <div className="space-y-2">
            <p>
              Temporarily collected data (repository URLs and local paths) is
              used exclusively for:
            </p>
            <ul className="list-disc pl-6">
              <li>Executing the requested repository cloning operation</li>
              <li>Facilitating integration with macOS Finder</li>
            </ul>
          </div>

          <h2 className="mt-8 mb-4 text-xl font-semibold">3. Data Sharing</h2>
          <p>
            TurboClone does not share any data with third parties. The
            application works locally on your computer and does not send data to
            external servers.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            4. GitHub and External Services
          </h2>
          <p>
            When you clone a repository using TurboClone, the application
            interacts with GitHub through Git. This interaction is subject to
            GitHub&#39;s terms of service and privacy policy. TurboClone only
            acts as a facilitator for this interaction, without storing
            credentials or other sensitive information.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">5. Data Security</h2>
          <p>
            Since TurboClone operates locally on your computer and does not
            permanently store data, there are no data security risks
            specifically related to using the application.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">6. Your Rights</h2>
          <p>
            Since we do not collect or store personal data, there are no
            specific rights to exercise in relation to personal data. The use of
            the application is completely private and under your control.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">
            7. Changes to Privacy Policy
          </h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Any
            changes will be posted on this page. We recommend that you
            periodically check this page for any updates.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold">8. Contact</h2>
          <p>
            For any questions regarding this privacy policy, you can contact us
            at:{" "}
            <a
              href="mailto:lorenzopalaia53@gmail.com"
              className="text-brand hover:underline"
            >
              lorenzopalaia53@gmail.com
            </a>
          </p>

          <div className="border-border/40 text-muted-foreground mt-12 border-t pt-6 text-sm">
            <p>
              By using TurboClone, you accept this privacy policy. Also consult
              our{" "}
              <Link href="/terms" className="text-foreground hover:underline">
                Terms of Service
              </Link>{" "}
              to understand the conditions of use of the application.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

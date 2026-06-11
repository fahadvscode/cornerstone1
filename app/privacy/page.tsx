import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Cornerstone Towns Brampton",
  description:
    "Privacy policy for cornerstonetownsbrampton.ca. Learn how Fahad Javed and Century 21 Property Zone Realty Inc. collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Privacy Policy", "/privacy")} />
      <PageHeader title="Privacy Policy" />

      <section className="section-padding">
        <div className="container-site max-w-3xl prose-site">
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>Introduction</h2>
          <p>
            This privacy policy explains how {CONTACT.agent} ({CONTACT.brokerage})
            collects, uses, and protects your personal information when you visit
            cornerstonetownsbrampton.ca or submit a registration form.
          </p>

          <h2>Information We Collect</h2>
          <p>When you register or contact us, we may collect:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Buyer preferences (unit type, investor/end-user status)</li>
            <li>Whether you are working with a realtor</li>
            <li>Message content and comments</li>
            <li>UTM parameters and page source information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Register you for VIP access to Cornerstone Towns</li>
            <li>Contact you about floor plans, pricing, and availability</li>
            <li>Provide real estate advisory services</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            Your information may be shared with our CRM system (Follow Up Boss),
            automation tools (n8n), and SMS services for follow-up communication.
            We do not sell your personal information to third parties.
          </p>

          <h2>Data Storage</h2>
          <p>
            Registration data is stored securely in Supabase. We retain your
            information for as long as necessary to provide our services or as
            required by law.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            information by contacting {CONTACT.email}.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, contact {CONTACT.agent} at{" "}
            {CONTACT.email} or {CONTACT.phone}.
          </p>
        </div>
      </section>
    </>
  );
}

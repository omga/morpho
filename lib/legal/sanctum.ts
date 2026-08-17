import type { LegalApp } from "./index";

/**
 * TEMPLATE — every [TODO] must be replaced with what the app actually does
 * before `draft` is set to false. Run `npm run legal:check` to find them.
 */
export const sanctum: LegalApp = {
  slug: "sanctum",
  name: "Sanctum",
  description: "[TODO: one-line description of what Sanctum does]",
  publisher: "Morpho Studio",
  contactEmail: "hello@morphostudio.dev",
  docs: [
    {
      kind: "privacy",
      title: "Privacy Policy",
      updated: "17 August 2026",
      draft: true,
      blocks: [
        {
          p: "This policy explains what Sanctum collects, why, and what you can do about it. Sanctum is published by Morpho Studio, which is the data controller for the information described here."
        },
        { h2: "What we collect" },
        {
          p: "[TODO: list exactly what the app collects. Be specific and complete — app stores compare this against your data-safety declaration, and a mismatch causes rejection.]"
        },
        {
          list: [
            "[TODO: e.g. Account information — email address, when you create an account]",
            "[TODO: e.g. Content you create in the app, stored on your device / on our servers]",
            "[TODO: e.g. Diagnostic data — crash reports and performance metrics]",
            "[TODO: remove any line that does not apply]"
          ]
        },
        { h2: "What we do not collect" },
        {
          p: "[TODO: state plainly what you never collect — location, contacts, advertising identifiers, etc. This section builds more trust than any other, so be concrete.]"
        },
        { h2: "How we use your information" },
        {
          list: [
            "To provide the features you use in the app",
            "To diagnose crashes and improve performance",
            "[TODO: any other genuine use — never list a use you do not have]"
          ]
        },
        { h2: "Third-party services" },
        {
          p: "[TODO: name every third party that receives data — analytics, crash reporting, authentication, payments, AI providers — and link their privacy policies. If there are none, say so explicitly.]"
        },
        { h2: "Legal bases for processing" },
        {
          p: "Where the GDPR applies, we process personal data on the basis of performing our contract with you (providing the app's features), our legitimate interest in keeping the app stable and secure, and your consent where we ask for it."
        },
        { h2: "How long we keep it" },
        {
          p: "[TODO: state retention periods. E.g. account data until you delete your account; diagnostic data for N months.]"
        },
        { h2: "Deleting your data" },
        {
          p: "[TODO: describe how a user requests deletion, in-app and by email, and how long it takes. Google Play requires a documented deletion route — this section is mandatory, not optional.]"
        },
        { h2: "Your rights" },
        {
          p: "Depending on where you live, you may have the right to access the personal data we hold about you, correct it, delete it, object to processing, or request a copy in portable form. Email us and we will respond within 30 days."
        },
        { h2: "Children" },
        {
          p: "[TODO: state the minimum age and confirm you do not knowingly collect data from children under it. Required for both stores.]"
        },
        { h2: "Security" },
        {
          p: "[TODO: describe the real measures — encryption in transit, encryption at rest, authentication. Do not claim protections the app does not implement.]"
        },
        { h2: "International transfers" },
        {
          p: "[TODO: name the countries or regions where data is stored and processed, if data leaves the user's own device.]"
        },
        { h2: "Changes to this policy" },
        {
          p: "If we change this policy materially, we will update the date at the top of this page and, where the change affects how we handle your data, notify you in the app."
        },
        { h2: "Contact" },
        {
          p: "Questions, requests, or complaints: hello@morphostudio.dev. If you are in the EU or UK and are unhappy with our response, you may lodge a complaint with your local data protection authority."
        }
      ]
    },
    {
      kind: "terms",
      title: "Terms of Service",
      updated: "17 August 2026",
      draft: true,
      blocks: [
        {
          p: "These terms govern your use of Sanctum, published by Morpho Studio. By installing or using the app, you agree to them."
        },
        { h2: "Your licence to use the app" },
        {
          p: "We grant you a personal, non-exclusive, non-transferable licence to use Sanctum on devices you own or control, for your own purposes, in line with these terms and the rules of the app store you installed it from."
        },
        { h2: "What you may not do" },
        {
          list: [
            "Reverse engineer, decompile, or attempt to extract the source code of the app",
            "Use the app to break the law or infringe anyone else's rights",
            "Interfere with the app's operation or attempt to gain unauthorised access to our systems",
            "[TODO: any app-specific restriction]"
          ]
        },
        { h2: "Your content" },
        {
          p: "[TODO: if users create or upload content, state that they keep ownership of it and grant only the limited licence you need to operate the app. If the app has no user content, replace this section with a sentence saying so.]"
        },
        { h2: "Purchases and subscriptions" },
        {
          p: "[TODO: describe paid features, subscription renewal, and how to cancel — or state that the app is free with no purchases. Note that purchases made through the App Store or Google Play are governed by their refund policies, not ours.]"
        },
        { h2: "Availability" },
        {
          p: "We work to keep Sanctum available and functional, but we do not guarantee uninterrupted service. We may update, change, or discontinue features, and we may need to take the service down for maintenance."
        },
        { h2: "Disclaimer" },
        {
          p: "The app is provided “as is”, without warranties of any kind to the extent the law allows. [TODO: if the app touches health, finance, safety, or legal decisions, add an explicit line stating it does not provide professional advice and should not be relied on as such.]"
        },
        { h2: "Limitation of liability" },
        {
          p: "To the extent permitted by law, Morpho Studio is not liable for indirect or consequential losses arising from your use of the app. Nothing in these terms limits liability that cannot be limited by law."
        },
        { h2: "Ending your use" },
        {
          p: "You can stop using Sanctum at any time by deleting it from your device. We may suspend or end your access if you breach these terms."
        },
        { h2: "Governing law" },
        {
          p: "[TODO: name the jurisdiction whose law governs these terms — normally where the publishing entity is registered.]"
        },
        { h2: "Changes to these terms" },
        {
          p: "We may update these terms. The date at the top of this page shows when they last changed, and continuing to use the app after a change means you accept the updated terms."
        },
        { h2: "Contact" },
        { p: "Questions about these terms: hello@morphostudio.dev" }
      ]
    }
  ]
};

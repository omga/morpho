import type { LegalApp } from "./index";

export const sanctum: LegalApp = {
  slug: "sanctum",
  name: "Sanctum",
  description:
    "Astrology readings, compatibility and daily rituals, computed on your device.",
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
        {
          p: "Sanctum has no accounts and no server of its own. Your readings are calculated on your phone from bundled data and orbital mechanics, and the app works offline. The short version of this policy is that the things you tell Sanctum about yourself never leave your device — and the sections below say exactly what does."
        },

        { h2: "What stays on your device" },
        {
          p: "The following is stored only in Sanctum's private storage on your phone. It is never transmitted to us or to anyone else, and we have no way to read it:"
        },
        {
          list: [
            "Your name, as you typed it during onboarding",
            "Your date of birth, and the star sign derived from it",
            "Your answers to the onboarding questions",
            "Journal entries you write, including the prompt each one answers",
            "Daily energy check-ins",
            "Rituals and sound sessions you complete, and your streak",
            "Oracle cards you have drawn",
            "Compatibility readings you have opened, including the name and birth date you entered for the other person"
          ]
        },
        {
          p: "Deleting the app deletes all of it. There is no copy anywhere else."
        },

        { h2: "What leaves your device" },
        {
          p: "Three services receive data, and none of them receives anything from the list above. Each is described in full below."
        },

        { h2: "Anonymous product analytics" },
        {
          p: "Sanctum records which features are used, so we can tell which parts of the app are working. Events carry no name, no birth date, no journal text and no free-form input of any kind — the analytics system is built so that it is not possible to attach them. The complete list of events is:"
        },
        {
          p: "onboarding_shown, quiz_started, quiz_question_shown, quiz_question_answered, quiz_completed, payoff_shown, payoff_shared, card_revealed, energy_checked_in, journal_entry_saved, ritual_completed, session_started, match_started, match_revealed, match_invite_sent, match_shared, paywall_shown, paywall_dismissed, purchase_started, purchase_completed, reminder_permission_asked, reminder_permission_resolved."
        },
        {
          p: "The only details attached to them are: which onboarding question and answer option was chosen (these identifiers are the same for every user and come from a file bundled in the app), which sound session or moon phase a screen referred to, which subscription plan was viewed, an energy level from one to five, whether a permission was granted, and — for a journal entry — a coarse size band such as \"short\" or \"long\". The text of the entry is never included. Your star sign is deliberately not reported."
        },
        {
          p: "Our analytics provider also records technical information sent by your device with any internet request: your IP address, device model, operating system version and app version. No profile is built from it, because Sanctum never tells the provider who you are — it does not call any identification function, and person profiles are switched off."
        },

        { h2: "Crash and error diagnostics" },
        {
          p: "When something fails, Sanctum sends a diagnostic report so we can fix it. A report contains the error, the code path that produced it, your device model, operating system version and app version. Screenshots and view-hierarchy capture are switched off, so no report can contain what was on your screen. Performance tracing is switched off. Where a report would otherwise include a name, a birth date or a person identifier passed between screens, those values are replaced with \"[redacted]\" before the report is sent."
        },

        { h2: "Subscription status" },
        {
          p: "If you buy a subscription, our billing provider records the purchase, its renewal status and the country of the store account, so the app knows whether to unlock paid features. The provider assigns your installation a random identifier that is not linked to any account, email address or name, because Sanctum never supplies one. Your payment details are handled entirely by Apple or Google and are never seen by us or by the billing provider."
        },

        { h2: "What we never collect" },
        {
          p: "Sanctum has no account system, so there is no email address, no username and no password. Beyond that, the app does not request or receive any of the following, and the permissions to do so are not present in the app at all:"
        },
        {
          list: [
            "Location, of any precision",
            "Contacts, calendar or call history",
            "Camera, photo library or microphone",
            "Advertising identifiers, and any form of cross-app or cross-site tracking",
            "Session recordings or screen recordings",
            "Health, fitness or biometric data"
          ]
        },
        {
          p: "Sanctum contains no advertising and no advertising SDKs, and we do not sell or share personal information with anyone for advertising purposes."
        },

        { h2: "How we use your information" },
        {
          list: [
            "To provide the features you use in the app",
            "To understand which features are used, so we can decide what to improve",
            "To diagnose crashes and errors, and keep the app stable",
            "To determine whether you have an active subscription"
          ]
        },

        { h2: "Third-party services" },
        {
          p: "These are every third party that receives data from Sanctum. There are no others."
        },
        {
          list: [
            "PostHog — anonymous product analytics. Data is processed in the United States. https://posthog.com/privacy",
            "Sentry — crash and error diagnostics. Data is processed in the European Union (Germany). https://sentry.io/privacy/",
            "RevenueCat — subscription status. Data is processed in the United States. https://www.revenuecat.com/privacy/",
            "Apple App Store / Google Play — payment processing and app distribution, under their own terms. https://www.apple.com/legal/privacy/ and https://policies.google.com/privacy"
          ]
        },
        {
          p: "Sanctum makes no other network requests. It does not load fonts, images or content from the internet, and readings are never sent anywhere to be calculated."
        },

        { h2: "Legal bases for processing" },
        {
          p: "Where the GDPR applies, we process personal data on the basis of performing our contract with you (providing the app's features and your subscription), and our legitimate interest in keeping the app stable and understanding how it is used. Where we ask for your consent — for example, permission to send you a daily reading notification — that consent is the basis, and you can withdraw it at any time in your device settings."
        },

        { h2: "How long we keep it" },
        {
          list: [
            "Everything on your device is kept until you delete it in the app or uninstall Sanctum. We never receive it, so we cannot keep it.",
            "Analytics events and diagnostic reports are kept by our providers according to the retention period configured on our accounts, and are deleted automatically when it expires.",
            "Subscription records are kept by our billing provider for as long as the subscription is active and afterwards as required for accounting and store reconciliation."
          ]
        },

        { h2: "Deleting your data" },
        {
          p: "Deleting the app from your device permanently deletes everything Sanctum has stored about you — your name, your birth date, your journal, your readings and your history. Nothing survives it, because no copy exists anywhere else. You can also delete individual journal entries inside the app at any time."
        },
        {
          p: "For the anonymous analytics and diagnostic records described above, we want to be straightforward about a limitation: because Sanctum never identifies you, we hold nothing that links those records to you, and so we cannot find and delete \"your\" records on request. This is a consequence of collecting as little as we do rather than a refusal, and where the GDPR applies it is the situation described by Article 11. If you would like us to stop collecting them entirely, email us and we will explain how to do that for your installation."
        },
        {
          p: "If you have an active subscription and want the associated purchase record removed, email hello@morphostudio.dev and we will action it with our billing provider. We respond to all requests within 30 days."
        },

        { h2: "Your rights" },
        {
          p: "Depending on where you live, you may have the right to access the personal data we hold about you, correct it, delete it, object to processing, or request a copy in portable form. Email us and we will respond within 30 days. Note that for most of what Sanctum handles, the answer is that we hold nothing — the data is on your device and under your control."
        },

        { h2: "Children" },
        {
          p: "Sanctum is not intended for children. You must be at least 16 years old to use it. We do not knowingly collect data from anyone under that age, and if we learn that we have, we will delete it. If you believe a child has been using Sanctum, contact us at hello@morphostudio.dev."
        },

        { h2: "Security" },
        {
          p: "The information Sanctum stores on your device is held in the app's private storage, which the operating system prevents other apps from reading, and is covered by your device's own encryption when your device is locked with a passcode. All network requests use encrypted connections (TLS)."
        },
        {
          p: "We do not add a separate password or encryption layer of our own on top of the operating system's, so anyone with access to your unlocked device can open the app and read your journal. If that matters to you, use your device's screen lock."
        },

        { h2: "International transfers" },
        {
          p: "Analytics and subscription data are processed in the United States, and diagnostic reports are processed in the European Union (Germany). Where data leaves the UK or the European Economic Area, our providers rely on the European Commission's Standard Contractual Clauses. Everything else stays on your device and crosses no border at all."
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

        { h2: "Sanctum is for entertainment" },
        {
          p: "Sanctum produces astrological readings, compatibility scores and reflective prompts. They are for entertainment and self-reflection only. They are not advice, and they are not a prediction of anything that will happen."
        },
        {
          p: "Nothing in the app is medical, psychological, financial or legal advice, and it must not be used as a substitute for a qualified professional. Do not make a decision about your health, your money, your safety or a relationship on the basis of a reading. If you are struggling with your mental health, please contact a doctor or a local support service."
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
            "Enter another person's name or date of birth where you have no reasonable basis to do so, or use a reading to harass, embarrass or make claims about them",
            "Present an image exported from Sanctum as anything other than entertainment, or alter one so that it appears to say something the app did not"
          ]
        },

        { h2: "Readings about public figures" },
        {
          p: "Sanctum includes a catalogue of public figures so you can compare yourself against them. It uses their published dates of birth, which are matters of public record, and nothing else — there are no photographs and no other personal information. A reading is generated by the same calculation applied to everyone and is not a statement of fact about that person. Their inclusion does not imply any affiliation with, endorsement of, or involvement in Sanctum."
        },

        { h2: "Your content" },
        {
          p: "Your journal entries, your answers and everything else you write in Sanctum belong to you. They are stored on your device and we never receive them, so we take no licence over them of any kind and could not use them even if we wanted to. What you choose to share out of the app, using the share button, is yours to share and yours to be responsible for."
        },

        { h2: "Purchases and subscriptions" },
        {
          p: "Sanctum is free to download, and some features require Sanctum Premium. Premium is offered as a monthly or an annual subscription, and the annual plan may include a free trial. Exact prices are shown in the app in your local currency before you buy, and are set by the store."
        },
        {
          p: "Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before it ends. If a free trial is offered and you do not cancel before it ends, it converts to a paid subscription. Manage or cancel your subscription in your Apple App Store or Google Play account settings — not in Sanctum, because we have no account to cancel."
        },
        {
          p: "Payment is taken by Apple or Google, and refunds are governed by their policies rather than ours. We cannot issue a refund for a purchase made through a store, but if something has gone wrong, email us and we will help you take it up with them."
        },

        { h2: "Availability" },
        {
          p: "We work to keep Sanctum available and functional, but we do not guarantee uninterrupted service. We may update, change, or discontinue features, and we may need to take the service down for maintenance. Because readings are calculated on your device, the core of the app continues to work without a network connection."
        },

        { h2: "Disclaimer" },
        {
          p: "The app is provided “as is”, without warranties of any kind to the extent the law allows. We do not warrant that the readings are accurate, complete or suitable for any purpose, and — as set out at the top of these terms — they are entertainment rather than advice."
        },

        { h2: "Limitation of liability" },
        {
          p: "To the extent permitted by law, Morpho Studio is not liable for indirect or consequential losses arising from your use of the app. Nothing in these terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence, or for fraud."
        },

        { h2: "Ending your use" },
        {
          p: "You can stop using Sanctum at any time by deleting it from your device, which also deletes everything it has stored. We may suspend or end your access if you breach these terms. Deleting the app does not cancel a subscription — cancel that in your store account settings."
        },

        { h2: "Governing law" },
        {
          p: "[TODO: name the jurisdiction whose law governs these terms — the country where Morpho Studio is registered — and the courts that have jurisdiction. This is the one thing in this document that cannot be derived from the app, and it must match the registered entity behind the store listing.]"
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

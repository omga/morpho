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
      updated: "23 September 2026",
      draft: false,
      blocks: [
        {
          p: "This policy explains what Sanctum collects, why, and what you can do about it. Sanctum is published by Morpho Studio, which is the data controller for the information described here."
        },
        {
          p: "Sanctum has no accounts. Your readings are calculated on your phone from bundled data and orbital mechanics, and the app works offline."
        },
        {
          p: "One feature is different, and this policy is careful about it. The AI astrologer sends the computed numbers behind a reading, and the question you type, to be answered by an AI. It does nothing at all until you have read a screen that says so and agreed to it, and even then it never sends your name, anyone else's name, or any birth date. Everything else you tell Sanctum about yourself stays on your device. The sections below say exactly what leaves it."
        },

        { h2: "What stays on your device" },
        {
          p: "The following is stored only in Sanctum's private storage on your phone. With the one exception noted in the list, it is never transmitted to us or to anyone else, and we have no way to read it:"
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
            "Compatibility readings you have opened, including the name and birth date you entered for the other person",
            "Conversations with the AI astrologer. The transcript is stored here and on no server. Asking a question does mean sending it to be answered — that is the exception, and \"The AI astrologer\" below says exactly what goes with it and what does not"
          ]
        },
        {
          p: "Deleting the app deletes all of it. There is no copy anywhere else."
        },

        { h2: "What leaves your device" },
        {
          p: "Four things leave your device. Three of them — anonymous analytics, crash diagnostics and subscription status — receive nothing from the list above. The fourth is the AI astrologer, which sends a question you have typed and the computed numbers behind the reading you are looking at, and only after you have agreed to it. Each is described in full below."
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

        { h2: "The AI astrologer" },
        {
          p: "Sanctum includes an astrologer you can ask questions — about a compatibility reading, about a relationship report, or about your own chart. Its answers are written by an artificial intelligence, not by a person. They can be wrong, and they are entertainment rather than advice."
        },
        {
          p: "It is the only part of Sanctum that sends anything you have written, or anything computed from what you told the app, off your device — and it is off until you turn it on. The first time you open it, the app shows a screen setting out everything in this section and asks you to agree. If you decline, nothing is sent and the feature stays closed. If you agree and change your mind, you can withdraw at any time under Settings › AI astrologer, and it stops."
        },
        {
          p: "When you ask a question, this is sent:"
        },
        {
          list: [
            "The computed numbers behind the reading on your screen — planetary positions in degrees, the angles between them, compatibility scores, the moon phase, today's transit. All of it is numbers and fixed labels such as \"venus\" or \"square\"",
            "The question you typed, and the conversation so far, with names removed from them first",
            "A two-letter language code, so the answer comes back in the language you read the app in",
            "A random identifier for your installation, sent as a header so the server can limit how many questions an hour any one installation may ask. It is not an account, it is not linked to anything else in the app, and it is not written to any log"
          ]
        },
        {
          p: "This is never sent, and the app is built so that it cannot be:"
        },
        {
          list: [
            "Your name, or the name of anyone you have entered. The data structure that carries a reading has no field a name could occupy, the app rewrites the names it knows out of your question before it is sent, and the server rejects a request containing one",
            "Any date of birth or time of birth. A chart can be described by positions alone, and the date that produced them is not sent",
            "Your journal, your onboarding answers, or anything from another screen"
          ]
        },
        {
          p: "Two organisations receive it. The first is a single small program we run on Supabase, which does nothing but pass the request on. It keeps no database, stores no conversation, and writes only a metadata line for each request: which screen the question came from, the language, how many characters were returned, how long it took, and whether it failed. Never the question, never the answer. The second is DeepSeek, which writes the answer and receives the request as described above."
        },
        {
          p: "The conversation itself is kept on your phone and nowhere else. Deleting a conversation in the app deletes it. Withdrawing your agreement stops anything further being sent but does not erase conversations you have already had — those are on your device, and yours to delete."
        },
        {
          p: "One thing worth saying plainly: the protections above cover the information Sanctum holds about you. They cannot cover something you type yourself. If you write a surname, an address or a phone number into the message box, it is sent as part of your question. Please do not."
        },

        { h2: "The palm reading" },
        {
          p: "Sanctum can read your palm. You hold your hand up to the camera, the app finds the lines and shape of your palm, and it turns what it finds into a reading. Like every other reading in Sanctum, it is entertainment."
        },
        {
          p: "This is the only feature that uses the camera, and the only reason Sanctum asks for camera permission. It asks when you open the palm reader and not before. If you decline, the palm reader is the only thing that stops working."
        },
        {
          p: "Nothing from the scan leaves your device. The picture is analysed on your phone, by a model bundled inside the app, and there is no server involved at any point — there is no address the app could send a picture to. The picture is not saved either: it is not written into Sanctum’s storage, it is not added to your photo library, and neither the image nor anything measured from it appears in analytics or in a diagnostic report. Close the reader and nothing of it remains, on your phone or anywhere else."
        },
        {
          p: "One point we would rather be precise about than reassuring about. Measuring the shape of a hand is, in some places, capable of being treated as biometric information — even when it happens on your own phone and stays there. Sanctum does not use it to recognise you and could not: there is no account for it to attach to, nothing is kept once you leave the screen, and no record of it ever reaches us. We would rather describe what happens than rely on a label."
        },

        { h2: "What we never collect" },
        {
          p: "Sanctum has no account system, so there is no email address, no username and no password. Beyond that, the app does not request or receive any of the following, and the permissions to do so are not present in the app at all:"
        },
        {
          list: [
            "Location, of any precision",
            "Contacts, calendar or call history",
            "Your photo library, or your microphone",
            "Advertising identifiers, and any form of cross-app or cross-site tracking",
            "Session recordings or screen recordings",
            "Health or fitness data"
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
            "Supabase — hosts the one function that passes an AI astrologer question onward. It stores nothing. The project is hosted in the United States. https://supabase.com/privacy",
            "DeepSeek — writes the AI astrologer's answers. Data is processed in China. https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
            "Apple App Store / Google Play — payment processing and app distribution, under their own terms. https://www.apple.com/legal/privacy/ and https://policies.google.com/privacy"
          ]
        },
        {
          p: "Sanctum makes no other network requests. It does not load fonts, images or content from the internet, and no reading is ever sent anywhere to be calculated — the calculation happens on your phone. The AI astrologer sends the result of that calculation, and only when you have asked it something."
        },

        { h2: "Legal bases for processing" },
        {
          p: "Where the GDPR applies, we process personal data on the basis of performing our contract with you (providing the app's features and your subscription), and our legitimate interest in keeping the app stable and understanding how it is used. Where we ask for your consent — permission to send you a daily reading notification, and your agreement before the AI astrologer sends anything — that consent is the basis. You can withdraw notification consent in your device settings, and AI astrologer consent under Settings › AI astrologer, at any time and without affecting anything you agreed to before."
        },

        { h2: "How long we keep it" },
        {
          list: [
            "Everything on your device is kept until you delete it in the app or uninstall Sanctum. We never receive it, so we cannot keep it.",
            "Analytics events and diagnostic reports are kept by our providers according to the retention period configured on our accounts, and are deleted automatically when it expires.",
            "Subscription records are kept by our billing provider for as long as the subscription is active and afterwards as required for accounting and store reconciliation.",
            "AI astrologer conversations are kept on your device until you delete them. Our own server keeps nothing: it holds a request only for as long as it takes to answer, and its logs contain no question and no answer. What DeepSeek retains of what it receives is governed by its own policy, linked above."
          ]
        },

        { h2: "Deleting your data" },
        {
          p: "Deleting the app from your device permanently deletes everything Sanctum has stored about you — your name, your birth date, your journal, your readings, your conversations with the AI astrologer and your history. Nothing survives it, because no copy exists anywhere else. You can also delete individual journal entries and individual conversations inside the app at any time."
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
          p: "Analytics and subscription data are processed in the United States, and diagnostic reports are processed in the European Union (Germany). Where data leaves the UK or the European Economic Area, those providers rely on the European Commission's Standard Contractual Clauses."
        },

        {
          p: "The AI astrologer is the exception, and we would rather state it clearly than bury it. A question you ask it is sent to DeepSeek and processed in China, which is not covered by a European Commission adequacy decision. We rely on your explicit consent to that specific transfer: the screen you agree to before the feature does anything names DeepSeek, says what is sent, and says that it is sent to be answered. If you would rather your data did not go there, decline that screen or withdraw under Settings › AI astrologer — the rest of Sanctum works exactly as before, because everything else is computed on your phone."
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
      updated: "5 September 2026",
      draft: false,
      blocks: [
        {
          p: "These terms govern your use of Sanctum, published by Morpho Studio. By installing or using the app, you agree to them."
        },

        { h2: "Sanctum is for entertainment" },
        {
          p: "Sanctum produces astrological readings, compatibility scores, reflective prompts and answers from an AI astrologer. They are for entertainment and self-reflection only. They are not advice, and they are not a prediction of anything that will happen."
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
            "Present an image exported from Sanctum as anything other than entertainment, or alter one so that it appears to say something the app did not",
            "Type another person's contact details, address, health information or other personal information into the AI astrologer — the app removes the names it knows before a question is sent, and it cannot remove what it has never been told",
            "Attempt to use the AI astrologer to generate content unrelated to the reading it is attached to, or to extract or interfere with the instructions it operates under"
          ]
        },

        { h2: "Readings about public figures" },
        {
          p: "Sanctum includes a catalogue of public figures so you can compare yourself against them. It uses their published dates of birth, which are matters of public record, and nothing else — there are no photographs and no other personal information. A reading is generated by the same calculation applied to everyone and is not a statement of fact about that person. Their inclusion does not imply any affiliation with, endorsement of, or involvement in Sanctum."
        },

        { h2: "The AI astrologer" },
        {
          p: "The AI astrologer answers questions about a reading, a report, or your own chart. Its answers are generated by an artificial intelligence rather than written by a person or by an astrologer, they will sometimes be wrong, and — as with every other reading in Sanctum — they are entertainment and not advice of any kind."
        },
        {
          p: "It sends data off your device, so it does nothing until you have read the screen describing that and agreed. The privacy policy sets out precisely what is sent, what is not, and who receives it. You can withdraw your agreement at any time under Settings › AI astrologer."
        },
        {
          p: "Sanctum Premium includes five messages each week, shared across every conversation and reset on a Monday; unused messages do not carry over. You can also buy a pack of five messages on its own, with or without a subscription. A pack is consumed as you use it: it is not a subscription, it does not renew, and — because it is not restorable — it is tied to the device it was bought on."
        },
        {
          p: "The feature depends on a third-party model provider. We may change provider, change the number of messages included, or withdraw the feature, and we will not do so in a way that takes away messages you have already bought."
        },

        { h2: "Your content" },
        {
          p: "Your journal entries, your answers and everything else you write in Sanctum belong to you. Your journal, your onboarding answers and your readings are stored on your device and we never receive them, so we take no licence over them of any kind and could not use them even if we wanted to."
        },
        {
          p: "Questions you ask the AI astrologer are the exception, because answering one means sending it. They still belong to you: we take no licence over them, we store neither the question nor the answer, and they are passed to the model provider to be answered and for no other purpose. What that provider retains is covered by its own policy, linked in our privacy policy."
        },
        {
          p: "What you choose to share out of the app, using the share button, is yours to share and yours to be responsible for."
        },

        { h2: "Purchases and subscriptions" },
        {
          p: "Sanctum is free to download, and some features require Sanctum Premium. Premium is offered as a monthly or an annual subscription, and the annual plan may include a free trial. Sanctum also sells one-off purchases that are not subscriptions: a full relationship report for a pairing, and a pack of AI astrologer messages. Exact prices are shown in the app in your local currency before you buy, and are set by the store."
        },
        {
          p: "Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before it ends. If a free trial is offered and you do not cancel before it ends, it converts to a paid subscription. Manage or cancel your subscription in your Apple App Store or Google Play account settings — not in Sanctum, because we have no account to cancel."
        },
        {
          p: "One-off purchases do not renew and are not restored onto a second device. Because Sanctum has no account, a report you have unlocked and messages you have bought live on the device you bought them on, and the app says so before you pay."
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
          p: "These Terms are governed by the laws of Ukraine. Any disputes arising out of or in connection with these Terms shall be subject to the jurisdiction of the competent courts of Ukraine."
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

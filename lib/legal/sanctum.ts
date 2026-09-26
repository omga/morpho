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
      updated: "27 September 2026",
      draft: false,
      blocks: [
        {
          p: "This policy explains what Sanctum collects, why, and what you can do about it. Sanctum is published by Morpho Studio, which is the data controller for the information described here."
        },
        {
          p: "Sanctum needs no account for anything it does on your phone. Your readings are calculated there from bundled data and orbital mechanics, and the app works offline."
        },
        {
          p: "Two features work differently, and this policy is careful about both. The first is the AI astrologer, which sends the computed numbers behind a reading, and the question you type, to be answered by an AI. It does nothing at all until you have read a screen that says so and agreed to it, and even then it never sends your name or anyone else's name. It does not send a birth date either, but the planetary positions it does send are exact enough that a date and time of birth could be worked out from them."
        },
        {
          p: "The second is the chat with astrologers, where a real person answers your question. That needs an account — an email address — and the conversation is kept on our server, because it has to wait there for your reader and come back to you. Nothing in it is asked for until you choose a reader, and the rest of Sanctum works without it."
        },
        {
          p: "Everything else you tell Sanctum about yourself stays on your device. The sections below say exactly what leaves it."
        },

        { h2: "What stays on your device" },
        {
          p: "The following is stored only in Sanctum's private storage on your phone. With the exceptions noted in the list, it is never transmitted to us or to anyone else, and we have no way to read it:"
        },
        {
          list: [
            "Your name, as you typed it during onboarding. The chat with astrologers uses a separate name you choose for readers",
            "Your date of birth, and the star sign derived from it. The date itself is never sent, but if you use the AI astrologer, the planetary positions it sends can be used to work it out — see \"The AI astrologer\" below",
            "Your time and place of birth, if you gave them. Neither is ever sent as such, and the place is found in a list of towns bundled in the app, so nothing you type into the search leaves your phone. A chart you choose to share in the chat carries your rising sign and houses, which are calculated from both — see \"The chat with astrologers\" below",
            "Your answers to the onboarding questions",
            "Journal entries you write, including the prompt each one answers",
            "Daily energy check-ins",
            "Rituals and sound sessions you complete, and your streak",
            "Oracle cards you have drawn",
            "Compatibility readings you have opened, including the name and birth date you entered for the other person. As with your own, their birth date is never sent, but asking the AI astrologer about the reading sends positions it can be worked out from",
            "Conversations with the AI astrologer. The transcript is stored here and on no server. Asking a question does mean sending it to be answered — that is the exception, and \"The AI astrologer\" below says exactly what goes with it and what does not"
          ]
        },
        {
          p: "Deleting the app deletes all of it. There is no copy anywhere else."
        },

        { h2: "What leaves your device" },
        {
          p: "Five things can leave your device. Three of them — anonymous analytics, crash diagnostics and subscription status — receive nothing from the list above. The other two you choose to use: the AI astrologer, which sends a question you have typed and the computed numbers behind the reading you are looking at, and only after you have agreed to it; and the chat with astrologers, which sends what you write to a reader, and only once you have signed in and written it. Each is described in full below."
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
          p: "If you buy a subscription, our billing provider records the purchase, its renewal status and the country of the store account, so the app knows whether to unlock paid features. The provider assigns your installation a random identifier, and never receives your email address or your name. If you sign in for the chat with astrologers, the app gives the provider your account's identifier instead — a random code, not your email — so that questions you buy are credited to your account. Your payment details are handled entirely by Apple or Google and are never seen by us or by the billing provider."
        },

        { h2: "The AI astrologer" },
        {
          p: "Sanctum includes an astrologer you can ask questions — about a compatibility reading, about a relationship report, or about your own chart. Its answers are written by an artificial intelligence, not by a person. They can be wrong, and they are entertainment rather than advice."
        },
        {
          p: "Apart from the chat with astrologers, described below, it is the only part of Sanctum that sends anything you have written, or anything computed from what you told the app, off your device — and it is off until you turn it on. The first time you open it, the app shows a screen setting out everything in this section and asks you to agree. If you decline, nothing is sent and the feature stays closed. If you agree and change your mind, you can withdraw at any time under Settings › AI astrologer, and it stops."
        },
        {
          p: "When you ask a question, this is sent:"
        },
        {
          list: [
            "The computed numbers behind the reading on your screen — planetary positions in degrees, the angles between them, compatibility scores, the moon phase, today's transit. All of it is numbers and fixed labels such as \"venus\" or \"square\". The positions are precise to a tenth of a degree, which is exact enough to work out the date of birth that produced them, and the time of birth where one was entered — yours, and that of anyone you ask about",
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

        { h2: "The chat with astrologers" },
        {
          p: "Sanctum lets you put a question to a real astrologer or tarot reader, who answers in writing. Readers are people, not an AI. They work with Morpho Studio under a written agreement that binds them to keep what you write confidential, not to copy it or take it outside Sanctum, and to delete anything they hold when they stop reading for us. Like every other reading in Sanctum, their answers are entertainment, not advice."
        },
        {
          p: "Browsing the readers needs nothing from you. Before your first question, the chat asks you to confirm that you are 18 or over, to choose a name for readers to call you, and to sign in. Signing in is your email address and a six-digit code sent to it; there is no password."
        },
        {
          p: "While your account exists, our server stores:"
        },
        {
          list: [
            "Your email address, used to send your sign-in codes and for nothing else. Readers never see it",
            "The name you chose for readers — a first name or a nickname. It is separate from the name you gave the app, which stays on your phone",
            "The language the app is in, so that notifications reach you in it",
            "When you confirmed you are 18 or over, and whether you have used your free question",
            "Your conversations: every message you and your readers write, tarot cards drawn in the chat, and any chart you share",
            "Your questions — when each was asked and whether it was answered, released or withdrawn — and your balance of questions, with every purchase, charge and refund that makes it up",
            "If you allow notifications: a token for your device, and any reader you asked us to tell you about when they come online",
            "Readers you have blocked or who have blocked you, and reports you make"
          ]
        },
        {
          p: "Who reads your conversations. The reader you write to reads everything in your thread with them, including what you write about other people. Nothing is removed first — unlike the AI astrologer, a reader answering a question about someone needs to know who it is about. We, Morpho Studio, can also read every thread, and do when a message is reported, when a message is held (below), or when there is a dispute about a question. Nobody else reads them."
        },
        {
          p: "Sharing your chart. You can share your chart with a reader from the chat. The share sends where the Sun, Moon and planets were when you were born, your rising sign and houses if you gave a birth place, and the time-zone offset used to calculate them. Your name, your birth date and your birth place are not sent, but an astrologer can work out your date and time of birth from the positions, and the screen that asks you to confirm the share says so. Each share appears in the thread as a message you can see."
        },
        {
          p: "Messages that try to move the conversation elsewhere. Scams in this field usually begin with \"write to me on Telegram\" or a request to pay outside the app. So a message from a reader that contains a phone number, an email address, a link, a social media handle or a request for payment is held for us to review before it reaches you, and we either release it or keep it back. Your own messages are not held; the app warns you before you send contact details of your own."
        },
        {
          p: "Blocking and reporting. You can block a reader, and report any message a reader writes. A report keeps a copy of the message as it was when reported, so that we can judge it even if the conversation is deleted later. Readers can block and report too."
        },
        {
          p: "Notifications. If you say yes to notifications, the app registers your device with Firebase Cloud Messaging, a Google service, which issues a token and an installation identifier that we store to reach it. A notification says only who did what — \"Maria answered\" — and never contains a word of what anyone wrote. You can turn notifications off in your device settings at any time; your answers wait in the chat either way."
        },
        {
          p: "Where it is kept. Sign-in codes are emailed through Resend, which receives your email address and the code. Everything else in this section is stored in our database on Supabase, in the United States, and is encrypted in transit and at rest. Deleting your account is described under \"Deleting your data\" below."
        },

        { h2: "The palm reading" },
        {
          p: "Sanctum can read your palm. You hold your hand up to the camera, the app finds the lines and shape of your palm, and it turns what it finds into a reading. Like every other reading in Sanctum, it is entertainment."
        },
        {
          p: "This is the only feature that uses the camera, and the only reason Sanctum asks for camera permission. It asks when you open the palm reader and not before. If you decline, the palm reader is the only thing that stops working."
        },
        {
          p: "Nothing from the scan reaches us. The picture is analysed on your phone by a model bundled inside the app; no server is involved at any point, and there is no address the app could send a picture to. Sanctum does not keep it either — it is not written into the app’s own storage, and neither the image nor anything measured from it appears in analytics or in a diagnostic report. Unless you save or share it yourself, closing the reader leaves nothing behind."
        },
        {
          p: "Saving and sharing are the exception, and both are yours to choose. Save writes the reading — your palm, with the lines drawn over it — into your phone’s own photo gallery, where it becomes an ordinary picture: we have no access to it, and you delete it like any other. Share hands that same image to your phone’s share sheet, and where it goes next is entirely your choice. Neither sends anything to us."
        },
        {
          p: "One point we would rather be precise about than reassuring about. Measuring the shape of a hand is, in some places, capable of being treated as biometric information — even when it happens on your own phone and stays there. Sanctum does not use it to recognise you and could not: nothing from it reaches an account or a server, nothing is kept once you leave the screen, and no record of it ever reaches us. We would rather describe what happens than rely on a label."
        },

        { h2: "What we never collect" },
        {
          p: "Sanctum asks for no account except for the chat with astrologers, and even there it asks for an email address and nothing else — no username and no password. Beyond that, the app does not request or receive any of the following, and the permissions to do so are not present in the app at all:"
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
            "To determine whether you have an active subscription",
            "To run the chat with astrologers: signing you in, carrying messages between you and your reader, keeping your balance of questions, sending the notifications you asked for, and keeping the chat safe by reviewing held and reported messages"
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
            "RevenueCat — subscription and purchase status, and, if you use the chat, your account's random identifier. Data is processed in the United States. https://www.revenuecat.com/privacy/",
            "Supabase — hosts the database behind the chat with astrologers (your account, conversations and balance), and the function that passes an AI astrologer question onward, which stores nothing. The project is hosted in the United States. https://supabase.com/privacy",
            "Resend — sends the chat's sign-in codes, and receives your email address and the code. Data is processed in the United States. https://resend.com/legal/privacy-policy",
            "Firebase Cloud Messaging (Google) — delivers chat notifications, if you allow them. It receives a device token and installation identifier, and each notification's text, which says who did what and never what was said. Data is processed in the United States. https://firebase.google.com/support/privacy",
            "DeepSeek — writes the AI astrologer's answers. Data is processed in China. https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
            "Apple App Store / Google Play — payment processing and app distribution, under their own terms. https://www.apple.com/legal/privacy/ and https://policies.google.com/privacy"
          ]
        },
        {
          p: "The astrologers who answer in the chat are not third parties in this sense: they read for us, under the agreement described in \"The chat with astrologers\"."
        },
        {
          p: "Sanctum makes no other network requests. Apart from the readers' profiles and photos in the chat, which come from the same Supabase database, it loads no fonts, images or content from the internet, and no reading is ever sent anywhere to be calculated — the calculation happens on your phone. The AI astrologer sends the result of that calculation, and only when you have asked it something."
        },

        { h2: "Legal bases for processing" },
        {
          p: "Where the GDPR applies, we process personal data on the basis of performing our contract with you (providing the app's features and your subscription), and our legitimate interest in keeping the app stable and understanding how it is used. Where we ask for your consent — permission to send you a daily reading notification, and your agreement before the AI astrologer sends anything — that consent is the basis. You can withdraw notification consent in your device settings, and AI astrologer consent under Settings › AI astrologer, at any time and without affecting anything you agreed to before."
        },
        {
          p: "For the chat with astrologers, the basis is our contract with you: the account, and the conversation it exists to carry. Reviewing held and reported messages rests on our legitimate interest in keeping readers and clients safe from abuse and fraud, and chat notifications rest on your consent, which you can withdraw in your device settings."
        },

        { h2: "How long we keep it" },
        {
          list: [
            "Everything on your device is kept until you delete it in the app or uninstall Sanctum. We never receive it, so we cannot keep it.",
            "Analytics events and diagnostic reports are kept by our providers according to the retention period configured on our accounts, and are deleted automatically when it expires.",
            "Subscription records are kept by our billing provider for as long as the subscription is active and afterwards as required for accounting and store reconciliation.",
            "AI astrologer conversations are kept on your device until you delete them. Our own server keeps nothing: it holds a request only for as long as it takes to answer, and its logs contain no question and no answer. What DeepSeek retains of what it receives is governed by its own policy, linked above.",
            "Your chat account, and everything listed under \"The chat with astrologers\", is kept for as long as the account exists, and deleted when you delete it.",
            "When a chat account is deleted, the record of each question asked and of each purchase, charge and refund of questions is kept with the link to the account removed, because readers are paid from it and it forms part of our accounts. It is kept for as long as accounting and tax law requires.",
            "A copy of a reported message is kept after the conversation it came from is deleted, without a link to either account, as the record of that report.",
            "Resend and Firebase keep their own delivery records for a limited period, under their own policies."
          ]
        },

        { h2: "Deleting your data" },
        {
          p: "Deleting the app from your device permanently deletes everything Sanctum has stored on it about you — your name, your birth details, your journal, your readings, your conversations with the AI astrologer and your history. Nothing of that survives, because no copy exists anywhere else. You can also delete individual journal entries and individual conversations with the AI astrologer inside the app at any time."
        },
        {
          p: "A chat account is the exception: deleting the app does not delete it. Delete it in the app under Settings › Account › Delete account, or without the app as described at https://morphostudio.dev/legal/sanctum/delete-account. Your account, your email address and your conversations with readers are deleted at once, and questions you have not spent go with them. What is kept afterwards, and why, is set out on that page and under \"How long we keep it\" above."
        },
        {
          p: "For the anonymous analytics and diagnostic records described above, we want to be straightforward about a limitation: because Sanctum never identifies you, we hold nothing that links those records to you, and so we cannot find and delete \"your\" records on request. This is a consequence of collecting as little as we do rather than a refusal, and where the GDPR applies it is the situation described by Article 11. If you would like us to stop collecting them entirely, email us and we will explain how to do that for your installation."
        },
        {
          p: "If you have an active subscription and want the associated purchase record removed, email hello@morphostudio.dev and we will action it with our billing provider. We respond to all requests within 30 days."
        },

        { h2: "Your rights" },
        {
          p: "Depending on where you live, you may have the right to access the personal data we hold about you, correct it, delete it, object to processing, or request a copy in portable form. Email us and we will respond within 30 days. Note that for most of what Sanctum handles, the answer is that we hold nothing — the data is on your device and under your control. If you use the chat with astrologers, we hold your account and your conversations, and will send you a copy of them on request."
        },

        { h2: "Children" },
        {
          p: "Sanctum is not intended for children. You must be at least 16 years old to use it, and 18 to use the chat with astrologers, which asks you to confirm your age before your first question. We do not knowingly collect data from anyone under that age, and if we learn that we have, we will delete it. If you believe a child has been using Sanctum, contact us at hello@morphostudio.dev."
        },

        { h2: "Security" },
        {
          p: "The information Sanctum stores on your device is held in the app's private storage, which the operating system prevents other apps from reading, and is covered by your device's own encryption when your device is locked with a passcode. All network requests use encrypted connections (TLS)."
        },
        {
          p: "We do not add a separate password or encryption layer of our own on top of the operating system's, so anyone with access to your unlocked device can open the app and read your journal. If that matters to you, use your device's screen lock."
        },
        {
          p: "Conversations in the chat with astrologers are kept on our server rather than on your device. They are encrypted in transit and at rest, and our database lets each reader read only their own threads. They are not end-to-end encrypted: your reader has to read your question to answer it, and we can read threads for the reasons given above."
        },

        { h2: "International transfers" },
        {
          p: "Analytics and subscription data, and the chat's accounts, conversations, sign-in emails and notifications, are processed in the United States, and diagnostic reports are processed in the European Union (Germany). Where data leaves the UK or the European Economic Area, those providers rely on the European Commission's Standard Contractual Clauses."
        },

        {
          p: "The AI astrologer is the exception, and we would rather state it clearly than bury it. A question you ask it is sent to DeepSeek and processed in China, which is not covered by a European Commission adequacy decision. We rely on your explicit consent to that specific transfer: the screen you agree to before the feature does anything names DeepSeek, says what is sent, and says that it is sent to be answered. If you would rather your data did not go there, decline that screen or withdraw under Settings › AI astrologer — the rest of Sanctum works exactly as before, because everything else is computed on your phone."
        },

        { h2: "If you apply to read for Sanctum" },
        {
          p: "Astrologers and tarot readers can apply to answer questions in the chat, on a page of the readers' console. An application holds your name, your email address, what you read, the languages you can answer in, what you write about yourself and your practice, and a link to your work if you give one."
        },
        {
          p: "We use it only to consider your application and to write to you about it, on the basis of steps you have asked us to take before any agreement between us. It is stored in the same Supabase database as the chat, in the United States, and is read by Morpho Studio alone — not by readers, and not by anyone else. The page sets no cookies and records no analytics."
        },
        {
          p: "Sending again from the same address replaces what you sent before. We delete an application once we have decided on it and no longer need it, and straight away if you ask us to at hello@morphostudio.dev."
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
      updated: "27 September 2026",
      draft: false,
      blocks: [
        {
          p: "These terms govern your use of Sanctum, published by Morpho Studio. By installing or using the app, you agree to them."
        },

        { h2: "Sanctum is for entertainment" },
        {
          p: "Sanctum produces astrological readings, compatibility scores, reflective prompts, answers from an AI astrologer, and answers from the astrologers and tarot readers in its chat. They are for entertainment and self-reflection only. They are not advice, and they are not a prediction of anything that will happen."
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

        { h2: "The chat with astrologers" },
        {
          p: "The chat puts your question to a real astrologer or tarot reader, who answers in writing. Readers work with Morpho Studio, and their answers are their own readings — and, like everything else in Sanctum, entertainment and not advice. Readers do not offer spells, curse removal or \"energy work\", do not contact the dead, and do not make predictions about health, pregnancy, legal matters or money."
        },
        {
          p: "The chat is for people 18 and over, and it needs an account: your email address and a code sent to it. The account is yours alone; do not share it."
        },
        {
          p: "Questions are bought in packs, and each account has one free question. When you ask, one question is set aside from your balance, and it is spent only when the reader sends the message marked as their answer. If the reader has not answered within 48 hours, the question is released back to your balance. Until the reader first replies, you can withdraw it and have it back. Questions belong to your account, so they are there on any device you sign in on; they have no cash value and cannot be transferred."
        },
        {
          p: "If an answer is not a real reading, report it: we read the thread, and may return the question to your balance. If a store refunds a purchase of questions, those questions are taken out of your balance, and if they were already spent, you cannot ask again until your balance is back above zero."
        },
        {
          p: "In the chat you must not harass or abuse a reader, send sexual, hateful or unlawful content, or ask a reader to continue the conversation or be paid outside Sanctum. Readers are bound by the same rule, and a reader's message carrying contact details or a request for payment is held for us to review before it reaches you. A reader who asks you to write to them elsewhere or to pay them directly is breaking their agreement with us — please report it. Either side can block the other, and we may suspend or close an account that breaks these terms."
        },
        {
          p: "What you write in the chat belongs to you. You allow your reader to read and answer it, and us to read it in order to keep the chat safe and settle disputes; we take no other licence over it. The privacy policy says what is stored and for how long."
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
          p: "Sanctum is free to download, and some features require Sanctum Premium. Premium is offered as a monthly or an annual subscription, and the annual plan may include a free trial. Sanctum also sells one-off purchases that are not subscriptions: a full relationship report for a pairing, a pack of AI astrologer messages, and packs of questions for the chat with astrologers. Exact prices are shown in the app in your local currency before you buy, and are set by the store."
        },
        {
          p: "Subscriptions renew automatically at the end of each period unless you cancel at least 24 hours before it ends. If a free trial is offered and you do not cancel before it ends, it converts to a paid subscription. Manage or cancel your subscription in your Apple App Store or Google Play account settings, not in Sanctum. Deleting a chat account does not cancel it."
        },
        {
          p: "One-off purchases do not renew. A report you have unlocked and AI astrologer messages you have bought are not tied to any account, so they live on the device you bought them on and are not restored onto a second one, and the app says so before you pay. Questions for the chat are the exception: they belong to your chat account, and are lost if you delete it."
        },
        {
          p: "Payment is taken by Apple or Google, and refunds are governed by their policies rather than ours. We cannot issue a refund for a purchase made through a store, but if something has gone wrong, email us and we will help you take it up with them."
        },

        { h2: "Availability" },
        {
          p: "We work to keep Sanctum available and functional, but we do not guarantee uninterrupted service. We may update, change, or discontinue features, and we may need to take the service down for maintenance. Because readings are calculated on your device, the core of the app continues to work without a network connection. The chat with astrologers needs one, and depends on readers being available: a reader may stop taking questions, or stop reading for Sanctum."
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
          p: "You can stop using Sanctum at any time by deleting it from your device, which also deletes everything it has stored. We may suspend or end your access if you breach these terms. Deleting the app does not cancel a subscription — cancel that in your store account settings — and does not delete a chat account, which you delete under Settings › Account, or as described at https://morphostudio.dev/legal/sanctum/delete-account."
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
    },
    {
      kind: "delete-account",
      title: "Delete your account",
      updated: "27 September 2026",
      draft: false,
      blocks: [
        {
          p: "How to delete your Sanctum account, and what happens to your data when you do. Sanctum is published by Morpho Studio."
        },
        {
          p: "Most of Sanctum needs no account. Your readings, your journal, your birth details and everything else you enter are stored only on your phone, and deleting the app deletes them. An account exists only if you signed in with your email address to use the chat with astrologers, and this page is about that account."
        },

        { h2: "In the app" },
        {
          p: "Open Settings › Account › Delete account, and confirm. The account is deleted straight away."
        },

        { h2: "Without the app" },
        {
          p: "Email hello@morphostudio.dev from the address you signed in with, with the subject \"Delete my Sanctum account\". This works just as well if you no longer have the app or can no longer sign in. We may reply to that address to confirm the request is yours before acting on it. We delete the account within 30 days, usually much sooner, and write to tell you when it is done."
        },

        { h2: "What is deleted" },
        {
          list: [
            "Your account and your email address",
            "The name you chose for readers, and the language the app was in",
            "Your conversations with readers: every message, tarot draw and shared chart in them",
            "Your balance of questions, including any you paid for and have not used. We cannot refund a store purchase ourselves; Google Play or the App Store decide refunds under their own policies",
            "Your notification tokens, readers you asked to be told about, and blocks"
          ]
        },

        { h2: "What is kept, and for how long" },
        {
          list: [
            "The record of each question you asked — when it was asked and how it ended — and of each purchase, charge and refund of questions. The link to your account is removed; what remains is the store's order number, the product and the dates. Readers are paid from these records and they form part of our accounts, so they are kept for as long as accounting and tax law requires",
            "A copy of any message that was reported, as it was when reported, without a link to your account, as the record of that report",
            "Purchase records held by our billing provider, RevenueCat, under your account's random identifier. Ask in your email and we will delete them there too",
            "Delivery records kept for a limited period by Resend, which sent your sign-in codes, and by Firebase, which delivered your notifications, under their own policies"
          ]
        },

        { h2: "What deleting an account does not do" },
        {
          p: "It does not cancel a Sanctum Premium subscription, which you manage in your Google Play or App Store account settings. It does not touch anything stored on your phone: to delete that too, delete the app."
        },
        {
          p: "Accounts that belong to a reader are closed by hand. Readers, write to hello@morphostudio.dev."
        },
        {
          p: "The privacy policy, at https://morphostudio.dev/legal/sanctum/privacy, has everything else about what Sanctum stores and why."
        }
      ]
    }
  ]
};

import React from "react";

const UPDATED = "July 21, 2026";
const SUPPORT = "flyboyztruly@gmail.com";
const PRIVACY = "moxleycarol69@gmail.com";

function LegalHeader() {
  return (
    <header className="legalNav">
      <a className="legalLogo" href="/" aria-label="ClipGG home">
        <span>▶</span> CLIP<b>GG</b>
      </a>
      <a className="legalBack" href="/">
        ← Back to ClipGG
      </a>
    </header>
  );
}

function LegalFooter() {
  return (
    <footer className="legalFooter">
      <span>© 2026 ClipGG</span>
      <nav aria-label="Legal links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a
          href="https://discord.gg/DyvBCMBh7k"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </nav>
    </footer>
  );
}

function Section({ title, children, id }) {
  return (
    <section id={id} className="legalSection">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function LegalShell({ label, title, intro, children }) {
  return (
    <div className="legalPage">
      <LegalHeader />
      <main className="legalWrap">
        <div className="legalHero">
          <span>{label}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <time>Last updated: {UPDATED}</time>
        </div>
        <article className="legalCard">{children}</article>
        <aside className="legalNotice">
          <strong>Important:</strong> This document should be reviewed by a
          qualified attorney before public launch. Replace every bracketed
          placeholder with accurate business information.
        </aside>
      </main>
      <LegalFooter />
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalShell
      label="Your information"
      title="Privacy Policy"
      intro="This policy explains how ClipGG processes information when creators connect accounts, join campaigns, submit clips, and use ClipGG through Discord."
    >
      <Section title="1. About this policy">
        <p>
          ClipGG is a Discord-based creator campaign and clip-management
          platform operated by <mark>Brian</mark>. It lets users connect
          supported social-media accounts, participate in creator campaigns,
          submit clip URLs, and view campaign statistics and potential earnings
          through Discord.
        </p>
        <p>
          This policy applies to the ClipGG website, Discord-based features,
          account connections, campaign tools, and related support. It does not
          control the independent privacy practices of Discord or connected
          social platforms.
        </p>
      </Section>

      <Section title="2. Information we may process">
        <h3>Discord information</h3>
        <p>
          Discord user ID, username, display name, avatar, ClipGG server
          membership, roles, onboarding status, campaign activity, commands, and
          interactions needed to operate ClipGG.
        </p>
        <h3>Connected social accounts</h3>
        <p>
          Account or channel identifiers, usernames, profile images, public
          profile information, and available account statistics. Supported
          integrations may include YouTube/Google, TikTok, Instagram/Meta, and
          X/Twitter.
        </p>
        <h3>Authorization credentials</h3>
        <p>
          OAuth access and refresh tokens when a user authorizes a supported
          platform. We use these credentials only for the permissions and
          features the user authorizes.
        </p>
        <h3>Campaigns and submissions</h3>
        <p>
          Submitted clip URLs, linked-account information, campaign
          participation, submission status, views, engagement statistics, payout
          calculations, potential earnings, approvals, and payment-related
          campaign records.
        </p>
        <h3>Support and technical information</h3>
        <p>
          Support-ticket messages and transcripts, reports, communications, and
          basic operational, device, network, security, and access logs used to
          protect and troubleshoot ClipGG.
        </p>
      </Section>

      <Section title="3. How we use information">
        <ul>
          <li>Connect, identify, and verify user-owned social accounts.</li>
          <li>
            Operate Discord onboarding, roles, campaign access, submissions, and
            support.
          </li>
          <li>Associate eligible content and statistics with campaigns.</li>
          <li>
            Calculate, review, and display campaign statistics and potential
            earnings.
          </li>
          <li>
            Detect duplicate, manipulated, unauthorized, or fraudulent activity.
          </li>
          <li>Secure, maintain, troubleshoot, and improve ClipGG.</li>
          <li>Communicate service, campaign, policy, and support updates.</li>
          <li>Comply with law and enforce our agreements.</li>
        </ul>
      </Section>

      <Section title="4. Google and YouTube User Data" id="google-youtube-data">
        <p>
          ClipGG requests the YouTube read-only OAuth permission so users can
          connect and identify their own YouTube channels. With that permission,
          ClipGG may retrieve the authenticated channel ID, channel name,
          profile image, subscriber count, total view count, and video count.
        </p>
        <p>
          ClipGG does not use this permission to upload, edit, or delete YouTube
          content. Google user data is used only to provide user-facing ClipGG
          account connection, verification, campaign association, and statistics
          features.
        </p>
        <p>
          ClipGG’s use and transfer of information received from Google APIs
          complies with the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <ul>
          <li>
            ClipGG does not sell Google user data or use it for targeted
            advertising.
          </li>
          <li>
            Google user data is not used to train generalized
            artificial-intelligence or machine-learning models.
          </li>
          <li>
            Google user data is not shared with third parties except service
            providers necessary to operate and secure ClipGG, when legally
            required, or with the user’s explicit consent.
          </li>
        </ul>
      </Section>

      <Section title="5. Legal bases">
        <p>
          Where data-protection law requires a legal basis, ClipGG may process
          information to perform a contract or provide requested features, based
          on consent, for legitimate interests such as security and fraud
          prevention, or to meet legal obligations. Users may withdraw consent
          for a connected integration by unlinking it, although prior lawful
          processing is unaffected.
        </p>
      </Section>

      <Section title="6. When information may be shared">
        <p>
          ClipGG may share limited information with hosting, database, security,
          support, communications, and other service providers that are
          necessary to operate the service; campaign administrators or
          participating brands when needed to review a submission and administer
          a campaign; connected platforms at the user’s direction; professional
          advisers; authorities when legally required; or another party with the
          user’s explicit consent.
        </p>
        <p>
          ClipGG does not sell personal information. If ownership or control of
          ClipGG changes, relevant information may transfer as part of that
          transaction subject to applicable law and appropriate notice.
        </p>
      </Section>

      <Section title="7. OAuth, security, and access controls">
        <p>
          OAuth tokens are encrypted at rest, access is restricted to authorized
          systems and personnel, and HTTPS is used for authorization callbacks.
          ClipGG maintains reasonable administrative, technical, and
          organizational safeguards appropriate to the service. No method of
          storage or transmission is completely secure, and ClipGG cannot
          guarantee absolute security.
        </p>
      </Section>

      <Section title="8. Retention">
        <p>
          Information is retained only while reasonably needed to provide
          ClipGG, meet legal or contractual obligations, prevent fraud, resolve
          disputes, and enforce agreements. Exact retention may depend on
          operational, contractual, security, payment, and legal requirements.
        </p>
        <ul>
          <li>
            OAuth credentials are retained while the integration remains
            connected and are removed when the user unlinks that integration.
          </li>
          <li>
            Support transcripts and operational/security logs are retained for{" "}
            <mark>[DATA RETENTION PERIODS]</mark>, unless a longer period is
            reasonably needed for security, disputes, or law.
          </li>
          <li>
            Submissions and campaign/payment records may be retained for{" "}
            <mark>[DATA RETENTION PERIODS]</mark> to administer campaigns,
            document payments, handle disputes, prevent fraud, and meet legal
            obligations.
          </li>
        </ul>
      </Section>

      <Section title="9. Account disconnection and deletion">
        <p>
          Users can unlink a connected social account from the private Discord
          Accounts panel. Unlinking removes the stored authorization credentials
          for that integration. Users may also revoke ClipGG access through the
          connected platform’s account settings.
        </p>
        <p>
          To request access, correction, export, or deletion of ClipGG account
          data, contact <mark>{PRIVACY}</mark>. Some records may be retained
          where reasonably necessary for legal obligations, security, fraud
          prevention, campaign accounting, or disputes.
        </p>
      </Section>

      <Section title="10. Cookies, analytics, and technical logs">
        <p>
          ClipGG may use cookies or similar storage only when needed for
          essential website functionality, security, preferences, or
          account-connection flows. Website analytics, if enabled, are provided
          by <mark>[ANALYTICS PROVIDERS]</mark>. This policy should be updated
          before enabling any analytics or advertising technology not accurately
          described here.
        </p>
      </Section>

      <Section title="11. International processing">
        <p>
          ClipGG and its service providers may process information in countries
          other than the user’s country. Where required, ClipGG will use
          appropriate legal safeguards for international transfers. Privacy
          protections may differ between jurisdictions.
        </p>
      </Section>

      <Section title="12. Children’s privacy">
        <p>
          Users must be at least 13 years old and must also meet Discord’s
          minimum age for their country and any higher age required by
          applicable law. ClipGG is not directed to children below the
          applicable minimum age. Contact <mark>{PRIVACY}</mark> if you believe
          a child provided information contrary to this requirement.
        </p>
      </Section>

      <Section title="13. Privacy rights">
        <p>
          Depending on location, users may have rights to access, correct,
          delete, restrict, object to, or receive a copy of personal
          information, withdraw consent, or complain to a supervisory authority.
          To exercise a right, contact <mark>{PRIVACY}</mark>. ClipGG may need
          to verify the requester’s identity and may deny or limit a request
          where permitted by law.
        </p>
      </Section>

      <Section title="14. Changes to this policy">
        <p>
          ClipGG may update this policy as its features, integrations, or legal
          obligations change. The revised policy will show a new “Last updated”
          date. Material changes may also be announced through the website or
          Discord.
        </p>
      </Section>

      <Section title="15. Contact">
        <p>
          <mark>Brian</mark>
          <br />
          <mark>[BUSINESS ADDRESS, IF APPLICABLE]</mark>
          <br />
          Privacy: <mark>{PRIVACY}</mark>
          <br />
          Support: <mark>{SUPPORT}</mark>
        </p>
      </Section>
    </LegalShell>
  );
}

export function TermsOfService() {
  return (
    <LegalShell
      label="Using ClipGG"
      title="Terms of Service"
      intro="These terms govern access to the ClipGG website, Discord community, account connections, creator campaigns, clip submissions, and related services."
    >
      <Section title="1. Agreement and operator">
        <p>
          These Terms are an agreement between you and <mark>Brian</mark>, the
          operator of ClipGG. By accessing ClipGG, joining its Discord-based
          features, connecting an account, or participating in a campaign, you
          agree to these Terms and the Privacy Policy. If you do not agree, do
          not use ClipGG.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>
          You must be at least 13 years old, meet Discord’s minimum age for your
          country, and meet any higher age required by applicable law. If you
          are below the age of legal majority, a parent or legal guardian must
          authorize your use where required. Campaigns may impose additional
          age, location, platform, audience, or account requirements.
        </p>
      </Section>

      <Section title="3. Accounts and responsibilities">
        <p>
          You are responsible for accurate information, your Discord and
          connected social accounts, account security, and all activity
          submitted through your identity. Do not share authorization
          credentials or permit unauthorized access. Notify{" "}
          <mark>{SUPPORT}</mark> promptly of suspected compromise.
        </p>
        <p>
          Hacked, stolen, compromised, impersonated, purchased, sold, or traded
          accounts are prohibited. ClipGG may require reasonable verification of
          identity, ownership, eligibility, or account control.
        </p>
      </Section>

      <Section title="4. Acceptable use">
        <p>You may not use ClipGG to engage in or distribute:</p>
        <ul>
          <li>
            Harassment, hate speech, discrimination, threats, stalking,
            exploitation, or illegal conduct.
          </li>
          <li>
            NSFW or sexually explicit content, graphic violence, fraud, scams,
            spam, malware, or unauthorized advertising.
          </li>
          <li>
            Impersonation, deceptive identity practices, or activity involving
            hacked, stolen, compromised, or traded accounts.
          </li>
          <li>
            Artificial views, bots, click fraud, manipulated engagement,
            misleading statistics, or coordinated inauthentic behavior.
          </li>
          <li>
            Content you do not own or lack the license or permission to submit.
          </li>
          <li>
            Attempts to bypass campaign rules, eligibility checks, platform
            policies, security protections, access controls, fraud checks, or
            moderation actions.
          </li>
          <li>
            Violations of Discord, YouTube, Google, TikTok, Meta, Instagram, X,
            or any other applicable platform’s rules and policies.
          </li>
        </ul>
      </Section>

      <Section title="5. Campaign participation">
        <p>
          Each campaign may have its own brief, eligible platforms, content
          requirements, deadlines, regions, rates, view or engagement
          thresholds, available budget, review process, and other conditions.
          You are responsible for reviewing and following the current campaign
          rules before posting or submitting content.
        </p>
        <p>
          ClipGG may modify, pause, extend, or cancel a campaign when a brand
          changes its instructions or budget, legal or safety concerns arise, a
          platform changes its rules, fraud is suspected, or operational
          circumstances require it. ClipGG will provide reasonable notice where
          practical.
        </p>
      </Section>

      <Section title="6. Creator and clipper responsibilities">
        <p>
          Creators and clippers must submit accurate URLs and statistics, comply
          with disclosure and advertising requirements, maintain required posts
          for any stated duration, and avoid misleading viewers. You are
          responsible for taxes, permissions, licenses, releases, music rights,
          publicity rights, and any other obligations related to your content
          and earnings.
        </p>
      </Section>

      <Section title="7. Content ownership and permission">
        <p>
          You retain ownership of your content. By submitting content or a clip
          URL, you represent that you own it or have all necessary licenses,
          consents, releases, and permissions to post and submit it.
        </p>
        <p>
          You grant ClipGG a limited, non-exclusive, worldwide, royalty-free
          license for only as long as reasonably necessary to access, display,
          process, reproduce for review, verify, measure, and administer the
          submission and relevant campaign. This license does not transfer
          ownership and does not permit ClipGG to sell your content as its own.
        </p>
      </Section>

      <Section title="8. Statistics, earnings, and payments">
        <p>
          Displayed earnings and campaign statistics may be estimates until
          reviewed. A submission is not automatically eligible for payment.
          Payments depend on campaign rules, valid engagement, approved
          submissions, available campaign budgets, fraud checks, stated
          thresholds, and any required verification.
        </p>
        <p>
          ClipGG may reject or remove invalid, duplicated, unauthorized,
          fraudulent, misleading, artificial, late, or otherwise noncompliant
          submissions. Views or engagement that a platform removes, invalidates,
          or cannot verify may be excluded.
        </p>
        <p>
          Approved payouts may be delivered through{" "}
          <mark>[PAYMENT PROCESSOR]</mark>. Processing times, fees, supported
          countries, identity checks, minimums, and other conditions may be
          governed by that provider. You are responsible for providing accurate
          payout information and for applicable taxes.
        </p>
      </Section>

      <Section title="9. Moderation, suspension, and termination">
        <p>
          ClipGG may warn, limit, suspend, remove, or terminate access; remove
          roles or submissions; withhold disputed or ineligible amounts; and
          preserve relevant records when it reasonably believes these Terms,
          campaign rules, law, safety requirements, or platform policies were
          violated. Serious fraud, threats, exploitation, or security abuse may
          result in immediate action.
        </p>
        <p>
          You may stop using ClipGG at any time and disconnect integrations.
          Provisions that by their nature should survive—such as ownership,
          payment disputes, disclaimers, liability limits, and
          indemnification—will survive termination.
        </p>
      </Section>

      <Section title="10. Third-party platforms and integrations">
        <p>
          Discord, YouTube/Google, TikTok, Instagram/Meta, X/Twitter, and
          payment services are operated independently. Their terms and privacy
          policies govern your use of those services. Social integrations can
          become limited or unavailable because of platform outages, API
          restrictions, policy changes, account status, or decisions outside
          ClipGG’s control.
        </p>
        <p>
          You can revoke access through ClipGG’s private Discord Accounts panel
          and through the connected platform’s account settings.
        </p>
      </Section>

      <Section title="11. ClipGG intellectual property">
        <p>
          ClipGG’s name, branding, website, software, visual design,
          documentation, and original materials are owned by or licensed to{" "}
          <mark>Brian</mark>. Except for normal use of the service, no rights
          are granted to copy, sell, reverse engineer, or misuse those
          materials.
        </p>
      </Section>

      <Section title="12. Disclaimers">
        <p>
          To the maximum extent permitted by law, ClipGG is provided “as is” and
          “as available.” ClipGG does not guarantee uninterrupted availability,
          campaign access, acceptance, views, engagement, earnings, payouts,
          audience growth, or compatibility with every third-party platform.
          Nothing on ClipGG is financial, tax, employment, or legal advice.
        </p>
      </Section>

      <Section title="13. Limitation of liability">
        <p>
          To the maximum extent permitted by law, ClipGG and <mark>Brian</mark>{" "}
          will not be liable for indirect, incidental, special, consequential,
          exemplary, or punitive damages, lost profits, lost data, lost
          opportunities, platform action, or unauthorized account access arising
          from use of ClipGG. Any additional liability cap should be established
          by qualified counsel and inserted here:{" "}
          <mark>[LIABILITY CAP, IF APPLICABLE]</mark>.
        </p>
        <p>
          Some jurisdictions do not allow certain exclusions or limitations, so
          parts of this section may not apply to you.
        </p>
      </Section>

      <Section title="14. Indemnification">
        <p>
          Where lawful, you agree to defend, indemnify, and hold harmless ClipGG
          and <mark>Brian</mark> from claims, losses, and reasonable costs
          arising from your content, submissions, violation of these Terms or
          campaign rules, infringement of another person’s rights, fraud, or
          unlawful conduct. This obligation does not apply to the extent caused
          by ClipGG’s own unlawful conduct.
        </p>
      </Section>

      <Section title="15. Service and term changes">
        <p>
          ClipGG may add, modify, suspend, or discontinue features,
          integrations, or campaigns. These Terms may also be updated to reflect
          service, legal, security, or operational changes. Updated Terms will
          show a new “Last updated” date. Material changes may be announced
          through the website or Discord. Continued use after the effective date
          means you accept the revised Terms where permitted by law.
        </p>
      </Section>

      <Section title="16. Dispute resolution">
        <p>
          Before filing a formal claim, you and ClipGG agree to make a
          good-faith effort to resolve the dispute by contacting{" "}
          <mark>{SUPPORT}</mark>. Any court venue, arbitration requirement,
          class-action waiver, governing-law provision, or consumer exception
          must be added only after review by qualified counsel.
        </p>
      </Section>

      <Section title="17. General terms">
        <p>
          If a provision is unenforceable, the remaining provisions remain
          effective. Failure to enforce a provision is not a waiver. You may not
          transfer these Terms without ClipGG’s consent; ClipGG may transfer
          them as part of a reorganization or change in control. These Terms and
          incorporated campaign rules form the agreement concerning ClipGG.
        </p>
      </Section>

      <Section title="18. Contact">
        <p>
          <mark>Brian</mark>
          <br />
          <mark>[BUSINESS ADDRESS, IF APPLICABLE]</mark>
          <br />
          Support: <mark>{SUPPORT}</mark>
          <br />
          Privacy: <mark>{PRIVACY}</mark>
        </p>
      </Section>
    </LegalShell>
  );
}

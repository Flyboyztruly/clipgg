import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Crown,
  Gamepad2,
  Grid2X2,
  Menu,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Upload,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";
const M = motion,
  reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  };
const DISCORD = "https://discord.gg/DyvBCMBh7k";
const DISCORD_COUNTS_API =
  "https://discord.com/api/v10/invites/DyvBCMBh7k?with_counts=true";
let discordCountsRequest;
function getDiscordCounts() {
  if (!discordCountsRequest) {
    discordCountsRequest = fetch(DISCORD_COUNTS_API)
      .then((response) => {
        if (!response.ok) throw new Error("Discord counts unavailable");
        return response.json();
      })
      .then((data) => ({
        members: data.approximate_member_count,
        online: data.approximate_presence_count,
      }))
      .catch(() => ({ members: null, online: null }));
  }
  return discordCountsRequest;
}
function DiscordCount({ field, animated = false }) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    let active = true;
    getDiscordCounts().then((counts) => active && setValue(counts[field]));
    return () => {
      active = false;
    };
  }, [field]);
  if (value == null) return <span className="countLoading">—</span>;
  return animated ? <Count n={value} /> : value.toLocaleString("en-US");
}
function DiscordIcon() {
  return (
    <svg
      className="discordIcon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.5 5.34A17.2 17.2 0 0 0 15.3 4l-.52 1.08a16 16 0 0 0-5.56 0L8.7 4a17.1 17.1 0 0 0-4.2 1.35C1.84 9.3 1.12 13.15 1.48 16.94A17 17 0 0 0 6.63 19.5l1.25-1.7a11 11 0 0 1-1.96-.94l.48-.37c3.78 1.73 7.88 1.73 11.62 0l.49.37c-.63.37-1.28.68-1.97.94l1.25 1.7a17 17 0 0 0 5.15-2.56c.42-4.4-.72-8.2-3.44-11.6ZM8.67 14.62c-1.14 0-2.08-1.05-2.08-2.34 0-1.3.92-2.35 2.08-2.35 1.17 0 2.1 1.06 2.08 2.35 0 1.29-.92 2.34-2.08 2.34Zm6.66 0c-1.14 0-2.08-1.05-2.08-2.34 0-1.3.92-2.35 2.08-2.35 1.17 0 2.1 1.06 2.08 2.35 0 1.29-.91 2.34-2.08 2.34Z" />
    </svg>
  );
}
function Logo() {
  return (
    <a className="logo" href="#">
      <i>
        <Play fill="currentColor" />
      </i>
      <b>
        CLIP<span>GG</span>
      </b>
    </a>
  );
}
function Btn({ children, ghost = false, href = DISCORD, discord = true }) {
  const external = href === DISCORD;
  return (
    <a
      className={"btn " + (ghost ? "ghost" : "")}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {discord && external && <DiscordIcon />}
      {children}
      {!ghost && !external && <ArrowRight />}
    </a>
  );
}
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Logo />
        <div className={"links " + (open ? "open" : "")}>
          <a href="#how">How it works</a>
          <a href="#stories">Creator stories</a>
          <a href="#faq">FAQ</a>
          <a
            className="mobileJoin"
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon />
            Join Discord
          </a>
        </div>
        <div className="navright">
          <span className="online" title="Approximate live count from Discord">
            <i />
            <DiscordCount field="online" /> online
          </span>
          <Btn>Join Discord</Btn>
        </div>
        <button
          className="hamb"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
const PlatformIcon = ({ type }) => (
  <span className={"platform " + type}>
    {type === "tt" ? (
      "♪"
    ) : type === "yt" ? (
      <Play fill="currentColor" />
    ) : type === "ig" ? (
      "◎"
    ) : (
      "𝕏"
    )}
  </span>
);
function Workspace() {
  return (
    <M.div
      className="workspace"
      initial={{ opacity: 0, x: 55, y: 25, rotateX: 4 }}
      animate={{ opacity: 1, x: 0, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="wsbar">
        <div className="traffic">
          <i />
          <i />
          <i />
        </div>
        <span>creator.clipgg.com</span>
        <div className="wsicons">
          <Search />
          <Bell />
          <span className="avatar sm">KN</span>
        </div>
      </div>
      <div className="wsbody">
        <aside>
          <div className="creator">
            <span className="avatar">KN</span>
            <div>
              <b>
                kaiNova <BadgeCheck />
              </b>
              <small>Level 14 Creator</small>
            </div>
          </div>
          <div className="xp">
            <div>
              <span>2,460 XP</span>
              <b>82%</b>
            </div>
            <i>
              <em />
            </i>
          </div>
          <div className="sideLinks">
            <a className="active">
              <Grid2X2 />
              Overview
            </a>
            <a>
              <Target />
              Campaigns <b>12</b>
            </a>
            <a>
              <Wallet />
              Wallet
            </a>
            <a>
              <BarChart3 />
              Analytics
            </a>
          </div>
          <div className="sideFoot">
            <a>
              <Settings />
              Settings
            </a>
            <div className="pro">
              <Crown />
              <span>
                <b>Creator Pro</b>
                <small>4 perks active</small>
              </span>
            </div>
          </div>
        </aside>
        <main className="wsmain">
          <div className="hello">
            <div>
              <small>Monday, July 14</small>
              <h3>Welcome back, Kai.</h3>
            </div>
            <button>
              <Bell />
              <i />
            </button>
          </div>
          <div className="walletRow">
            <div className="walletBig">
              <div>
                <span>Wallet balance</span>
                <strong>$412.38</strong>
                <small>
                  <b>+$26.00</b> earned today
                </small>
              </div>
              <div className="walletMark">
                <Wallet />
              </div>
            </div>
            <div className="tinyStat">
              <span>Pending approval</span>
              <strong>$106.00</strong>
              <small>3 submissions</small>
            </div>
            <div className="tinyStat">
              <span>Profile views</span>
              <strong>8,429</strong>
              <small className="good">↗ 14.2%</small>
            </div>
          </div>
          <div className="wsgrid">
            <div className="jobs">
              <div className="panelHead">
                <b>Active campaigns</b>
                <a>
                  View all <ChevronRight />
                </a>
              </div>
              <div className="job">
                <div className="game rl">RL</div>
                <div>
                  <b>Rocket League Clips</b>
                  <small>
                    <PlatformIcon type="tt" /> Posted 8h ago
                  </small>
                </div>
                <span className="status amber">
                  <Clock3 />
                  Pending review
                </span>
                <strong>$28</strong>
              </div>
              <div className="job">
                <div className="game mr">MR</div>
                <div>
                  <b>Marvel Rivals</b>
                  <small>
                    <PlatformIcon type="yt" /> Due in 2 days
                  </small>
                </div>
                <span className="status green">
                  <Check />
                  Accepted
                </span>
                <strong>$45</strong>
              </div>
              <div className="job">
                <div className="game fn">FN</div>
                <div>
                  <b>Fortnite Zero Build</b>
                  <small>
                    <PlatformIcon type="ig" /> Posted yesterday
                  </small>
                </div>
                <span className="status purple">
                  <Upload />
                  Revision
                </span>
                <strong>$18</strong>
              </div>
            </div>
            <div className="score">
              <div className="panelHead">
                <b>Creator score</b>
                <Sparkles />
              </div>
              <div className="scoreRing">
                <div>
                  <strong>94</strong>
                  <span>Excellent</span>
                </div>
              </div>
              <div className="scoreStats">
                <div>
                  <b>98%</b>
                  <small>Approval</small>
                </div>
                <div>
                  <b>4.8</b>
                  <small>Rating</small>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <M.div
        className="toast t1"
        animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 10] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1.5,
          times: [0, 0.12, 0.82, 1],
        }}
      >
        <i>
          <CircleDollarSign />
        </i>
        <div>
          <b>+$32 approved</b>
          <span>Rocket League · just now</span>
        </div>
      </M.div>
      <M.div
        className="toast t2"
        animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -10] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 3,
          times: [0, 0.12, 0.82, 1],
        }}
      >
        <i>
          <Zap />
        </i>
        <div>
          <b>New campaign available</b>
          <span>$45 per upload</span>
        </div>
      </M.div>
      <M.div
        className="toast t3"
        animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 10] }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          delay: 5,
          times: [0, 0.12, 0.82, 1],
        }}
      >
        <i>
          <Check />
        </i>
        <div>
          <b>Creator application accepted</b>
          <span>Welcome to ClipGG</span>
        </div>
      </M.div>
    </M.div>
  );
}
function Hero() {
  return (
    <header className="hero">
      <div className="noise" />
      <div className="gridbg" />
      <div className="particle p1" />
      <div className="particle p2" />
      <div className="wrap">
        <div className="herotop">
          <M.div className="herocopy" initial="hidden" animate="show">
            <M.div
              className="eyebrow"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05, duration: 0.45 },
                },
              }}
            >
              <span>
                <Gamepad2 />
              </span>
              Built for gaming & IRL creators
            </M.div>
            <h1>
              <M.span
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.14, duration: 0.6 },
                  },
                }}
              >
                Get paid for posting
              </M.span>
              <br />
              <M.em
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.25, duration: 0.6 },
                  },
                }}
              >
                gaming & IRL clips.
              </M.em>
            </h1>
            <M.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.36, duration: 0.55 },
                },
              }}
            >
              Join the ClipGG Discord to discover campaigns, post gaming or IRL
              content, and start earning.
            </M.p>
            <M.div
              className="heroBtns"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.46, duration: 0.5 },
                },
              }}
            >
              <Btn>Join the Discord</Btn>
              <Btn ghost href="#how" discord={false}>
                <Play fill="currentColor" /> See how it works
              </Btn>
            </M.div>
            <M.div
              className="trustline"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { delay: 0.58, duration: 0.5 },
                },
              }}
            >
              <div className="faces">
                <i>A</i>
                <i>M</i>
                <i>J</i>
                <i>K</i>
              </div>
              <span>
                <b>20,000+ creators</b>
                <small>in the ClipGG community</small>
              </span>
              <em>★ 4.9/5</em>
            </M.div>
          </M.div>
          <div className="heroAside">
            <div className="liveCard">
              <span>
                <i />
                LIVE THIS WEEK
              </span>
              <strong>$84,260</strong>
              <small>earned by creators</small>
            </div>
            <a
              className="community"
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
              <div>
                <b>
                  <DiscordCount field="members" />
                </b>
                <small>Discord members</small>
              </div>
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
function Count({ n, prefix = "", suffix = "" }) {
  const ref = useRef(),
    seen = useInView(ref, { once: true }),
    [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let s = performance.now();
    function t(x) {
      let p = Math.min((x - s) / 1200, 1);
      setV(Math.round(n * (1 - (1 - p) ** 3)));
      if (p < 1) requestAnimationFrame(t);
    }
    requestAnimationFrame(t);
  }, [seen, n]);
  return (
    <b ref={ref}>
      {prefix}
      {v.toLocaleString("en-US")}
      {suffix}
    </b>
  );
}
function Stats() {
  return (
    <div className="statbar">
      <div className="wrap">
        <span>Trusted by creators in 48 countries</span>
        <div>
          <DiscordCount field="members" animated />
          <small>Discord members</small>
        </div>
        <div>
          <Count n={284920} prefix="$" />
          <small>paid out</small>
        </div>
        <div>
          <Count n={84} />
          <small>live campaigns</small>
        </div>
        <div>
          <DiscordCount field="online" animated />
          <small>members online</small>
        </div>
      </div>
    </div>
  );
}
const activities = [
  ["green", "Ethan earned $41", "Rocket League campaign", "2 min"],
  ["fire", "Luna joined a campaign", "IRL highlights", "5 min"],
  ["money", "Jake cashed out $287", "Paid via PayPal", "12 min"],
  ["blue", "Sarah hit 1M views", "Street interview Shorts", "20 min"],
];
function MoneyToday() {
  return (
    <section id="how" className="money">
      <div className="wrap moneygrid">
        <M.div className="activity" {...reveal}>
          <div className="actTop">
            <div>
              <small>Live activity</small>
              <b>Creator network</b>
            </div>
            <span>
              <i />
              Live
            </span>
          </div>
          {activities.map((a, i) => (
            <M.div
              className="actRow"
              key={a[1]}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <i className={a[0]}>
                {i === 0 ? "$" : i === 1 ? "🔥" : i === 2 ? "$" : "↗"}
              </i>
              <div>
                <b>{a[1]}</b>
                <small>{a[2]}</small>
              </div>
              <time>{a[3]}</time>
            </M.div>
          ))}
          <div className="actFoot">
            <div className="miniFaces">
              <i />
              <i />
              <i />
            </div>
            <span>
              <b>348 creators</b> earned today
            </span>
          </div>
        </M.div>
        <M.div className="moneycopy" {...reveal}>
          <span className="sectionnum">01 / HOW IT WORKS</span>
          <h2>
            Start making
            <br />
            <em>money today.</em>
          </h2>
          <p>
            Everything happens inside the ClipGG Discord—from onboarding and
            campaign discovery to submitting your content for approval.
          </p>
          <div className="actionSteps">
            <div>
              <i>
                <DiscordIcon />
              </i>
              <span>
                <b>Join the Discord</b>
                <small>
                  Enter the ClipGG community and complete onboarding.
                </small>
              </span>
            </div>
            <div>
              <i>
                <Gamepad2 />
              </i>
              <span>
                <b>Choose a campaign</b>
                <small>
                  Browse gaming and IRL campaigns with clear posting
                  requirements.
                </small>
              </span>
            </div>
            <div>
              <i>
                <CircleDollarSign />
              </i>
              <span>
                <b>Post and get paid</b>
                <small>
                  Submit your content through Discord and receive payment after
                  approval.
                </small>
              </span>
            </div>
          </div>
          <Btn>Join the Discord</Btn>
        </M.div>
      </div>
    </section>
  );
}
const camps = [
  {
    game: "Rocket League",
    studio: "Psyonix",
    price: "$28",
    tag: "Medium difficulty",
    spots: "17 spots left",
    cls: "rocket",
    logo: "RL",
  },
  {
    game: "Marvel Rivals",
    studio: "NetEase Games",
    price: "$42",
    tag: "Trending",
    spots: "9 spots left",
    cls: "marvel",
    logo: "MR",
  },
  {
    game: "IRL Highlights",
    studio: "Stream Culture",
    price: "$35",
    tag: "IRL creators",
    spots: "Open",
    cls: "irl",
    logo: "LIVE",
  },
];
function Campaigns() {
  return (
    <section id="campaigns" className="campaigns">
      <div className="wrap">
        <div className="campHead">
          <M.div {...reveal}>
            <span className="sectionnum">02 / CAMPAIGN PREVIEW</span>
            <h2>
              Clip. Post. <em>Profit.</em>
            </h2>
          </M.div>
          <M.div {...reveal}>
            <p>
              Campaigns are posted inside Discord with complete requirements,
              availability, and payout details.
            </p>
            <Btn>Browse campaigns on Discord</Btn>
          </M.div>
        </div>
        <div className="campaignOrbit" aria-label="Rotating campaign previews">
          <div className="orbitBackdrop" aria-hidden="true">
            <i className="orbitBlob blobOne" />
            <i className="orbitBlob blobTwo" />
            <i className="orbitBlob blobThree" />
          </div>
          <div className="orbitGlow" />
          <div className="campGrid">
            {camps.map((c, i) => (
              <div
                className="campSlot"
                style={{ "--card-index": i }}
                key={c.game}
              >
                <M.article
                  className={"camp " + c.cls}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="campArt">
                    <div className="gameLogo">{c.logo}</div>
                    <div className="artLines" />
                    <span>
                      {i === 1 ? "FEATURED" : i === 0 ? "ENDING SOON" : "NEW"}
                    </span>
                  </div>
                  <div className="campInfo">
                    <div>
                      <small>{c.studio}</small>
                      <h3>{c.game}</h3>
                    </div>
                    <PlatformIcon
                      type={i === 0 ? "tt" : i === 1 ? "yt" : "ig"}
                    />
                  </div>
                  <div className="campTags">
                    <span>{c.tag}</span>
                    <span className={i === 1 ? "hot" : ""}>{c.spots}</span>
                  </div>
                  <div className="campFoot">
                    <div>
                      <small>Earn up to</small>
                      <strong>
                        {c.price}
                        <em>/upload</em>
                      </strong>
                    </div>
                    <a
                      className="discordOnly"
                      href={DISCORD}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DiscordIcon />
                      Join on Discord
                    </a>
                  </div>
                </M.article>
              </div>
            ))}
          </div>
          <div className="orbitHint">
            <span /> Hover to pause
          </div>
        </div>
        <div className="supported">
          <span>Post anywhere your audience watches</span>
          <div>
            <PlatformIcon type="tt" /> TikTok
          </div>
          <div>
            <PlatformIcon type="yt" /> YouTube Shorts
          </div>
          <div>
            <PlatformIcon type="ig" /> Instagram Reels
          </div>
          <div>
            <PlatformIcon type="x" /> X
          </div>
        </div>
      </div>
    </section>
  );
}
function ProductDash() {
  let bars = [32, 48, 40, 63, 58, 75, 67, 92, 84, 112, 98, 128, 116, 142];
  return (
    <M.div className="productDash" {...reveal}>
      <div className="pdSide">
        <Logo />
        <a className="on">
          <Grid2X2 />
          Overview
        </a>
        <a>
          <Target />
          Campaigns
        </a>
        <a>
          <Wallet />
          Wallet
        </a>
        <a>
          <BarChart3 />
          Analytics
        </a>
        <a>
          <Trophy />
          Leaderboard
        </a>
        <span />
        <a>
          <Settings />
          Settings
        </a>
      </div>
      <div className="pdMain">
        <div className="pdTop">
          <div>
            <small>Analytics</small>
            <h3>Performance</h3>
          </div>
          <div className="creatorChip">
            <span className="avatar sm">KN</span>
            <div>
              <b>kaiNova</b>
              <small>Verified creator</small>
            </div>
          </div>
        </div>
        <div className="metrics">
          <div>
            <span>Weekly earnings</span>
            <b>$384.20</b>
            <small>↗ 18.4%</small>
          </div>
          <div>
            <span>Content views</span>
            <b>1.42M</b>
            <small>↗ 24.1%</small>
          </div>
          <div>
            <span>Approval rate</span>
            <b>96.8%</b>
            <small>Top 5%</small>
          </div>
        </div>
        <div className="analyticsGrid">
          <div className="chart">
            <div className="charttitle">
              <div>
                <span>Earnings</span>
                <b>$1,642.80</b>
              </div>
              <select>
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="bars">
              {bars.map((x, i) => (
                <i
                  key={i}
                  style={{ height: x }}
                  className={i > 9 ? "hi" : ""}
                />
              ))}
            </div>
            <div className="days">
              <span>Jun 1</span>
              <span>Jun 8</span>
              <span>Jun 15</span>
              <span>Jun 22</span>
              <span>Jun 30</span>
            </div>
          </div>
          <div className="approvals">
            <div className="panelHead">
              <b>Approval queue</b>
              <span>3 active</span>
            </div>
            <div className="approval">
              <i className="game rl">RL</i>
              <div>
                <b>Rocket League</b>
                <small>Reviewing · 8h</small>
              </div>
              <span className="spin" />
            </div>
            <div className="approval">
              <i className="game fn">FN</i>
              <div>
                <b>Fortnite</b>
                <small>Approved</small>
              </div>
              <Check />
            </div>
            <div className="approval">
              <i className="game mr">MR</i>
              <div>
                <b>Marvel Rivals</b>
                <small>Processing</small>
              </div>
              <Clock3 />
            </div>
          </div>
        </div>
        <div className="pdBottom">
          <div className="recentPay">
            <div className="panelHead">
              <b>Recent payouts</b>
              <a>
                Wallet <ChevronRight />
              </a>
            </div>
            <div>
              <span>
                <CreditCard />
              </span>
              <p>
                <b>Campaign earnings</b>
                <small>Rocket League · Jul 14</small>
              </p>
              <strong>+$84.00</strong>
            </div>
            <div>
              <span>
                <CreditCard />
              </span>
              <p>
                <b>Campaign earnings</b>
                <small>Marvel Rivals · Jul 12</small>
              </p>
              <strong>+$126.00</strong>
            </div>
          </div>
          <div className="badges">
            <div className="panelHead">
              <b>Achievements</b>
              <a>6 unlocked</a>
            </div>
            <div>
              <span>
                🔥<small>Hot streak</small>
              </span>
              <span>
                🏆<small>Top 10%</small>
              </span>
              <span>
                ⚡<small>1M views</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </M.div>
  );
}
function Dashboard() {
  return (
    <section id="creators" className="dashboardSec">
      <div className="wrap">
        <div className="dashIntro">
          <M.div {...reveal}>
            <span className="sectionnum">03 / YOUR COMMAND CENTER</span>
            <h2>
              Everything you need.
              <br />
              <em>Nothing you don’t.</em>
            </h2>
          </M.div>
          <M.div {...reveal}>
            <p>
              Your work, earnings, and growth in one place. Built to feel as
              fast as the games you play.
            </p>
            <div className="miniChecks">
              <span>
                <Check />
                Real-time campaign status
              </span>
              <span>
                <Check />
                Transparent performance data
              </span>
              <span>
                <Check />
                One-click withdrawals
              </span>
            </div>
          </M.div>
        </div>
        <ProductDash />
        <div className="leader">
          <div>
            <Trophy />
            <span>
              <b>Weekly leaderboard</b>
              <small>Top creators earn bonus rewards every Sunday.</small>
            </span>
          </div>
          <div className="leaders">
            <span>
              <i>1</i>
              <b>VEX</b>
              <em>$1,842</em>
            </span>
            <span>
              <i>2</i>
              <b>LUNA</b>
              <em>$1,624</em>
            </span>
            <span>
              <i>3</i>
              <b>KAI</b>
              <em>$1,488</em>
            </span>
          </div>
          <a>
            View leaderboard <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
const people = [
  [
    "CK",
    "@ClipKing",
    "38K",
    "TikTok",
    "I earned more in two weeks than months using creator funds. The briefs are clear and the payout just shows up.",
    "+$1,420",
  ],
  [
    "LX",
    "@luna.exe",
    "112K",
    "YouTube",
    "I post both IRL streams and gaming moments. ClipGG gives me campaigns that actually fit my audience.",
    "+$2,860",
  ],
  [
    "V7",
    "@vexfps",
    "64K",
    "Instagram",
    "ClipGG turned my daily clips into actual income without changing how I create.",
    "+$1,940",
  ],
];
function Testimonials() {
  return (
    <section id="stories" className="stories">
      <div className="wrap">
        <div className="storyHead">
          <span className="sectionnum">CREATORS, NOT INFLUENCERS</span>
          <h2>
            Built for people who
            <br />
            <em>actually create.</em>
          </h2>
        </div>
        <div className="storyGrid">
          {people.map((p, i) => (
            <M.article
              key={p[1]}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
            >
              <div className="profile">
                <i className={"pf p" + i}>{p[0]}</i>
                <span>
                  <b>
                    {p[1]} <BadgeCheck />
                  </b>
                  <small>
                    {p[2]} on {p[3]}
                  </small>
                </span>
                <PlatformIcon type={i === 0 ? "tt" : i === 1 ? "yt" : "ig"} />
              </div>
              <blockquote>“{p[4]}”</blockquote>
              <div>
                <span>Last 30 days</span>
                <b>{p[5]} earned</b>
              </div>
            </M.article>
          ))}
        </div>
      </div>
    </section>
  );
}
const qs = [
  [
    "How do I get paid?",
    "Approved earnings move directly to your ClipGG wallet. Withdraw through PayPal, bank transfer, or supported local payout methods.",
  ],
  [
    "Do I need a large following?",
    "No. Campaign eligibility considers content quality, engagement, region, and creator level—not only follower count.",
  ],
  [
    "How long does approval take?",
    "Most submissions are reviewed within 24 hours. Every status update appears in your workspace and notifications.",
  ],
  [
    "Can I join from anywhere?",
    "ClipGG supports creators in 48 countries. Available campaigns and payout methods may vary by region.",
  ],
];
function FAQ() {
  const [o, setO] = useState(0);
  return (
    <section id="faq" className="faq">
      <div className="wrap faqgrid">
        <div>
          <span className="sectionnum">NEED TO KNOW</span>
          <h2>
            Before you
            <br />
            <em>hit upload.</em>
          </h2>
          <p>Still stuck? Ask 52,000+ creators in our Discord.</p>
          <Btn ghost>Join the Discord</Btn>
        </div>
        <div className="questions">
          {qs.map((q, i) => (
            <div className={"q " + (o === i ? "open" : "")} key={q[0]}>
              <button onClick={() => setO(o === i ? -1 : i)}>
                <i>0{i + 1}</i>
                <b>{q[0]}</b>
                <ChevronDown />
              </button>
              <div>
                <p>{q[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section id="join" className="final">
      <div className="wrap finalbox">
        <div className="finalgrid" />
        <div className="ready">
          <span>
            <i />
            482 campaigns live now
          </span>
          <h2>
            Ready to start
            <br />
            <em>earning?</em>
          </h2>
          <p>
            Join the ClipGG Discord and get access to new creator campaigns.
          </p>
          <Btn>Join ClipGG on Discord</Btn>
          <small>
            <ShieldCheck /> Free to join. Complete onboarding in Discord.
          </small>
        </div>
        <div className="payoutCard">
          <div className="paytop">
            <span>Recent payout</span>
            <small>Just now</small>
          </div>
          <div className="paycreator">
            <i className="pf">RG</i>
            <div>
              <b>
                @rageplays <BadgeCheck />
              </b>
              <small>Rocket League · TikTok</small>
            </div>
          </div>
          <strong>+$56.00</strong>
          <span className="paid">
            <Check />
            Payment approved
          </span>
          <div className="methods">
            <small>Campaign updates</small>
            <div>
              <b>JOIN</b>
              <b>POST</b>
              <b>GET PAID</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footTop">
          <div>
            <Logo />
            <p>
              The Discord-first creator community
              <br />
              for gaming and IRL creator culture.
            </p>
            <a
              className="footerDiscord"
              href={DISCORD}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
              Join ClipGG on Discord
            </a>
          </div>
          <div>
            <b>Explore</b>
            <a href="#how">How it works</a>
            <a href="#campaigns">Campaign preview</a>
            <a href="#stories">Creator stories</a>
          </div>
          <div>
            <b>Help</b>
            <a href="#faq">FAQ</a>
            <a href="mailto:hello@clipgg.com">Contact</a>
          </div>
          <div>
            <b>Legal</b>
            <a>Privacy</a>
            <a>Terms</a>
            <a>Guidelines</a>
          </div>
          <div>
            <b>Community</b>
            <a href={DISCORD} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a>Twitter / X</a>
            <a>Instagram</a>
          </div>
        </div>
        <div className="footBottom">
          <span>© 2026 ClipGG, Inc.</span>
          <span>
            <i />
            Discord community online
          </span>
          <span>Made for creators, by creators.</span>
        </div>
      </div>
    </footer>
  );
}
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <MoneyToday />
      <Campaigns />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);

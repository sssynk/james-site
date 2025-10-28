'use client';

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Simple, clean, single-file React site styled with Tailwind.
// Top bar removed. Big hero with optional cutout image behind + animated colorful blobs.

const chip = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 shadow-sm";
const card = "rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-sm overflow-hidden";
const section = "max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 }
};

function HeroPortrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative isolate ${className}`}>
      {/* Ambient light halo */}
      <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-fuchsia-300/25 via-cyan-200/20 to-amber-200/25 blur-3xl dark:from-fuchsia-500/20 dark:via-sky-500/15 dark:to-amber-400/20" aria-hidden />

      {/* Animated blobs behind the cutout */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute left-[-8%] top-[18%] h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400 via-pink-300 to-amber-300 opacity-70 blur-2xl mix-blend-screen dark:from-fuchsia-500 dark:via-pink-500 dark:to-amber-400"
          animate={{ x: [0, 12, -10, 0], y: [0, -16, 12, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute right-[-12%] top-[6%] h-48 w-48 rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-400 opacity-65 blur-2xl mix-blend-screen dark:from-sky-500 dark:via-indigo-500 dark:to-violet-500"
          animate={{ x: [0, -18, 10, 0], y: [0, 22, -12, 0], scale: [1, 0.92, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        <motion.div
          className="absolute left-[12%] bottom-[-10%] h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-300 opacity-60 blur-2xl mix-blend-screen dark:from-emerald-500 dark:via-teal-500 dark:to-cyan-400"
          animate={{ x: [0, 18, -14, 0], y: [0, -10, 14, 0], scale: [1, 1.05, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        />
      </div>

      <div className="relative z-10">
        <div className="relative mx-auto flex items-end justify-center">
          <img
            src="/james-cutout.png"
            alt="James Wilson portrait"
            className="w-full max-w-sm drop-shadow-[0_35px_60px_rgba(15,23,42,0.35)] md:max-w-md"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function DecorativeBlobs() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 -z-20">
      {/* Soft radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(99,102,241,0.20),transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_70%_10%,rgba(99,102,241,0.12),transparent_60%)]" />

      {/* Animated blobs (gooey) */}
      <svg className="absolute -z-10" style={{ width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="absolute inset-0" style={{ filter: "url(#goo)" }}>
        <motion.div
          className="absolute left-[8%] top-[20%] w-56 h-56 rounded-full blur-3xl opacity-70 mix-blend-multiply bg-gradient-to-br from-fuchsia-400 to-amber-300 dark:from-fuchsia-500 dark:to-amber-400"
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute right-[12%] top-[8%] w-72 h-72 rounded-full blur-3xl opacity-60 mix-blend-multiply bg-gradient-to-br from-sky-400 to-violet-400 dark:from-sky-500 dark:to-violet-500"
          animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        <motion.div
          className="absolute left-[40%] bottom-[10%] w-64 h-64 rounded-full blur-3xl opacity-60 mix-blend-multiply bg-gradient-to-br from-emerald-400 to-cyan-300 dark:from-emerald-500 dark:to-cyan-400"
          animate={{ x: [0, 20, -30, 0], y: [0, -10, 15, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        />
      </div>
    </div>
  );
}

export default function JamesResumeSite() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <DecorativeBlobs />

      {/* HERO */}
      <section className={`${section} relative pt-24 md:pt-32 pb-8 md:pb-12`}>
        <motion.div {...fadeUp} className="relative grid items-start gap-8 md:grid-cols-5 z-10">
          <div className="md:col-span-3 mt-8 md:mt-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">James Wilson</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Computer Science & Engineering student at Santa Clara University. Builder of large-scale systems, playful robots, and a Roblox game with 300k+ MAU. Passionate about infrastructure, AI, and delightful UX.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className={chip}>Open to SWE / infra / AI roles</span>
              <span className={chip}>Roblox & game backends</span>
              <span className={chip}>Full‑stack product sense</span>
            </div>

            {/* Contact moved down into  hero, chunkier spacing */}
            <div className={`${card} mt-6 p-4 md:p-5 w-full max-w-lg backdrop-blur`}> 
              <div className="grid gap-3 text-sm">
                <a href="mailto:james@jamesssystems.info" className="flex items-center gap-3 hover:opacity-85">
                  <Mail className="h-4 w-4" /> james@jamesssystems.info
                </a>
                <a href="tel:+14255286690" className="flex items-center gap-3 hover:opacity-85">
                  <Phone className="h-4 w-4" /> (425) 528‑6690
                </a>
                <a href="https://linkedin.com/in/jwfw" className="flex items-center gap-3 hover:opacity-85" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/jwfw
                </a>
                <a href="https://github.com/sssynk" className="flex items-center gap-3 hover:opacity-85" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> github.com/sssynk
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col relative">
            <HeroPortrait className="-mt-12 md:-mt-16 z-10" />
            <div className={`${card} relative z-20 p-5`}>
              <h3 className="text-base font-semibold">At a glance</h3>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• 300k+ MAU Roblox game (self‑hosted backend)</li>
                <li>• Infra, Postgres, vector search, LLM features</li>
                <li>• iOS + web UIs; fast prototyping; shipper</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className={`${section} py-10 md:py-14`}>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Experience</motion.h2>
        <div className="grid gap-5">
          <motion.article {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">The Library of Aletheia · Lead Software Engineer</h3>
                <p className="text-sm text-neutral-500">Remote · Jan 2024 – Present</p>
              </div>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Built and scaled a Roblox game reaching <strong>300,000+ MAU</strong>.</li>
                <li>• Architected self‑hosted backend with database optimizations, load balancing, and fault‑tolerant systems for high‑throughput real‑time play.</li>
                <li>• Implemented scalable systems that increased player retention by <strong>20%</strong>.</li>
                <li>• Directed technical strategy to support sustained community growth of 2,000+ users/month.</li>
              </ul>
            </div>
          </motion.article>

          <motion.article {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">Kajabi LLC · Software Engineering Intern (Returning)</h3>
                <p className="text-sm text-neutral-500">Remote · Jun 2025 – Sep 2025</p>
              </div>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Optimized mobile onboarding; improved activation & conversion.</li>
                <li>• Enhanced onboarding segmentation with new data fields.</li>
                <li>• Led a critical analytics data‑integrity fix for cookie‑less users.</li>
              </ul>
            </div>
          </motion.article>

          <motion.article {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">PeakMind · Full‑Stack Engineering Intern</h3>
                <p className="text-sm text-neutral-500">Remote · Mar 2024 – May 2025</p>
              </div>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Built front‑end & back‑end for a gamified mental‑health app.</li>
                <li>• Designed AI chat features to support users’ well‑being.</li>
                <li>• Shipped multiple Swift mini‑games; boosted monthly downloads.</li>
              </ul>
            </div>
          </motion.article>

          <motion.article {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">Kajabi LLC · Software Engineering Intern</h3>
                <p className="text-sm text-neutral-500">Remote · Jun 2022 – Sep 2022</p>
              </div>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Built in‑app link‑generation to streamline marketing workflows.</li>
                <li>• Integrated a customer‑success platform; increased retention.</li>
              </ul>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${section} py-10 md:py-14`}>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Selected Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <h3 className="font-semibold">Self‑driving ride‑on robot</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Local positioning & navigation; robust embedded control.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <h3 className="font-semibold">EMG‑controlled mini robot</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Steered by leg‑muscle contractions for assistive control.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <h3 className="font-semibold">Support bot & MCP server</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">LLM‑powered support workflow for Library of Aletheia.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <h3 className="font-semibold">Disc‑golf tracer with 3D camera</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">OpenCV speed & trajectory; live visualization.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <h3 className="font-semibold">Custom moderation & on‑device LLM</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Trained game‑specific model; optimized to Apple MLX.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className={`${section} py-10 md:py-14`}>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Achievements</motion.h2>
        <motion.ul {...fadeUp} className={`${card} p-5 space-y-2 text-neutral-700 dark:text-neutral-300`}>
          <li>• 1st — UW NeuroHackathon (2025)</li>
          <li>• Presenter — Paul G. Allen School CS Research Showcase (2025)</li>
          <li>• 3rd — ACM Roblox Hackathon (2025)</li>
          <li>• 2nd — Cloudflare @ DubHacks (2024)</li>
          <li>• 2nd Overall — HackPNW Summer (2023)</li>
          <li>• Boeing Mentorship (2023‑24)</li>
          <li>• Dean’s List — UW (Spring 2023‑24 & Fall 2024‑25)</li>
        </motion.ul>
      </section>

      {/* Skills */}
      <section id="skills" className={`${section} py-10 md:py-14`}>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Skills</motion.h2>
        <motion.div {...fadeUp} className={`${card} p-5`}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python","JavaScript","TypeScript","Java","Lua","Ruby","R","HTML/CSS","C++"
                ].map((s) => (
                  <span key={s} className={chip}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Back‑end / Infra</h3>
              <div className="flex flex-wrap gap-2">
                {["APIs","Load balancing","Fault tolerance","Monitoring","CI/CD","Scaling"].map((s) => (
                  <span key={s} className={chip}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Front‑end</h3>
              <div className="flex flex-wrap gap-2">
                {["Web apps","Embedded UIs","iOS UIs"].map((s) => (
                  <span key={s} className={chip}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Databases & AI</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL","Distributed Postgres","LLMs","Classification","MCP servers"].map((s) => (
                  <span key={s} className={chip}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className={`${section} py-10 md:py-14`}>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Education</motion.h2>
        <div className="grid gap-5">
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">Santa Clara University — B.S. Computer Science & Engineering</h3>
                <p className="text-sm text-neutral-500">Santa Clara, CA · Expected Jun 2027</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className={card}>
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">University of Washington — Pre‑Sciences</h3>
                <p className="text-sm text-neutral-500">Seattle, WA · Sep 2023 – Jun 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} James Wilson
      </footer>
    </div>
  );
}

import Image from "next/image";

const cameraSpecs = [
  { label: "Camera", value: "Nikon Z8" },
  { label: "Lens", value: "70-200mm f/2.8 S" },
  { label: "Shutter", value: "1/250 sec (slow-motion interpolation)" },
  { label: "Frame Rate", value: "120 fps (4× retimed)" },
  { label: "ISO", value: "200" },
  { label: "Resolution", value: "4K DCI • 12-bit N-RAW" },
];

const trainingPhases = [
  {
    title: "Rain Chi Ignition",
    focus: "Precision breathing & tendon activation",
    cues: ["Diaphragmatic cadence 4-2-6", "Isometric dragon stance", "Subtle wrist snaps for water displacement"],
    timestamp: "00:12",
  },
  {
    title: "Impact Flow Drill",
    focus: "Chain-speed strikes under hydraulic resistance",
    cues: ["Triple strike flurry (jab-elbow-backfist)", "Shockwave absorption through core spirals", "Footwork on soaked basalt stones"],
    timestamp: "00:43",
  },
  {
    title: "Storm Kata Execution",
    focus: "Weaponized calm & explosive release",
    cues: ["Whiplash waist torque", "Partial stop kicks with splash punctuations", "Meditative reset | steady gaze down lens"],
    timestamp: "01:31",
  },
];

const signatureMoves = [
  {
    name: "Monsoon Snap Kick",
    description:
      "Explosive front kick that distorts rainfall into a halo, shot in tight telephoto for compression and tactile droplets.",
    metrics: ["Frame 187: heel impact freeze", "Splash radius 1.6m", "Muscle definition accent under strobe rim light"],
  },
  {
    name: "Dragon Whip Backfist",
    description:
      "Hybrid Jeet Kune Do strike captured with shutter drag to echo motion trails while preserving facial intensity.",
    metrics: ["Micro-expression: clenched jawline", "Gyroscopic shoulder isolation", "8° roll for cinematic tension"],
  },
  {
    name: "Typhoon Breathing Cycle",
    description:
      "Slow-motion inhale-exhale macro tracking, highlighting raindrop beads cascading along forearm tendons.",
    metrics: ["15% ramp retime", "Close focus 0.65m", "Droplet luminance 280 nits via edge practicals"],
  },
];

const cinematicMoments = [
  {
    time: "00:24",
    shot: "Push-in from lens hood droplets to intense glare; rain streaks tracked with optical flow.",
  },
  {
    time: "00:57",
    shot: "180° pivot; water plume arcs across frame while lightning practical cues rim the silhouette.",
  },
  {
    time: "01:46",
    shot: "Final stance—stillness against chaos, facial micro-tremor emphasized with subtle HDR highlight roll-off.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=80"
          alt="Martial artist training under rain with cinematic lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/70" />
      </div>
      <div className="rain-overlay" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <header className="flex flex-col items-start gap-6 text-sm uppercase tracking-[0.6em] text-slate-300/80 sm:flex-row sm:items-center">
          <span className="rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
            Hyperreal Slow Motion Study
          </span>
          <span className="hidden h-px flex-1 bg-gradient-to-r from-slate-500/40 via-slate-400/60 to-transparent sm:block" />
          <span className="rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
            Storm-Forged Focus
          </span>
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Bruce Lee-Inspired Discipline
              </p>
              <h1 className="motion-trace text-balance text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Training in the deluge, every droplet carving definition, every breath a declaration of intent.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/90 lg:text-xl">
                Captured on the Nikon Z8 at ISO 200, this sequence fuses Jeet Kune Do precision with atmospheric storytelling. Slow-motion
                rainfall amplifies each strike; cinematic storm lighting chisels the physique; the intensity never blinks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-300/80">
              <span className="rounded-full border border-slate-600/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
                4K DCI • 12-Bit
              </span>
              <span className="rounded-full border border-slate-600/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
                120 FPS Retimed
              </span>
              <span className="rounded-full border border-slate-600/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
                Rain Intensity: 82 mm/h
              </span>
              <span className="rounded-full border border-slate-600/60 bg-slate-900/50 px-4 py-2 backdrop-blur">
                Lightning Practical: 3-Point Rig
              </span>
            </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cameraSpecs.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/80"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400/80">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-100">{value}</p>
                    </div>
                  ))}
                </div>
          </div>

          <aside className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Shot Blueprint</h2>
                <p className="text-xl font-semibold text-slate-100">
                  Electric rain, thunder-lit edges, and a gaze that refuses to yield.
                </p>
              </div>
              <div className="space-y-4">
                {cinematicMoments.map(({ time, shot }) => (
                  <div key={time} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/90">{time}</p>
                    <p className="mt-2 text-sm text-slate-200/90">{shot}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5 text-sm leading-relaxed text-cyan-100">
                <span className="font-semibold uppercase tracking-[0.35em] text-cyan-200/80">Directive</span>
                <p className="mt-3 text-slate-100">
                  Hold the frame until the final exhale—capture the storm surrendering to stillness while the fighter stays unbroken.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section>
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">Performance Phases</p>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {trainingPhases.map(({ title, focus, cues, timestamp }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-slate-900/80"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  <span>{timestamp}</span>
                  <span>Focus</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{focus}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {cues.map((cue) => (
                    <li key={cue} className="flex gap-2">
                      <span className="mt-[0.4em] h-1 w-1 flex-shrink-0 rounded-full bg-cyan-300" />
                      <span>{cue}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">Technique Signatures</p>
            <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
              Every motion sculpted by rain, every muscle fiber etched by lightning.
            </h2>
            <p className="max-w-2xl text-base text-slate-200/90">
              Overcranked footage magnifies kinetic poetry—toned muscles glisten, rain refracts light across the frame, and facial intensity
              anchors the viewer amid the storm surge.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {signatureMoves.slice(0, 2).map(({ name, description, metrics }) => (
                <div key={name} className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 backdrop-blur-lg">
                  <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{description}</p>
                  <ul className="mt-4 space-y-1 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                    {metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {signatureMoves.slice(2).map(({ name, description, metrics }) => (
              <div
                key={name}
                className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 backdrop-blur-lg transition-transform duration-500 hover:-translate-y-2 hover:border-cyan-400/60"
              >
                <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{description}</p>
                <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                  {metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-6 text-sm text-cyan-100 shadow-inner shadow-cyan-400/40">
              <p className="uppercase tracking-[0.4em] text-cyan-200/80">Face Focus</p>
              <p className="mt-3">
                Intense brow compression at frame 312; micro-splatter tracing jawline; maintained eye contact with lens—psyche unshaken.
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-6 rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">Deliverable</p>
            <h2 className="text-2xl font-semibold text-slate-50">Storm Discipline • Final Cut Package</h2>
            <p className="max-w-xl text-sm text-slate-300/90">
              Includes graded ProRes 4444 master, 4× slow-motion sequence, layered rainfall SFX stems, and shot-by-shot lighting diagrams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full border border-cyan-400/80 bg-cyan-500/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100 transition-colors hover:bg-cyan-500/30"
              href="#"
            >
              Download Shot Plan
            </a>
            <a
              className="rounded-full border border-slate-600/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/90 transition-colors hover:border-cyan-300/60 hover:text-cyan-100"
              href="#"
            >
              View Lighting Diagram
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

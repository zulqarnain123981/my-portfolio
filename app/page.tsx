
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight transition hover:text-zinc-300"
          >
            Zulqarnain
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-zinc-800 px-3 py-2 text-xl transition hover:bg-zinc-900">
              ☰
            </summary>

            <div className="absolute right-0 top-12 z-10 w-48 rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl">
              <div className="flex flex-col gap-4 text-sm text-zinc-300">
                <a href="#about" className="transition hover:text-white">
                  About
                </a>

                <a href="#skills" className="transition hover:text-white">
                  Skills
                </a>

                <a href="#projects" className="transition hover:text-white">
                  Projects
                </a>

                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </details>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center overflow-hidden px-6 py-20 sm:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-zinc-500/[0.05] blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
            AI Developer • AI Solutions Builder
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm{" "}
            <span className="text-zinc-400">
              Zulqarnain.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I build AI-powered applications and modern web experiences.
            I focus on turning ideas into practical digital solutions
            using AI, automation, and modern development tools.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              View My Projects
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-center font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-t border-zinc-800 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
              About Me
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Building useful things with AI.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I'm a developer focused on building practical AI-powered
              applications and modern web experiences. I enjoy turning
              ideas into working products and exploring how AI can solve
              real-world problems.
            </p>

            <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              My current work includes AI agents, data analysis tools,
              automation, and security-focused applications. I'm
              constantly learning new technologies by building real
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="border-t border-zinc-800 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Skills
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I use modern development tools to build AI-powered
              applications and web experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                AI Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                AI applications, AI agents, LLMs, and AI-powered
                workflows.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                React & Next.js
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Building modern and responsive web applications.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                TypeScript
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Writing clean and reliable code for web applications.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                Tailwind CSS
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Creating clean, responsive, and modern interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                Data Analysis
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Working with data and building AI-assisted analysis
                tools.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
              <h3 className="text-lg font-semibold">
                Automation
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Building automated workflows and intelligent
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-zinc-800 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Projects
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Things I've built.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              A selection of AI-powered projects I have built while
              learning and exploring modern technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
            {/* Data Analyst AI */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-xl transition duration-300 group-hover:scale-105">
                📊
              </div>

              <h3 className="text-xl font-semibold">
                Data Analyst AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                An AI-powered tool designed to help users analyze
                data, understand insights, and work with datasets
                more easily.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  AI
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  Data Analysis
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  Python
                </span>
              </div>
            </div>

            {/* Multi-Agent AI */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-xl transition duration-300 group-hover:scale-105">
                🤖
              </div>

              <h3 className="text-xl font-semibold">
                Multi-Agent AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                An AI system where multiple specialized agents work
                together to solve tasks and produce useful results.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  AI Agents
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  LLMs
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  Automation
                </span>
              </div>
            </div>

            {/* Scam Shield AI */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-xl transition duration-300 group-hover:scale-105">
                🛡️
              </div>

              <h3 className="text-xl font-semibold">
                Scam Shield AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                An AI-powered security project designed to help
                identify suspicious messages, links, and potential
                online scams.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  AI
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  Security
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  Detection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-zinc-800 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Contact
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's build something together.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Have an idea, project, or opportunity? I'd love to
              hear about it and see how I can help.
            </p>

            {/* Email Button */}
            <div className="mt-8">
              <a
                href="mailto:your.email@example.com"
                className="inline-block w-full rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 sm:w-auto"
              >
                Send Me an Email
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition duration-300 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Zulqarnain. All rights reserved.
          </p>

          <p>
            Built with Next.js, React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}

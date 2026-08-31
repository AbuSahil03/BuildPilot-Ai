"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, LayoutDashboard, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const foundationPillars = [
  {
    title: "AI Project Architect",
    description: "Schema-validated project generation with roadmap, architecture, and delivery planning.",
    icon: Bot,
  },
  {
    title: "Persistent Project Workspace",
    description: "Each idea becomes its own workspace with tasks, analytics, and AI copilots.",
    icon: LayoutDashboard,
  },
  {
    title: "RAG-Native Knowledge Layer",
    description: "Project documents, chunking, embeddings, and grounded answers stay isolated per workspace.",
    icon: Database,
  },
  {
    title: "Production Security Model",
    description: "First-party auth, scoped access control, rate limiting, and protected AI endpoints.",
    icon: ShieldCheck,
  },
];

const phaseOneOutcomes = [
  "Monorepo scaffold with isolated frontend and backend applications",
  "FastAPI shell with versioned routing and typed configuration",
  "Next.js shell with premium visual direction and theme support",
  "Architecture, deployment, and data strategy documented in-repo",
];

export function MarketingShell() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-40" />
      <div className="absolute left-[-5rem] top-[-2rem] h-72 w-72 rounded-full bg-[#ec9c75]/25 blur-3xl" />
      <div className="absolute right-[-3rem] top-24 h-80 w-80 rounded-full bg-[#3eb3a1]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-10">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              BuildPilot AI
            </p>
            <h1 className="mt-2 text-xl font-semibold text-foreground [font-family:var(--font-heading)]">
              Turn an idea into an executable project.
            </h1>
          </div>
          <ThemeToggle />
        </header>

        <main
          id="phase-one"
          className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-8"
          >
            <div className="inline-flex rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
              Phase 1 foundation in progress
            </div>

            <div className="space-y-5">
              <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-foreground [font-family:var(--font-heading)] sm:text-6xl">
                Build software plans with the structure of a serious product team.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                BuildPilot AI transforms a rough product idea into a scoped blueprint,
                workspace, roadmap, task system, and AI-guided execution loop.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#phase-one"
                className={buttonVariants({ variant: "primary" })}
              >
                Build My Project
              </Link>
              <Link
                href="http://localhost:8000/docs"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Read API Docs
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {phaseOneOutcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
                  className="rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-foreground">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[2rem] border border-border bg-card/90 p-6 shadow-glow backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Platform foundation</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The architecture baseline for the next 19 phases.
                </p>
              </div>
              <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                4 pillars
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {foundationPillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.article
                    key={pillar.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.45 }}
                    className="rounded-3xl border border-border/80 bg-background/80 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground [font-family:var(--font-heading)]">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

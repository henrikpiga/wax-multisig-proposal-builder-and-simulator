# wax-multisig-proposal-builder-and-simulator — Multi-Sig Proposal Builder & Simulator

> **Status:** 🔄 In Active Deep Refinement (PX Perfection Standard)  
> **Category:** Multi-Sig, Governance & Proposal Workflows (Core Antelope/EOSIO)  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)
> **Benchmark Standard:** gkniftyheads-tracker quality + Pixel Journey retro-pixel excellence + PX Perfection Standard v1.0

**One-sentence goal:** An elegant, educational, and safe interactive tool for building, simulating, previewing, and executing multi-sig proposals on WAX. Features proposal creation, threshold validation, risk analysis, before/after diffs, and direct WharfKit integration — all client-side where possible.

---

## Repo Scope & Focus

This repository is designed to be the **definitive educational + interactive hub** for creating, simulating, and safely executing multi-sig proposals on Antelope/WAX.

### Primary Focus Areas

- **Interactive Proposal Builder** — Clean UI for creating multi-sig proposals with clear permission selection.
- **Live Simulation & Validation** — Real-time threshold checking and feasibility analysis.
- **Safety & Risk Analysis** — Highlight dangerous or inefficient proposals before execution.
- **Educational Depth** — Clear explanations of multi-sig concepts, best practices, and common pitfalls.
- **Reusable Components** — High-quality, copy-paste friendly React/TypeScript components.
- **WharfKit Integration** — Real on-chain proposal creation and execution examples.

### What This Repo Does *Not* Aim to Fully Cover

- General account permission visualization and editing (see `wax-permission-visualizer-and-editor`)
- Detailed key rotation workflows (potential future dedicated tool)
- Batch proposal auditing across many accounts

---

## Educational Core — Why Multi-Sig Proposals Matter

Multi-sig (M-of-N) proposals are one of the most important governance and security tools on WAX. They allow groups, DAOs, and teams to require multiple approvals before executing high-value actions.

However, creating proposals correctly is non-trivial. Common issues include:
- Setting thresholds that can never be met
- Forgetting to include the right permissions
- Creating proposals that look safe but have hidden risks
- Poor user experience that leads to mistakes

This blueprint exists to make multi-sig proposal creation **safe, educational, and reliable**.

---

## Examples Folder

This repository includes a dedicated `/examples` folder with reusable components:

- `MultiSigThresholdValidator.tsx` — Educational component for validating whether keys can meet a required threshold

More components will be added as the repo expands (ProposalBuilder, ProposalSimulator, RiskAnalyzer, WharfKit integration examples, etc.).

---

## Machine-Optimized Spec (spec.yaml)

This repository includes a comprehensive `spec.yaml` designed for AI coding agents to instantly understand the blueprint and generate high-quality extensions.

---

## Next Steps

We are expanding this repo following the same high standards as `wax-permission-visualizer-and-editor`:

- Rich educational content on multi-sig concepts and safety
- Multiple levels of examples (simple → recommended → advanced)
- Strong safety focus with risk analysis
- Production-ready, reusable components
- Clear integration guidance

---

*Last updated: July 03, 2026*

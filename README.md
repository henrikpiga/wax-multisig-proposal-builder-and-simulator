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

## Common Multi-Sig Anti-Patterns & How to Avoid Them

This section covers the most frequent and dangerous mistakes when working with multi-sig on WAX.

### Critical Anti-Patterns

| Anti-Pattern | Description | Risk Level | How to Detect | How to Fix |
|--------------|-------------|------------|---------------|------------|
| **Threshold higher than total weight** | Proposal can never be executed | Critical | Simulation shows insufficient weight | Lower threshold or add more keys/weight before creating the proposal |
| **Single key controls high-value multi-sig** | No real multi-sig protection | High | Visual check shows one key with full weight | Add multiple keys with reasonable weights and a proper threshold |
| **Overly complex permission requirements** | Hard for approvers to understand what they are signing | Medium-High | Proposal description is vague or overly technical | Write clear, human-readable descriptions of what the proposal does |
| **No separation between daily and high-risk actions** | Everything uses the same multi-sig | Medium | All actions go through the same permission | Create specific linked permissions for high-impact actions |
| **Missing backup approvers** | If key people are unavailable, proposals get stuck | Medium | No redundancy in approvers | Include backup approvers or slightly lower thresholds where safe |

### Why These Patterns Are Dangerous on WAX

- Failed or stuck proposals waste time and can damage trust in governance.
- Overly complex setups lead to mistakes and missed opportunities.
- Weak multi-sig structures give a false sense of security.

---

## Best Practices for Multi-Sig on WAX

### General Recommendations

1. **Start simple** — Begin with a clear, well-documented 2-of-3 or 3-of-5 structure.
2. **Document everything** — Clearly explain in the proposal what action is being taken and why.
3. **Test thoroughly** — Always simulate proposals before broadcasting them.
4. **Use specific linked permissions** — Avoid giving broad `active` authority when possible.
5. **Have backup approvers** — Plan for key people being unavailable.
6. **Review regularly** — Re-evaluate your multi-sig structure as the team or project evolves.

### By Use Case

| Use Case              | Recommended Approach                              | Key Considerations                     |
|-----------------------|---------------------------------------------------|----------------------------------------|
| **DAO Governance**    | Strong multi-sig on owner + clear proposal process | High transparency and documentation   |
| **Treasury Management** | Higher thresholds + specific transfer permissions | Strong safety + clear audit trail     |
| **Game / dApp Ops**   | Balanced thresholds for speed vs safety           | Avoid overly complex flows for players|
| **Infrastructure**    | Very conservative multi-sig with strong backups   | Maximum recoverability and auditability|

---

## Examples Folder

This repository includes a dedicated `/examples` folder with reusable components:

- `MultiSigThresholdValidator.tsx` — Validates whether keys can meet a required multi-sig threshold
- `MultiSigRiskAnalyzer.tsx` — Displays risk warnings and issues for a multi-sig configuration
- `MultiSigApprovalSimulator.tsx` — Interactive simulator to toggle approvals and see if the threshold is met
- `MultiSigProposalTemplates.tsx` — Common multi-sig proposal templates for quick starts
- `ProposalChangeDiff.tsx` — Shows before/after changes in a proposal for clear review
- `WharfKitProposalExample.tsx` — Educational stub for WharfKit integration
- `ProposalSimulator.tsx` — Combined simulator with real-time threshold status
- `PermissionSelector.tsx` — For selecting permissions when building proposals
- `MultiSigRiskSummary.tsx` — Overall risk summary for a multi-sig setup
- `ProposalBuilder.tsx` — Placeholder for interactive proposal builder UI

More components will be added as the repo expands (full interactive builder, WharfKit examples, etc.).

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

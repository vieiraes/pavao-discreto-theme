# Claude Code — project context


<!-- cloude-code-toolbox:mcp-skills-awareness-begin -->

### MCP & Skills awareness (Cloude Code ToolBox)

_Last synced: 2026-09-24T12:09:56.167Z._

- **Full report:** `.claude/cloude-code-toolbox-mcp-skills-awareness.md` in this workspace (auto-overwritten on each scan). Use it as ground truth for configured servers and skill folders.
- **MCP:** For **live tools** in Claude Code, enable the matching server via `/mcp`. Servers are configured in `~/.claude.json` (user) and `.mcp.json` (project).
- **When the user’s task matches a server** (e.g. Confluence work and a **Confluence** / **Atlassian** MCP is listed), **prefer that server id** and plan on tool use—not only file search.
- **Skills:** Folders below contain `SKILL.md`; attach or cite paths in chat when relevant.

#### Workspace MCP

- `/home/bruno_vieira/projects/gh/bruno/pavao-discreto-theme/.mcp.json` _(workspace: pavao-discreto-theme)_ — _file missing_

_No active workspace servers in mcp.json._

#### User MCP

- `/home/bruno_vieira/.claude.json` — _servers defined_

| Server id | Kind | Detail |
|-----------|------|--------|
| vercel | http | https://mcp.vercel.com |

#### Project skills

_None found (or no workspace open)._

#### User skills

- **agents-sdk** — `/home/bruno_vieira/.agents/skills/agents-sdk` — Build AI agents on Cloudflare Workers using the Agents SDK. Load when creating stateful agents, durable workflows, real-time WebSocket apps, scheduled tasks, MCP servers, chat applications, voice agents, or browser autom

- **cloudflare** — `/home/bruno_vieira/.agents/skills/cloudflare` — Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags (Flagship), networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastruc

- **cloudflare-email-service** — `/home/bruno_vieira/.agents/skills/cloudflare-email-service` — Send and receive transactional emails with Cloudflare Email Service (Email Sending + Email Routing). Use when building email sending (Workers binding or REST API), email routing, Agents SDK email handling, or integrating

- **cloudflare-one** — `/home/bruno_vieira/.agents/skills/cloudflare-one` — Guides Cloudflare One Zero Trust and SASE work across Access, Gateway, WARP, Tunnel, Cloudflare WAN, DLP, CASB, device posture, and identity. Use when designing, configuring, troubleshooting, or reviewing Cloudflare One 

- **cloudflare-one-migrations** — `/home/bruno_vieira/.agents/skills/cloudflare-one-migrations` — Plans migrations from Zscaler ZIA/ZPA, Palo Alto, legacy VPN, SWG, or SASE stacks to Cloudflare One. Use for migration assessments, policy mapping, rollout plans, and parity/gap analysis.

- **durable-objects** — `/home/bruno_vieira/.agents/skills/durable-objects` — Create and review Cloudflare Durable Objects. Use when building stateful coordination (chat rooms, multiplayer games, booking systems), implementing RPC methods, SQLite storage, alarms, WebSockets, or reviewing DO code f

- **sandbox-migrate-to-next** — `/home/bruno_vieira/.agents/skills/sandbox-migrate-to-next` — Use when porting a Cloudflare Sandbox app from stable @cloudflare/sandbox to @cloudflare/sandbox@next (Sandbox SDK 1.0 preview), or when the user asks to migrate or upgrade to Sandbox 1.0 / @next. Not for day-to-day stab

- **sandbox-next** — `/home/bruno_vieira/.agents/skills/sandbox-next` — Use when building or changing Cloudflare Sandbox apps on @cloudflare/sandbox@next (Sandbox SDK 1.0 preview)—code execution, AI runners, interpreters, CI-like jobs, terminals, files, mounts, tunnels, preview URLs, lifecyc

- **sandbox-stable** — `/home/bruno_vieira/.agents/skills/sandbox-stable` — Use when building or changing Cloudflare Sandbox apps on the current stable @cloudflare/sandbox package (default npm tag)—commands, sessions, files, ports, tunnels, terminals, bridge, production, or deprecated-API cleanu

- **turnstile-spin** — `/home/bruno_vieira/.agents/skills/turnstile-spin` — Set up Cloudflare Turnstile end-to-end in a project. Scan the codebase, create the widget via the Cloudflare API, embed it where user requests need bot verification (form submissions, SPA actions, API endpoints, download

- **web-perf** — `/home/bruno_vieira/.agents/skills/web-perf` — Analyzes web performance using Chrome DevTools MCP. Measures Core Web Vitals (LCP, INP, CLS) and supplementary metrics (FCP, TBT, Speed Index), identifies render-blocking resources, network dependency chains, layout shif

- **workers-best-practices** — `/home/bruno_vieira/.agents/skills/workers-best-practices` — Reviews and authors Cloudflare Workers code against production best practices. Load when writing new Workers, reviewing Worker code, configuring wrangler.jsonc, or checking for common Workers anti-patterns (streaming, fl

- **wrangler** — `/home/bruno_vieira/.agents/skills/wrangler` — Cloudflare Workers CLI for deploying, developing, and managing Workers, KV, R2, D1, Vectorize, Hyperdrive, Workers AI, Containers, Queues, Workflows, Pipelines, and Secrets Store. Load before running wrangler commands to

<!-- cloude-code-toolbox:mcp-skills-awareness-end -->

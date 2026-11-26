# Platform strategy: browser first, desktop-ready

**Status:** proposed strategy. Current main is a browser-focused Vite/React prototype. Neither durable offline-first storage nor desktop packaging is established.

## Preferred direction

1. Make browser authoring dependable: create/edit/save/reopen, recovery, performance, real pages and accessible output.
2. Keep the canonical document domain and core operations independent of browser or OS storage APIs.
3. Implement platform adapters for local persistence, asset lookup, file input/output, printing, credential storage and later external integration.
4. Validate packaging options only after working authoring/export acceptance fixtures. Desktop is a distribution path, not a separate document product.

## Local-first means

The supported app should remain usable without a permanent internet connection for manual work and previously available project files. Changes are written to durable local storage with explicit save status and recoverability. Cloud sync, sign-in, collaboration and external AI may require connectivity and must say so. Local-first is **not** synonymous with storing secrets unencrypted in localStorage.

## Proposed interfaces

    DocumentStore: load, save(expectedRevision), list, remove, history, recover
    AssetStore: import, get, thumbnail, remove, verify
    ExportTarget: preview, write, share
    DeviceCapabilities: storageQuota, permissions, clipboard, dictation availability
    OptionalSync: authenticate, queue, reconcile, revoke

These are conceptual contracts to refine, not present TypeScript modules.

## Desktop packaging evaluation (later)

Compare Tauri, Electron and credible alternatives for data access, application updates, signing, bundle size, accessibility, filesystem permissions and renderer sandboxing. Do not silently grant broad filesystem or network permissions. Shared core fixtures must pass identically across platforms.

## Privacy and sync boundaries

Define per-project consent for transmitting files, screenshots or extracted content to cloud providers. Label local, synced and external-AI processing states accurately; avoid false assurances that content is private simply because the app is browser-based. Test conflict resolution, export portability and deletion semantics before opt-in sync.

See [architecture overview](overview.md) and [roadmap](../../ROADMAP.md).

# Future THOTH extension architecture

**Decision status:** investigation only. No plugin loader, public SDK or sandbox is implemented or approved.

THOTH may eventually support user-created semantic components, document profiles, exporters, code-language tools, diagrams and optional panels. This must **not** compromise data control, offline/manual authoring or publishing fidelity.

## Boundary proposal

- Stable, versioned **extension manifest**: ID, version, author, compatibility range, component types, capabilities, permissions, update/migration plan, asset rights.
- Capability-scoped host APIs rather than arbitrary access to the editor, database, filesystem or network.
- Changes expressed through validated operations targeting canonical component IDs and revisions; preview, undo and conflict checks still apply.
- Namespaced extension state; explicit installation, enable/disable, data-removal and failure fallback.
- Renderer/print/export fallback for unsupported extension blocks; never silently discard embedded content.
- Strong isolation of untrusted code; security review should consider iframe/worker/process boundaries, content sanitisation, supply-chain integrity and denial of service.
- Accessibility, keyboard support, privacy disclosures and compatibility fixtures required for release.

## Research / prerequisites

1. Finish canonical document model and serializer/migration contract.
2. Establish local persistence, asset handling, transaction and undo boundaries.
3. Establish real page rendering and exporters; define an extension component fallback contract.
4. Threat-model permissions, code execution, content import, update signing and revocation.
5. Prototype a deliberately constrained **data-only template/component package** before executing any third-party code.
6. Publish versioned, tested APIs and an approval process only after reviews.

**No extension architecture is required to build THOTH's first document-authoring milestone.** Avoid premature plugin design or dependencies. [Product definition](../../PRODUCT.md) and [Developer Hub](../product/developer-hub.md) govern the intended use.

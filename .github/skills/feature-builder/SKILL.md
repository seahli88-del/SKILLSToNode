---
name: feature-builder
description: Use this skill to plan, implement, and validate a new feature from requirement to working code.
---

# Feature Builder

Use this skill when adding a new capability, user-facing feature, API behavior, or workflow improvement.

## Workflow

1. Clarify the requirement.
   - Identify user value, acceptance criteria, inputs, and expected outputs.
   - Note constraints, edge cases, and dependencies.

2. Break the task into small steps.
   - Prefer one coherent change at a time.
   - Separate UI, logic, storage, and validation work if needed.

3. Design the smallest clean implementation.
   - Keep the solution aligned with the current architecture.
   - Reuse existing patterns where they fit.

4. Implement with verification in mind.
   - Add or update tests around the new behavior.
   - Keep changes focused and readable.

5. Validate the result.
   - Run the relevant tests or checks.
   - Confirm the feature satisfies the requirement and does not break nearby behavior.

## Output expectations

- Summarize the feature and the key design decisions.
- Report what was implemented and how it was validated.
- Call out any assumptions or follow-up items.

## Guardrails

- Do not add broad refactors while implementing a feature.
- Do not skip validation for edge cases.
- Keep changes aligned with the stated requirement.

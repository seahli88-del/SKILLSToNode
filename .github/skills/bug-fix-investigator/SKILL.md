---
name: bug-fix-investigator
description: Use this skill to reproduce bugs, trace root causes, and apply a minimal, verified fix.
---

# Bug Fix Investigator

Use this skill when the task involves debugging, unexpected behavior, failing tests, or application errors.

## Workflow

1. Reproduce the issue clearly.
   - Confirm the exact input, environment, and symptom.
   - Capture the failing behavior in a short, testable description.

2. Localize the root cause.
   - Trace the data flow and relevant code paths.
   - Check recent changes, assumptions, and edge cases.
   - Favor the narrowest point of failure before changing code.

3. Write or update a focused failing check.
   - Prefer an automated test or minimal reproduction.
   - Keep it small enough to prove the bug and the fix.

4. Apply the smallest correct fix.
   - Avoid unrelated refactors.
   - Preserve existing behavior unless the bug requires a change.

5. Verify the fix.
   - Run the relevant checks or tests.
   - Confirm the original symptom is resolved without regressions.

## Output expectations

- Explain the root cause in plain language.
- Describe the fix briefly and why it is safe.
- Mention the evidence used to validate it.

## Guardrails

- Do not guess at random changes.
- Do not broaden scope beyond the bug.
- Prefer root-cause evidence over speculative patching.

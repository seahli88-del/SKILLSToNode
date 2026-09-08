---
name: code-reviewer
description: Use this skill to review code for correctness, maintainability, security, and quality before merge.
---

# Code Reviewer

Use this skill when reviewing changes, checking a pull request, or assessing whether code is ready to merge.

## Review checklist

1. Correctness
   - Does the logic match the intended behavior?
   - Are edge cases covered?
   - Are the assumptions explicit and valid?

2. Maintainability
   - Is the code readable and consistent with project patterns?
   - Are names, structure, and comments helpful?
   - Is complexity justified?

3. Security and reliability
   - Are inputs validated and unsafe operations avoided?
   - Are errors handled appropriately?
   - Are there obvious resource, concurrency, or data integrity issues?

4. Testing and validation
   - Is there evidence the behavior is tested?
   - Are the relevant tests meaningful and not superficial?

5. Scope and risk
   - Does the change stay focused on the task?
   - Are unrelated changes or accidental drift avoided?

## Review style

- Provide concise findings with clear severity.
- Prefer specific examples and actionable fixes.
- Distinguish between blocking issues and suggestions.

## Output expectations

- List the strongest concerns first.
- Include rationale and suggested remediation.
- Note where the code appears solid as well as where it needs attention.

## Guardrails

- Do not nitpick style issues that are not relevant to correctness or maintainability.
- Separate positive feedback from required fixes.
- Focus on the code as it exists rather than hypothetical alternatives.

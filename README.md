# Skill Pack

This repository contains reusable AI skill definitions that can be published to npm while keeping the source in GitHub.

## Included skills

- bug-fix-investigator
- feature-builder
- code-reviewer

## Usage

```js
import { listSkills, getSkill } from '@your-scope/skill-pack';

console.log(listSkills());
console.log(getSkill('bug-fix-investigator').name);
```

## Publishing

Publishing runs automatically after a pull request is merged into `main` via GitHub Actions.

## Development

```bash
npm test
```

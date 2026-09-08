import test from 'node:test';
import assert from 'node:assert/strict';

import { listSkills, getSkill } from '../src/index.js';

test('listSkills returns known skill names', () => {
  const skills = listSkills();

  assert.ok(skills.includes('bug-fix-investigator'));
  assert.ok(skills.includes('feature-builder'));
  assert.ok(skills.includes('code-reviewer'));
});

test('getSkill returns markdown content for an existing skill', () => {
  const skill = getSkill('bug-fix-investigator');

  assert.equal(skill.name, 'bug-fix-investigator');
  assert.match(skill.content, /# Bug Fix Investigator/);
});

test('getSkill throws for a missing skill', () => {
  assert.throws(() => getSkill('missing-skill'), /Skill not found: missing-skill/);
});

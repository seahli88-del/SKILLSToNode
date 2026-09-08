import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillsRoot = path.resolve(__dirname, '../.github/skills');

export function listSkills() {
  if (!fs.existsSync(skillsRoot)) {
    return [];
  }

  return fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function getSkill(name) {
  const skillDir = path.join(skillsRoot, name);
  const skillFile = path.join(skillDir, 'SKILL.md');

  if (!fs.existsSync(skillFile)) {
    throw new Error(`Skill not found: ${name}`);
  }

  return {
    name,
    path: skillFile,
    content: fs.readFileSync(skillFile, 'utf8')
  };
}

export default {
  listSkills,
  getSkill
};

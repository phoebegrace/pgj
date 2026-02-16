import { KB } from "./knowledge";
import type { KBItem } from "./knowledge";

function tokenize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function retrieveKB(query: string, k = 4): KBItem[] {
  const qTokens = new Set(tokenize(query));

  const scored: { item: KBItem; score: number }[] = KB.map((item) => {
    const text = `${item.title} ${item.tags.join(" ")} ${item.content}`;
    const tokens = tokenize(text);

    let score = 0;

    for (const t of tokens) {
      if (qTokens.has(t)) score += 1;
    }

    for (const tag of item.tags) {
      if (qTokens.has(tag.toLowerCase())) score += 3;
    }

    return { item, score };
  });

  const filtered = scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const finalResults =
    filtered.length > 0 ? filtered : scored.slice(0, 2);

  return finalResults.slice(0, k).map((entry) => entry.item);
}

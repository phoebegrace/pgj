import OpenAI from "openai";
import { retrieveKB } from "@/components/peboo/retrieve";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Body = {
  message: string;
  history?: { role: "peboo" | "user"; text: string }[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const message = (body.message || "").trim();

    if (!message) {
      return Response.json({ reply: "Ask me anything about Phoebe’s work 😊" });
    }

    const hits = retrieveKB(message, 4);

    const system = `
You are Peboo, the portfolio assistant for Phoebe Grace Juayong.

Rules:
- ONLY answer questions about Phoebe’s work, skills, projects, tools, and how to contact/hire her.
- If user asks about anything unrelated, politely refuse and redirect to Phoebe topics.
- Be concise, friendly, and confident.
- Do not invent facts. Use only the provided knowledge snippets.
`.trim();

    const kbBlock = hits
      .map((h, i) => `[#${i + 1}] ${h.title}\n${h.content}`)
      .join("\n\n");

    const lastTurns = (body.history || []).slice(-8).map((m) => ({
      role: m.role === "peboo" ? ("assistant" as const) : ("user" as const),
      content: m.text,
    }));

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "system", content: `Phoebe Knowledge Base:\n\n${kbBlock}` },
        ...lastTurns,
        { role: "user", content: message },
      ],
      temperature: 0.4,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Can you rephrase that?";

    return Response.json({ reply });
  } catch (err) {
    console.error(err);
    return Response.json(
      { reply: "Peboo had an error. Check the server logs." },
      { status: 500 }
    );
  }
}

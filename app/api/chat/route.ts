import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const message: string = body.message.toLowerCase();

  let reply = "I’m not sure yet, but I can help! Try asking about education, experience, or skills.";

  if (message.includes("education")) {
    reply =
      "Sona is a Computer Science student with a strong foundation in programming, data structures, and software engineering.";
  } else if (message.includes("experience")) {
    reply =
      "Sona has experience working on full-stack projects, internships, and collaborative technical teams.";
  } else if (message.includes("major")) {
    reply =
      "Sona’s major is Computer Science, with interests in AI, software engineering, and systems.";
  } else if (message.includes("who is sona")) {
    reply =
      "Sona is a Computer Science student passionate about building meaningful software and learning new technologies.";
  }

  return NextResponse.json({ reply });
}

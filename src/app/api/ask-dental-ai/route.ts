import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "You are a helpful dental assistant. Answer questions related to dental health in simple and friendly language." }],
        },
      ],
    });

    const result = await chat.sendMessage(question);
    const response = result.response.text();

    return Response.json({ answer: response });
  } catch (error) {
    console.error("Gemini Error:", error);
    return Response.json({ answer: "Sorry, something went wrong with Gemini." }, { status: 500 });
  }
}

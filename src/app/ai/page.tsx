"use client"
import { useState } from "react";

const DentalChat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const sendQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);

    const res = await fetch("/api/ask-dental-ai", {
      method: "POST",
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 mt-40 mb-36">
      <h2 className="text-2xl font-bold text-blue-800">Ask Our Dental AI 💬</h2>
      <textarea
        rows={4}
        className="w-full border rounded p-2"
        placeholder="Ask a question about your dental health..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="bg-blue-800 text-white px-4 py-2 rounded"
        onClick={sendQuestion}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>
      {answer && (
        <div className="mt-4 bg-blue-50 p-4 rounded text-blue-900 shadow">
          <strong>AI says:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default DentalChat;

"use client";
import { useEffect, useRef, useState, useMemo } from "react";

const initialMessages = [
  {
    role: "assistant",
    content:
      "Halo! Saya chatbot Politala. Tanyakan apa saja tentang kampus ini, pendaftaran, program studi, atau fasilitas yang tersedia.",
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;

    const userMessage = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan saat memproses permintaan.");
      }

      const assistantMessage = {
        role: "assistant",
        content: data.answer || "Maaf, saya tidak bisa menemukan jawaban yang tepat saat ini.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || "Gagal mengirim pesan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loading) {
      await sendMessage();
    }
  };

  const memoizedMessages = useMemo(() => {
    const renderMessageContent = (content) => {
      const elements = [];
      const boldRegex = /\*\*(.+?)\*\*/g;
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(content)) !== null) {
        const plainText = content.slice(lastIndex, match.index);
        if (plainText) {
          elements.push(...plainText.split("\n").flatMap((line, index, array) => [
            line,
            ...(index < array.length - 1 ? [<br key={`br-${lastIndex}-${index}`} />] : []),
          ]));
        }
        elements.push(
          <strong key={`bold-${match.index}`}>
            {match[1]}
          </strong>
        );
        lastIndex = match.index + match[0].length;
      }

      const remainingText = content.slice(lastIndex);
      if (remainingText) {
        elements.push(...remainingText.split("\n").flatMap((line, index, array) => [
          line,
          ...(index < array.length - 1 ? [<br key={`br-last-${index}`} />] : []),
        ]));
      }

      return elements.length > 0 ? elements : content;
    };

    return messages.map((message, index) => (
      <div key={index} className={`chatbot-message chatbot-message-${message.role}`}>
        <div className="chatbot-message-role">{message.role === "user" ? "Anda" : "AI"}</div>
        <div className="chatbot-message-content">{renderMessageContent(message.content)}</div>
      </div>
    ));
  }, [messages]);

  return (
    <div className="chatbot-floating">
      {open ? (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div>
              <div className="chatbot-title">Chatbot Politala</div>
              <div className="chatbot-subtitle">Tanyakan apa saja tentang kampus dan pendaftaran.</div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} type="button">
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {/* ⚡ Bolt: Memoized messages rendering to prevent O(n) regex processing on every keystroke */}
            {memoizedMessages}
            <div ref={messagesEndRef} />
          </div>

          {error ? <div className="chatbot-error">{error}</div> : null}

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tulis pertanyaan Anda..."
              aria-label="Chatbot question"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </form>
          <div className="chatbot-note">Jawaban akan dicari dari konten situs ini dan sumber resmi Politala.</div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setOpen(true)} type="button">
          Chat AI
        </button>
      )}
    </div>
  );
}

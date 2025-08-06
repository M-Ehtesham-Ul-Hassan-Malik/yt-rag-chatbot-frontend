import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../App.css";

export default function Chatbot() {
  const [videoUrl, setVideoUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const extractVideoId = (url) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setAnswer("");
    const videoId = extractVideoId(videoUrl.trim());

    if (!videoId || question.trim() === "") {
      setError("Please enter a valid video URL and question.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/ask", {
        video_id: videoId,
        question: question.trim(),
      });
      setAnswer(response.data.answer);
    } catch (err) {
      console.error(err);
      setError("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>
          <span style={{ color: "#646cff" }}>YouTube</span> RAG Chatbot
        </h1>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Paste YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ask your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Get Answer"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {videoUrl && extractVideoId(videoUrl) && (
          <div className="video">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {answer && (
          <div className="answer">
            <h2>📌 Answer</h2>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

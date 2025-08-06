import "./About.css";

export default function About() {
  return (
    <div className="page about">
      <h1>About YouTube RAG Chatbot</h1>

      <p>
        <strong>YouTube RAG Chatbot</strong> is an intelligent AI-powered assistant that helps users get accurate, context-aware answers from any YouTube video by simply pasting the URL and asking a question.
      </p>

      <h2> How it works</h2>
      <ul>
        <li>
          The app extracts the video transcript using the <strong>YouTube Transcript API</strong>.
        </li>
        <li>
           The transcript is split into chunks and embedded using <strong>Google Generative AI Embeddings</strong>.
        </li>
        <li>
          Embeddings are stored locally using <strong>FAISS</strong> for fast vector similarity retrieval.
        </li>
        <li>
          A <strong>RAG (Retrieval-Augmented Generation)</strong> pipeline retrieves relevant chunks and passes them into <strong>Gemini 2.5 Flash</strong> via LangChain to generate an answer.
        </li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> React, React Router, Vite</li>
        <li><strong>Backend:</strong> FastAPI, LangChain, FAISS</li>
        <li><strong>LLM:</strong> Gemini 2.5 Flash via Google Generative AI API</li>
        <li><strong>Other:</strong> dotenv, CORS middleware, YouTubeTranscriptAPI</li>
      </ul>

      <h2>Developer</h2>
      <p>
        Built by <strong>M. Ehtesham Ul Hassan Malik</strong> — a passionate software engineering student and AI enthusiast. The project combines modern AI tools with practical user needs to explore the power of RAG-based question answering.
      </p>
    </div>
  );
}

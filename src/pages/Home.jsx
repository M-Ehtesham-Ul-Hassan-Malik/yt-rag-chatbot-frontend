import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Ask Smarter, Learn Faster with <span>YouTube RAG Chatbot</span>
        </h1>
        <p>
          Paste any YouTube video URL and get instant answers to your questions.
          Let AI break down the content for you.
        </p>
        <button onClick={() => navigate("/chatbot")}>Get Started</button>
      </div>

      {/* Optional illustration or image */}
      <div className="hero-image">
        <img src={HeroImage} alt="Chatbot Hero" />

      </div>
    </div>
  );
}

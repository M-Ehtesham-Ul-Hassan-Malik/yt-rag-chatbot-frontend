import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} YouTube RAG Chatbot · Built by{" "}
        <a
          href="https://www.linkedin.com/in/m-ehtesham-ul-hassan-malik"
          target="_blank"
          rel="noopener noreferrer"
        >
          M. Ehtesham Ul Hassan Malik
        </a>
      </p>
    </footer>
  );
}

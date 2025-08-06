import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/M-Ehtesham-Ul-Hassan-Malik" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/m-ehtesham-ul-hassan-malik" },
    { icon: <FaMedium />, link: "https://medium.com/@malikehtesham" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/ehtesham.malik.90857" },
    { icon: <FaTwitter />, link: "https://x.com/malik_mehtesham" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@ehtesham-malik" },
  ];

  return (
    <div className="page contact">
      <h1>Contact Me</h1>
      <p>
        You can reach out via email or follow me on social media:
      </p>
      <p>Email: <a href="mailto:malikehtesham.ths@gmail.com">malikehtesham.ths@gmail.com</a></p>

      <div className="social-icons">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

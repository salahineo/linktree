// Icons
import Portfolio from "../assets/icons/portfolio.svg";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import YouTube from "../assets/icons/youtube.svg";
import StackOverflow from "../assets/icons/stackoverflow.svg";
import WakaTime from "../assets/icons/wakatime.svg";
import LeetCode from "../assets/icons/leetcode.svg";
import Email from "../assets/icons/email.svg";
import X from "../assets/icons/x.svg";

// Links component
function Links() {
  return (
    <nav id="socials" role="navigation" aria-label="Social media links">

      {/* Portfolio */}
      <a
        href="https://salahineo.com"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo portfolio"
      >
        <img src={Portfolio} alt="Portfolio Icon"/>
        <p>Portfolio</p>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@StepByStack"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo YouTube channel"
      >
        <img src={YouTube} alt="YouTube Icon"/>
        <p>YouTube</p>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/salahineo"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo Github profile"
      >
        <img src={Github} alt="GitHub Icon"/>
        <p>Github</p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/salahineo/"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo LinkedIn profile"
      >
        <img src={LinkedIn} alt="LinkedIn Icon"/>
        <p>LinkedIn</p>
      </a>

      {/* X */}
      <a
        href="https://x.com/salahineo"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo X profile"
      >
        <img src={X} alt="X Icon"/>
        <p>X</p>
      </a>

      {/* StackOverflow */}
      <a
        href="https://stackoverflow.com/users/13732184/salahineo"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo StackOverflow profile"
      >
        <img src={StackOverflow} alt="StackOverflow Icon"/>
        <p>StackOverflow</p>
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/salahineo/"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo LeetCode profile"
      >
        <img src={LeetCode} alt="LeetCode Icon"/>
        <p>LeetCode</p>
      </a>

      {/* WakaTime */}
      <a
        href="https://wakatime.com/@salahineo"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo WakaTime profile"
      >
        <img src={WakaTime} alt="WakaTime Icon"/>
        <p>WakaTime</p>
      </a>

      {/* Email */}
      <a
        href="mailto:contact@salahineo.com"
        className="link"
        target="_blank"
        rel="noopener"
        aria-label="Salahineo Email"
      >
        <img src={Email} alt="Email Icon"/>
        <p>Email</p>
      </a>

    </nav>
  );
}

export default Links;

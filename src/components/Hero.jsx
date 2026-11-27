import { useState } from "react";
import { profile } from "../data.js";
import Icon from "./Icon.jsx";

const stickers = [
  ["Python", "s1"],
  ["React.js", "s2"],
  ["Node.js", "s3"],
  ["MySQL", "s4"],
];

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-top">
          <span className="badge">
            <i className="dot" /> Open to Software Developer Opportunities
          </span>
          <span className="loc">
            <Icon name="pin" size={15} /> {profile.location}
          </span>
        </div>
        <p className="hello">Hello, I'm Suganya R</p>
        <h1 className="mega">
          <span>Aspiring</span>
          {/* <span className="inline-photo" aria-hidden="true">
            {imgOk ? (
              <img
                src={profile.photo}
                alt=""
                width="200"
                height="120"
                onError={() => setImgOk(false)}
              />
            ) : (
              <b>SR</b>
            )}
          </span> */}
          <span className="l2">
            Software <em>Developer</em>
          </span>
        </h1>
        {/* {stickers.map(([t, c]) => <span key={t} className={`sticker ${c}`} aria-hidden="true">{t}</span>)} */}
        <div className="hero-bottom">
          <p className="sub">
            Passionate about building scalable backend applications and modern
            web experiences.
          </p>
          <p className="intro">
            Computer Science graduate with a strong foundation in Python
            programming, backend development, and software development. Skilled
            in developing practical applications, working with databases and
            APIs, and building scalable software solutions. Passionate about
            applying technical knowledge to develop efficient and reliable
            applications.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
            <div className="socials">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Icon name="github" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

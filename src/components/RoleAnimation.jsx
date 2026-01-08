import React, { useEffect, useState } from "react";
import "../styles/RoleAnimation.css";

const roles = [
  "MERN Stack Developer",
  "Junior Software Engineer",
  "Backend Developer",
  "React Developer",
];

export default function RoleAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 70 : 120;   
     const pauseAfterTyping = 1800; 

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        // Typing
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause after full text
        setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <h2 className="role">
      {text}
      <span className="cursor">|</span>
    </h2>
  );
}

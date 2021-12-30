import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter({ items }) {
  const shuffled = Array.from(items).sort(() => Math.random() - 0.5); // shuffle the array;

  return (
    <div className="container text-center text-muted">
      <span>and I&apos;m </span>
      <Typewriter
        loop
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
        words={shuffled}
      />
    </div>
  );
}

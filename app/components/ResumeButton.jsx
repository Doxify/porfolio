import Link from "next/link";

export default function ResumeButton({ last_updated }) {
  return (
    <div className="text-center">
      <Link href="https://drive.google.com/file/d/1XGAZAIHs8jFXZKm8smFylcONU8R6aYNF/view?usp=sharing" target="_blank">
        <a className="btn btn-primary" target="_blank">
            <i className="fab fa-google-drive"></i> View Resume
        </a>
      </Link>
    </div>
  );
}

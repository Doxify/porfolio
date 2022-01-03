export default function Footer() {
  return (
    <footer className="p-5 border-top text-center">
      <span>Built with 💙, Next.js, and GraphQL</span> 
      <br />
      <small className="text-muted">
        {new Date().getFullYear()} &copy; Andrei Georgescu
      </small>
      <br />
      <a href="https://github.com/doxify/portfolio"><i className="fab fa-github" /></a>
    </footer>  
  )
}
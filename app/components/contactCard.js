export default function ContactCard() {
  return (
    <div className="contact">
      <div className="container">
        <div className="card">
          <div className="card-header">Contact Me</div>
          <div className="card-body text-center">
            <p className="card-text">
              Looking to hire me? Just want to talk?
            </p>
            <p className="card-text">
              Whatever the case may be, feel free to reach out to me. I try to respond to all emails in less than 24 hours.
            </p>
            <a
              className="btn btn-sm btn-dark me-2"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Opens your email client"
              href="mailto://ageorgescu98@gmail.com"
            >
              Email <i className="fas fa-envelope" />
            </a>
            <a
              className="btn btn-sm btn-dark"
              data-toggle="tooltip"
              data-placement="bottom"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andrei-georgescu/"
            >
              LinkedIn <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

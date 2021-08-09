import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row p-1">
          <div className="col text-center" id="profile-description">
            <div className="mb-3">
              <Image
                src="/images/profile.png"
                className="avatar shadow rounded-circle z-depth-2"
                height="175"
                width="175"
              />
              <div id="name mb-5">
                <small className="text-muted">
                  👋 Hello, I'm
                  <h6 className="name display-6 text-dark">
                    Andrei Georgescu
                  </h6>
                </small>
              </div>
              <div id="profile-social-buttons">
                <a
                  className="btn btn-outline-dark me-2"
                  id="github"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="GitHub"
                  href="https://github.com/doxify"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-outline-dark me-2"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/andrei-georgescu/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-outline-dark me-2"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="Discord"
                  href="https://discord.com/users/105017641051123712"
                >
                  <i className="fab fa-discord"></i>
                </a>
                <a
                  className="btn btn-outline-dark"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="Instagram"
                  href="https://instagram.com/vndreigeorgescu"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

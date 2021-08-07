import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row p-3">
          <div className="col text-center" id="profile-description">
            <div className="mb-3">
              <Image
                src="/images/profile.png"
                className="avatar shadow rounded-circle z-depth-2"
                height="175"
                width="175"
              />
              <div id="name">
                <small className="text-muted">
                  👋 Hello, I'm
                  <h6 className="name display-6">
                    Andrei Georgescu
                    <br />
                    <small className="description text-muted">
                      Software Engineer
                    </small>
                  </h6>
                </small>
              </div>
              <div id="profile-social-buttons">
                <a
                  class="btn btn-outline-dark me-2"
                  id="github"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="GitHub"
                  href="https://github.com/doxify"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  class="btn btn-outline-dark me-2"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/andrei-georgescu/"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  class="btn btn-outline-dark me-2"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="Discord"
                  href="https://discord.com/users/105017641051123712"
                >
                  <i class="fab fa-discord"></i>
                </a>
                <a
                  class="btn btn-outline-dark"
                  id="linkedin"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  target="_blank"
                  title="Instagram"
                  href="https://instagram.com/vndreigeorgescu"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

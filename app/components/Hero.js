import SocialButton from "./SocialButton";

export default function Hero({ socials }) {
  return (
    <div className="hero mb-3">
      <div className="container">
        <div className="row">
          <div className="col text-center" id="profile-description">
            <div id="name">
              <span className="text-muted">
                👋 Hello, my name is
                <h6 className="name display-5 text-dark">Andrei Georgescu</h6>
              </span>
            </div>
            <br />
            <div id={"profile-social-buttons"}>
              {socials.map((social, i) => (
                <SocialButton
                  key={i}
                  name={social.name}
                  link={social.link}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import SocialButton from "./SocialButton";
import TypeWriter from "./TypeWriter";

export default function Hero({ socials, personalities }) {
  return (
    <div className="hero container mb-4">
      <div className="row">
        <div className="col text-center" id="profile-description">
          <section id={"name"}>
            <span className="text-muted">
              👋 Hello, my name is
              <h6 className="name display-5 text-dark">Andrei Georgescu</h6>
            </span>
          </section>
          <section id={"typewriter"} className="mb-4">
            <TypeWriter items={personalities} />
          </section>
          <section id={"profile-social-buttons"}>
            {socials.map((social, i) => (
              <SocialButton
                key={i}
                name={social.name}
                link={social.link}
                icon={social.icon}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

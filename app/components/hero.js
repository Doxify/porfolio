import Image from "next/image";
import SocialMediaButton from './socialMediaButton';

export default function Hero({ socialData }) {
  return (
    <div className="hero mb-4">
      <div className="container">
        <div className="row">
          <div className="col text-center" id="profile-description">
            <Image
              src="/images/profile.png"
              className="rounded-circle z-depth-2"
              height="175"
              width="175"
              alt="picture of Andrei Georgescu on a hike"
            />
            <div id="name">
              <small className="text-muted">
                👋 Hello, I&apos;m
                <h6 className="name display-6 text-dark">
                  Andrei Georgescu
                </h6>
              </small>
            </div>
            <div id={"profile-social-buttons"}>
              {socialData.map((social, i) => (
                <SocialMediaButton key={i} name={social.name} link={social.link} icon={social.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

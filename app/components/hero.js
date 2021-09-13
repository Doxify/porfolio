import Image from "next/image";
import SocialMediaButton from './socialMediaButton';
import { Typewriter } from 'react-simple-typewriter'

export default function Hero({ socialData }) {
  return (
    <div className="hero mb-4">
      <div className="container">
        <div className="row">
          <div className="col text-center" id="profile-description">
            {/* <Image
              src="/images/profile.png"
              className="rounded-circle z-depth-2"
              height="175"
              width="175"
              alt="picture of Andrei Georgescu on a hike"
            /> */}
            <div id="name">
              <span className="text-muted">
                👋 Hello, my name is
                <h6 className="name display-5 text-dark">
                  Andrei Georgescu
                </h6>
                <span>I am </span>
                <Typewriter
                  loop
                  cursor
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={['a student.', 'a software engineer.', 'a hiker.', 'an IPA lover.', 'a Formula 1 enthusiast.', 'an immigrant.', 'a self starter.', 'a work in progress.']}
                />
              </span>
            </div>
            <br />
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

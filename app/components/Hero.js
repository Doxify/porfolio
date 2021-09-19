import SocialButton from './SocialButton';
import { Typewriter } from 'react-simple-typewriter'

export default function Hero({ socials }) {
  const descriptions = [
    'a student.', 
    'a software engineer.', 
    'a hiker.', 
    'an IPA lover.', 
    'a Formula 1 enthusiast.', 
    'an immigrant.', 
    'a self starter.', 
    'a work in progress.'
  ].sort(() => Math.random() - 0.5);  // shuffle the array

  return (
    <div className="hero mb-4">
      <div className="container">
        <div className="row">
          <div className="col text-center" id="profile-description">
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
                  words={descriptions}
                />
              </span>
            </div>
            <br />
            <div id={"profile-social-buttons"}>
              {socials.map((social, i) => (
                <SocialButton key={i} name={social.name} link={social.link} icon={social.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

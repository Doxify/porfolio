import Image from "next/image";
import Social from './social';

export default function Hero() {
  return (
    <div className="hero mb-4">
      <div className="container">
        <div className="row">
          <div className="col text-center" id="profile-description">
            <Image
              src="/images/profile.png"
              className="avatar shadow rounded-circle z-depth-2"
              height="175"
              width="175"
            />
            <div id="name">
              <small className="text-muted">
                👋 Hello, I'm
                <h6 className="name display-6 text-dark">
                  Andrei Georgescu
                </h6>
              </small>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

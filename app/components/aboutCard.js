export default function AboutCard() {
  return (
    <div className="about">
      <div className="container">
        <div className="card bg-light">
          <div className="card-header">About Me</div>
          <div className="card-body">
            <p className="card-text mb-4">
              I am currently a senior at San Francisco State University,
              studying computer science. My passion is building scalable backend
              services and I have extensive experience using Node.js to do so.
              In addition to Node.js, I also enjoy working with Python and Go to
              create backend services. I have some experience working on the
              frontend and have created a few projects using React.
            </p>
            <p className="card-text mb-4">
              My greatest strengths are that I approach every situation with an
              open mind and am eager to learn new things.
            </p>
            <p className="card-text">
              In my free time I like to go on hikes, watch Formula 1, and spend
              time with my friends. I also try to workout and partake in sim
              racing whenever I get the chance.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

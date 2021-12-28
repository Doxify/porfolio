export default function AboutCard({ about }) {
  const working_on_formatted = Array.from(about.working_on).join(', ');

  return (
    <>
      <div className="conatiner mt-5">
        <h4 className="title text-start"><mark>🦄 About</mark></h4>
        <p className="card-text text-start">{about.bio_intro}</p>
        <p className="card-text text-start">{about.bio_general}</p>
      </div>
      <div className="conatiner mt-5">
        <h4 className="title text-start"><mark>🚧 Currently working on...</mark></h4>
        <p className="card-text text-start">{working_on_formatted}!</p>
      </div>
    </>
  );
}

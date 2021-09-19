export default function AboutCard({ about }) {
  return (
    <div className="card project-card text-start">
      <div className="card-body">
        <p className="card-text">{about.bio_intro}</p>
        <p className="card-text">{about.bio_general}</p>
      </div>
    </div>
  );
}

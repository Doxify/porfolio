import Link from "next/link";

import { gql, useMutation } from '@apollo/client'

export default function ResumeButton({ views }) {
  const INCREMENT_RESUME_VIEWS = gql`
    mutation IncrementResumeViews($data: AboutUpdateInput!) {
      updateOneAbout(query: { name: "Andrei Georgescu" }, set: $data) {
        resume_views
      }
    }
  `;
  const [incrementViews, { data, loading, error }] = useMutation(INCREMENT_RESUME_VIEWS);

  return (
    <div className="text-center">
      <Link 
        href="https://drive.google.com/file/d/1XGAZAIHs8jFXZKm8smFylcONU8R6aYNF/view?usp=sharing" 
        target="_blank"
      >
        <a 
          className="btn btn-primary" 
          target="_blank"
          onClick={() => incrementViews({ variables: { data: { resume_views: (views + 1) }} })}
        >
            <i className="fab fa-google-drive"></i> View Resume
        </a>
      </Link>
      <br />
      {/* {loading && <small className="text-muted">fetching resume...</small>}
      {!loading && <small className="text-muted">{data ? data.updateOneAbout.resume_views : views} views</small>} */}
    </div>
  );
}

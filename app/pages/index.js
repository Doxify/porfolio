import Head from "next/head";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import Layout from "../components/partials/Layout";
import Hero from "../components/Hero";
import AboutCard from "../components/AboutCard";
import Experience from "../components/Experience";
import ResumeButton from "../components/ResumeButton";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const { data, loading, error } = useQuery(gql`
    query {
      socials {
        active
        name
        icon
        link
      }
      about(query: { name: "Andrei Georgescu" }) {
        name
        bio_intro
        bio_general
        personality_types
        working_on
        resume_views
      }
      projects {
        _id
        name
        active
        area_of_development
        bullets
        demo_link
        github_link
        desc
        documentation_link
        end_date
        start_date
        technologies
      }
      educations {
        _id
        active
        degree
        end
        gpa
        name
        start
        logo
      }
      works {
        _id
        active
        bullets
        end
        name
        start
        title
      }
    }
  `);

  if (loading) return "";

  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Software Engineer</title>
      </Head>
      <Hero
        socials={data.socials}
        personalities={data.about.personality_types}
      />
      <ResumeButton views={data.about.resume_views} />
      <AboutCard about={data.about} />
      <Experience
        works={data.works}
        educations={data.educations}
        projects={data.projects}
      />
    </Layout>
  );
}

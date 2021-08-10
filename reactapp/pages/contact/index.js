import Layout from '../../components/layout'

export default function Contact() {
  return (
    <Layout>
      <div className="card">
        <div className="card-header">Contact Me</div>
        <div class="card-body text-center">
            <p class="card-text">
              Looking to hire me? Just want to talk?
            </p>
            <p className="card-text">
              Whatever the case may be, feel free to reach out to me. I try to respond to all emails in less than 24 hours.
            </p>
            <a 
              class="btn btn-sm btn-dark me-2" 
              data-toggle="tooltip" 
              data-placement="bottom" 
              title="Opens your email client" 
              href="mailto://ageorgescu98@gmail.com"
            >
              Email <i class="fas fa-envelope" />
            </a>
            <a 
              class="btn btn-sm btn-dark" 
              data-toggle="tooltip" 
              data-placement="bottom" 
              title="LinkedIn" 
              target="_blank" 
              href="https://www.linkedin.com/in/andrei-georgescu/"
            >
              LinkedIn <i class="fab fa-linkedin" />
            </a>
        </div>
      </div>
    </Layout>    
  )
}
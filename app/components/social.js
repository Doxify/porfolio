export default function Social() {

  const sites = [
    {
      id: 0,
      name: 'GitHub',
      link: 'https://github.com/doxify',
      icon: 'fab fa-github'
    }, 
    {
      id: 1,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/andrei-georgescu',
      icon: 'fab fa-linkedin'
    },
    {
      id: 2,
      name: 'Discord',
      link: 'https://discord.com/users/105017641051123712',
      icon: 'fab fa-discord'
    },
    {
      id: 3,
      name: 'Instagram',
      link: 'https://instagram.com/vndreigeorgescu',
      icon: 'fab fa-instagram'
    }
  ]

  return (
    <div id="profile-social-buttons">
      {sites.map(site => (
        <a
          className="btn btn-outline-dark me-2"
          key={site.id}
          data-toggle="tooltip"
          data-placement="bottom"
          target="_blank"
          rel="noreferrer"
          title={site.name}
          href={site.link}
        >
          <i className={site.icon}></i>
        </a>
      ))}
    </div>
  )
}
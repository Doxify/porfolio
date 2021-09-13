export default function SocialMediaButton({ name, link, icon }) {
  return (
      <a
        className="btn btn-dark me-2"
        data-toggle="tooltip"
        data-placement="bottom"
        target="_blank"
        rel="noreferrer"
        title={name}
        href={link}
      >
        <i className={icon}/>
      </a>
  )
}
import Link from 'next/link'

export default function Navigation() {

  const routes = [
    {
      id: 0,
      path: '/',
      name: 'About',
    },
    {
      id: 1,
      path: '/experience',
      name: 'Experience',
    },
    {
      id: 2,
      path: 'https://drive.google.com/file/d/1XGAZAIHs8jFXZKm8smFylcONU8R6aYNF/view?usp=sharing',
      name: 'Resume',
    },
  ]

  return (
    <ul className="nav justify-content-center p-3 bg-gray">
      {routes.map(route => (
        <li 
          className="nav-item"
          key={route.id} 
        >
          <Link href={route.path}>
            <a className="nav-link" target={route.path.includes('http') ? '_blank' : ''}>{route.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

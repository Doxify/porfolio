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
<<<<<<< HEAD:app/components/partials/Navigation.js
    },
=======
    }
>>>>>>> e4ef943e60b5865f445bcd73c406b65b95df09cc:app/components/navigation.js
  ]

  return (
    <ul className="nav justify-content-center mt-4 mb-4">
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

import Link from 'next/link'

export default function Navigation() {
  return (
    <ul class="nav text-end">
      <li class="nav-item">
        <Link href="/">
          <a class="nav-link">About</a>
        </Link>
      </li>
      <li class="nav-item">
        <Link href="/projects">
          <a class="nav-link">Projects</a>
        </Link>
      </li>
    </ul>
  )
}

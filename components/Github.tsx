import { FaGithub } from 'react-icons/fa'

interface GithubProps {
  url: string
  className?: string
}

export default function Github({ url, className = '' }: GithubProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
    >
      <FaGithub className="h-6 w-6" />
    </a>
  )
}

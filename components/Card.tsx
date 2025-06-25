import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  target?: string
}

const CardBody = ({ title, description, imgSrc, href, target }: CardProps) => {
  const isClickable = !!href

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (isClickable) {
        window.open(href, '_blank')
      }
    }
  }

  return (
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/60 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:shadow-gray-800/60 ${
        isClickable
          ? 'hover:border-primary-400 dark:hover:border-primary-500 group focus-within:ring-primary-500 focus-within:ring-opacity-50 cursor-pointer focus-within:ring-2 focus-within:outline-none'
          : 'cursor-default opacity-90'
      }`}
      tabIndex={isClickable ? 0 : -1}
      role={isClickable ? 'button' : undefined}
      aria-label={isClickable ? `查看项目: ${title}` : `项目: ${title}`}
      onKeyDown={handleKeyDown}
    >
      {imgSrc && (
        <Image
          alt={title}
          src={imgSrc}
          className="h-32 w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110 sm:h-48"
          width={544}
          height={306}
        />
      )}
      <div className="p-4 sm:p-6">
        <h2 className="mb-2 text-xl leading-7 font-bold tracking-tight sm:mb-3 sm:text-2xl sm:leading-8">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="hover:text-primary-500 dark:hover:text-primary-400 focus:ring-primary-500 focus:ring-opacity-50 rounded transition-colors duration-200 focus:ring-2 focus:outline-none"
            >
              {title}
            </Link>
          ) : (
            <span className="text-gray-600 dark:text-gray-400">{title}</span>
          )}
        </h2>
        <p className="prose mb-2 max-w-none text-sm text-gray-500 sm:mb-3 sm:text-base dark:text-gray-400">
          {description}
        </p>
        {href ? (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 focus:ring-primary-500 focus:ring-opacity-50 inline-flex items-center rounded text-sm leading-6 font-medium transition-all duration-200 group-hover:translate-x-1 hover:underline focus:ring-2 focus:outline-none sm:text-base"
            aria-label={`Link to ${title}`}
          >
            阅读更多
            <span
              className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

const CardWrapper = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  return (
    <div className="mb-4 w-full break-inside-avoid sm:mb-6">
      {href ? <Link href={href}>{children}</Link> : <>{children}</>}
    </div>
  )
}

const basePath = process.env.BASE_PATH || ''
const Card = ({ title, description, imgSrc, href, target }: CardProps) => {
  const hrefWithBasePath = href ? `${basePath}${href}` : ''

  return (
    <CardWrapper href={hrefWithBasePath}>
      <CardBody
        title={title}
        description={description}
        imgSrc={imgSrc}
        href={hrefWithBasePath}
        target={target}
      />
    </CardWrapper>
  )
}

export default Card

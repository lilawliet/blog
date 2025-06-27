// components/Video.tsx
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ''

export default function Video({ src, ...props }) {
  // eslint-disable-next-line jsx-a11y/media-has-caption
  return <video src={`${basePath}${src}`} {...props} />
}

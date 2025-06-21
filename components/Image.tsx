import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, useBasePath = false, ...rest }: ImageProps & { useBasePath?: boolean }) => (
  <NextImage src={`${useBasePath ? basePath || '' : ''}${src}`} {...rest} />
)

export default Image

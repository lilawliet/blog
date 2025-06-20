import localFont from 'next/font/local'

// 使用localFont加载字体，防止布局偏移

// space grotesk light
export const spaceGroteskLight = localFont({
  src: './static/SpaceGrotesk-Light.ttf',
  variable: '--font-space-grotesk-light',
  display: 'swap',
})

// space grotesk regular
export const spaceGroteskRegular = localFont({
  src: './static/SpaceGrotesk-Regular.ttf',
  variable: '--font-space-grotesk-regular',
  display: 'swap',
})

// space grotesk medium
export const spaceGroteskMedium = localFont({
  src: './static/SpaceGrotesk-Medium.ttf',
  variable: '--font-space-grotesk-medium',
  display: 'swap',
})

// space grotesk semibold
export const spaceGroteskSemiBold = localFont({
  src: './static/SpaceGrotesk-SemiBold.ttf',
  variable: '--font-space-grotesk-semibold',
  display: 'swap',
})

// space grotesk bold
export const spaceGroteskBold = localFont({
  src: './static/SpaceGrotesk-Bold.ttf',
  variable: '--font-space-grotesk-bold',
  display: 'swap',
})

import localFont from 'next/font/local'

// 网页字体加载的时候容易出现布局偏移，使用localFont加载字体，防止布局偏移

// inter thin
export const inter_24ptThin = localFont({
  src: './static/Inter_24pt-Thin.ttf',
  variable: '--font-inter24-thin', // 使用css变量
  display: 'swap',
})

// inter thin italic
export const inter_24ptThinItalic = localFont({
  src: './static/Inter_24pt-ThinItalic.ttf',
  variable: '--font-inter24-thin-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter extra light
export const inter_24ptExtraLight = localFont({
  src: './static/Inter_24pt-ExtraLight.ttf',
  variable: '--font-inter24-extra-light', // 使用css变量
  display: 'swap',
})

// inter extra light italic
export const inter_24ptExtraLightItalic = localFont({
  src: './static/Inter_24pt-ExtraLightItalic.ttf',
  variable: '--font-inter24-extra-light-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter light italic
export const inter_24ptLightItalic = localFont({
  src: './static/Inter_24pt-LightItalic.ttf',
  variable: '--font-inter24-light-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter light
export const inter_24ptLight = localFont({
  src: './static/Inter_24pt-Light.ttf',
  variable: '--font-inter24-light', // 使用css变量
  display: 'swap',
})

// inter italic
export const inter_24ptItalic = localFont({
  src: './static/Inter_24pt-Italic.ttf',
  variable: '--font-inter24-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter regular
export const inter_24ptRegular = localFont({
  src: './static/Inter_24pt-Regular.ttf',
  variable: '--font-inter24-regular', // 使用css变量
  display: 'swap',
})

// inter medium
export const inter_24ptMedium = localFont({
  src: './static/Inter_24pt-Medium.ttf',
  variable: '--font-inter24-medium', // 使用css变量
  display: 'swap',
})

// inter medium italic
export const inter_24ptMediumItalic = localFont({
  src: './static/Inter_24pt-MediumItalic.ttf',
  variable: '--font-inter24-medium-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter semibold
export const inter_24ptSemibold = localFont({
  src: './static/Inter_24pt-SemiBold.ttf',
  variable: '--font-inter24-semibold', // 使用css变量
  display: 'swap',
})

// inter semibold italic
export const inter_24ptSemiboldItalic = localFont({
  src: './static/Inter_24pt-SemiBoldItalic.ttf',
  variable: '--font-inter24-semibold-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter bold
export const inter_24ptBold = localFont({
  src: './static/Inter_24pt-Bold.ttf',
  variable: '--font-inter24-bold', // 使用css变量
  display: 'swap',
})

// inter bold italic
export const inter_24ptBoldItalic = localFont({
  src: './static/Inter_24pt-BoldItalic.ttf',
  variable: '--font-inter24-bold-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

// inter black
export const inter_24ptBlack = localFont({
  src: './static/Inter_24pt-Black.ttf',
  variable: '--font-inter24-black', // 使用css变量
  display: 'swap',
})

// inter black italic
export const inter_24ptBlackItalic = localFont({
  src: './static/Inter_24pt-BlackItalic.ttf',
  variable: '--font-inter24-black-italic', // 使用css变量
  display: 'swap',
  style: 'italic',
})

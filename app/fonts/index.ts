import classNames from 'classnames'
import {
  inter_24ptBlack,
  inter_24ptBlackItalic,
  inter_24ptBold,
  inter_24ptBoldItalic,
  inter_24ptExtraLight,
  inter_24ptExtraLightItalic,
  inter_24ptItalic,
  inter_24ptLight,
  inter_24ptLightItalic,
  inter_24ptMedium,
  inter_24ptMediumItalic,
  inter_24ptRegular,
  inter_24ptSemibold,
  inter_24ptSemiboldItalic,
  inter_24ptThin,
  inter_24ptThinItalic,
} from './src/Inter'
import {
  spaceGroteskBold,
  spaceGroteskLight,
  spaceGroteskMedium,
  spaceGroteskRegular,
  spaceGroteskSemiBold,
} from './src/Space_Grotesk'

// 字体变量类名
export const fontClassName = classNames(
  // Inter 24pt
  inter_24ptThin.variable,
  inter_24ptThinItalic.variable,
  inter_24ptExtraLight.variable,
  inter_24ptExtraLightItalic.variable,
  inter_24ptLightItalic.variable,
  inter_24ptLight.variable,
  inter_24ptItalic.variable,
  inter_24ptRegular.variable,
  inter_24ptMedium.variable,
  inter_24ptMediumItalic.variable,
  inter_24ptSemibold.variable,
  inter_24ptSemiboldItalic.variable,
  inter_24ptBold.variable,
  inter_24ptBoldItalic.variable,
  inter_24ptBlack.variable,
  inter_24ptBlackItalic.variable,
  // Space Grotesk
  spaceGroteskLight.variable,
  spaceGroteskRegular.variable,
  spaceGroteskMedium.variable,
  spaceGroteskSemiBold.variable,
  spaceGroteskBold.variable
)

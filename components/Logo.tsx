import { githubAvatar } from 'utils/urls'
import Image from './Image'

const Logo = () => {
  return (
    <Image
      src={githubAvatar}
      useBasePath={false}
      width={40}
      height={40}
      alt="logo"
      className="rounded-full"
    />
  )
}

export default Logo

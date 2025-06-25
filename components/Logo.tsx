import Image from 'next/image'
import { githubAvatar } from 'utils/urls'

const Logo = () => {
  return <Image src={githubAvatar} width={40} height={40} alt="logo" className="rounded-full" />
}

export default Logo

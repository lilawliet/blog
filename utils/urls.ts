import siteMetadata from '@/data/siteMetadata'

export function getGithubUsername(): string {
  try {
    const username = new URL(siteMetadata.github).pathname.replace(/^\//, '').split('/')[0]
    return username
  } catch (e) {
    console.error('Failed to parse GitHub username:', e)
    return ''
  }
}

export const githubAvatar = getGithubUsername()
  ? `https://github.com/${getGithubUsername()}.png`
  : `${process.env.BASE_PATH || ''}/static/images/avatar.png`

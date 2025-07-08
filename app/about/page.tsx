import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import { genPageMetadata } from 'app/seo'
import { Authors, allAuthors } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          关于我
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <Image
            src={author.avatar || ''}
            alt={author.name}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{author.name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{author.desc}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${author.email}`} size={6} />
            <SocialIcon kind="github" href={author.github} size={6} />
            <SocialIcon kind="resume" href={author.resume} size={6} />
          </div>
        </div>
        {/* <div className="prose dark:prose-dark max-w-none pt-8 pb-8 xl:col-span-2">
          <div className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <p className="mb-4">
              欢迎来到我的个人博客！我是一名热爱技术和创新的开发者，专注于前端开发、用户体验设计和新兴技术。
            </p>
            <p className="mb-4">
              在这里，我会分享我的技术心得、项目经验和学习笔记。我相信开放的心态和终身学习的态度是推动个人成长的关键。
            </p>
            <p className="mb-4">
              如果你对我的工作感兴趣，或者想要交流技术话题，欢迎通过上面的联系方式与我联系。
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

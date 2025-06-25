'use client'

import Card from '@/components/Card'
import Link from '@/components/Link'
import MasonryGrid from '@/components/MasonryGrid'
import { projectsData, TAG } from '@/data/projectsData'
import projectTechData from 'app/project-tech-data.json'
import useBreakpoint from 'hooks/useBreakpoint'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState } from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  title: string
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

function ProjectListContent({ title }: ListLayoutProps) {
  const basePath = process.env.BASE_PATH || ''
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const tagCounts = projectTechData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  // 从URL参数初始化选中标签
  const initialTag = searchParams.get('tag')
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag)

  // 同步URL参数
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (selectedTag) {
      params.set('tag', selectedTag)
    } else {
      params.delete('tag')
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.replace(newUrl, { scroll: false })
  }, [selectedTag, pathname, router, searchParams])

  // 根据选中标签过滤项目数据
  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return projectsData
    }

    return projectsData.filter((project) => {
      return project.tags && project.tags.includes(selectedTag as TAG)
    })
  }, [selectedTag])

  // 处理标签点击
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      // 如果点击的是已选中的标签，则取消选择
      setSelectedTag(null)
    } else {
      // 否则选中新标签
      setSelectedTag(tag)
    }
  }

  const breakpoint = useBreakpoint()

  const columns = useMemo(() => {
    if (breakpoint === 'sm') return 1
    if (breakpoint === 'md') return 2
    if (breakpoint === 'lg') return 2
    if (breakpoint === 'xl') return 2
    if (breakpoint === '2xl') return 2
    return 3
  }, [breakpoint])

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-full shrink-0 lg:w-[1024px] 2xl:w-[1400px]">
          <div className="pt-6 pb-6">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              {title}
            </h1>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen max-w-[320px] min-w-[320px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md sm:flex dark:bg-gray-900/70 dark:shadow-gray-800/40">
              <div className="flex-1 px-6 py-4">
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`rounded-md px-3 py-2 font-bold uppercase transition-all duration-200 ${
                      !selectedTag
                        ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'hover:text-primary-500 dark:hover:text-primary-500 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    全部项目
                  </button>
                  {selectedTag && (
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        已筛选: <span className="text-primary-500 font-medium">{selectedTag}</span>
                      </span>
                      <span className="text-sm text-gray-400">
                        {filteredProjects.length} 个项目
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase dark:text-gray-300">
                    按技术栈筛选
                  </h3>
                  <ul className="space-y-2">
                    {sortedTags.map((t) => {
                      const isSelected = selectedTag === t
                      const tagProjects = projectsData.filter(
                        (project) => project.tags && project.tags.includes(t as TAG)
                      )

                      return (
                        <li key={t}>
                          <button
                            onClick={() => handleTagClick(t)}
                            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium uppercase transition-all duration-200 ${
                              isSelected
                                ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20 font-bold shadow-sm'
                                : 'hover:text-primary-500 dark:hover:text-primary-500 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                            }`}
                            aria-label={`筛选 ${t} 标签的项目`}
                          >
                            <span>{t}</span>
                            <span
                              className={`rounded-full px-2 py-1 text-xs ${
                                isSelected
                                  ? 'bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-300'
                                  : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                              }`}
                            >
                              {tagProjects.length}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="w-full">
                {filteredProjects.length > 0 ? (
                  <>
                    {selectedTag && (
                      <div className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 mb-6 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-primary-700 dark:text-primary-300 text-lg font-semibold">
                              筛选结果: {selectedTag}
                            </h2>
                            <p className="text-primary-600 dark:text-primary-400 text-sm">
                              找到 {filteredProjects.length} 个相关项目
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedTag(null)}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors duration-200"
                          >
                            清除筛选
                          </button>
                        </div>
                      </div>
                    )}
                    <MasonryGrid columns={columns} gap={24}>
                      {filteredProjects.map((d) => (
                        <Card
                          key={d.id}
                          title={d.name}
                          description={d.description}
                          imgSrc={d.images?.[0]}
                          target={d.target}
                          href={d.link}
                        />
                      ))}
                    </MasonryGrid>
                  </>
                ) : (
                  <div className="py-16 text-center">
                    <div className="mx-auto max-w-md">
                      <div className="mb-4 text-6xl">🔍</div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                        没有找到相关项目
                      </h3>
                      <p className="mb-6 text-gray-500 dark:text-gray-400">
                        没有找到包含 "{selectedTag}" 标签的项目
                      </p>
                      <button
                        onClick={() => setSelectedTag(null)}
                        className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 inline-flex items-center rounded-md px-4 py-2 font-medium text-white transition-colors duration-200"
                      >
                        查看全部项目
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function ProjectListLayoutWithTags({ title }: ListLayoutProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectListContent title={title} />
    </Suspense>
  )
}

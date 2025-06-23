import { Children, ReactNode, useMemo } from 'react'

interface MasonryGridProps {
  children: ReactNode
  columns?: number
  gap?: number
}

const MasonryGrid = ({ children, columns = 3, gap = 16 }: MasonryGridProps) => {
  // 根据columns参数生成响应式列数类
  const getColumnsClass = (cols: number) => {
    switch (cols) {
      case 1:
        return 'columns-1'
      case 2:
        return 'columns-1 sm:columns-2'
      case 3:
        return 'columns-1 sm:columns-2 lg:columns-3'
      case 4:
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4'
      case 5:
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5'
      default:
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4'
    }
  }

  // 将children转换为数组并重新排列为行优先顺序
  const reorderedChildren = useMemo(() => {
    const childrenArray = Children.toArray(children)
    const result: ReactNode[] = []

    // 按行优先顺序重新排列
    for (let i = 0; i < childrenArray.length; i += columns) {
      for (let j = 0; j < columns && i + j < childrenArray.length; j++) {
        result.push(childrenArray[i + j])
      }
    }

    return result
  }, [children, columns])

  return (
    <div
      className={getColumnsClass(columns)}
      style={{
        columnGap: `${gap}px`,
      }}
    >
      {reorderedChildren}
    </div>
  )
}

export default MasonryGrid

'use client'

import type { AudioHTMLAttributes } from 'react'
import { useEffect, useRef, useState } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement> {
  src: string
  autoPlay?: boolean
}

export default function Audio({ src, autoPlay = true, ...props }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !autoPlay) return

    // 用户交互处理：取消静音
    const handleUserInteraction = () => {
      setUserInteracted(true)
      if (audio && !audio.paused && audio.muted) {
        audio.muted = false
      }
    }

    // 尝试静音自动播放
    const tryAutoPlay = async () => {
      try {
        audio.muted = true
        await audio.play()
      } catch {
        // 自动播放被阻止，等待用户交互
      }
    }

    // 设置事件监听器
    const interactionEvents = ['click', 'touchstart', 'scroll', 'keydown']
    interactionEvents.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    // 尝试自动播放
    if (audio.readyState >= 2) {
      tryAutoPlay()
    } else {
      const handleReady = () => tryAutoPlay()
      audio.addEventListener('canplay', handleReady, { once: true })
      audio.addEventListener('loadeddata', handleReady, { once: true })
    }

    // 错误处理
    const handleError = () => {
      console.error('Audio loading error:', {
        src: audio.src,
        error: audio.error,
        networkState: audio.networkState,
      })
    }
    audio.addEventListener('error', handleError)

    return () => {
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction)
      })
      audio.removeEventListener('error', handleError)
    }
  }, [autoPlay])

  const audioSrc = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio
      ref={audioRef}
      src={audioSrc}
      controls
      muted={autoPlay && !userInteracted}
      preload="auto"
      {...props}
    />
  )
}

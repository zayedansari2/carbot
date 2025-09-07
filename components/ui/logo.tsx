'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  priority?: boolean
  variant?: 'small' | 'default' | 'large'
}

export function Logo({
  className,
  width,
  height,
  priority = false,
  variant = 'default'
}: LogoProps) {
  // Set default dimensions based on variant if not explicitly provided
  const defaultDimensions = {
    small: { width: 20, height: 20 },
    default: { width: 24, height: 24 },
    large: { width: 48, height: 48 }
  }

  const finalWidth = width || defaultDimensions[variant].width
  const finalHeight = height || defaultDimensions[variant].height

  return (
    <Image
      src="/images/logo.png"
      alt="CarBot Logo"
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      className={cn('object-contain', className)}
      sizes={`${finalWidth}px`}
    />
  )
}

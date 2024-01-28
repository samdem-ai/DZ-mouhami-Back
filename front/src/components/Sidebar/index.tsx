"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Container,
  FormInput,
  GanttChartSquare,
  Home,
  Layers3,
  Library,
  LineChart,
  ListMusic,
  MessageSquarePlus,
  Mic2,
  Music2,
  Navigation,
  Receipt,
  Table,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  href?: string
  icon?: React.ReactNode
  items?: SidebarNavItem[]
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
}

const menu: SidebarNavItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Lawyers",
        href: "/dashboard/lawyers",
        icon: <Home size={16} />,
      },
      {
        title: "users",
        href: "/dashboard/users",
        icon: <Home size={16} />,
      },

    ],
  },
]

export default function Sidebar({ className, onClick }: SidebarProps) {
  const pathName = usePathname()

  return (
    <div className={cn("flex h-full w-[240px] flex-col", className)}>
      <div className='flex h-16 w-full items-center justify-center gap-2 border-b text-lg font-medium'>
        Hello Dz-Mouhami Admin
      </div>
      <div className='py-4'>
        {menu.map((item, index) => (
          <div key={index} className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              {item.title}
            </h2>
            {item.items ? (
              <SidebarItems
                pathName={pathName}
                onClick={onClick}
                items={item.items}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function SidebarItems({
  items,
  pathName,
  onClick,
}: {
  onClick?: () => void

  items: SidebarNavItem[]
  pathName: string | null
}) {
  return items.length
    ? items.map((item, index) => (
        <Button
          key={index}
          asChild
          onClick={onClick}
          variant={item.href === pathName ? "secondary" : "ghost"}
          className={cn("mb-1 w-full justify-start", {
            "text-primary": item.href === pathName,
          })}
        >
          {!item.disabled && item.href ? (
            <Link href={item.href}>
              {item.icon && <span className='mr-2'>{item.icon}</span>}
              {item.title}
            </Link>
          ) : (
            <span className='flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60'>
              {item.title}
            </span>
          )}
        </Button>
      ))
    : null
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  LayoutGrid,
  LineChart,
  Radio,
  BookOpenText,
  Calculator,
  TrendingUp,
  GraduationCap,
  BarChart2,
  Settings,
  HelpCircle,
  ChevronDown,
  History,
  PieChart,
  Timer,
  Newspaper,
  Zap,
  Users,
  CloudSun,
  Dice1,
  Group,
  BarChart,
  BookOpen,
  Trophy,
  Bell,
  Database,
  UserCog,
  LifeBuoy,
  MessageSquare,
  ThumbsUp,
  User,
  Dice3
} from "lucide-react"

export function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutGrid className="h-5 w-5" />,
    },
    {
      title: "My Predictions",
      icon: <LineChart className="h-5 w-5" />,
      submenu: [
        { title: "Active Predictions", icon: <Timer /> },
        { title: "History", icon: <History /> },
        { title: "Analytics", icon: <PieChart /> },
      ]
    },
    {
      title: "Live Data & Insights",
      icon: <Radio className="h-5 w-5" />,
      submenu: [
        { title: "Live Matches", icon: <Zap /> },
        { title: "Breaking News", icon: <Newspaper /> },
        { title: "Trending Bets", icon: <TrendingUp /> },
      ]
    },
    {
      title: "Match Analysis",
      icon: <BookOpenText className="h-5 w-5" />,
      submenu: [
        { title: "Team Stats", icon: <Users /> },
        { title: "Player Insights", icon: <User /> },
        { title: "Weather & Venue", icon: <CloudSun /> },
      ]
    },
    {
      title: "Probability Calculator",
      icon: <Calculator className="h-5 w-5" />,
      submenu: [
        { title: "Single Bets", icon: <Dice1 /> },
        { title: "Parlays", icon: <Group /> },
        { title: "Impact Analysis", icon: <BarChart /> },
      ]
    },
    {
      title: "Betting Trends",
      icon: <TrendingUp className="h-5 w-5" />,
      submenu: [
        { title: "Odds Movements", icon: <LineChart /> },
        { title: "Market Analysis", icon: <BarChart2 /> },
        { title: "Sentiment Analysis", icon: <PieChart /> },
      ]
    },
    {
      title: "Learning Hub",
      icon: <GraduationCap className="h-5 w-5" />,
      submenu: [
        { title: "Betting Basics", icon: <BookOpen /> },
        { title: "Advanced Analytics", icon: <BarChart2 /> },
        { title: "Case Studies", icon: <BookOpenText /> },
      ]
    },
    {
      title: "My Performance",
      icon: <Trophy className="h-5 w-5" />,
      submenu: [
        { title: "Stats Overview", icon: <BarChart2 /> },
        { title: "Detailed Analysis", icon: <LineChart /> },
        { title: "Strengths & Weaknesses", icon: <PieChart /> },
      ]
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      submenu: [
        { title: "Notifications", icon: <Bell /> },
        { title: "Data Sources", icon: <Database /> },
        { title: "Account Management", icon: <UserCog /> },
      ]
    },
    {
      title: "Support & Feedback",
      icon: <HelpCircle className="h-5 w-5" />,
      submenu: [
        { title: "Help Center", icon: <LifeBuoy /> },
        { title: "Contact Support", icon: <MessageSquare /> },
        { title: "Provide Feedback", icon: <ThumbsUp /> },
      ]
    },
  ]

  return (
    <div className="flex h-screen w-[280px] flex-col rounded-tr-[32px] rounded-br-[32px] bg-[#0B1222] p-4">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#42E8E0] to-[#3B82F6]">
            <LineChart className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-white">BetWise</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div key={item.title}>
              <Button
                variant="ghost"
                className="w-full justify-between gap-3 text-gray-400 hover:bg-[#40F4A1] hover:text-[#0B1222]"
                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.submenu && (
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                )}
              </Button>
              
              {item.submenu && activeDropdown === index && (
                <div className="ml-9 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Button
                      key={subItem.title}
                      variant="ghost"
                      className="w-full justify-start gap-3 text-sm text-gray-400 hover:bg-[#40F4A1] hover:text-[#0B1222]"
                    >
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
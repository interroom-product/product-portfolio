import { Card, CardContent } from "@/components/ui/card"
import { XLogo } from "@/components/ui/x-logo"

interface TweetCardProps {
  avatar?: string
  name?: string
  handle?: string
  content?: string
}

export function TweetCard({
  avatar = "/memoji.png",
  name = "Ajay Nichani",
  handle = "@aHj_builds",
  content = "Building products at the intersection of AI and strategy. Always learning, always shipping."
}: TweetCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white dark:bg-card">
      <CardContent className="p-6">
        {/* Header with avatar, name, and handle */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-base">{name}</span>
            <div className="flex items-center gap-1">
              <XLogo size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground text-sm">{handle}</span>
            </div>
          </div>
        </div>
        
        {/* Tweet content */}
        <p className="text-foreground leading-relaxed text-base">
          {content}
        </p>
      </CardContent>
    </Card>
  )
}

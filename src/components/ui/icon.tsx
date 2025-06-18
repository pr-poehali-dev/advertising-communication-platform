import { LucideIcon, CircleAlert } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    (Icons as Record<string, LucideIcon>)[name] ||
    (Icons as Record<string, LucideIcon>)[fallback] ||
    CircleAlert;

  return <IconComponent size={size} className={className} />;
};

export default Icon;

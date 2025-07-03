import { CreditCard, House, Layers } from "lucide-react-native";

const iconMap = {
  House,
  Layers,
  CreditCard,
} as const;

interface IconProps {
  name: keyof typeof iconMap;
  color?: string;
  size?: number;
}

export function Icon({ name, color, size = 24 }: IconProps) {
  const LucideIcon = iconMap[name];

  return <LucideIcon color={color} size={size} />;
}

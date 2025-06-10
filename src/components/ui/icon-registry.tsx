
import {
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  Star,
  Send,
  Plus,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
} from 'lucide-react';

// Central registry of all icons used in the application
export const iconRegistry = {
  // Navigation & UI
  menu: Menu,
  close: X,
  plus: Plus,
  send: Send,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  externalLink: ExternalLink,
  
  // Contact & Communication
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  
  // Process & Strategy
  search: Search,
  lightbulb: Lightbulb,
  penTool: PenTool,
  rocket: Rocket,
  
  // Benefits & Features
  target: Target,
  trendingUp: TrendingUp,
  users: Users,
  zap: Zap,
  
  // Feedback & Rating
  star: Star,
  
  // Status & Alerts
  alertCircle: AlertCircle,
  info: Info,
} as const;

export type IconName = keyof typeof iconRegistry;

// Helper function to get icon component by name
export const getIcon = (name: IconName) => {
  return iconRegistry[name];
};

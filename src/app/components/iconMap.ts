import {
  Award,
  CheckCircle2,
  ClipboardList,
  Clock,
  Hammer,
  HardHat,
  HeartHandshake,
  KeyRound,
  MapPin,
  MessageSquare,
  PoundSterling,
  Shield,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconKey } from "@/config/template.types";

export const iconMap: Record<IconKey, ComponentType<{ className?: string }>> = {
  clock: Clock,
  "map-pin": MapPin,
  shield: Shield,
  award: Award,
  "message-square": MessageSquare,
  "clipboard-list": ClipboardList,
  "hard-hat": HardHat,
  "key-round": KeyRound,
  hammer: Hammer,
  "pound-sterling": PoundSterling,
  users: Users,
  "check-circle": CheckCircle2,
  "heart-handshake": HeartHandshake,
};

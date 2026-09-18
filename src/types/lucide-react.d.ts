declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Sparkles: LucideIcon;
  export const Send: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Mail: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Copy: LucideIcon;
  export const Check: LucideIcon;
  export const Radio: LucideIcon;
  export const Phone: LucideIcon;
  export const Gamepad2: LucideIcon;
  export const Flame: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Github: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Code2: LucideIcon;
  export const Terminal: LucideIcon;
  export const Layers: LucideIcon;
  export const Cpu: LucideIcon;
  export const Globe: LucideIcon;
  export const Rocket: LucideIcon;
  export const Compass: LucideIcon;
  export const Disc: LucideIcon;
  export const Orbit: LucideIcon;
  export const Zap: LucideIcon;
  export const Stars: LucideIcon;
  export const Monitor: LucideIcon;
  export const Server: LucideIcon;
  export const Database: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Palette: LucideIcon;
  export const Box: LucideIcon;
  export const Crosshair: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Trophy: LucideIcon;
  export const Play: LucideIcon;
  export const Eye: LucideIcon;
  export const Sword: LucideIcon;
  export const ScrollText: LucideIcon;
  export const MonitorPlay: LucideIcon;
  export const Moon: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;

  export const icons: { [key: string]: LucideIcon };
  export default icons;
}


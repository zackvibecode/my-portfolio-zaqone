import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

// Keep the existing destinations, including social URLs awaiting configuration.
const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "#", icon: MessageCircle },
  { label: "Email", href: "mailto:hello@zaqone.com", icon: Mail },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
];

export function SocialLinks() {
  return SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
    <a key={label} href={href} className="social-pill" aria-label={label}>
      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />{label}
    </a>
  ));
}

import { BsBraces } from "react-icons/bs";
import { TbWorldBolt } from "react-icons/tb";
import { MdOutlineLock } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { LuPackage } from "react-icons/lu";
import { RiUserHeartLine } from "react-icons/ri";

const webDevFacts = [
  {
    id: 1,
    icon: <BsBraces size={28} />,
    title: "AI-Augmented Development",
    body: "In 2026, over 70% of professional developers use AI pair programmers daily. Tools generate boilerplate, write tests, and flag security issues in real time — letting engineers focus on architecture and product thinking.",
  },
  {
    id: 2,
    icon: <TbWorldBolt size={28} />,
    title: "Edge-First Architecture",
    body: "The edge computing model has become mainstream. Frameworks like Next.js and Remix deploy logic to hundreds of nodes globally by default, cutting TTFB to under 50ms for most users worldwide.",
  },
  {
    id: 3,
    icon: <MdOutlineLock size={28} />,
    title: "Zero-Trust by Default",
    body: "Modern web stacks ship with zero-trust principles baked in. Passkeys have largely replaced passwords, and browsers now enforce stricter CSP and permissions policies out of the box.",
  },
  {
    id: 4,
    icon: <VscServerProcess size={28} />,
    title: "Server Components Are Standard",
    body: "React Server Components and their equivalents across frameworks are now the default rendering paradigm. The mental model of 'server vs. client' components is something every frontend dev is expected to master.",
  },
  {
    id: 5,
    icon: <LuPackage size={28} />,
    title: "The Module Revolution",
    body: "Native ES modules and import maps have reduced bundler complexity significantly. Vite and similar tools dominate, while Webpack usage has fallen below 30% for new projects.",
  },
  {
    id: 6,
    icon: <RiUserHeartLine size={28} />,
    title: "Accessibility as a Legal Requirement",
    body: "WCAG 2.2 compliance is now legally mandated in the EU and several US states. Linting tools enforce accessibility rules at the component level, making a11y a first-class concern from day one.",
  },
];

export default webDevFacts;

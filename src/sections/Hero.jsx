import { Button } from "@/components/Button";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  GitBranch,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import heroBg from "@/assets/hero-bg.jpg";
import heroImg from "@/assets/hero.jpg";

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Git",
  "and more...",
];

const heroDots = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  duration: `${15 + ((index * 7) % 20)}s`,
  delay: `${(index * 3) % 5}s`,
}));

const socialLinks = [
  { icon: GitBranch, href: "https://github.com/ReyMarByte" },
  { icon: BriefcaseBusiness, href: "https://linkedin.com/in/reydish-mark" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Purple Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Learn <span className="text-primary glow-text">harder</span>
                <br />
                to get
                <br />
                <span className="font-serif italic font-normal text-white">
                  better results
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, my name is Mark Reydish - a software developer with
                specialization in React, Node.js and TypeScript. I want to build
                scalable, performant web applications that users will love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={heroImg}
                  alt="Mark Reydish"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -right-4 glass rounded px-4 py-3 animate-float
              "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Avalible for work
                    </span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years of exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground text-center">
            Stack I work with:
          </p>
          <div className="relative overflow-hidden mx-auto">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

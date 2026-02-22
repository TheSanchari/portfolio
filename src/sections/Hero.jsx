import { ArrowRight } from "lucide-react";
import { BlurText } from "../../src/components/BlurText";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Download,Github,Linkedin,Twitter } from "lucide-react";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const greetingsText = () => {
  return `Hi, I'm sanchari — a fullstack developer.I build scalable, performant web
                applications that users love.`
};
export const Hero = () => {
    return <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
            <img 
                src="/hero-bg.jpg" 
                alt="Hero image" 
                className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* grenn dots */}
            {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#bcd5d3",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                78 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content
      */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
            <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-4 rounded-full glass text-sm text-primary text-white font-medium">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Senior software engineer - Fullstack Developer
                </span>
            </div>

        {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <BlurText
                text={greetingsText()}
                delay={30}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
                />
              {/* CTA Button */}
               <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                  <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </Button>
                  <AnimatedBorderButton className="group-hover:animate-pulse text-white">
                    <Download className="w-5 h-5 text-white" />
                      <span className="text-white">Download CV</span>
                  </AnimatedBorderButton>
              </div>
              {/* social links */}
                          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
            </div>
            </div>
                      <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
            
    </section>
}

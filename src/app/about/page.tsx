import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CountUp } from "@/components/animations/CountUp";
import { Award, GraduationCap, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ravali Kanmani | Nutrition & Wellness Coach",
  description: "Meet Ravali Kanmani - Nutrition & Wellness Coach with 8+ years experience. Personalized nutrition plans for weight management, PCOD, immunity, and family wellness.",
};

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap, // Kept icon as requested, or could switch to BookOpen if available/imported
      title: "Practical Nutrition Expertise",
      description: "Hands-on experience in personalized nutrition planning and lifestyle-based wellness programs."
    },
    {
      icon: Award, // Kept icon as requested
      title: "Client-Centered Guidance",
      description: "Personalized support focused on sustainable habits, education, and long-term health outcomes."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Mind, body, and lifestyle integration"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "1000+ successful transformations"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="mx-auto max-w-7xl">
          <FadeIn direction="up" duration={0.6}>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                About Ravali Kanmani
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your Partner in Health & Wellness Transformation
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Photo */}
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/ravali-hero.jpg"
                    alt="Ravali Kanmani"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1">
                      <CountUp end={8} suffix="+" />
                    </div>
                    <p className="text-sm opacity-90">Years Experience</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Nutrition & Wellness Coach
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over 8 years of dedicated experience in nutrition and wellness consulting,
                    I've had the privilege of transforming the lives of more than 1000 individuals
                    and families in Hyderabad and beyond.
                  </p>

                  <p>
                    My approach goes beyond simple diet plans. I believe in creating sustainable,
                    personalized nutrition strategies that fit seamlessly into your lifestyle,
                    addressing not just weight management but overall health, energy, and vitality.
                  </p>

                  <p>
                    Whether you're struggling with weight issues, PCOD, immunity concerns, or simply
                    want to optimize your family's nutrition, I'm here to guide you every step of
                    the way with evidence-based solutions and compassionate support.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={1000} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground">Clients Helped</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={98} suffix="%" />
                    </div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <CountUp end={4.9} decimals={1} suffix="/5" />
                    </div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Experience & Expertise
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Backed by real-world practice, personalized nutrition guidance, and proven client results.
            </p>
          </FadeIn>

          <StaggerContainer className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4" staggerDelay={0.1}>
            {credentials.map((cred, index) => (
              <StaggerItem
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="h-full"
              >
                <article className="group relative isolate flex h-full w-full flex-col items-center justify-between rounded-[32px] border border-emerald-900/10 bg-white/85 px-4 py-8 text-center shadow-[0_35px_45px_-30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_45px_75px_-40px_rgba(16,185,129,0.55)] md:px-6 md:py-10">
                  <div className="absolute inset-x-6 top-4 -z-10 h-28 rounded-full bg-emerald-100/50 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
                  <div
                    className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-[0_12px_25px_-12px_rgba(5,150,105,0.65)] md:h-16 md:w-16"
                    role="img"
                    aria-label={`${cred.title} icon`}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-emerald-100/50 to-emerald-50/30" />
                    <cred.icon className="relative h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                      {cred.title}
                    </h3>
                    <p className="text-xs leading-5 text-slate-500 md:text-sm md:leading-6">
                      {cred.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Quote Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/soft-watercolor-abstract-background-with-8f19be8e-20251111183811.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <FadeIn delay={0.2}>
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              "Health is not just about what you eat. It's about what you think,
              what you feel, and how you live."
            </blockquote>
            <p className="text-xl opacity-90">– Ravali Kanmani</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our personalized programs designed for your unique health goals
            </p>
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Explore Our Programs
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import BlurText from "@/components/BlurText";
import { Brain, MessageSquare, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuccessStories = () => {
  return (
    <section id="success" className="bg-background py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            About Us · Our Mission
          </span>
          <div className="mt-4">
            <BlurText
              text="We are here to bridge the gap between Talent and Intent"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            We optimize human potential through Strategic Intervention and Technological Synergy — a high-performance ecosystem designed for polymaths.
          </p>
        </div>

        {/* Pitch + culture */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Pitch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Your Career Evolution, Engineered.</span>{" "}
                  We are currently scaling our operations to bridge the gap between Generative AI and Career Architecture.
                </p>
                <p>
                  We are looking for <span className="font-semibold text-foreground">Force Multipliers</span> — individuals who don’t just follow a workflow but reinvent it.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Radical Candor</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Honest feedback, fast iteration, and clear ownership — without ego.
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Asynchronous Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Deep work, crisp writing, and systems that scale without meetings.
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Hyper-Growth</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  High standards, high speed, and constant compounding.
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Integrity</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Strategy and empathy together — truth, clarity, and ethical execution.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

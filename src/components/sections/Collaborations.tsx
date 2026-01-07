import BlurText from "@/components/BlurText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, Workflow } from "lucide-react";

const Collaborations = () => {
  return (
    <section className="border-y border-border bg-background py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            The Ecosystem
          </p>
          <div className="mt-4 flex justify-center">
            <BlurText
              text="Strategic Intervention × Technological Synergy"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="w-full justify-center font-heading text-2xl font-bold text-foreground lg:text-3xl"
            />
          </div>
          <p className="mt-3 text-muted-foreground">
            We’re scaling to bridge Generative AI and Career Architecture — building systems that elevate execution quality and signal clarity.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          <Card className="rounded-2xl shadow-soft">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Workflow className="h-6 w-6" />
              </div>
              <CardTitle className="font-heading text-lg">Systems</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Workflows that compound: clarity → execution → iteration.
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-soft">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle className="font-heading text-lg">AI Lab</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              LLM-powered tools for real-time competitive benchmarking.
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-soft">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="font-heading text-lg">Force Multipliers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              People who reinvent workflows — thriving in radical candor and hyper-growth.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;

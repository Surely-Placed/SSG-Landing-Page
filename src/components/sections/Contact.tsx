import BlurText from "@/components/BlurText";
import { ContactForm } from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-background py-20 lg:py-28">
      {/* dotted background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-60 [background-image:radial-gradient(circle,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      {/* soft gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/10 via-transparent to-teal/10 blur-3xl"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <BlurText
              text="Contact Us"
              delay={120}
              animateBy="words"
              direction="top"
              repeat
              className="w-full justify-center font-heading text-3xl font-bold text-foreground sm:text-4xl"
            />
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Share a few details and our team will reach out with the next best step—whether it’s career guidance, hiring
              support, or joining our consultant network.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-left">
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="mt-1 text-muted-foreground">hr@ssggetjob.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="mt-1 text-muted-foreground">+91 99878 15794</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Locations</p>
                  <p className="mt-1 text-muted-foreground">Gandhinagar, Gujarat, India</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Typical response time: <span className="font-medium text-foreground">within 1 business day</span>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {/* no “card” wrapper; just clean spacing */}
              <div className="relative z-10 pointer-events-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



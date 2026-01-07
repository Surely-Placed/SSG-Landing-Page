import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">SSG Consultant</p>
                <p className="text-xs tracking-wider text-muted-foreground">BRIDGE TALENT × INTENT</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              We bridge the gap between Talent and Intent — blending strategic intervention with technological synergy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="/ceo-journey">CEO Journey</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/services/career-mentorship">Mentorship & Training</FooterLink>
              <FooterLink href="/services/corporate-hiring">Professional Resume Building</FooterLink>
              <FooterLink href="/services/job-referrals">Strategic Job Applications</FooterLink>
              <FooterLink href="/services/consultant-network">Specialized Consultants</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>hr@ssggetjob.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 99878 15794</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>Gandhinagar, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 lg:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SSG Consultant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-poilicy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    {href.startsWith("/") ? (
      <Link to={href} className="text-muted-foreground transition-colors hover:text-accent">
        {children}
      </Link>
    ) : href.startsWith("#") ? (
      <Link to={`/${href}`} className="text-muted-foreground transition-colors hover:text-accent">
        {children}
      </Link>
    ) : (
      <a 
        href={href} 
        className="text-muted-foreground transition-colors hover:text-accent"
      >
        {children}
      </a>
    )}
  </li>
);

export default Footer;

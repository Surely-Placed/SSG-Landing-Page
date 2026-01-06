import React from 'react';
import { cn } from "@/lib/utils";
import { motion, type Variants, type Easing } from 'framer-motion';
import { CountAnimation } from "@/components/ui/count-animation";

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};


// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
  stats?: Array<{
    icon: React.ReactNode;
    value: number;
    suffix?: string;
    label: string;
  }>;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, stats, ...props }, ref) => {
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1] as Easing,
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full min-h-screen overflow-hidden bg-background text-foreground",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="relative z-20 flex w-full flex-col p-8 pt-24 md:pt-12 md:w-2/3 md:p-12 lg:w-3/5 lg:p-16">
          {/* Mobile background overlay for better text readability */}
          <div className="absolute inset-0 bg-background/80 md:bg-transparent -z-10"></div>
            {/* Logo Section */}
            {logo && (
              <motion.header className="mb-8" variants={itemVariants}>
                <div className="flex items-center">
                  {logo.url && (
                    <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                  )}
                  {!logo.url && logo.text && (
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <span className="font-heading text-lg font-bold text-primary-foreground">S</span>
                    </div>
                  )}
                  <div>
                    {logo.text && <p className="text-lg font-bold text-foreground">{logo.text}</p>}
                    {slogan && <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>}
                  </div>
                </div>
              </motion.header>
            )}

            {/* Main Content */}
            <motion.main variants={containerVariants} className="flex-1">
                    <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants}></motion.div>
                    <motion.p className="mb-8 max-w-md text-base text-muted-foreground lg:text-lg" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a 
                      href={callToAction.href} 
                      className="inline-block text-lg font-bold tracking-widest text-primary transition-colors hover:text-primary/80 mb-8" 
                      variants={itemVariants}
                    >
                        {callToAction.text} →
                    </motion.a>
                    
                    {/* Stats Section - Fills white space below CTA */}
                    {stats && stats.length > 0 && (
                      <motion.div 
                        className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-4" 
                        variants={itemVariants}
                      >
                        {stats.map((stat, index) => (
                          <motion.div 
                            key={index} 
                            className="space-y-1"
                            variants={itemVariants}
                          >
                            <div className="flex items-center gap-2 text-accent">
                              {stat.icon}
                              <div className="font-heading text-xl font-bold text-foreground lg:text-2xl flex items-center">
                                <CountAnimation 
                                  number={stat.value} 
                                  className=""
                                />
                                {stat.suffix && <span>{stat.suffix}</span>}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Contact Info - Right below stats */}
                    <motion.footer className="mt-8 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
            </motion.main>
        </div>

        {/* Right Side: Image with Diagonal Clip Path - Reduces White Space */}
        <motion.div 
          className="absolute right-0 top-0 h-full w-full md:w-1/2 lg:w-2/5 z-0"
          initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ opacity: 1, clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 md:opacity-100"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
          {/* Gradient overlay for better text readability - stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/70 via-background/40 to-transparent md:from-background/20 md:via-transparent"></div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };


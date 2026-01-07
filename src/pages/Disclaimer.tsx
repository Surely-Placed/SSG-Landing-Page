import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <main className="bg-background">
      <div className="container py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>

          <header className="mt-4 space-y-2">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Disclaimer</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 1, 2024</p>
          </header>

          <section className="prose prose-slate dark:prose-invert mt-10 max-w-none
            prose-headings:font-heading prose-headings:tracking-tight
            prose-h2:mt-10 prose-h2:mb-3
            prose-h3:mt-6 prose-h3:mb-2
            prose-p:leading-relaxed
            prose-ul:my-4 prose-ul:pl-6 prose-ol:my-4 prose-ol:pl-6
            prose-li:my-1 prose-li:pl-1
            prose-strong:text-foreground dark:prose-strong:text-foreground
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-li:marker:text-muted-foreground
          ">
            <h2>1. General Information</h2>
            <p>
              The information contained on SSG Global ("Service") is for general information purposes only. While we strive
              to provide accurate and up-to-date information, we make no representations or warranties of any kind, express
              or implied, about the completeness, accuracy, reliability, suitability, or availability of the Service or the
              information, products, services, or related graphics contained on the Service for any purpose.
            </p>

            <h2>2. No Guarantee of Results</h2>
            <p>SSG Global provides career mentorship, recruitment support, and related guidance. However, we do not guarantee, warrant, or represent that:</p>
            <ul>
              <li>Using our Service will result in job interviews, job offers, or employment</li>
              <li>Your profile will pass all Applicant Tracking Systems (ATS)</li>
              <li>Your profile will be selected by employers or recruiters</li>
              <li>You will receive any specific number of responses to job applications</li>
              <li>Our recommendations will improve your job search outcomes</li>
            </ul>
            <p>
              Job application success depends on numerous factors beyond our control, including but not limited to: job
              market conditions, industry requirements, employer preferences, your qualifications and experience, interview
              performance, and competition from other candidates.
            </p>

            <h2>3. Technology Limitations</h2>
            <p>
              Some parts of our Service may use automation and data-driven tools to assist candidates. You acknowledge and
              understand that:
            </p>
            <ul>
              <li>Automated tools are not perfect and may produce errors or inaccuracies</li>
              <li>Recommendations may not account for all industry-specific requirements or nuances</li>
              <li>Our guidance is a tool to assist you, not a replacement for professional advice</li>
              <li>You are responsible for reviewing and approving any suggestions before use</li>
              <li>You should verify the accuracy and appropriateness of all recommendations</li>
            </ul>

            <h2>4. Content Accuracy and Responsibility</h2>
            <p>You are solely responsible for:</p>
            <ul>
              <li>The accuracy, truthfulness, and completeness of all information in your resume/profile</li>
              <li>Ensuring your resume/profile does not contain false, misleading, or fraudulent information</li>
              <li>Verifying that all claims, qualifications, and experiences are accurate</li>
              <li>Complying with applicable laws and regulations regarding resume/profile content</li>
              <li>Any consequences resulting from inaccurate, false, or misleading information</li>
            </ul>
            <p>
              We are not responsible for any misrepresentations, inaccuracies, or false information in your resume/profile,
              even if such information was suggested or formatted using our guidance.
            </p>

            <h2>5. Professional Advice</h2>
            <p>
              The information and recommendations provided by our Service are not intended to constitute professional
              career counseling, legal advice, or employment consulting. Our Service is not a substitute for:
            </p>
            <ul>
              <li>Professional career counseling or coaching</li>
              <li>Legal advice regarding employment matters</li>
              <li>Professional resume writing services</li>
              <li>Industry-specific career guidance</li>
              <li>Personalized advice tailored to your specific situation</li>
            </ul>
            <p>We recommend consulting qualified professionals for personalized guidance when appropriate.</p>

            <h2>6. Third-Party Services and Links</h2>
            <p>
              Our Service may contain links to third-party websites, services, or resources. We do not endorse, control, or
              assume responsibility for their content, policies, practices, availability, or any transactions between you
              and third parties.
            </p>

            <h2>7. Service Availability and Errors</h2>
            <p>
              We strive to provide a reliable and uninterrupted Service, but we do not guarantee that the Service will be
              available at all times, free from interruptions, error-free, or compatible with all devices or browsers. We
              may modify, suspend, or discontinue any part of the Service at any time without notice.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, SSG Global and its officers, directors, employees, agents,
              and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
              damages arising from your use or inability to use the Service.
            </p>

            <h2>9. No Endorsement</h2>
            <p>
              Reference to any specific company, product, process, or service by trade name, trademark, manufacturer, or
              otherwise does not constitute or imply endorsement, recommendation, or favoring by SSG Global.
            </p>

            <h2>10. Changes to Service</h2>
            <p>
              We reserve the right to modify, update, or discontinue any aspect of the Service at any time, including
              features, pricing, user interface, and policies.
            </p>

            <h2>11. Use at Your Own Risk</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
              You are responsible for evaluating suitability of recommendations, verifying information, and backing up your
              data.
            </p>

            <h2>12. Contact Information</h2>
            <p>If you have any questions about this Disclaimer, please contact us:</p>
            <p>
              Email: <a href="mailto:hr@ssggetjob.com">hr@ssggetjob.com</a>
            </p>
            <p>
              Address: SSG Consultant
              <br />
              Gandhinagar, Gujarat, India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Disclaimer;



import { PageBanner } from "@/components/layouts/page-banner";
import { ContactFormSection } from "../components/contact-form-section";
import { ContactInfoSection } from "../components/contact-info-section";
import { Footer } from "@/components/layouts/footer";

function ContactView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        backgroundImage="/images/slider/slider_mosque_interior_1770137472856.png"
        height="md"
      />
      <ContactFormSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
}

export default ContactView;

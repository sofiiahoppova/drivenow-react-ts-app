import React from "react";
import HeroSection from "../../components/landing/HeroSection/HeroSection";
import AboutUsSection from "../../components/landing/AboutUsSection/AboutUsSection";
import BenefitsSection from "../../components/landing/BenefitsSection/BenefitsSection";
import ReviewsSection from "../../components/landing/ReviewsSection/ReviewsSection";
import BrandsSection from "../../components/landing/BrandsSection/BrandsSection";
import FAQSection from "../../components/landing/FAQSection/FAQSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <BenefitsSection />
      <ReviewsSection />
      <BrandsSection />
      <FAQSection />
    </div>
  );
};

export default LandingPage;

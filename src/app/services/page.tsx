import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services & Programs | Personalized Nutrition Plans",
  description: "Comprehensive nutrition programs for weight loss/gain, PCOD management, immunity boost, skin & hair health, kids nutrition, and more. Personalized plans tailored to your goals.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

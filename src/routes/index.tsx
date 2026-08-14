import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar, type Language } from "@/components/top-bar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Targeting } from "@/components/targeting";
import { CampaignForm } from "@/components/campaign-form";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";




export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kuwait Ads Hub | Meta Ads Agency for Kuwait Businesses" },
      {
        name: "description",
        content:
          "Kuwait Ads Hub helps local businesses in Kuwait get more customers through done-for-you Facebook and Instagram ads management.",
      },
      { property: "og:title", content: "Kuwait Ads Hub | Meta Ads Agency for Kuwait Businesses" },
      {
        property: "og:description",
        content:
          "Done-for-you Meta Ads management for restaurants, gyms, salons, and cafes across Kuwait.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Targeting />
        <CampaignForm />
        <Testimonials />
        <FAQ />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}

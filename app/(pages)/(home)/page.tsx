import { Container } from "@/app/components/HomeContainer";
import { Hero } from "@/app/components/Hero";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Benefits } from "@/app/components/Benefits";
import { Video } from "@/app/components/Video";
import { Testimonials } from "@/app/components/Testimonials";
import { Faq } from "@/app/components/Faq";
import { Cta } from "@/app/components/Cta";

import { benefitOne, benefitTwo } from "@/app/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="MerchantMatey Benefits"
        title=" The one commerce platform behind it all"
      >
        Sell online and in person. Sell locally and globally. Sell direct and wholesale. Sell on desktop and mobile.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}

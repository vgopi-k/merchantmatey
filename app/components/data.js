import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Sell and ship everywhere",
      desc: "Shopify takes the complexity out of international selling, from delivering products faster and more affordably with Shopify Shipping to localizing your experience with MerchantMatey Markets.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Cut acquisition costs as much as 50% with MerchantMatey Audiences and keep them coming back with integrated marketing tools and insightful analytics.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Powered by the world’s best checkout",
      desc: "Stripe Checkout is fast, fully customizable, and optimized to close more sales.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Run your store from anywhere",
      desc: "Do it all right from your pocket with the full-featured MerchantMatey mobile app.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Manage everything in one place",
      desc: "From back office to front of store, you’re always in control with the fully centralized MerchantMatey Admin.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Unlock new growth with B2B",
      desc: "Create custom experiences for wholesale buyers with flexible pricing, discounts, and payment terms.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

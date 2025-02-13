import { IHandleBusiness } from "@/types/handle-business-type";
import { ITestimonial } from "@/types/testimonial-data-type";

export const handleBusinessData: IHandleBusiness[] = [
    {
        title: "Rewards",
        body: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
        icon: "/icons/handle-business/reward.svg"
    },
    {
        title: "100% Secured",
        body: "We take proactive steps make sure your information and transactions are secure.",
        icon: "/icons/handle-business/secure.svg"
    },
    {
        title: "Balance Transfer",
        body: "A balance transfer credit card can save you a lot of money in interest charges.",
        icon: "/icons/handle-business/balance.svg"
    }
];

export const testimonials: ITestimonial[] = [
    {
        message: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        profileImage: "/images/testimonials/user1.svg",
        name: "Herman Jensen",
        role: "Founder & Leader"
    },
    {
        message: "Money makes your life easier. If you're lucky to have it, you're lucky.",
        profileImage: "/images/testimonials/user2.svg",
        name: "Steve Mark",
        role: "Founder & Leader"
    },
    {
        message: "It is usually people in the money business, finance, and international trade that are really rich.",
        profileImage: "/images/testimonials/user3.svg",
        name: "Kenn Gallagher",
        role: "Founder & Leader"
    }
];

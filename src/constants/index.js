import {
  amazon,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  discordBlack,
  epam,
  facebook,
  google,
  instagram,
  notification2,
  notification3,
  notification4,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Agenda",
    url: "#agenda",
  },
  {
    id: "2",
    title: "About",
    url: "#about",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [amazon, google, epam];

export const features = [
  {
    id: "0",
    title: "Keynote Speakers",
    text: "Hear from industry leaders and visionaries.",
    backgroundUrl: "/assets/features/card-1.svg",
    iconUrl: featureIcon1,
  },
  {
    id: "1",
    title: "Workshops and Panels",
    text: "Participate in hands-on workshops and insightful panel discussions.",
    backgroundUrl: "/assets/features/card-2.svg",
    iconUrl: featureIcon2,
    light: true,
  },
  {
    id: "2",
    title: "Networking Opportunities",
    text: "Connect with like-minded professionals and experts.",
    backgroundUrl: "/assets/features/card-3.svg",
    iconUrl: featureIcon3,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

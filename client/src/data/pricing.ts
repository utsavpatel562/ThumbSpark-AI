import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
  {
    name: "Starter",
    price: 29,
    period: "one-time",
    features: [
      "500 credits included",
      "50 AI-generated thumbnails",
      "Access to Gemini AI models",
      "No watermark on downloads",
      "High-resolution exports",
      "Commercial usage rights",
      "Credits never expire"
    ],
    mostPopular: false
  },
  {
    name: "Pro",
    price: 79,
    period: "one-time",
    features: [
      "2400 credits included",
      "240 AI-generated thumbnails",
      "Access to Gemini AI models",
      "No watermark on downloads",
      "High-resolution exports",
      "Commercial usage rights",
      "Faster generation speed",
      "Credits never expire"
    ],
    mostPopular: true
  },
  {
    name: "Ultra",
    price: 199,
    period: "one-time",
    features: [
      "8000 credits included",
      "800 AI-generated thumbnails",
      "Access to Gemini AI models",
      "No watermark on downloads",
      "Ultra high-resolution exports",
      "Commercial usage rights",
      "Credits never expire"
    ],
    mostPopular: false
  }
];

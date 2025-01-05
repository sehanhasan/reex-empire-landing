import { Wrench, Hammer, Palette, PaintBucket, PenLine, HardHat, Construction, Wind } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  testimonial: {
    text: string;
    author: string;
    rating: number;
  };
}

export const services: ServiceData[] = [
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Comprehensive maintenance services for your property",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    testimonial: {
      text: "Excellent maintenance service that keeps our property in top condition!",
      author: "David Wong",
      rating: 5
    }
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Expert carpentry and woodworking solutions",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c",
    testimonial: {
      text: "Outstanding carpentry work with great attention to detail.",
      author: "Sarah Tan",
      rating: 5
    }
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior design and space planning",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221",
    testimonial: {
      text: "Transformed our space into something truly beautiful!",
      author: "Linda Chen",
      rating: 5
    }
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Professional painting services for all surfaces",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828",
    testimonial: {
      text: "Excellent paint job that brightened up our entire home!",
      author: "Michael Lee",
      rating: 5
    }
  },
  {
    icon: PenLine,
    title: "Plumbing",
    description: "Complete plumbing solutions and repairs",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954",
    testimonial: {
      text: "Quick and efficient plumbing service!",
      author: "Raj Kumar",
      rating: 5
    }
  },
  {
    icon: HardHat,
    title: "Renovation",
    description: "Full-scale renovation and remodeling services",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    testimonial: {
      text: "Completely transformed our home with excellent renovation work!",
      author: "Ahmad Hassan",
      rating: 5
    }
  },
  {
    icon: Construction,
    title: "Demolition",
    description: "Professional and safe demolition services",
    image: "https://images.unsplash.com/photo-1626963781637-1766c8542f99",
    testimonial: {
      text: "Efficient and safe demolition work with proper cleanup.",
      author: "John Lim",
      rating: 5
    }
  },
  {
    icon: Wind,
    title: "Aircond",
    description: "Air conditioning installation and servicing",
    image: "https://i.ibb.co/g4SfZBQ/image.png",
    testimonial: {
      text: "Great AC service with professional maintenance!",
      author: "Kamal Ibrahim",
      rating: 5
    }
  }
];

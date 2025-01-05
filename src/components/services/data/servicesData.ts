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

export interface ServiceGalleryData {
  [key: string]: string[];
}

export interface ServiceTestimonialsData {
  [key: string]: Array<{
    text: string;
    author: string;
    rating: number;
  }>;
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
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c",
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
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    testimonial: {
      text: "Great AC service with professional maintenance!",
      author: "Kamal Ibrahim",
      rating: 5
    }
  }
];

export const serviceGalleryImages: ServiceGalleryData = {
  'maintenance': [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
    'https://images.unsplash.com/photo-1590479773265-7464e5d48118',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4'
  ],
  'carpentry': [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c',
    'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d',
    'https://images.unsplash.com/photo-1617104551722-3b2d51366400'
  ],
  'interior-design': [
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace'
  ],
  'painting': [
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d'
  ],
  'plumbing': [
    'https://images.unsplash.com/photo-1542013936693-884638332954',
    'https://images.unsplash.com/photo-1504148455328-c376907d081c',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39'
  ],
  'renovation': [
    'https://images.unsplash.com/photo-1534237710431-e2fc698436d0',
    'https://images.unsplash.com/photo-1574359411659-15573a27d625',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f'
  ],
  'demolition': [
    'https://images.unsplash.com/photo-1626324712957-d7b534f7b7c7',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    'https://images.unsplash.com/photo-1598885511440-218a568970b1'
  ],
  'aircond': [
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
    'https://images.unsplash.com/photo-1527899161883-3eb074843f34',
    'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff'
  ]
};

export const serviceTestimonials: ServiceTestimonialsData = {
  'maintenance': [
    {
      text: "Outstanding maintenance service! They keep our property in perfect condition.",
      author: "David Chen",
      rating: 5
    },
    {
      text: "Regular maintenance has saved us from major repairs. Highly recommended!",
      author: "Sarah Wong",
      rating: 5
    }
  ],
  'carpentry': [
    {
      text: "Exceptional carpentry work. The attention to detail is impressive!",
      author: "Michael Tan",
      rating: 5
    },
    {
      text: "Beautiful custom furniture and excellent craftsmanship.",
      author: "Lisa Lee",
      rating: 5
    }
  ],
  'interior-design': [
    {
      text: "They transformed our space into something truly amazing!",
      author: "Jennifer Lim",
      rating: 5
    },
    {
      text: "Creative solutions and professional service. Love the results!",
      author: "Robert Zhang",
      rating: 5
    }
  ],
  'painting': [
    {
      text: "Perfect paint job! They were neat, efficient, and professional.",
      author: "William Ng",
      rating: 5
    },
    {
      text: "Great attention to detail and excellent color recommendations.",
      author: "Emily Teo",
      rating: 5
    }
  ],
  'plumbing': [
    {
      text: "Quick response and efficient service. Fixed our issues perfectly!",
      author: "James Liu",
      rating: 5
    },
    {
      text: "Professional plumbing service at reasonable rates.",
      author: "Mary Chan",
      rating: 5
    }
  ],
  'renovation': [
    {
      text: "Complete transformation of our home. Couldn't be happier!",
      author: "Peter Wong",
      rating: 5
    },
    {
      text: "Professional renovation team with excellent project management.",
      author: "Alice Tan",
      rating: 5
    }
  ],
  'demolition': [
    {
      text: "Safe and efficient demolition work with proper cleanup.",
      author: "George Lin",
      rating: 5
    },
    {
      text: "Professional team that handled everything perfectly.",
      author: "Helen Koh",
      rating: 5
    }
  ],
  'aircond': [
    {
      text: "Expert AC installation and maintenance service!",
      author: "Thomas Lee",
      rating: 5
    },
    {
      text: "Regular servicing keeps our AC running perfectly.",
      author: "Jane Chen",
      rating: 5
    }
  ]
};
import { Injectable } from '@angular/core';

export interface NavLink {
  label: string;
  fragment: string;
}

export interface HeroServiceIcon {
  label: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface ContactInfo {
  phones: string[];
  email: string;
  website: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly companyName = 'SEAMWAY LOGISTICS SERVICES';
  readonly tagline = 'Seamlessly Worldwide';

  readonly navLinks: NavLink[] = [
    { label: 'Home', fragment: 'home' },
    { label: 'Who We Are', fragment: 'who-we-are' },
    { label: 'Our Services', fragment: 'services' },
    { label: 'Why Choose Us', fragment: 'why-choose-us' },
    { label: 'Contact', fragment: 'contact' },
  ];

  readonly heroHeadlines = ['GLOBAL LOGISTICS.', 'MARINE SUPPORT.', 'TRADE SOLUTIONS.'];
  readonly heroSubtext = 'Moving Cargo Across Oceans, Skies and Borders.';

  readonly heroServices: HeroServiceIcon[] = [
    { label: 'Sea Freight', icon: 'ship' },
    { label: 'Air Freight', icon: 'plane' },
    { label: 'Land Transport', icon: 'truck' },
    { label: 'Project Cargo', icon: 'cargo' },
    { label: 'Worldwide Reach', icon: 'globe' },
  ];

  readonly whoWeAre = {
    title: 'WHO WE ARE',
    paragraphs: [
      'Seamway Logistics Services is a modern logistics and trade solutions company delivering seamless cargo movement across international markets.',
      'We provide end-to-end logistics, customs coordination, transportation management, marine support services, cargo insurance assistance and global supply chain solutions.',
    ],
    objective:
      'To provide businesses with a single trusted partner capable of managing every stage of the logistics journey.',
    values: [
      { title: 'One Team', description: 'Unified experts working as your extended logistics arm.', icon: 'team' },
      { title: 'One Contact', description: 'A single point of accountability for every shipment.', icon: 'contact' },
      { title: 'One Responsibility', description: 'End-to-end ownership from origin to destination.', icon: 'shield' },
    ] as ValueItem[],
  };

  readonly services: ServiceCategory[] = [
    {
      title: 'Freight Forwarding',
      icon: 'forwarding',
      items: [
        'Sea Freight (FCL & LCL)',
        'Air Freight',
        'Cross Trade Shipments',
        'Project Cargo',
        'Break Bulk Cargo',
        'Multimodal Transportation',
      ],
    },
    {
      title: 'Customs & Compliance',
      icon: 'customs',
      items: ['Export Clearance', 'Import Clearance', 'Documentation Support', 'Trade Compliance'],
    },
    {
      title: 'Transportation',
      icon: 'transport',
      items: ['Factory to Port', 'Port to Warehouse', 'Domestic Distribution', 'Last Mile Delivery'],
    },
    {
      title: 'Warehousing & Distribution',
      icon: 'warehouse',
      items: ['Warehouse Management', 'Inventory Management', 'Packing, Labeling & Distribution'],
    },
    {
      title: 'Supply Chain Solutions',
      icon: 'supply',
      items: [
        'Cargo Coordination',
        'Shipment Monitoring',
        'Vendor Management',
        'End-to-End Logistics Support',
      ],
    },
    {
      title: 'Project & Special Cargo',
      icon: 'project',
      items: ['Handling of ODC, Heavy Lift', 'Industrial & Turnkey Projects'],
    },
  ];

  readonly whyChoose = {
    title: 'WHY CHOOSE SEAMWAY',
    oneWindow: {
      title: 'One Window Logistics Solution',
      points: ['No multiple vendors', 'No multiple contacts', 'One accountable logistics partner'],
    },
    benefits: [
      'One Point of Contact',
      'End-to-End Logistics Management',
      'Timely Delivery & Real-Time Updates',
      'Cargo Insurance Assistance',
      'Marine Support Services',
      'Strong Global Network',
      'Competitive Pricing',
      'Dedicated Support Team',
      'Transparent & Reliable',
      'Customer First Approach',
    ],
    advantages: [
      { title: 'One Point of Contact', description: 'Single accountable partner for all logistics needs.', icon: 'contact' },
      { title: 'Complete Shipment Visibility', description: 'Real-time tracking and transparent updates.', icon: 'visibility' },
      { title: 'Seamless Execution', description: 'Coordinated delivery across every mode and border.', icon: 'execution' },
    ] as ValueItem[],
  };

  readonly advantageBanner = {
    headline: 'OUR ADVANTAGE. YOUR GROWTH.',
    subtext: "We don't just move cargo. We connect businesses to opportunities worldwide.",
    tagline: 'ANY CARGO. ANY MODE. ANYWHERE. ANYTIME.',
  };

  readonly phoenixMajan = {
    name: 'PHOENIX MAJAN',
    subtitle: 'Marine | Survey | Risk Solutions',
    description:
      'Our dedicated marine support arm provides insurance assistance and risk management support to ensure your cargo is protected at every step.',
    location: 'Phoenix Majan Services LLC – UAE & Oman',
  };

  readonly contact: ContactInfo = {
    phones: ['+91 84549 12345', '+91 84549 67890'],
    email: 'info@seamwaylogistics.com',
    website: 'www.seamwaylogistics.com',
    location: 'Navi Mumbai, India',
  };

  readonly footerTagline = 'Your Global Logistics Partner for Every Journey.';
}

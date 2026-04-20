export interface ExperienceItem {
  category: string;
  description: string;
  clients: { name: string; logo?: string }[];
}

export interface TeamMember {
  slug: string;
  name: string;
  designation: string;
  tagline: string;
  photo?: string;
  bio: string[];
  experience?: ExperienceItem[];
  practiceSection?: {
    label: string;
    title: string;
    para: string;
  };
  standing: string;
}

export const team: TeamMember[] = [
  {
    slug: "founder",
    name: "Ravi Prakash Verma",
    designation: "Founder & Managing Partner",
    tagline: "25+ years across tax advisory, regulatory strategy and institutional compliance.",
    photo: "/images/team/founder.JPG.jpeg",
    bio: [
      "Ravi Prakash Verma is the Founder of Jiya & Associates and brings over two decades of experience in tax advisory, regulatory strategy and institutional compliance. His practice has been shaped by long-standing client relationships and a consistent track record of advising on complex, high-value matters across sectors.",
      "He is regularly engaged by multinational corporations, Indian enterprises and financial institutions on issues involving tax structuring, cross-border positioning, regulatory approvals and ongoing compliance. His advisory is marked by clarity of approach, commercial awareness and the ability to anticipate regulatory exposure before it materialises.",
      "Over the years, he has played a key role in advising Indian arms of global businesses on market entry, structuring and operational continuity within the Indian legal framework. His work is often central to ensuring stability in environments where regulatory and tax considerations directly impact business decisions.",
    ],
    experience: [
      {
        category: "Cross-Border & Multinational Advisory",
        description:
          "Guiding foreign entities and their Indian subsidiaries through entry strategy, jurisdictional alignment and tax-efficient structuring within the Indian regulatory landscape.",
        clients: [
          { name: "POSCO Group", logo: "/images/clients/posco.png" },
          { name: "Sumikin Bussan India", logo: "/images/clients/sumikin.jpeg" },
          { name: "Adeka India", logo: "/images/clients/adeka.png" },
          { name: "Marubeni India", logo: "/images/clients/marubeni.png" },
          { name: "UPS SCS India", logo: "/images/clients/ups.jpg" },
        ],
      },
      {
        category: "Manufacturing & Industrial Enterprises",
        description:
          "Handling tax and compliance functions for manufacturing entities, with emphasis on operational structuring and regulatory adherence across business cycles.",
        clients: [
          { name: "AKG India Pvt. Ltd.", logo: "/images/clients/akg.jpg" },
          { name: "Nippon", logo: "/images/clients/nippon.jpeg" },
        ],
      },
      {
        category: "Infrastructure, Hospitality & Real Estate",
        description:
          "Supporting businesses in capital-intensive sectors on regulatory navigation, project structuring and compliance systems essential for large-scale operations.",
        clients: [
          { name: "Pride Hotels Ltd.", logo: "/images/clients/pride.jpg" },
          { name: "Apex Group", logo: "/images/clients/apex.png" },
        ],
      },
      {
        category: "Education & Institutional Bodies",
        description:
          "Structuring and regularising educational institutions and affiliated entities, including registration frameworks and ongoing statutory compliance.",
        clients: [
          { name: "GD Goenka Public School", logo: "/images/clients/gdgoneka.jpg" },
          { name: "Vidya Jain Public School", logo: "/images/clients/vidyajain.webp" },
        ],
      },
      {
        category: "Consumer, Financial & Growth Enterprises",
        description:
          "Advising new-age businesses to streamline tax exposure, build compliant structures and align legal frameworks with growth trajectories.",
        clients: [
          { name: "Bombay Shaving Company", logo: "/images/clients/bombay.png" },
          { name: "Moneyboxx Finance Ltd.", logo: "/images/clients/moneybox.png" },
        ],
      },
      {
        category: "Media & Entertainment",
        description:
          "Assisting digital and media-driven businesses in managing evolving compliance requirements, transactional structuring and regulatory alignment in dynamic markets.",
        clients: [
          { name: "Chokas Media Pvt. Ltd.", logo: "/images/clients/chokas.jpg" },
          { name: "Airnet Digital Solutions", logo: "/images/clients/aritel.png" },
        ],
      },
    ],
    standing:
      "His practice reflects consistency, discretion and a steady command over mandates that demand both technical depth and commercial judgement. He continues to act as a long-term advisor across industries, with an emphasis on stability, foresight and sustained client trust.",
  },
  {
    slug: "litigation-head",
    name: "Keshav Soni",
    designation: "Head of Disputes & Litigation",
    tagline: "Civil, commercial and criminal litigation across courts, tribunals and appellate forums.",
    photo: undefined,
    bio: [
      "Keshav Soni heads the disputes and litigation practice, overseeing representation across civil, commercial and criminal proceedings before courts and tribunals. His role involves advising on dispute strategy, managing ongoing litigation and ensuring that matters are conducted with consistency, structure and clear direction.",
      "His experience includes handling commercial and financial disputes, recovery actions, cheque dishonour proceedings and regulatory matters, with appearances before the Supreme Court of India, High Courts and trial courts. He is regularly engaged at different stages of litigation, including matters requiring immediate intervention and strategic course correction.",
      "In addition to his role within the firm, he is independently involved in a litigation-focused practice, bringing a more execution-driven and court-centric perspective to dispute handling, closely integrated with the firm's established advisory and regulatory framework.",
    ],
    practiceSection: {
      label: "Dispute Practice",
      title: "Scope of Practice",
      para: "He handles a wide range of disputes including commercial and financial litigation, recovery actions, cheque dishonour matters and regulatory proceedings, with experience across courts, tribunals and appellate forums. His work often involves coordinating strategy across multiple proceedings to ensure consistency in position and outcome.",
    },
    standing:
      "His practice is defined by a results-oriented approach to litigation, with a clear focus on securing commercially and legally effective outcomes for clients. He is routinely entrusted with matters requiring decisive strategy, sustained control and the ability to respond to evolving proceedings across forums. His involvement reflects a consistent emphasis on client objectives, ensuring that disputes are not only managed efficiently but driven towards resolution with clarity, precision and accountability.",
  },
  {
    slug: "associate-1",
    name: "Associate Name",
    designation: "Senior Associate",
    tagline: "Corporate advisory, regulatory compliance and transactional support across key practice areas.",
    photo: undefined,
    bio: ["Bio coming soon."],
    standing: "Details to be updated.",
  },
  {
    slug: "associate-2",
    name: "Associate Name",
    designation: "Associate",
    tagline: "Intellectual property, trademark filings and regulatory licensing support.",
    photo: undefined,
    bio: ["Bio coming soon."],
    standing: "Details to be updated.",
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

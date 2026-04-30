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
  practice?: string[];
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
    tagline: "Advocate, Bar Council of India",
    photo: "/images/team/founder.JPG.jpeg",
    practice: ["Tax Advisory", "Regulatory Strategy", "Cross-Border Structuring", "Institutional Compliance"],
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
    designation: "Head of Litigation & Disputes",
    tagline: "Advocate, Bar Council of India",
    photo: "/images/team/litigation.jpg.jpeg",
    practice: ["Civil Litigation", "Commercial Disputes", "Criminal Law", "Appellate Practice"],
    bio: [
      "Keshav Soni heads the disputes and litigation practice, leading strategy and execution across civil, commercial and criminal proceedings before courts and tribunals. His role is centred on structuring disputes from the outset—identifying leverage, assessing risk and driving matters with clarity, control and a defined objective.",
      "His experience includes handling commercial and financial disputes, recovery actions, cheque dishonour proceedings and regulatory matters, with appearances before the Supreme Court of India, High Courts and trial courts. He is regularly engaged at critical stages of litigation, particularly in matters requiring immediate intervention, strategic positioning and course correction.",
      "In addition to his role within the firm, he leads a dedicated litigation practice through Stratum Juris, bringing an execution-driven and courtroom-focused approach to dispute handling, closely aligned with the firm's advisory and regulatory framework.",
    ],
    practiceSection: {
      label: "Disputes Practice",
      title: "Scope of Practice",
      para: "He handles a wide range of disputes including commercial litigation, corporate and shareholder conflicts, financial recovery, cheque dishonour matters and regulatory proceedings. His work extends to insolvency and restructuring matters before the NCLT and NCLAT, banking and recovery proceedings before the DRT and DRAT, as well as criminal and economic offence matters including proceedings under the Prevention of Money Laundering Act and cases involving investigative agencies. His approach involves structuring litigation strategy, coordinating proceedings across forums and maintaining consistency in legal position, with a clear focus on enforceability and outcome.",
    },
    standing:
      "His practice is defined by a structured and results-oriented approach to litigation, with emphasis on precision, procedural control and decisive execution. He is routinely engaged in matters requiring sustained strategy and close handling across stages, ensuring that disputes are not only mafectively but driven towards resolution with clarity, discipline and accountability.",
  },
  {
    slug: "associate-1",
    name: "Ashwani Gaur",
    designation: "Consultant — Taxation & Compliance",
    tagline: "CA, Institute of Chartered Accountants of India",
    photo: "/images/team/ashvani.png",
    practice: ["Direct Tax Advisory", "Assessment & Appellate", "Statutory Audits", "Regulatory Compliance"],
    bio: [
      "CA Ashwani Gaur is associated with the firm as a Consultant in taxation and compliance, advising on direct tax, audit and regulatory matters. His role involves providing strategic inputs on tax position, supporting compliance frameworks and assisting in representation before tax authorities, ensuring that matters are handled with clarity, structure and procedural discipline.",
      "He brings extensive experience under the Income-tax Act, 1961, with regular involvement in assessment and appellate proceedings. He has been engaged in handling matters involving search and seizure proceedings, along with representation before authorities at various stages. His work also extends to advisory under the Companies Act and the erstwhile GST regime, with a focus on aligning regulatory requirements with business operations.",
      "In addition to his association with the firm, he leads his independent practice, Gaur Gaur & Associates, and brings that experience into his advisory role, contributing a grounded and execution-focused perspective to taxation and compliance matters where required.",
    ],
    practiceSection: {
      label: "Taxation & Compliance Practice",
      title: "Scope of Practice",
      para: "He handles a wide range of matters including income-tax advisory, assessment and appellate representation, tax structuring and regulatory compliance. His work includes execution of Special Audits under Section 142(2A), statutory audits, tax audits, internal audits and management audits, along with handling matters involving search and seizure proceedings. His approach is centred on accuracy, preparedness and consistency in financial and regulatory positioning.",
    },
    standing:
      "His practice is defined by a methodical and detail-oriented approach to taxation and compliance, with a clear focus on managing exposure and maintaining regulatory discipline. His involvement brings experience and stability to matters requiring careful handling of financial and statutory positions, ensuring that clients are supported with clarity, precision and reliability.",
  },
  {
    slug: "associate-2",
    name: "DR. KETAN GUPTA",
    designation: "Consultant — Regulatory Advisory",
    tagline: "FCA, Institute of Chartered Accountants of India",
    photo: "/images/team/ketan.png",
    bio: [
      "CA Dr. Ketan Gupta is associated with the firm in the area of indirect taxation and advisory, with a focus on Goods and Services Tax (GST), management consultancy and risk assessment. His role involves assisting in analysing tax implications, supporting compliance processes and contributing to advisory on evolving regulatory requirements.",
      "He brings experience in handling GST-related matters, including advisory, compliance support and interpretation of indirect tax provisions. His work is directed towards identifying risk areas, streamlining compliance and assisting clients in adapting to regulatory changes in a structured manner.",
      "He holds a doctorate in Finance with a focus on GST, which strengthens his analytical approach to indirect taxation and enables him to contribute to technically nuanced matters.",
    ],
    practiceSection: {
      label: "Tax & Advisory Practice",
      title: "Scope of Practice",
      para: "His practice is centred on indirect taxation, particularly GST, along with involvement in management consultancy and corporate advisory assignments. He works on identifying compliance gaps, assisting in structuring processes and supporting implementation across business operations.",
    },
    standing: "His work reflects a detail-oriented and analytical approach, with emphasis on technical accuracy and practical application. He contributes to advisory matters requiring structured evaluation and consistent execution, supporting the firm’s broader tax and compliance practice.",
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

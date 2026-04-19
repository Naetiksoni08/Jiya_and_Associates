export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface Service {
  slug: string;
  title: string;
  brief: string;
  intro?: string[];
  sections?: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "corporate-commercial-advisory",
    title: "Corporate & Commercial Advisory",
    brief: "Structuring, contracts and commercial arrangements.",
    intro: [
      "Corporate and commercial matters are handled with a focus on structuring, clarity and alignment with applicable legal frameworks. Jiya & Associates advises businesses and individuals on a range of commercial arrangements, ensuring that transactions, relationships and obligations are clearly defined and enforceable.",
      "The practice draws on long-standing experience in dealing with contractual and business-related matters, allowing issues to be addressed with foresight and continuity.",
    ],
    sections: [
      {
        heading: "Commercial Contracts & Documentation",
        paragraphs: [
          "Drafting, review and structuring of commercial agreements form a core part of the practice. This includes Master Service Agreements (MSAs), service agreements, vendor and supplier contracts, franchise agreements, joint venture agreements, shareholders' agreements, partnership deeds, non-disclosure agreements (NDAs) and other business arrangements.",
          "Documentation is prepared with a clear understanding of rights, obligations and risk allocation, ensuring that the terms remain workable and aligned with the intent of the parties.",
        ],
      },
      {
        heading: "Business Structuring & Advisory",
        paragraphs: [
          "Advisory is provided on structuring business arrangements, including partnerships, proprietorships and corporate entities. The focus remains on ensuring that the chosen structure aligns with operational requirements, regulatory considerations and long-term objectives.",
          "Where required, matters are addressed within the framework of the Companies Act, 2013 and allied commercial laws.",
        ],
      },
      {
        heading: "Commercial Disputes & Enforcement",
        paragraphs: [
          "Where commercial arrangements lead to disputes, assistance is provided in evaluating contractual positions and determining the appropriate course of action. This includes matters relating to breach of contract, recovery proceedings and enforcement of contractual rights.",
          "Support is extended in preparing claims, responses and related documentation, ensuring that the commercial position remains clearly articulated and protected.",
        ],
      },
      {
        heading: "Ongoing Legal Support",
        paragraphs: [
          "Businesses often require continued legal input beyond initial structuring. The firm provides ongoing advisory support in relation to contractual interpretation, risk identification and alignment with evolving regulatory requirements.",
          "This ensures continuity in handling commercial matters and reduces the likelihood of disputes arising from ambiguity or non-compliance.",
        ],
      },
      {
        heading: "Non-Profit & Institutional Structuring",
        paragraphs: [
          "Assistance is provided in the registration of societies, trusts and Section 8 companies, including the formation and establishment of charitable institutions, foundations and resident welfare associations (RWAs).",
          "Support extends to structuring, documentation and regulatory compliance applicable to such entities, ensuring that operations are aligned with applicable legal and statutory requirements from the outset.",
        ],
      },
    ],
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory Compliance",
    brief: "Ongoing support to meet statutory and regulatory requirements.",
    intro: [
      "Where commercial arrangements lead to disputes, assistance is provided in evaluating contractual positions and determining the appropriate course of action. This includes matters relating to breach of contract, recovery proceedings and enforcement of contractual rights.",
      "Support is extended in preparing claims, responses and related documentation, ensuring that the commercial position remains clearly articulated and protected.",
    ],
    sections: [
      {
        heading: "Regulatory Filings & Maintenance",
        paragraphs: [
          "Assistance is provided in relation to routine statutory filings, maintenance of records and adherence to procedural requirements under applicable laws. This includes compliance under frameworks such as the Companies Act, 2013 and other relevant regulatory regimes.",
          "The focus remains on ensuring timely and accurate filings, reducing the risk of non-compliance and associated consequences.",
        ],
      },
      {
        heading: "Compliance Structuring & Review",
        paragraphs: [
          "Compliance requirements are assessed in the context of the client's operations, with a view to identifying gaps and aligning processes with applicable regulations. Where required, existing structures are reviewed and refined to ensure consistency with statutory obligations.",
          "This allows for a more stable compliance position and reduces exposure to regulatory action.",
        ],
      },
      {
        heading: "Regulatory Approvals & Interface",
        paragraphs: [
          "Support is extended in obtaining approvals, registrations and permissions from relevant authorities. This includes preparation and submission of applications, as well as follow-up and coordination with regulatory bodies where required.",
          "The approach remains structured, ensuring that procedural requirements are met without delay.",
        ],
      },
      {
        heading: "Non-Compliance & Rectification",
        paragraphs: [
          "In situations involving lapses or regulatory issues, assistance is provided in evaluating the position and taking corrective steps. This includes handling notices, responses and rectification processes in accordance with applicable provisions.",
          "The objective remains to address issues in a measured manner and restore compliance without unnecessary escalation.",
        ],
      },
    ],
  },
  {
    slug: "tax-litigation-advisory",
    title: "Tax Litigation & Advisory",
    brief: "Advisory and representation in GST and Income Tax matters before authorities and forums.",
    intro: [
      "Taxation matters are handled with a detailed understanding of both statutory frameworks and procedural requirements. Jiya & Associates advises and represents clients across direct and indirect tax matters, ensuring that positions are structured with clarity and supported through each stage of proceedings.",
      "The practice is built on sustained experience before tax authorities and appellate forums, allowing matters to be addressed with familiarity and control.",
    ],
    sections: [
      {
        heading: "Income Tax Advisory & Compliance",
        paragraphs: [
          "Advisory is provided in relation to income tax matters, including return filing, computation issues, investigation matters and interpretation of applicable provisions under the Income Tax Act, 1961.",
          "Support is extended in aligning filings with statutory requirements, ensuring accuracy and reducing the likelihood of disputes or scrutiny.",
        ],
      },
      {
        heading: "GST Advisory & Compliance",
        paragraphs: [
          "Assistance is provided in relation to Goods and Services Tax (GST), including registration, return filing, classification issues and input tax credit matters under the Central Goods and Services Tax Act, 2017 and related laws.",
          "The focus remains on maintaining consistency in compliance and addressing practical issues that arise in implementation.",
        ],
      },
      {
        heading: "Tax Litigation & Representation",
        paragraphs: [
          "Representation is provided in income tax, GST and VAT proceedings, including matters involving investigations and enforcement actions by authorities such as the Directorate General of GST Intelligence (DGGI), Commissioners of Income Tax (Appeals) [CIT(A)], the Income Tax Appellate Tribunal (ITAT) and relevant GST authorities.",
          "This includes handling assessment proceedings, reassessment proceedings, appellate filings, hearings and related submissions. Matters are managed with close attention to statutory timelines, documentation requirements and procedural compliance, ensuring that the client's position is clearly presented at each stage.",
        ],
      },
      {
        heading: "Notice, Assessment & Disputes",
        paragraphs: [
          "Assistance is provided in responding to income tax notices, GST notices, scrutiny notices, show cause notices and reassessment notices issued under applicable tax laws.",
          "This includes drafting replies, preparing submissions, handling assessment proceedings and managing disputes arising from additions, disallowances or tax demands. This also includes handling matters arising from DGGI investigations, including summons, inquiries and related proceedings. The focus remains on structuring responses that are clear, well-supported and aligned with the applicable legal framework.",
        ],
      },
    ],
  },
  {
    slug: "intellectual-property-law",
    title: "Intellectual Property Law",
    brief: "Registration and protection of intellectual property rights, including trademarks.",
    intro: [
      "Intellectual property matters are handled with a focus on securing and protecting rights arising from creation, use and commercial identity. Jiya & Associates assists clients in safeguarding their intellectual assets through trademark registration in India, advisory and enforcement measures.",
      "The practice covers brand name registration, logo protection and related rights, ensuring that ownership and usage are clearly established and legally protected.",
    ],
    sections: [
      {
        heading: "Trademark Registration (Domestic & International)",
        paragraphs: [
          "At Jiya & Associates, assistance is provided in trademark search, filing and trademark registration in India under the Trade Marks Act, 1999, including brand name registration and logo registration.",
          "Support is also extended in securing international trademark registration through appropriate filing routes and coordination with foreign jurisdictions. The firm represents foreign businesses and individuals seeking trademark protection in India, ensuring compliance with local requirements and smooth processing before the Trade Marks Registry.",
          "Applications are handled with attention to trademark classification, documentation and procedural requirements, ensuring efficient processing across jurisdictions.",
        ],
      },
      {
        heading: "Objections, Examination & Opposition Proceedings",
        paragraphs: [
          "Support is extended in handling trademark objections, examination reports, show cause hearings and trademark opposition proceedings before the Trade Marks Registry.",
          "This includes drafting trademark objection replies, preparing submissions and representing clients in hearings, ensuring that the mark is properly presented and defended at each stage.",
        ],
      },
      {
        heading: "IP Advisory, Licensing & Brand Usage",
        paragraphs: [
          "Advisory is provided in relation to use, licensing and protection of intellectual property. This includes guidance on brand usage, licensing arrangements, risk of infringement and alignment with applicable legal provisions.",
          "The objective remains to ensure that intellectual property is used effectively while maintaining legal protection.",
        ],
      },
      {
        heading: "Trademark Infringement & Legal Action",
        paragraphs: [
          "In cases involving misuse or infringement, assistance is provided in evaluating the position and initiating appropriate legal action. This includes issuing trademark infringement notices, cease and desist notices and preparing for enforcement measures where required.",
          "The focus remains on protecting the client's rights while addressing disputes in a structured and effective manner.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-advisory",
    title: "Real Estate Advisory",
    brief: "Legal support in property transactions and title-related matters.",
    intro: [
      "Real estate matters are handled with a focus on clarity of title, transactional security and regulatory alignment. Jiya & Associates advises clients across property transactions, documentation and compliance, ensuring that risks are identified early and addressed before they develop into disputes.",
      "The practice is built on sustained experience in handling property-related matters, allowing transactions to be structured with confidence and continuity.",
    ],
    sections: [
      {
        heading: "Title Verification & Due Diligence",
        paragraphs: [
          "Assistance is provided in title verification and property due diligence, including inspection and examination of title documents, ownership history, encumbrances and land records.",
          "The objective is to establish a clear and marketable title, identify risks at the outset and ensure that transactions proceed on a secure legal foundation.",
        ],
      },
      {
        heading: "Drafting & Review of Property Documents",
        paragraphs: [
          "Support is extended in drafting and reviewing property-related documents, including Agreements to Sell, Sale Deeds, Lease Deeds, Conveyance Deeds, Buyer-Seller Agreements, Development Agreements and Collaboration Agreements.",
          "Each document is structured with clarity to ensure that rights, obligations and commercial terms are properly defined and enforceable.",
        ],
      },
      {
        heading: "RERA Compliance & Regulatory Filings",
        paragraphs: [
          "Assistance is provided in relation to compliance under the Real Estate (Regulation and Development) Act, 2016, including registration, disclosures and regulatory requirements applicable to real estate projects.",
          "The focus remains on aligning transactions and developments with applicable legal frameworks and procedural requirements.",
        ],
      },
      {
        heading: "Transaction Structuring & Advisory",
        paragraphs: [
          "Support is provided in structuring property transactions, including residential, commercial and development-based arrangements.",
          "This includes evaluating transaction models, identifying legal risks and ensuring that the structure aligns with both commercial intent and regulatory requirements.",
        ],
      },
      {
        heading: "Dispute Prevention & Risk Assessment",
        paragraphs: [
          "Real estate matters are approached with an emphasis on preventing disputes through careful planning, documentation and legal scrutiny.",
          "Potential risks are identified at an early stage, allowing corrective steps to be taken before positions become contentious.",
        ],
      },
    ],
  },
  {
    slug: "licensing-approvals",
    title: "Licensing & Approvals",
    brief: "Assistance with regulatory licenses, registrations and government approvals.",
    intro: [
      "Licensing and approvals are handled with a focus on procedural clarity and timely execution. Jiya & Associates assists businesses and individuals in obtaining registrations, permissions and statutory approvals required to commence and operate activities without disruption.",
      "The process is managed with a clear understanding of applicable requirements, documentation and authority-specific procedures, ensuring efficiency and continuity.",
    ],
    sections: [
      {
        heading: "Business Registrations & Setup Approvals",
        paragraphs: [
          "The firm provides assistance in obtaining foundational registrations required for setting up and operating a business. This includes GST Registration, Shops & Establishment Registration, MSME / Udyam Registration and Import Export Code (IEC) Registration.",
          "The objective is to ensure that businesses are established on a compliant footing from the outset.",
        ],
      },
      {
        heading: "Licensing & Operational Permissions",
        paragraphs: [
          "Support is extended in obtaining licenses and permissions required for day-to-day operations across sectors. This includes Trade Licenses, FSSAI Registration / License, Professional Tax Registration and Local Municipal Approvals.",
          "Applications are handled with attention to documentation, eligibility and procedural requirements to ensure timely approvals.",
        ],
      },
      {
        heading: "Regulatory Filings & Compliance Support",
        paragraphs: [
          "Assistance is provided in managing ongoing regulatory filings, renewals and modifications linked to licenses and registrations, ensuring that statutory requirements are met without interruption to business operations.",
          "The focus remains on maintaining continuity through timely filings, accurate documentation and alignment with applicable legal requirements.",
        ],
      },
      {
        heading: "Representations & Process Management",
        paragraphs: [
          "Support is extended in liaising with government departments and statutory authorities in relation to approvals, clarifications and procedural requirements. This includes responding to queries, addressing deficiencies and facilitating movement of applications across stages.",
          "Licensing matters are managed end-to-end, covering preparation, review and submission of documentation in line with authority-specific expectations. Emphasis is placed on accuracy, procedural alignment and timely execution to ensure smooth processing and timely approvals.",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

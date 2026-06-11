export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_CATEGORIES = [
  "About the Project",
  "Pricing & Financials",
  "Location & Lifestyle",
  "The Builder",
  "Registration & Process",
  "Investment",
] as const;

export const FAQ_DATA: FAQItem[] = [
  // About the Project (12)
  {
    category: "About the Project",
    question: "What is Cornerstone Towns Brampton?",
    answer:
      "Cornerstone Towns is a master-planned community of 129 freehold townhomes in Northwest Brampton by Primont Homes, located at Mississauga Road and Sandalwood Parkway West. The development features Back-to-Back and Traditional townhome designs starting from the $600s, with Primont's Futura smart home technology included as standard. The community is launching in Spring 2026.",
  },
  {
    category: "About the Project",
    question: "Who is the builder/developer of Cornerstone Towns?",
    answer:
      "Cornerstone Towns Brampton is developed by Primont Homes, a family-owned builder with over 50 years of experience and more than 5,000 homes built across the Greater Toronto Area. Primont is led by President Joe Montesano and Vice President Lore Attardo.",
  },
  {
    category: "About the Project",
    question: "Where is Cornerstone Towns located in Brampton?",
    answer:
      "Cornerstone Towns is located at Mississauga Road and Sandalwood Parkway West in Northwest Brampton, Ontario. The nearest address is near 10344 Mississauga Road, Brampton, ON L7A 4H9. The community sits in a designated urban growth corridor that has been planned for development since 2006.",
  },
  {
    category: "About the Project",
    question: "How many homes are in Phase 1 of Cornerstone?",
    answer:
      "Phase 1 of Cornerstone Towns includes 129 freehold townhome units. Future phases are planned to include condominiums and detached homes, with the full community expected to house over 18,000 people at buildout.",
  },
  {
    category: "About the Project",
    question: "What types of townhomes are available at Cornerstone?",
    answer:
      "Cornerstone Towns offers six layout options: 1 Bedroom + Den, 2 Bedroom, 2 Bedroom + Den, 3 Bedroom, Back-to-Back Towns, and Traditional Towns. Back-to-Back designs offer a more efficient layout at a lower price point, while Traditional towns feature classic freehold townhome configurations.",
  },
  {
    category: "About the Project",
    question: "What is the difference between Back-to-Back and Traditional townhomes?",
    answer:
      "Back-to-Back townhomes at Cornerstone feature an efficient modern design where units share a rear wall, resulting in a lower price entry point and reduced exterior maintenance. Traditional townhomes follow a classic freehold layout with individual rear yard access and a more conventional street-facing design. Both are freehold ownership.",
  },
  {
    category: "About the Project",
    question: "When does Cornerstone Towns launch?",
    answer:
      "Cornerstone Towns by Primont Homes is launching in Spring 2026. Early VIP registrants receive first access to floor plans, pricing, and lot selection before the public launch.",
  },
  {
    category: "About the Project",
    question: "What is the expected occupancy date for Cornerstone?",
    answer:
      "The expected occupancy date for Cornerstone Towns Phase 1 has not yet been announced (TBD). Occupancy timelines are typically confirmed closer to construction milestones. Register for VIP access to receive updates as they become available.",
  },
  {
    category: "About the Project",
    question: "Is Cornerstone freehold or condo?",
    answer:
      "Cornerstone Towns Phase 1 consists of freehold townhomes, meaning you own both the unit and the land it sits on. There are no monthly condo maintenance fees associated with freehold ownership, though there may be a nominal community association fee for shared amenities.",
  },
  {
    category: "About the Project",
    question: "What makes Cornerstone a master-planned community?",
    answer:
      "Cornerstone is designed as a multi-district master-planned community with distinct yet connected residential districts, integrated parkland, green corridors, trail networks, courtyards, and gathering spaces. At full buildout, the community is expected to house over 18,000 people across townhomes, future condominiums, and detached homes.",
  },
  {
    category: "About the Project",
    question: "What is the Futura smart home package at Cornerstone?",
    answer:
      "Futura is Primont Homes' proprietary smart home technology package included as standard in every Cornerstone townhome — not as an upgrade. It includes a smart thermostat, camera doorbell, motion-activated front door light, USB and USB-C charging outlets in the kitchen and every bedroom, and an EV charging-ready garage pre-wired with conduit.",
  },
  {
    category: "About the Project",
    question: "What future phases are planned for Cornerstone?",
    answer:
      "Beyond Phase 1's 129 freehold townhomes, future phases of Cornerstone are planned to include condominiums and detached homes. The full community buildout is designed to accommodate over 18,000 residents across multiple connected districts.",
  },
  // Pricing & Financials (11)
  {
    category: "Pricing & Financials",
    question: "What is the starting price for Cornerstone Towns?",
    answer:
      "Cornerstone Towns freehold townhomes start from the $600s. The estimated price range is $600,000 to $900,000+ depending on unit type, size, and lot selection. Back-to-Back designs offer the most affordable entry point.",
  },
  {
    category: "Pricing & Financials",
    question: "What is the deposit structure for Cornerstone Towns?",
    answer:
      "The exact deposit structure for Cornerstone Towns has not yet been announced (TBA). Primont Homes typically designs deposit schedules spread over several months for manageable entry. Early VIP registrants historically receive the most favorable deposit terms.",
  },
  {
    category: "Pricing & Financials",
    question: "Are there VIP incentives for early buyers at Cornerstone?",
    answer:
      "Yes. Early VIP registrants at Cornerstone Towns receive Platinum VIP pricing, first access to floor plans, first selection of units and lots, capped development charges, a free assignment clause (subject to builder approval), extended deposit structure, free lawyer review, and free mortgage arrangements.",
  },
  {
    category: "Pricing & Financials",
    question: "What are capped development charges at Cornerstone?",
    answer:
      "Capped development charges mean the builder limits the amount of development charges passed on to the buyer, providing better cost predictability at closing. VIP registrants at Cornerstone Towns receive capped development charges as an early buyer incentive.",
  },
  {
    category: "Pricing & Financials",
    question: "Is assignment allowed at Cornerstone Towns?",
    answer:
      "Yes. Cornerstone Towns offers a free assignment clause for early VIP registrants, subject to builder approval. This allows buyers to assign their purchase agreement to another buyer before closing, which can be valuable for investors.",
  },
  {
    category: "Pricing & Financials",
    question: "What are estimated maintenance fees at Cornerstone?",
    answer:
      "As freehold townhomes, Cornerstone units do not have condo-style maintenance fees. There may be a nominal community association fee for shared amenities like parks and trails, but this is typically significantly lower than condo maintenance fees. Exact amounts are TBA.",
  },
  {
    category: "Pricing & Financials",
    question: "How does pre-construction pricing compare to resale in Brampton?",
    answer:
      "Pre-construction townhomes in Brampton typically offer a price advantage of 10–20% compared to comparable resale units, plus the ability to customize finishes and benefit from appreciation during the construction period. Cornerstone Towns starting from the $600s positions it competitively against both pre-construction and resale alternatives.",
  },
  {
    category: "Pricing & Financials",
    question: "What financing options are available for Cornerstone?",
    answer:
      "Buyers can finance Cornerstone Towns through traditional mortgages, and VIP registrants receive free mortgage arrangement assistance. Pre-construction purchases typically require a mortgage pre-approval and deposits paid in stages before final closing financing.",
  },
  {
    category: "Pricing & Financials",
    question: "Is HST included in the Cornerstone purchase price?",
    answer:
      "For primary residence purchases, the purchase price typically includes the net HST after applicable rebates. Investment purchases may have different HST treatment. Consult with your lawyer and accountant for your specific situation.",
  },
  {
    category: "Pricing & Financials",
    question: "What are estimated closing costs for Cornerstone Towns?",
    answer:
      "Estimated closing costs for a Cornerstone townhome typically include land transfer tax, legal fees, title insurance, development charges (potentially capped for VIP buyers), and utility connection fees. Budget approximately 1.5–2.5% of the purchase price for closing costs.",
  },
  {
    category: "Pricing & Financials",
    question: "Can I get Platinum VIP pricing at Cornerstone?",
    answer:
      "Platinum VIP pricing is available to early registrants before the public launch. Register through this website to secure VIP access, which includes preferential pricing, first lot selection, and additional incentives not available at public launch.",
  },
  // Location & Lifestyle (11)
  {
    category: "Location & Lifestyle",
    question: "How far is Cornerstone from Mount Pleasant GO Station?",
    answer:
      "Cornerstone Towns is approximately a 5-minute drive from Mount Pleasant GO Station in Brampton. Mount Pleasant GO connects to Union Station in downtown Toronto in approximately 50 minutes, making it a convenient option for commuters.",
  },
  {
    category: "Location & Lifestyle",
    question: "Which highways are near Cornerstone Towns?",
    answer:
      "Cornerstone Towns offers quick access to Highway 407 via Mississauga Road, Highway 410 via Sandalwood Parkway, and Highway 401 via the 407 or 410 connectors. This provides excellent connectivity across the Greater Toronto Area.",
  },
  {
    category: "Location & Lifestyle",
    question: "What schools are close to Cornerstone Towns?",
    answer:
      "Nearby schools include Aylesbury Public School, Mount Pleasant Village Public School, Worthington Public School, Dolson Public School, St. Daniel Comboni C.S., St. Bonaventure (elementary), Jean Augustine Secondary School, and Sandalwood Heights Secondary School. Special programs nearby include French Immersion, IB, AP, Montessori, and SHSM.",
  },
  {
    category: "Location & Lifestyle",
    question: "Is Cornerstone near shopping and restaurants?",
    answer:
      "Yes. Cornerstone Towns is near big box retail along the Mississauga Road corridor, Shoppers World Brampton, Trinity Common Mall, and Square One Shopping Centre (accessible via Züm BRT in approximately 40 minutes). Grocery stores, pharmacies, banks, and diverse restaurants are within the neighbourhood.",
  },
  {
    category: "Location & Lifestyle",
    question: "How far is Pearson Airport from Cornerstone?",
    answer:
      "Toronto Pearson International Airport is approximately a 20-minute drive from Cornerstone Towns in Northwest Brampton, making it convenient for frequent travelers.",
  },
  {
    category: "Location & Lifestyle",
    question: "What parks are near Cornerstone Towns?",
    answer:
      "Nearby parks include Mount Pleasant Village Square, Fletcher's Parkette, Heart Lake Conservation Area (~15 min), Creditview Park, Angus Morrison Park, Buick Park and Skatepark, Moody Family Park, and Gage Park (~16 min). Cornerstone itself will feature integrated parkland, green corridors, and trail networks.",
  },
  {
    category: "Location & Lifestyle",
    question: "Is Cornerstone Towns walkable?",
    answer:
      "Cornerstone is designed with pedestrian-friendly streetscapes, connected trail networks, and gathering spaces within the community. While daily errands may require a short drive, the master-planned design emphasizes walkability within the community and connectivity to nearby amenities.",
  },
  {
    category: "Location & Lifestyle",
    question: "What is the commute time to Downtown Toronto from Cornerstone?",
    answer:
      "Downtown Toronto is approximately 35 minutes by car and 50 minutes via GO Transit from Mount Pleasant GO Station, which is about a 5-minute drive from Cornerstone Towns.",
  },
  {
    category: "Location & Lifestyle",
    question: "Is there public transit access near Cornerstone?",
    answer:
      "Yes. Cornerstone Towns has access to Mount Pleasant GO Station (~5 min drive), Züm BRT Route 502 along Hurontario/Main to Square One, multiple Brampton Transit bus routes, and the future Hurontario LRT corridor connecting Brampton to Mississauga.",
  },
  {
    category: "Location & Lifestyle",
    question: "What is the Hurontario LRT and how does it affect Cornerstone?",
    answer:
      "The Hurontario LRT is an 18 km rapid transit corridor connecting Brampton to Mississauga. While the nearest station is not immediately adjacent to Cornerstone, the LRT investment signals long-term transit infrastructure growth in the region, which historically supports property value appreciation in connected corridors.",
  },
  {
    category: "Location & Lifestyle",
    question: "What healthcare facilities are near Cornerstone?",
    answer:
      "Healthcare options near Cornerstone include walk-in clinics along the Sandalwood corridor, William Osler Health System's Peel Memorial Centre, Brampton Civic Hospital, and multiple pharmacies within walking distance.",
  },
  // The Builder (6)
  {
    category: "The Builder",
    question: "How long has Primont Homes been building?",
    answer:
      "Primont Homes is a family-owned builder founded in 1975, with over 50 years of experience constructing homes across the Greater Toronto Area. The company has built more than 5,000 homes and is led by the Montesano and Attardo families.",
  },
  {
    category: "The Builder",
    question: "What is Primont Homes' track record?",
    answer:
      "Primont Homes has built over 5,000 homes across the GTA over 50+ years. The company has received recognition from SCHBA, BILD, and OHBA. Their philosophy is to build every home as if it's their own and treat every customer like family.",
  },
  {
    category: "The Builder",
    question: "What other communities has Primont Homes built?",
    answer:
      "Notable Primont communities include Primont Place in Brampton, M3 Condos, Appellation in Welland, and Summit 2. Each reflects Primont's commitment to quality finishes, smart home technology, and community-oriented design.",
  },
  {
    category: "The Builder",
    question: "Does Primont include Tarion warranty?",
    answer:
      "Yes. All Primont Homes purchases include Tarion warranty protection, which is Ontario's mandatory new home warranty program covering deposit protection, construction defects, and delayed closing compensation.",
  },
  {
    category: "The Builder",
    question: "What is Primont's Futura technology?",
    answer:
      "Futura is Primont Homes' proprietary smart home package included standard in every home. It features a smart thermostat, camera doorbell, motion-activated front door light, USB/USB-C outlets, and EV charging-ready garage — features that most builders charge extra for.",
  },
  {
    category: "The Builder",
    question: "Who leads Primont Homes?",
    answer:
      "Primont Homes is led by President Joe Montesano, Vice President Lore Attardo, and Charles Attardo. The Montesano family's Italian heritage and multi-generational commitment to quality homebuilding define the company's culture.",
  },
  // Registration & Process (11)
  {
    category: "Registration & Process",
    question: "How do I register for Cornerstone Towns?",
    answer:
      "Register for VIP access to Cornerstone Towns by completing the registration form on this website. Provide your name, email, phone number, and preferences. You will be among the first to receive floor plans, pricing, and lot selection opportunities.",
  },
  {
    category: "Registration & Process",
    question: "What happens after I register for Cornerstone?",
    answer:
      "After registering, Fahad Javed will contact you to discuss your preferences, share available floor plans and pricing as they are released, and guide you through the VIP selection process. VIP registrants receive priority access before the public launch in Spring 2026.",
  },
  {
    category: "Registration & Process",
    question: "Do I need a realtor to buy at Cornerstone?",
    answer:
      "While you can purchase directly from the builder, working with a licensed real estate agent like Fahad Javed provides advocacy, market expertise, and negotiation support at no additional cost to you — the builder pays the agent's commission.",
  },
  {
    category: "Registration & Process",
    question: "Can I work with Fahad Javed as my agent for Cornerstone?",
    answer:
      "Yes. Fahad Javed is a licensed Sales Representative with Century 21 Property Zone Realty Inc. specializing in pre-construction homes in Brampton and the GTA. Contact Fahad at 647-898-1739 or fahad@fahadsold.com.",
  },
  {
    category: "Registration & Process",
    question: "What is the VIP/Platinum access process at Cornerstone?",
    answer:
      "VIP/Platinum access gives early registrants first access to floor plans, preferential pricing, first lot selection, capped development charges, free assignment, extended deposits, and complimentary legal and mortgage services. Register early to secure these benefits.",
  },
  {
    category: "Registration & Process",
    question: "When will floor plans be available for Cornerstone?",
    answer:
      "Detailed floor plans for Cornerstone Towns will be released to VIP registrants before the public launch in Spring 2026. Register now to be among the first to receive floor plans and pricing information.",
  },
  {
    category: "Registration & Process",
    question: "How do I book an appointment for Cornerstone Towns?",
    answer:
      "Book a consultation with Fahad Javed through the contact page or registration form. You can also call 647-898-1739 or email fahad@fahadsold.com to schedule a personalized discussion about Cornerstone Towns.",
  },
  {
    category: "Registration & Process",
    question: "Is there a model home or presentation centre for Cornerstone?",
    answer:
      "A model home or presentation centre for Cornerstone Towns has not yet been announced. VIP registrants will be notified when preview opportunities become available before the Spring 2026 launch.",
  },
  {
    category: "Registration & Process",
    question: "What documents do I need to purchase at Cornerstone?",
    answer:
      "To purchase at Cornerstone Towns, you will typically need government-issued ID, proof of income, mortgage pre-approval, and a void cheque for deposit payments. Fahad Javed can guide you through the complete documentation process.",
  },
  {
    category: "Registration & Process",
    question: "Can I buy at Cornerstone as an investor?",
    answer:
      "Yes. Investors can purchase at Cornerstone Towns. The free assignment clause (for VIP registrants), strong rental demand in Brampton, and pre-construction appreciation potential make it attractive for investment. Register and indicate your investor status on the form.",
  },
  {
    category: "Registration & Process",
    question: "Is there a deadline to register for VIP access?",
    answer:
      "There is no fixed deadline, but VIP benefits including Platinum pricing and first lot selection are available on a first-come, first-served basis. Registering early before the Spring 2026 public launch maximizes your advantages.",
  },
  // Investment (6)
  {
    category: "Investment",
    question: "Is Cornerstone Towns a good investment?",
    answer:
      "Cornerstone Towns offers strong investment fundamentals: entry pricing from the $600s, a master-planned community in Northwest Brampton's growth corridor, Futura smart home technology as standard, Primont's 50-year track record, and Brampton's projected population growth to 1 million by 2051. Pre-construction buying also offers deposit leverage and appreciation during the build period.",
  },
  {
    category: "Investment",
    question: "What is Brampton's population growth projection?",
    answer:
      "Brampton's current population exceeds 711,000 and is projected to reach 1 million by 2051. The city has committed to building 113,000 new homes by 2031, making it Canada's fastest-growing big city with significant housing demand.",
  },
  {
    category: "Investment",
    question: "How is the Brampton real estate market performing?",
    answer:
      "Brampton's real estate market has shown steady price appreciation, supported by population growth, transit infrastructure investment, and housing supply constraints. RE/MAX projects continued appreciation, and Northwest Brampton is identified as a key growth corridor.",
  },
  {
    category: "Investment",
    question: "What rental income can I expect from a Cornerstone townhome?",
    answer:
      "Brampton townhomes typically command rental rates of $2,500–$3,500+ per month depending on size and location. Cornerstone's proximity to transit, schools, and employment centers supports strong rental demand. Exact projections depend on unit type and market conditions at occupancy.",
  },
  {
    category: "Investment",
    question: "Why is Northwest Brampton a growth corridor?",
    answer:
      "Northwest Brampton has been designated for urban development since 2006 and benefits from Highway 407/410 access, Mount Pleasant GO Station, the Hurontario LRT corridor, major master-planned communities, and proximity to employment centers. It is one of the GTA's most active development zones.",
  },
  {
    category: "Investment",
    question: "What are the advantages of buying pre-construction at Cornerstone?",
    answer:
      "Pre-construction advantages include lower entry pricing, staged deposit payments, customization options, appreciation during construction, VIP incentives like capped development charges and free assignment, and Tarion warranty protection on a brand-new home.",
  },
];

export function getTopFaqs(count: number = 5) {
  return FAQ_DATA.slice(0, count);
}

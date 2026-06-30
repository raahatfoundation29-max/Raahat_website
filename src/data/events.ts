export interface EventStat {
  impact: string;
  funds: string;
  team: string;
}

// Added the new Financials interface
export interface Financials {
  totalCost: string;
  fundedBy: string;
  expenses: { item: string; amount: string }[];
}

export interface EventData {
  id: string;
  category: string;
  title: string;
  date: string;
  location: string;
  shortDesc: string;
  stats: EventStat;
  financials?: Financials; // Marked as optional in case some future events lack exact data
  challenge: string;
  action: string;
  impact: string;
  contributors: string;
  image: string;
}

export const events: EventData[] = [
  {
    "id": "winter-relief-2015",
    "category": "Winter Relief",
    "title": "Winter Relief Drive at Saraswati Ghat",
    "date": "December 29, 2015",
    "location": "Saraswati Ghat",
    "shortDesc": "Twelve dedicated community members pooled their personal resources to raise ₹9,000 to distribute 40 thick, high-quality winter blankets.",
    "stats": {
      "impact": "40 Individuals",
      "funds": "₹9,000 RESOURCES DEPLOYED",
      "team": "12 Volunteers"
    },
    "financials": {
      "totalCost": "₹9,000",
      "fundedBy": "Pooled by 12 core members",
      "expenses": [
        { "item": "40 Winter Blankets (₹225 each)", "amount": "₹9,000" },
        { "item": "Coffee & snacks for volunteers", "amount": "Covered personally" }
      ]
    },
    "challenge": "Winters in Prayagraj can be unforgiving, especially for those living or working outdoors near the riverbanks. As temperatures dropped, our core team recognized an immediate need to provide basic warmth and comfort to vulnerable individuals in our community.",
    "action": "Operating under the banner of the \"Friends Forever Group,\" twelve dedicated community members pooled their personal resources to raise ₹9,000. With these funds, we sourced 40 thick, high-quality winter blankets. Our team then gathered at Saraswati Ghat on a chilly December evening to personally distribute the blankets to those in need. The distribution drive was a true collective effort, fueled by grassroots contributions and the shared warmth of our volunteers over coffee and snacks.",
    "impact": "40 individuals were provided with heavy blankets to survive the harsh winter nights.\nDemonstrated the power of collective, community-driven micro-funding, with 12 local members stepping up to fully fund and execute the initiative.",
    "contributors": "Archana Baj, Nutan Hajela, Simi Agarwal, Pritpal, Bhawna, Garima, Shivani Goswamy, Sarita/Indu, Poonam Ray, Parul Garg, Sunanda, and Richa Rai.",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932696/event_1_m0ubp7.png"
  },
  {
    "id": "community-lunch-mamta-vidhyalay-2016",
    "category": "Community Meals",
    "title": "Community Lunch at Mamta Vidhyalay",
    "date": "January 14, 2016",
    "location": "Mamta Vidhyalay, Ashok Nagar",
    "shortDesc": "Our team organized and fully funded a special catered lunch at the school, turning a simple lunch into a meaningful community gathering.",
    "stats": {
      "impact": "80 Individuals",
      "funds": "₹3,650 RESOURCES DEPLOYED",
      "team": "10 Core Members"
    },
    "financials": {
      "totalCost": "₹3,650",
      "fundedBy": "10 members (₹300 each) + adjustments",
      "expenses": [
        { "item": "Main Caterer (Halwai)", "amount": "₹3,200" },
        { "item": "75 Fresh Gulab Jamuns", "amount": "₹450" }
      ]
    },
    "challenge": "Beyond fulfilling basic needs, fostering a sense of joy, belonging, and shared experience is a vital part of community building. We wanted to create a special, festive day for the students and hardworking staff at Mamta Vidhyalay in Ashok Nagar, breaking their everyday routine with a celebratory meal.",
    "action": "Our team organized and fully funded a special catered lunch at the school. Ten of our core members pooled their contributions to arrange a warm, multi-course traditional meal that included kachori, matar paneer, pulao, and fresh gulab jamuns. More importantly than just providing the food, our volunteers sat down to share the meal with the students and teachers, turning a simple lunch into a meaningful community gathering.",
    "impact": "80 individuals were served a complete, festive meal.\nBrought joy and a sense of community to 47 school children and 12 dedicated staff members, with our volunteers actively participating and bonding with the students.",
    "contributors": "Shalini Pradhan, Archana Bajpai, Bhawna, Nutan Hajela, Chitra, Shiwani Goswamy, Pritpal, Lakshmi Nigam, Parul Garg, and Poonam.",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932691/event_2_lv0be7.png"
  },
  {
    "id": "project-raahat-swaraj-bhawan-2015",
    "category": "Community Meals",
    "title": "Project Raahat: Community Dinner at Swaraj Bhawan",
    "date": "August 18, 2015",
    "location": "Girls Home, Children National Institute (Swaraj Bhawan)",
    "shortDesc": "Under our \"Project Raahat\" initiative, 14 dedicated community members came together to fund and prepare a special evening at the Girls Home.",
    "stats": {
      "impact": "71 Individuals",
      "funds": "₹7,100 RESOURCES DEPLOYED",
      "team": "14 Volunteers"
    },
    "financials": {
      "totalCost": "₹7,100",
      "fundedBy": "14 community members",
      "expenses": [
        { "item": "Fresh Groceries & Ration", "amount": "₹4,000" },
        { "item": "Hiring 3 Cooks + Conveyance", "amount": "₹1,600" },
        { "item": "Ice Cream for Children", "amount": "₹500" },
        { "item": "Gas", "amount": "₹400" },
        { "item": "Driver & Misc", "amount": "₹700" }
      ]
    },
    "challenge": "Children residing in institutional homes often miss out on the simple, comforting experience of a large, family-style dinner prepared fresh at home. We wanted to bring that exact experience to the girls living at the Children National Institute, ensuring they felt seen, cared for, and celebrated.",
    "action": "Under our \"Project Raahat\" initiative, 14 dedicated community members came together to fund a special evening at the Girls Home in Swaraj Bhawan. Rather than simply delivering pre-made food, our team purchased fresh groceries and brought in three local cooks to prepare a hot, wholesome meal on-site. The dinner featured paneer, mixed vegetables, pulao, and fresh chapatis, followed by an ice cream treat for the children. Twenty-five of our volunteers spent the evening at the institute, sitting down to share this freshly prepared meal alongside the girls and the hardworking staff.",
    "impact": "71 individuals shared a warm, freshly cooked communal dinner.\nBrought a family-style dining experience and meaningful interaction to 34 girls and 12 staff members.",
    "contributors": "Shiwani, Hajela, Archana, Vibha, Priti, Pooja, Chitra, Anushree, Meenakshi, Amita, Urvashi, Garima, Bhawna, and Ritesh.",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932699/event_3_xty6fb.png"
  },
  {
    "id": "community-satsang-2015",
    "category": "Spiritual Well-being",
    "title": "Community Satsang & Spiritual Gathering",
    "date": "September 12, 2015",
    "location": "Residence of a volunteer",
    "shortDesc": "Our team organized and hosted an \"Art of Living\" Satsang to create a space of tranquility for our community.",
    "stats": {
      "impact": "50 Attendees",
      "funds": "₹3,374 RESOURCES DEPLOYED",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹3,374",
      "fundedBy": "Core members via WhatsApp pool",
      "expenses": [
        { "item": "50 Custom Prashad Packets", "amount": "₹1,750" },
        { "item": "Tabla Player, Mic & Transport", "amount": "₹1,300" },
        { "item": "Beverages & Glasses", "amount": "₹224" },
        { "item": "Misc Expenses", "amount": "₹100" }
      ]
    },
    "challenge": "True community support goes beyond just physical necessities; it also involves nurturing mental and spiritual well-being. We recognized the need to create a peaceful, uplifting environment where members of our community could gather, pause from their daily routines, and find a sense of inner peace and collective harmony.",
    "action": "Our team organized and hosted an \"Art of Living\" Satsang at a volunteer’s residence. Coordinated and funded entirely through our core members' WhatsApp group, we transformed a home into a space of tranquility. To elevate the experience, we hired a local tabla player and set up a sound system for live spiritual music. Following the session, attendees shared in a communal spirit as we distributed 50 curated prashad packets—sourced from the local Net Ram Sweets—along with cool refreshments.",
    "impact": "Created a nurturing space for spiritual reflection and community bonding for 50 attendees.\nDemonstrated a holistic approach to community care by focusing on mental and spiritual wellness.\nSupported the local micro-economy by employing local musicians, transport help, and neighborhood food vendors.",
    "contributors": "Core Team & Volunteers",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932696/event_4_re5gne.png"
  },
  {
    "id": "childrens-day-swaraj-bhawan-2015",
    "category": "Youth Empowerment",
    "title": "Children's Day Celebration at Swaraj Bhawan",
    "date": "November 14, 2015",
    "location": "Swaraj Bhawan",
    "shortDesc": "Our team organized a comprehensive, high-energy Children's Day celebration packed with interactive activities and a massive feast.",
    "stats": {
      "impact": "70 Individuals",
      "funds": "₹8,124 RESOURCES DEPLOYED",
      "team": "25 Volunteers"
    },
    "financials": {
      "totalCost": "₹8,124",
      "fundedBy": "Core group & volunteers",
      "expenses": [
        { "item": "Fresh Groceries & Paneer", "amount": "₹3,788" },
        { "item": "Hiring 3 Cooks", "amount": "₹2,500" },
        { "item": "Personalized Gift Sets", "amount": "₹1,966" },
        { "item": "Gas & Conveyance", "amount": "₹500" },
        { "item": "Drawing Materials & Chocolates", "amount": "₹370" }
      ]
    },
    "challenge": "Children's Day is meant to be a day of pure joy, creativity, and making kids feel cherished. For children living in institutional care, creating these memorable, carefree moments requires a deliberate, loving community effort to ensure they get to experience the same magic and festive fun as any other child.",
    "action": "Our team organized a comprehensive, high-energy Children's Day celebration at the Swaraj Bhawan Girls Home. The day was packed with interactive activities, including a vibrant drawing competition and lively games of \"passing the parcel.\" To make the girls feel truly seen and special, we curated personalized gift sets—younger girls received winter skin care and hairbands, while the older girls were gifted lip gloss and hair accessories. We also brought in local cooks to prepare a massive, kid-approved feast of noodles, fried rice, manchurian, and samosas, allowing our volunteers to sit down and share the joy of the holiday with the kids.",
    "impact": "Brought a full day of games, creative expression, and festive dining to 34 girls and 10 dedicated staff members.\nFostered community connection by involving 25 volunteers and friends who actively participated in the games and shared the meal.\nEnsured every single child received thoughtful, age-appropriate gifts and competition prizes to celebrate their individuality.",
    "contributors": "Core Team & 25 Volunteers",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932704/event_5_vggnjp.png"
  },
  {
    "id": "makar-sankranti-food-2016",
    "category": "Food Distribution",
    "title": "Makar Sankranti Food Distribution",
    "date": "January 15, 2016",
    "location": "Prayagraj",
    "shortDesc": "Organized a targeted raw food distribution drive containing ration kits and traditional festive sweets.",
    "stats": {
      "impact": "50 Families",
      "funds": "₹1,750 RESOURCES DEPLOYED",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹1,750",
      "fundedBy": "Core Team",
      "expenses": [
        {
          "item": "50 packets of raw dal, rice, and til laddus",
          "amount": "₹1,750"
        }
      ]
    },
    "challenge": "Cultural festivals are a time of giving and community, but many marginalized families struggle to access the staple ingredients needed to partake in these traditions.",
    "action": "To celebrate Makar Sankranti, our team organized a targeted raw food distribution drive. We carefully packed and distributed 50 individual ration kits containing half a kilogram of raw dal and rice. To ensure the families could enjoy the traditional sweets of the festival, we also distributed 2 kilograms of freshly made til laddus alongside the ration kits.",
    "impact": "Provided essential raw food staples and traditional festive sweets to 50 local families.",
    "contributors": "Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932679/event_6_xpbnwd.png"
  },
  {
    "id": "winter-clothing-malawa-khurd-2016",
    "category": "Winter Relief",
    "title": "Winter Clothing Drive & Village Outreach",
    "date": "January 24, 2016",
    "location": "Malawa Khurd",
    "shortDesc": "Initiated a two-part outreach program distributing warm clothing and laying the groundwork for women's vocational training.",
    "stats": {
      "impact": "Multiple Neighborhoods",
      "funds": "Self-Funded",
      "team": "Core Team"
    },
    "challenge": "While immediate relief like winter clothing is essential for survival, creating long-term, sustainable change requires understanding the specific ambitions and roadblocks faced by rural communities.",
    "action": "Our team initiated a two-part outreach program. First, we collected and distributed 25 large bags of warm clothing to individuals living in local slum areas. Following the distribution, our core team traveled 13 kilometers to the village of Malawa Khurd. Rather than just dropping off supplies, we sat down with the villagers to listen to their daily challenges. During this discussion, the young women of the village expressed a strong desire to achieve financial independence by learning beautician and computer skills.",
    "impact": "Clothed dozens of individuals across multiple vulnerable neighborhoods.\nEstablished a direct line of communication with the Malawa Khurd community, laying the groundwork for our future women's vocational training initiatives.",
    "contributors": "Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932676/event_7_mfhy9v.png"
  },
  {
    "id": "empowering-women-vocational-2016",
    "category": "Vocational Training",
    "title": "Empowering Women Through Vocational Training",
    "date": "February 2016",
    "location": "Malawa Khurd",
    "shortDesc": "Allocated funds to purchase professional cosmetic supplies to begin hands-on beautician training for young women.",
    "stats": {
      "impact": "Empowerment Focused",
      "funds": "₹2,000 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹2,000",
      "fundedBy": "Core Team",
      "expenses": [
        {
          "item": "Professional cosmetic supplies",
          "amount": "₹2,000"
        }
      ]
    },
    "challenge": "Following our outreach in Malawa Khurd, we needed to turn the village girls' requests for skill development into tangible action, providing them with the tools necessary to start learning a trade.",
    "action": "Acting immediately on the community feedback received the previous month, we allocated funds to purchase professional cosmetic supplies. This initial investment provided the foundational materials required for the young women to begin hands-on beautician training, taking the first step toward self-reliance.",
    "impact": "Transitioned our support from immediate physical relief to long-term educational and vocational empowerment.",
    "contributors": "Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932673/event_8_vkc9i3.png"
  },
  {
    "id": "launching-malawa-khurd-vocational-2016",
    "category": "Vocational Training",
    "title": "Launching the Malawa Khurd Vocational Training Program",
    "date": "May 15, 2016",
    "location": "Malawa Khurd",
    "shortDesc": "Officially launched a sustained vocational training initiative fully equipped with professional infrastructure and an instructor.",
    "stats": {
      "impact": "Multiple Women",
      "funds": "₹10,330 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹10,330",
      "fundedBy": "Core Team",
      "expenses": [
        {
          "item": "Instructor fee (3 months)",
          "amount": "₹6,000"
        },
        {
          "item": "Comprehensive cosmetics kit",
          "amount": "₹2,000"
        },
        {
          "item": "Large mirror",
          "amount": "₹1,850"
        },
        {
          "item": "Celebratory sweets (1 kg)",
          "amount": "₹280"
        },
        {
          "item": "Conveyance",
          "amount": "₹200"
        }
      ]
    },
    "challenge": "Earlier in the year, the young women of Malawa Khurd expressed a strong desire to learn marketable skills to achieve financial independence. The challenge was transitioning from simply providing relief to establishing a structured, ongoing educational program within their village.",
    "action": "We officially launched our first sustained vocational training initiative. Our team traveled back to Malawa Khurd fully equipped with professional infrastructure, including training mirrors, specialized cosmetic kits, tools, and celebratory sweets to mark the occasion. To ensure the highest quality of education, we hired a professional instructor, Ranjana, and fully funded a three-month intensive beautician course for the local girls.",
    "impact": "Transformed a community request into a fully funded, physical training program.\nProvided dedicated professional instruction and high-quality learning materials to empower the young women of the village toward self-reliance.",
    "contributors": "Core Team, Ranjana",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932677/event_9_fstudz.png"
  },
  {
    "id": "vocational-progress-resupply-2016",
    "category": "Vocational Training",
    "title": "Vocational Training Progress & Resupply",
    "date": "June 29, 2016",
    "location": "Malawa Khurd",
    "shortDesc": "Evaluated the progress of our beautician students and replenished their professional training kits.",
    "stats": {
      "impact": "Sustained Ed.",
      "funds": "₹1,705 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹1,705",
      "fundedBy": "Team members Rekhaji and Rajeshwari",
      "expenses": [
        {
          "item": "Supplies procured by Rajeshwari",
          "amount": "₹1,300"
        },
        {
          "item": "Supplies procured by Rekhaji",
          "amount": "₹205"
        },
        {
          "item": "Conveyance",
          "amount": "₹200"
        }
      ]
    },
    "challenge": "Setting up a training program is only the first step; the true measure of a successful grassroots initiative is sustained engagement, monitoring, and providing continuous resources so the students do not lose momentum.",
    "action": "Six weeks into the vocational course, our core team returned to Malawa Khurd to evaluate the students' progress and the effectiveness of the curriculum. We were thrilled to find the girls exceptionally engaged, demonstrating great performance and an eagerness to master advanced skills. To support their growing expertise, our volunteers stepped up to procure and deliver fresh, specialized training supplies to ensure the classes could continue without interruption.",
    "impact": "Validated the success and high retention rate of the ongoing three-month beautician course.\nEnsured zero out-of-pocket costs for the students by continuously supplying necessary training materials.",
    "contributors": "Core Team, Rekhaji, Rajeshwari",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932685/event_10_d6hsst.png"
  },
  {
    "id": "clothing-drive-swaraj-bhawan-2016",
    "category": "Clothing Drive",
    "title": "11. Clothing Drive & Care Day at Swaraj Bhawan",
    "date": "August 7, 2016",
    "location": "Swaraj Bhawan",
    "shortDesc": "Organized a special care day distributing brand-new clothing and snacks to 36 girls at Swaraj Bhawan.",
    "stats": {
      "impact": "36 Girls",
      "funds": "₹4,970 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹4,970",
      "fundedBy": "Pooja and Team Members",
      "expenses": [
        {
          "item": "Brand new clothes for 36 girls",
          "amount": "₹4,970"
        },
        {
          "item": "Snacks (bananas, pastries, chocolates, samosas/Frooti)",
          "amount": "Contributed by volunteers"
        }
      ]
    },
    "challenge": "For children growing up in institutional care, receiving brand-new, personally fitted clothing—rather than just hand-me downs—is crucial for building self-esteem, dignity, and a sense of individuality.",
    "action": "Our team organized a special care day for the girls residing at the Swaraj Bhawan Children National Institute. We went to the local markets in Chowk to purchase 36 brand-new garments, ensuring every single girl received a new outfit. To turn the distribution into a true celebration, our volunteers coordinated a massive snack drive, bringing in fresh fruits, pastries, samosas, and beverages for everyone to enjoy together.",
    "impact": "Provided brand-new clothing to 36 girls, fostering confidence and joy.\nCreated a festive, community-driven event through the collective contribution of our volunteers.",
    "contributors": "Pooja, Shalini, Pooja Saras, Pritpal, Author",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932686/event_11_h1pcke.png"
  },
  {
    "id": "rapid-response-mumfordganj-flood-2016",
    "category": "Disaster Relief",
    "title": "12. Rapid Response: Mumfordganj Flood Relief",
    "date": "August 25, 2016",
    "location": "Mehboob Ali Inter College, Mumfordganj",
    "shortDesc": "Pivoted from planned projects to initiate an immediate emergency response for flood-affected families.",
    "stats": {
      "impact": "Displaced Families",
      "funds": "Central Funds",
      "team": "Multiple Volunteers"
    },
    "challenge": "When severe monsoon flooding displaced numerous local families, many were forced to seek emergency shelter at the Mehboob Ali Inter College in Mumfordganj. These families needed immediate, comforting sustenance while dealing with the crisis of losing their homes to the waters.",
    "action": "Pivoting from our planned long-term projects, our core team initiated an immediate emergency response. Utilizing our central funds, multiple volunteers rapidly sourced high quantities of fresh milk, tea, and biscuits. We traveled directly to the temporary shelters at the college to distribute hot beverages and quick-nutrition snacks to the flood-affected residents, offering immediate physical comfort during a highly stressful time.",
    "impact": "Demonstrated organizational agility by successfully executing a rapid-response emergency relief drive.\nProvided immediate, comforting sustenance to displaced families in a temporary shelter.",
    "contributors": "Vibha, Hajela Mam, Divya, Priti, Urvashi, Author",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932685/event_12_bnfkrd.png"
  },
  {
    "id": "expanding-vocational-naini-2016",
    "category": "Vocational Training",
    "title": "13. Expanding Vocational Training to Naini",
    "date": "December 13, 2016",
    "location": "Kuriya, Naini",
    "shortDesc": "Expanded operations to support a newly established beautician training course in Kuriya, Naini.",
    "stats": {
      "impact": "Multiple Women",
      "funds": "₹1,040 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹1,040",
      "fundedBy": "RAAHAT NGO",
      "expenses": [
        {
          "item": "Cosmetic supplies for students",
          "amount": "₹1,040"
        }
      ]
    },
    "challenge": "Following the high engagement and success of our vocational training initiative in Malawa Khurd, we recognized a pressing need to scale this empowerment model to reach young women in other underserved districts across the region.",
    "action": "After a strategic planning meeting, our team expanded operations to support a newly established beautician training course in Kuriya, Naini. We visited the location to observe the running classes, interact with the new students, and assess their material needs. To ensure the students could practice effectively without facing out-of-pocket expenses, our NGO purchased and donated a fresh inventory of professional cosmetic supplies to the training center.",
    "impact": "Successfully scaled our women's vocational empowerment model to a second geographic location.\nRemoved financial barriers to education by fully funding the necessary practical supplies for the new students.",
    "contributors": "Core Team, Archana Mam",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932682/event_13_txfnon.png"
  },
  {
    "id": "christmas-cheer-2016",
    "category": "Community Meals",
    "title": "14. Delivering Christmas Cheer Across the City",
    "date": "December 25, 2016",
    "location": "Kodhi Ashram & Roadside",
    "shortDesc": "Assembled and distributed 80 festive care packets to vulnerable children and ashram residents.",
    "stats": {
      "impact": "80 Children",
      "funds": "₹1,666 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹1,666",
      "fundedBy": "Core Team",
      "expenses": [
        {
          "item": "80 festive packets (biscuits, chips, chocolates, toffees, namkeen)",
          "amount": "₹1,666"
        }
      ]
    },
    "challenge": "The holiday season can often amplify the sense of exclusion for children living on the streets or in temporary shelters. We wanted to ensure that the joy and festivity of Christmas reached the city's most vulnerable youth.",
    "action": "Our volunteers came together to assemble 80 festive care packets filled with a mix of chocolates, chips, biscuits, and traditional snacks. We spent Christmas Day distributing these treats directly to children living alongside city roads, as well as to the residents of the Kodhi Ashram under Shastri Bridge. After the distribution, our core volunteers gathered for a shared meal, reinforcing the bonds of friendship that keep our NGO running.",
    "impact": "Brought unexpected holiday joy and treats to 80 vulnerable children.\nStrengthened our ongoing relationship with the Kodhi Ashram community.",
    "contributors": "Priti, Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932672/event_14_zljlrc.png"
  },
  {
    "id": "new-year-warmth-2017",
    "category": "Winter Relief",
    "title": "15. New Year Warmth & Bedding Distribution",
    "date": "January 1, 2017",
    "location": "Emanuel Children's Home & Jhunsi",
    "shortDesc": "Initiated a dual-impact drive to provide fresh bedding and winter clothing to vulnerable groups.",
    "stats": {
      "impact": "Dozens of Individuals",
      "funds": "₹5,625 RESOURCES DEPLOYED",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹5,625",
      "fundedBy": "Core Team",
      "expenses": [
        {
          "item": "26 brand-new bedsheets (13 pairs at ₹425/pair)",
          "amount": "₹5,525"
        },
        {
          "item": "Winter clothing distribution & misc",
          "amount": "₹100"
        }
      ]
    },
    "challenge": "Starting a new year should bring a sense of renewal and comfort. For institutionalized children and unsheltered families facing the peak of winter, basic warmth and clean, fresh bedding are absolute necessities.",
    "action": "We initiated a dual-impact drive to ring in the new year. First, our team traveled to the Emanuel Children's Home in Jhunsi, purchasing and distributing 26 brand-new bedsheets to improve the living conditions of the children there. Following this, we organized a winter clothing distribution for unsheltered families living along the roads in Jhunsi and made a secondary relief stop at the Kodhi Ashram.",
    "impact": "Provided fresh, clean bedding for the residents of the Emanuel Children's Home.\nDelivered essential winter clothing to dozens of unsheltered individuals to help them weather the January cold.",
    "contributors": "Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932678/event_15_orvkyo.png"
  },
  {
    "id": "sustaining-vocational-naini-2017",
    "category": "Vocational Training",
    "title": "16. Sustaining Vocational Empowerment in Naini",
    "date": "February 22, 2017",
    "location": "Kuriya, Naini",
    "shortDesc": "Evaluated our recently launched beautician training course and finalized funding for the instructor.",
    "stats": {
      "impact": "15 Young Women",
      "funds": "₹5,000 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹5,000",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "Instructor's three-month tenure compensation",
          "amount": "₹5,000"
        }
      ]
    },
    "challenge": "Initiating a skill-development program is just the beginning. To ensure these programs actually lead to financial independence, we must continuously monitor student engagement, verify attendance, and guarantee that our instructors are fully supported.",
    "action": "Our core leadership team conducted an on-site evaluation of our recently launched beautician training course in Kuriya, Naini. We met directly with the students and the instructor to assess the curriculum's effectiveness. We were incredibly proud to verify a strong, consistent enrollment and finalized the complete funding for the professional instructor's three-month tenure.",
    "impact": "Ensured the continuous, high-quality professional training of 15 young women.\nValidated the long-term sustainability of our expanded vocational empowerment model.",
    "contributors": "Core Team, Archana Mam",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932669/event_16_d1dk1p.png"
  },
  {
    "id": "marriage-assistance-2017",
    "category": "Community Relief",
    "title": "17. Empowering New Beginnings: Marriage Assistance Initiatives",
    "date": "April \u2013 May 2017",
    "location": "Prayagraj",
    "shortDesc": "Provided comprehensive household and bridal packages to young women from marginalized families.",
    "stats": {
      "impact": "3 Families",
      "funds": "₹15,100 Total",
      "team": "RAAHAT"
    },
    "financials": {
      "totalCost": "₹15,100",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "Comprehensive support package (₹5,000 cash, ₹5,200 utensils, ₹800 linens)",
          "amount": "₹11,000"
        },
        {
          "item": "Bridal hamper (saree, gown, cosmetics)",
          "amount": "₹2,100"
        },
        {
          "item": "Direct financial cash gift",
          "amount": "₹2,000"
        }
      ]
    },
    "challenge": "For low-income families, or those simultaneously facing severe medical crises, the financial burden of a daughter's wedding can be overwhelming. Without support, these milestones can lead to devastating, high-interest debt that affects the family for generations.",
    "action": "During the spring of 2017, RAAHAT stepped in to support three different young women as they transitioned into this new phase of their lives. We provided a comprehensive household package\u2014including ₹11,000 in cash, essential utensils, and linens\u2014to a young woman transitioning out of the Children National Institute (CNI). That same week, we gifted a complete bridal hamper (including a saree, gown, and cosmetics) to a young bride whose family was struggling with the severe financial strain of her father's cancer diagnosis. The following month, we provided direct financial backing for the wedding of a hardworking local school staff member's daughter.",
    "impact": "Alleviated severe financial stress for three marginalized families.\nEnsured these young women could celebrate their milestones with dignity, community support, and the essential household items needed to start their new lives.",
    "contributors": "RAAHAT",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932676/event_17_llpbm9.png"
  },
  {
    "id": "emergency-medical-swaroop-2017",
    "category": "Medical Aid",
    "title": "18. Emergency Medical Relief at Swaroop Rani Hospital",
    "date": "June 23, 2017",
    "location": "Swaroop Rani Hospital",
    "shortDesc": "Disbursed an immediate emergency medical grant for a patient from the Bundelkhand region.",
    "stats": {
      "impact": "1 Patient",
      "funds": "₹5,000 Total",
      "team": "Core Team"
    },
    "financials": {
      "totalCost": "₹5,000",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "Medical grant for hospital treatment",
          "amount": "₹5,000"
        }
      ]
    },
    "challenge": "Critical illness can strike anyone, but for those living in extreme poverty, accessing life-saving hospital treatment is often an impossibility without immediate outside intervention.",
    "action": "Upon learning about the critical situation of Mr. Feran\u2014a patient from the Bundelkhand region admitted to Swaroop Rani Hospital who had absolutely no means to afford his care\u2014our core team authorized an immediate emergency medical grant. We disbursed ₹5,000 directly toward his hospital treatment to ensure he was not denied care due to his financial circumstances.",
    "impact": "Provided rapid-response financial relief to an impoverished patient, ensuring he received necessary, dignified medical treatment during a crisis.",
    "contributors": "Core Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932673/event_18_pxx5op.png"
  },
  {
    "id": "educational-empowerment-emanuel-2017",
    "category": "Youth Empowerment",
    "title": "19. Educational Empowerment at Emanuel Children's Home",
    "date": "June \u2013 July 2017",
    "location": "Emanuel Children's Home, Jhusi",
    "shortDesc": "Provided an educational grant to fund back-to-school essentials for children at the home.",
    "stats": {
      "impact": "Multiple Children",
      "funds": "₹8,000 Total",
      "team": "RAAHAT Team"
    },
    "financials": {
      "totalCost": "₹8,000",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "School uniforms, stationery, and school bags",
          "amount": "₹8,000"
        }
      ]
    },
    "challenge": "Access to proper educational supplies\u2014uniforms, sturdy shoes, and fresh stationery\u2014is vital for a child's confidence and academic success. For institutional homes managing multiple children, outfitting everyone for the new school term is a massive financial hurdle.",
    "action": "In late June, RAAHAT provided an ₹8,000 educational grant to the Emanuel Children's Home in Jhusi to fund back-to-school essentials. Because accountability and personal connection are core to our mission, our team returned to the home in late July. We didn't just collect the receipts; we spent time with the children, witnessing firsthand the joy of them receiving their new uniforms, books, bags, and shoes, while also ensuring the home was stocked with fresh rations.",
    "impact": "Fully outfitted multiple children with complete school uniforms and educational materials.\nDemonstrated strict financial transparency and accountability through follow-up visits and receipt tracking.",
    "contributors": "RAAHAT Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932683/event_19_vxxe2s.png"
  },
  {
    "id": "project-warmth-khataura-2017",
    "category": "Winter Relief",
    "title": "20. \"Project Warmth\" Reaches Khataura, Banda",
    "date": "December 3, 2017",
    "location": "Sahodia Devi Inter College, Khataura, Banda",
    "shortDesc": "Procured and delivered 100 high-quality winter sweaters to school children in a rural area.",
    "stats": {
      "impact": "100 Children",
      "funds": "₹13,600 Total",
      "team": "RAAHAT Team"
    },
    "financials": {
      "totalCost": "₹13,600",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "100 high-quality sweaters at ₹130 each",
          "amount": "₹13,000"
        },
        {
          "item": "Driver transport fee (out-of-district)",
          "amount": "₹600"
        }
      ]
    },
    "challenge": "As winter sets in, children in rural and semi-urban schools are particularly vulnerable to the plunging temperatures. Without adequate winter wear, their health and ability to attend school comfortably are severely compromised.",
    "action": "Expanding our relief efforts beyond our immediate local districts, our team organized a major winter clothing drive targeting the Sahodia Devi Inter College in Khataura, Banda. We procured 100 brand-new, thick winter sweaters and arranged private transport to deliver the garments directly to the school.",
    "impact": "Ensured 100 school children received brand-new winter sweaters to protect them through the harsh winter months.\nExpanded RAAHAT's geographical footprint, proving that our community's compassion has no strict borders.",
    "contributors": "RAAHAT Team",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932671/event_20_gj4kp1.png"
  },
  {
    "id": "covid19-emergency-relief-2020",
    "category": "Disaster Relief",
    "title": "21. COVID-19 Emergency Relief: Health & Food Security",
    "date": "July \u2013 October 2020",
    "location": "Local communities",
    "shortDesc": "Pivoted operations to distribute masks and emergency dry ration kits during the pandemic.",
    "stats": {
      "impact": "130 Individuals, 80 Families",
      "funds": "₹10,250 RESOURCES DEPLOYED",
      "team": "RAAHAT"
    },
    "financials": {
      "totalCost": "₹10,250",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "130 masks at ₹25 each",
          "amount": "₹3,250"
        },
        {
          "item": "80 essential dry ration kits",
          "amount": "₹7,000"
        }
      ]
    },
    "challenge": "The 2020 pandemic brought unprecedented health risks and severe economic instability to our local communities. Daily wage earners lost their livelihoods overnight, creating an urgent need for both protective gear and basic food security.",
    "action": "RAAHAT immediately pivoted operations to address the crisis. In July, we initiated a localized health drive, distributing 130 reusable safety masks to vulnerable individuals to help curb the spread of the virus. As the economic impact deepened into the autumn, we shifted focus to combatting hunger. In October, our team assembled and distributed 80 dry ration survival kits\u2014each containing essential staples of rice and high-protein arhar dal\u2014directly to families struggling to afford basic groceries.",
    "impact": "Provided critical respiratory protection to 130 individuals during the height of the health crisis.\nSecured emergency food staples for 80 local families facing severe pandemic-related financial hardship.",
    "contributors": "RAAHAT",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932682/event_21_ia5cai.png"
  },
  {
    "id": "diwali-2020",
    "category": "Community Support",
    "title": "22. Bringing Light During Dark Times: Diwali 2020",
    "date": "November 2020",
    "location": "Prayagraj",
    "shortDesc": "Distributed 50 festive packages containing sweets, oil, and traditional diyas.",
    "stats": {
      "impact": "50 Households",
      "funds": "₹8,150 RESOURCES DEPLOYED",
      "team": "Volunteers"
    },
    "financials": {
      "totalCost": "₹8,150",
      "fundedBy": "RAAHAT",
      "expenses": [
        {
          "item": "50 festive packages (sweets, mustard oil, diyas/batti)",
          "amount": "₹8,150"
        }
      ]
    },
    "challenge": "The financial devastation of 2020 meant many families could not afford basic festival necessities. We wanted to ensure that the economic hardship of the pandemic did not completely extinguish the joy and spirit of the Diwali season for our community.",
    "action": "To lift community spirits, we organized a special Diwali distribution drive. Our volunteers assembled 50 festive care packages designed to bring both practical help and holiday joy. Each package included a full liter of cooking mustard oil, an assortment of festive sweets, and traditional diyas and batti.",
    "impact": "Brought essential cooking supplies and the dignity of festive celebration to 50 households.",
    "contributors": "RAAHAT Volunteers",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932686/event_22_z2f2as.png"
  },
  {
    "id": "grassroots-impact-2021",
    "category": "Impact Grants",
    "title": "23. 100% Grassroots. 100% Impact.",
    "date": "2021 - 2022",
    "location": "Prayagraj Region",
    "shortDesc": "Executed several high-impact, individual grants for education, surgical aid, and community worker support.",
    "stats": {
      "impact": "Targeted Grants",
      "funds": "₹26,000 RESOURCES DEPLOYED",
      "team": "12 Core Members"
    },
    "financials": {
      "totalCost": "₹26,000+",
      "fundedBy": "12 core community members",
      "expenses": [
        {
          "item": "Educational Sponsorship",
          "amount": "₹6,000"
        },
        {
          "item": "Critical Surgical Aid",
          "amount": "₹10,000"
        },
        {
          "item": "Community Worker Support",
          "amount": "₹10,000"
        }
      ]
    },
    "challenge": "Many organizations struggle to maintain momentum after their founding years. For RAAHAT, the challenge was sustaining our critical relief work through the economic aftermath of the pandemic, relying entirely on the out-of-pocket dedication of our core members.",
    "action": "Between 2018 and 2022, our operations were sustained by a steadfast group of 12 core community members. Through consistent monthly contributions, this team ensured that our emergency fund never ran dry. Because we operate with zero administrative overhead, every single rupee collected was deployed directly into the community.\n\nDuring the 2021-2022 financial period, these pooled grassroots funds allowed us to execute several high-impact, individual grants:\n\n• Educational Sponsorship: Disbursed a ₹6,000 direct educational grant to fully sponsor the continued schooling of a child at SRPS, ensuring their education was not disrupted by financial hardship.\n\n• Critical Surgical Aid: Provided a ₹10,000 medical grant to fund a necessary plastic surgery procedure for a young patient named Ananya, removing the financial barrier to her recovery.\n\n• Community Worker Support: Granted ₹10,000 in direct financial relief to a local community worker and driver (Suresh) to support his family during a period of acute need.",
    "impact": "Proved the long-term sustainability of a 100% volunteer-funded micro-charity.\nTransitioned from generalized relief drives to providing targeted, high-value grants that alter the course of individual lives.",
    "contributors": "12 Core Community Members",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932692/event_23_ehay8m.png"
  },
  {
    "id": "sustained-dedication-2022",
    "category": "Impact Grants",
    "title": "24. Sustained Dedication: 2022-2023 Impact Grants",
    "date": "2022 - 2023",
    "location": "Prayagraj Region",
    "shortDesc": "Disbursed several critical interventions including winter relief, medical support, and marriage assistance.",
    "stats": {
      "impact": "Targeted Relief",
      "funds": "₹25,300 RESOURCES DEPLOYED",
      "team": "13 Volunteers"
    },
    "financials": {
      "totalCost": "₹25,100+",
      "fundedBy": "13 founding volunteers",
      "expenses": [
        {
          "item": "Winter Relief (Blanket Distribution)",
          "amount": "₹15,000"
        },
        {
          "item": "Emergency Medical Aid",
          "amount": "₹5,000"
        },
        {
          "item": "Marriage Assistance",
          "amount": "₹5,100"
        }
      ]
    },
    "challenge": "As the immediate crises of the pandemic faded, the chronic challenges of poverty, medical debt, and harsh winters remained. The challenge for RAAHAT was to maintain our funding momentum to address these ongoing, everyday emergencies that rarely make the news.",
    "action": "Throughout the 2022-2023 financial year, our core group of 13 founding volunteers continued their steadfast monthly support, ensuring our community relief fund remained active and ready to deploy. Because of this uninterrupted, 100% grassroots funding, we were able to immediately green-light several critical interventions:\n\n• Mass Winter Relief: Deployed a major ₹15,000 targeted fund entirely toward procuring and distributing thick winter blankets to unsheltered individuals during the peak of the cold season.\n\n• Emergency Medical Support: Authorized a rapid ₹5,000 medical grant to cover the urgent hospital treatment costs for a local domestic worker's sister, preventing predatory medical debt.\n\n• Marriage Hardship Grant: Provided a ₹5,100 direct financial contribution to assist a vulnerable family with their daughter's wedding expenses.\n\n• Vocational Equipment: Procured a second-hand machine to continue our long-standing commitment to women's vocational training and financial independence.",
    "impact": "Proved the enduring power of community micro-funding, maintaining zero administrative overhead for another consecutive year.\nSuccessfully balanced large-scale seasonal relief (blankets) with highly personalized, single-family crisis interventions (medical and marriage aid).",
    "contributors": "13 Founding Volunteers",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932696/event_24_kk7nk4.png"
  },
  {
    "id": "eldercare-accessibility-2023",
    "category": "Eldercare",
    "title": "25. A New Focus on Eldercare & Accessibility (2023-2024)",
    "date": "2023 - 2024",
    "location": "Prayagraj Region",
    "shortDesc": "Expanded core mission to formally include comprehensive support for abandoned and destitute elderly individuals.",
    "stats": {
      "impact": "Elderly & Youth",
      "funds": "₹38,300 RESOURCES DEPLOYED",
      "team": "18 Volunteers"
    },
    "financials": {
      "totalCost": "₹43,580",
      "fundedBy": "~18 dedicated volunteers",
      "expenses": [
        {
          "item": "Educational Support",
          "amount": "₹6,500"
        },
        {
          "item": "Disabled Youth Support (Infrastructure & Snacks)",
          "amount": "₹5,545"
        },
        {
          "item": "Eldercare (TV & Special Dinner)",
          "amount": "₹23,298"
        },
        {
          "item": "Eldercare (Wheelchair & Groceries)",
          "amount": "₹8,237"
        }
      ]
    },
    "challenge": "Elderly individuals living in institutional care often suffer from severe isolation, a lack of mobility aids, and underfunded daily nutrition. We recognized a critical need to step in and provide not just basic survival relief, but tangible upgrades to their daily quality of life and dignity.",
    "action": "Backed by our largest organic funding year yet\u2014with our core volunteer base raising over ₹38,000\u2014RAAHAT launched a series of high-impact initiatives focusing on accessibility and eldercare:\n\n• Infrastructure for Disabled Youth (August 2023): We partnered with the Bhavini Welfare Society, a center for disabled children. To improve their daily learning environment, we donated essential furniture (chairs), fresh stationery, and hosted a snack distribution for the kids.\n\n• Entertainment & Joy for Seniors (October 2023): Mental stimulation is vital for the elderly. We purchased and professionally installed a brand-new television at the LIC Colony old age home, celebrating the upgrade by hosting a special dinner for all the residents.\n\n• Mobility & Independence (January 2024): We delivered a brand-new, high-quality wheelchair alongside fresh groceries to the Dhanraj Oldage Home in Daraganj, instantly restoring mobility for a senior in need.\n\n• Sustained Daily Nutrition (March 2024): Moving beyond one-off donations, we established a continuous supply chain for a local old age home. By partnering directly with a neighborhood dairy vendor, we fully funded and guaranteed a daily delivery of fresh milk for the residents, ensuring sustained nutritional support.",
    "impact": "Significantly upgraded the physical infrastructure and entertainment options across multiple care homes in the city.\nEstablished our first recurring, vendor-partnered daily nutrition program.\nMaintained our 100% grassroots funding model, utilizing zero administrative overhead to successfully deploy life-changing grants\u2014including a ₹6,500 educational scholarship\u2014straight into the community.",
    "contributors": "~18 Dedicated Volunteers",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932692/event_25_hhocwn.png"
  },
  {
    "id": "fulfilling-promises-2024",
    "category": "Sustained Impact",
    "title": "26. Fulfilling Promises & Record Community Trust (2024-2025)",
    "date": "2024 - 2025",
    "location": "Prayagraj Region",
    "shortDesc": "We flawlessly executed our daily milk initiative for 12 consecutive months.",
    "stats": {
      "impact": "Sustained Daily",
      "funds": "₹47,800 RESOURCES DEPLOYED",
      "team": "20 Volunteers"
    },
    "financials": {
      "totalCost": "₹47,800",
      "fundedBy": "~20 regular contributors",
      "expenses": [
        {
          "item": "Uninterrupted Eldercare Nutrition (₹1,550/mo)",
          "amount": "~₹18,600"
        },
        {
          "item": "Eldercare Facility Support (Groceries & Repairs)",
          "amount": "₹8,894"
        },
        {
          "item": "Educational Support",
          "amount": "₹5,000"
        },
        {
          "item": "Support for Disabled Youth",
          "amount": "₹6,300"
        }
      ]
    },
    "challenge": "Starting a charitable initiative is deeply rewarding, but maintaining it month after month requires unyielding discipline. Our challenge for the 2024-2025 operating year was to strictly uphold the daily, recurring commitments we made to our community's elderly residents, ensuring they never experienced a lapse in support.",
    "action": "Fueled by our largest organic fundraising year to date\u2014with our expanding core team raising nearly ₹48,000\u2014we successfully transitioned several of our programs from periodic relief to permanent support structures:\n\n• 365 Days of Nutrition: We flawlessly executed our daily milk initiative. For 12 consecutive months, RAAHAT fully funded the daily delivery of fresh milk to a local old age home, backed by regular bulk grocery deliveries of essential lentils, fruits, and dry goods.\n\n• Facility Upgrades: Funded immediate infrastructure repairs, including supplying cement for maintenance at the Dhanraj Old Age Home.\n\n• Continued Educational Grants: Authorized a ₹5,000 direct educational grant to cover a young female student's tuition fees, ensuring her continued presence in the classroom.\n\n• Empowering Disabled Youth: Deepened our relationship with the Bhavini Welfare Society by supplying over ₹6,000 worth of specialized craft and vocational materials to support the children's daily learning and physical therapy activities.",
    "impact": "Proved the absolute reliability of our 100% grassroots funding model by successfully sustaining a daily, year-round operational commitment.\nClosed our first decade of operation with our highest-ever community collection, maintaining zero administrative overhead and a growing network of dedicated volunteers.",
    "contributors": "~20 Regular Contributors",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932696/event_26_le2ird.png"
  },
  {
    "id": "decade-trust-record-impact-2025",
    "category": "Sustained Impact",
    "title": "27. A Decade of Trust & Record Community Impact (2025-2026)",
    "date": "2025 - 2026",
    "location": "Prayagraj Region",
    "shortDesc": "Executed an unbroken chain of targeted relief initiatives fueled entirely by our base of 20 core members.",
    "stats": {
      "impact": "Highest Scale",
      "funds": "₹66,950 Raised",
      "team": "20 Core Members"
    },
    "financials": {
      "totalCost": "₹66,950",
      "fundedBy": "20 dedicated members",
      "expenses": [
        {
          "item": "Uninterrupted Eldercare (Year 2)",
          "amount": "~₹18,600"
        },
        {
          "item": "Major Winter Relief",
          "amount": "₹29,400"
        },
        {
          "item": "Eldercare Nutrition & Wellness",
          "amount": "₹12,565"
        },
        {
          "item": "Medical & Educational Grants",
          "amount": "₹16,000"
        },
        {
          "item": "Therapy & Environment for Disabled Youth",
          "amount": "₹2,732"
        }
      ]
    },
    "challenge": "As grassroots organizations age, maintaining volunteer engagement and funding can be difficult. For RAAHAT, the challenge was not just sustaining our existing commitments, but scaling our operations to meet the growing needs of our community\u2014from massive seasonal relief to the holistic well-being of our beneficiaries.",
    "action": "Thanks to an expanding base of 20 dedicated core members, RAAHAT achieved its highest-ever annual collection of nearly ₹67,000. Operating entirely on this volunteer-driven fund with zero administrative overhead, we executed our most ambitious year of giving to date:\n\n• The 365 Promise: For the second consecutive year, we flawlessly upheld our daily nutrition promise, fully funding and ensuring the uninterrupted daily delivery of fresh milk to local old age home residents.\n\n• Massive Winter Relief Drive: We deployed an unprecedented ₹29,400 fund entirely toward a large-scale winter blanket distribution, protecting vulnerable populations from the severe cold.\n\n• Holistic Eldercare: Beyond physical sustenance\u2014including over ₹8,000 in bulk grocery drops\u2014we focused on the spiritual and emotional health of institutionalized seniors by organizing and fully funding a traditional Hawan Pooja and festive meal at the old age home.\n\n• Emergency Medical & Educational Grants: We acted rapidly to disburse a ₹10,000 emergency medical grant for a local student's critical treatment, while separately providing a ₹6,000 scholarship to ensure another student's education remained uninterrupted.\n\n• Greening the Bhavini Welfare Society: We concluded the financial year with a special visit to the Bhavini center for disabled youth. Alongside donating art supplies and treats, our volunteers led a hands-on greening initiative, planting a dozen new flower pots to beautify the children's daily learning environment.",
    "impact": "Executed the largest single-event relief drive in the organization's history.\nDemonstrated absolute operational reliability by maintaining daily eldercare supply chains for 24 consecutive months.\nExpanded our focus to include environmental beautification and the holistic, spiritual well-being of our beneficiaries.",
    "contributors": "20 Dedicated Core Members",
    "image": "https://res.cloudinary.com/dri0jvjdw/image/upload/v1778932691/event_27_waftzl.png"
  }
];
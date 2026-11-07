/* =====================================================================
   MMGS 2003 Set Old Students Association - site data
   Edit this file to update news, events, settings, gallery captions and
   member profiles. No other file needs to change for routine updates.
   ===================================================================== */

window.MMGS_CONFIG = {
  /* MEMBER SIGN-UP BACKEND
     Paste the Web app URL of your Google Apps Script here (see README.md).
     While this is empty, sign-ups are saved only in the visitor's own browser. */
  signupEndpoint: "",

  /* WhatsApp number (digits only, with country code) that receives details
     when online sign-up is unavailable. */
  whatsappNumber: "2347038245976"
};

/* =====================================================================
   NEWS AND EVENTS
   ---------------------------------------------------------------------
   type:  "event" (appears under Upcoming events) or "news" (Latest news)
   To give an event a real date, add  date: "2027-04-17"  and optionally
   time: "18:00", endTime: "21:00". The site then shows a live countdown and
   "Add to calendar" buttons. When the date passes, the event moves to
   Latest news automatically as an event recap.
   Events without a date show dateText instead (for example "December 2026").
   image: the number of a gallery photo (see GALLERY below) or a full path.
   link:  { label: "Join the set", href: "#join" }
   Newest news goes first.
   ===================================================================== */
window.MMGS_NEWS = [
  {
    type: "event", featured: true,
    title: "Reunion and Fundraising Dinner",
    dateText: "December 2026", venue: "To be announced", tag: "Flagship programme",
    summary: "Our flagship programme brings members, friends, partners and donors together to strengthen bonds and to raise funds for scholarships, learning materials and school facilities. Fundraising target: ₦20 million.",
    image: 85,
    link: { label: "Support the dinner", href: "#support" }
  },
  {
    type: "event",
    title: "Quarter-wise engagement",
    dateText: "Every quarter", venue: "Online and in person", tag: "Members",
    summary: "Structured activities every quarter to sustain momentum, including welfare and empowerment initiatives for members.",
    link: { label: "Join the directory", href: "#join" }
  },
  {
    type: "event",
    title: "“Bring Back Our Classmates” drive",
    dateText: "Ongoing", venue: "Everywhere our classmates are", tag: "Reconnection",
    summary: "Help us reconnect every member of the 97/03 set. See the list of members yet to be reconnected and tell a classmate to join.",
    link: { label: "See who is missing", href: "#missing-members" }
  },
  {
    type: "event",
    title: "Mentorship seminars and motivational talks",
    dateText: "Annual programme", venue: "MMGS and other schools", tag: "Students",
    summary: "Alumni professionals serve as mentors and speakers for MMGS students and other young people.",
    link: { label: "Volunteer to serve", href: "#join" }
  },
  { type: "news", title: "Members return to Iju-Odo for the 2026 reunion", dateText: "2026", place: "Iju-Odo", tag: "Reunion", image: 85,
    summary: "Members of the 2003 set came together at Iju-Odo for the 2026 reunion.", link: { label: "See the photos", href: "#gallery", photo: 85 } },
  { type: "news", title: "2026 Action Plan: a foundation year", dateText: "2026", place: "General Secretary", tag: "Action plan", image: 54,
    summary: "The plan covers branding, fundraising, programmes, project budgeting, member reconnection and governance. Together we rise, together we win.", link: { label: "Read the plan", href: "#plan" } },
  { type: "news", title: "Financial report update", dateText: "2026", place: "Treasury", tag: "Finance", image: 85,
    summary: "Total amount now ₦3,836,810. See the full report from the association's financial update.", link: { label: "Open the report", href: "#financial-report" } },
  { type: "news", title: "Members at the 70th anniversary of MMGS", dateText: "", place: "Iju-Odo", tag: "School", image: 69,
    summary: "Members of the set joined the school community at Iju-Odo to mark 70 years of Manuwa Memorial Grammar School.", link: { label: "See the photos", href: "#gallery", photo: 69 } },
  { type: "news", title: "Members inspect dilapidated classrooms at MMGS", dateText: "", place: "Iju-Odo", tag: "School projects", image: 64,
    summary: "Members inspected some dilapidated school facilities and classrooms. Renovation is part of our infrastructural programme.", link: { label: "See Strategic Pillars", href: "#pillars" } },
  { type: "news", title: "With Prof Aworetan, our teacher", dateText: "", place: "Okitipupa", tag: "Teachers", image: 89,
    summary: "Members spent time with Prof Aworetan, one of our teachers, in Okitipupa.", link: { label: "See the photos", href: "#gallery", photo: 89 } }
];

/* GALLERY: id matches images/gallery/NNN.jpg and images/thumbs/NNN.jpg. t = title, p = place, r = role, c = school | events | members */
window.MMGS_GALLERY = [{"id": 1, "t": "Leke Gbebemi", "p": "Igbokoda", "r": "", "c": "members", "w": 720, "h": 960}, {"id": 2, "t": "Obolo Olusola Samuel", "p": "Lagos / Ore, Ondo State", "r": "CEO, S O Painting and Decorations Ltd", "c": "members", "w": 809, "h": 1080}, {"id": 3, "t": "Sunday Akindele Pardon", "p": "Akungba Akoko, Ondo State", "r": "Owo/Akoko Coordinator", "c": "members", "w": 720, "h": 724}, {"id": 4, "t": "Sunday Akindele Pardon (photo 2)", "p": "Akungba Akoko, Ondo State", "r": "Owo/Akoko Coordinator", "c": "members", "w": 720, "h": 1600}, {"id": 5, "t": "Idepefo Funmilayo Victoria (Lajuwomi)", "p": "Okitipupa", "r": "Nurse", "c": "members", "w": 847, "h": 1280}, {"id": 6, "t": "Sola Emmanuel Olowogboye", "p": "Ijebu-Ode / Ore", "r": "Assistant General Secretary", "c": "members", "w": 500, "h": 500}, {"id": 7, "t": "Sola Emmanuel Olowogboye (photo 2)", "p": "Ijebu-Ode / Ore", "r": "Assistant General Secretary", "c": "members", "w": 809, "h": 1080}, {"id": 8, "t": "Sola Emmanuel Olowogboye (photo 3)", "p": "Ijebu-Ode / Ore", "r": "Assistant General Secretary", "c": "members", "w": 809, "h": 1080}, {"id": 9, "t": "Olusola Ade-Aworetan", "p": "Badagry, Seme Border, Lagos", "r": "Ilaje/Ise-Odo Coordinator", "c": "members", "w": 720, "h": 1140}, {"id": 10, "t": "Olusola Ade-Aworetan (photo 2)", "p": "Badagry, Seme Border, Lagos", "r": "Ilaje/Ise-Odo Coordinator", "c": "members", "w": 720, "h": 961}, {"id": 11, "t": "Ogunmola Ayokunle Olasimbo", "p": "Sango-Ota", "r": "Asst Director of Mobilisation", "c": "members", "w": 1080, "h": 1080}, {"id": 12, "t": "Ogunmola Ayokunle Olasimbo (photo 2)", "p": "Sango-Ota", "r": "Asst Director of Mobilisation", "c": "members", "w": 810, "h": 1080}, {"id": 13, "t": "Ogunyankin Taiwo Olarinde", "p": "Ibadan, Oyo State", "r": "Oyo State TESCOM", "c": "members", "w": 590, "h": 1280}, {"id": 14, "t": "Omotimehin Damilare", "p": "Lagos", "r": "Asst Publicity Secretary", "c": "members", "w": 762, "h": 1016}, {"id": 15, "t": "Omotimehin Damilare (photo 2)", "p": "Lagos", "r": "Asst Publicity Secretary", "c": "members", "w": 874, "h": 1164}, {"id": 16, "t": "Adebayo Funmilayo", "p": "", "r": "", "c": "members", "w": 540, "h": 960}, {"id": 17, "t": "Adefuwa Oluwole", "p": "", "r": "", "c": "members", "w": 780, "h": 1040}, {"id": 18, "t": "Rayesomo Seun", "p": "Winnipeg, Manitoba, Canada", "r": "", "c": "members", "w": 810, "h": 1080}, {"id": 19, "t": "Olanrewaju Jimoh (Lanry J)", "p": "Osun / Kwara", "r": "FRSC Officer", "c": "members", "w": 608, "h": 1080}, {"id": 20, "t": "Olanrewaju Jimoh (Lanry J) (photo 2)", "p": "Osun / Kwara", "r": "FRSC Officer", "c": "members", "w": 640, "h": 640}, {"id": 21, "t": "Olanrewaju Jimoh (Lanry J) (photo 3)", "p": "Osun / Kwara", "r": "FRSC Officer", "c": "members", "w": 717, "h": 719}, {"id": 22, "t": "Bunmi Iluyemi", "p": "UK", "r": "Director of Projects", "c": "members", "w": 750, "h": 1000}, {"id": 23, "t": "Iwajubu Gbenga (Chief Bobasuwa)", "p": "Akure", "r": "Akure/Ondo Coordinator", "c": "members", "w": 1200, "h": 1600}, {"id": 24, "t": "Ikuemola Orimisan", "p": "Germany", "r": "Diaspora Coordinator", "c": "members", "w": 1202, "h": 1600}, {"id": 25, "t": "Adeyemi Olaitan", "p": "", "r": "", "c": "members", "w": 810, "h": 1080}, {"id": 26, "t": "Members on Inspection of Some Dilapidated School Facilities and Classrooms", "p": "MMGS, Iju-Odo", "r": "", "c": "school", "w": 1080, "h": 809}, {"id": 27, "t": "Members on Inspection of Some Dilapidated School Facilities and Classrooms", "p": "MMGS, Iju-Odo", "r": "", "c": "school", "w": 984, "h": 432}, {"id": 28, "t": "Fasuyi Ifeoluwa", "p": "", "r": "", "c": "members", "w": 543, "h": 1080}, {"id": 29, "t": "Fasuyi Ifeoluwa (photo 2)", "p": "", "r": "", "c": "members", "w": 562, "h": 1280}, {"id": 30, "t": "Lupo Abiodun", "p": "", "r": "", "c": "members", "w": 960, "h": 1280}, {"id": 31, "t": "Iseyemi Ajayi", "p": "", "r": "", "c": "members", "w": 312, "h": 392}, {"id": 32, "t": "Akindutire Sunday", "p": "", "r": "", "c": "members", "w": 768, "h": 1024}, {"id": 33, "t": "Ijimakinwa Seun", "p": "", "r": "Asst Director of Career and Business Empowerment", "c": "members", "w": 960, "h": 1280}, {"id": 34, "t": "The Big Ladies: the Movers and Shakers of Our Time (Female Prefects)", "p": "MMGS, Iju-Odo", "r": "", "c": "school", "w": 1040, "h": 780}, {"id": 35, "t": "Olatuyi Seun", "p": "Lagos", "r": "Asst Head of Protocol", "c": "members", "w": 609, "h": 1280}, {"id": 36, "t": "Idowu Ijimakinwa", "p": "", "r": "Okitipupa/Ore Coordinator", "c": "members", "w": 1280, "h": 847}, {"id": 37, "t": "Idowu Ijimakinwa (photo 2)", "p": "", "r": "Okitipupa/Ore Coordinator", "c": "members", "w": 720, "h": 960}, {"id": 38, "t": "Idowu Ijimakinwa (photo 3)", "p": "", "r": "Okitipupa/Ore Coordinator", "c": "members", "w": 720, "h": 731}, {"id": 39, "t": "Ijimakinwa Segun", "p": "", "r": "Director of Fundraising", "c": "members", "w": 956, "h": 1024}, {"id": 40, "t": "Ijimakinwa Segun (photo 2)", "p": "", "r": "Director of Fundraising", "c": "members", "w": 810, "h": 1080}, {"id": 41, "t": "Akunyemi Ayokunle", "p": "Ogun State", "r": "Publicity Secretary", "c": "members", "w": 500, "h": 500}, {"id": 42, "t": "Akunyemi Ayokunle (photo 2)", "p": "Ogun State", "r": "Publicity Secretary", "c": "members", "w": 810, "h": 1080}, {"id": 43, "t": "Iyadunni Adeyemi (aka Portable)", "p": "Ogun State", "r": "Ogun Coordinator", "c": "members", "w": 810, "h": 1080}, {"id": 44, "t": "Arogbo Sekonla", "p": "Alli, Ondo", "r": "", "c": "members", "w": 810, "h": 1080}, {"id": 45, "t": "Ojajuni Opeoluwa", "p": "", "r": "Asst Director of Fundraising", "c": "members", "w": 810, "h": 1080}, {"id": 46, "t": "Members at an Event", "p": "Ikoya", "r": "", "c": "events", "w": 1280, "h": 847}, {"id": 47, "t": "Members at an Event", "p": "Ikoya", "r": "", "c": "events", "w": 1280, "h": 847}, {"id": 48, "t": "Aworetan Tayo (aka Ikenimu)", "p": "Okitipupa", "r": "", "c": "members", "w": 810, "h": 1080}, {"id": 49, "t": "Onos Helen (Chair Lady)", "p": "Okitipupa", "r": "Vice President", "c": "members", "w": 810, "h": 1080}, {"id": 50, "t": "Oluwole Tinuke Akinola", "p": "Scotland", "r": "Welfare Director (Female)", "c": "members", "w": 960, "h": 1280}, {"id": 51, "t": "Oluwole Tinuke Akinola (photo 2)", "p": "Scotland", "r": "Welfare Director (Female)", "c": "members", "w": 810, "h": 1080}, {"id": 52, "t": "Kikelomo Bajowa Adekuoroye", "p": "Abuja", "r": "Abuja/North Coordinator", "c": "members", "w": 500, "h": 500}, {"id": 53, "t": "Kikelomo Bajowa Adekuoroye (photo 2)", "p": "Abuja", "r": "Abuja/North Coordinator", "c": "members", "w": 810, "h": 1080}, {"id": 54, "t": "Akinbowale Obolo", "p": "Abuja", "r": "General Secretary", "c": "members", "w": 810, "h": 1080}, {"id": 55, "t": "Akinjeji Olaoluwa", "p": "Lagos / Akure", "r": "Chairman", "c": "members", "w": 1600, "h": 1200}, {"id": 56, "t": "Akinjeji Olaoluwa (photo 2)", "p": "Lagos / Akure", "r": "Chairman", "c": "members", "w": 500, "h": 500}, {"id": 57, "t": "Dare George", "p": "Ogun", "r": "Ogun Coordinator", "c": "members", "w": 1170, "h": 1124}, {"id": 58, "t": "Elero Sunday (aka Amititi)", "p": "Igbokoda", "r": "", "c": "members", "w": 500, "h": 500}, {"id": 59, "t": "Adekuoroye Sola", "p": "Abuja", "r": "", "c": "members", "w": 500, "h": 500}, {"id": 60, "t": "Netufo Bamise John", "p": "Mowe Ibafo", "r": "Head of Protocol", "c": "members", "w": 500, "h": 500}, {"id": 61, "t": "Eniagbojule Babatunde", "p": "Ogun", "r": "", "c": "members", "w": 500, "h": 500}, {"id": 62, "t": "Penne Abigail", "p": "Lagos", "r": "Lagos Coordinator", "c": "members", "w": 500, "h": 500}, {"id": 63, "t": "Daso Rotimi", "p": "Lagos", "r": "", "c": "members", "w": 500, "h": 500}, {"id": 64, "t": "Dilapidated Classrooms in MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1020, "h": 765}, {"id": 65, "t": "Dilapidated Classrooms in MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1020, "h": 765}, {"id": 66, "t": "Dilapidated Classrooms in MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1020, "h": 765}, {"id": 67, "t": "Students Award Recipients with Teachers of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1020, "h": 765}, {"id": 68, "t": "Students Award Recipients with Teachers of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1020, "h": 765}, {"id": 69, "t": "Members at the 70th Anniversary of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1280, "h": 960}, {"id": 70, "t": "Members at the 70th Anniversary of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1080, "h": 810}, {"id": 71, "t": "Members at the 70th Anniversary of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1080, "h": 810}, {"id": 72, "t": "Members at the 70th Anniversary of MMGS", "p": "Iju-Odo", "r": "", "c": "school", "w": 1152, "h": 864}, {"id": 73, "t": "Dare George During His Wedding", "p": "Lagos", "r": "", "c": "events", "w": 1222, "h": 1280}, {"id": 74, "t": "Members and Dare George During His Wedding", "p": "Lagos", "r": "", "c": "events", "w": 1280, "h": 720}, {"id": 75, "t": "Members and Dare George During His Wedding", "p": "Lagos", "r": "", "c": "events", "w": 720, "h": 1280}, {"id": 76, "t": "Members and Dare George During His Wedding", "p": "Lagos", "r": "", "c": "events", "w": 1280, "h": 720}, {"id": 77, "t": "Iyabo Ayodeji Akinrogunde Ukanah", "p": "Akungba / Edo", "r": "Treasurer", "c": "members", "w": 500, "h": 500}, {"id": 78, "t": "Our Alma Mater: Young Students on Assembly Ground", "p": "MMGS, Iju-Odo", "r": "", "c": "school", "w": 720, "h": 504}, {"id": 79, "t": "Members at Our Alma Mater", "p": "Iju-Odo", "r": "", "c": "school", "w": 1016, "h": 762}, {"id": 80, "t": "Akure Chapter Members at a Sit-Out", "p": "Akure", "r": "", "c": "events", "w": 1280, "h": 1072}, {"id": 81, "t": "Members at Margaret Egbowon's Event", "p": "Igbokoda", "r": "", "c": "events", "w": 1280, "h": 960}, {"id": 82, "t": "Prefects Taking Their Oaths of Office in Those Days", "p": "Iju-Odo", "r": "", "c": "school", "w": 1080, "h": 703}, {"id": 83, "t": "With Our Principal, Prince Adeyemi Juba", "p": "Iju-Odo", "r": "", "c": "school", "w": 1040, "h": 684}, {"id": 84, "t": "Members on the Green Carpet", "p": "Iju-Odo", "r": "", "c": "school", "w": 1280, "h": 960}, {"id": 85, "t": "Members at the 2026 Reunion", "p": "Iju-Odo", "r": "", "c": "events", "w": 1280, "h": 1072}, {"id": 86, "t": "Members at the 2026 Reunion", "p": "Iju-Odo", "r": "", "c": "events", "w": 960, "h": 432}, {"id": 87, "t": "Members at the 2026 Reunion", "p": "Iju-Odo", "r": "", "c": "events", "w": 486, "h": 1080}, {"id": 88, "t": "Members at the 2026 Reunion", "p": "Iju-Odo", "r": "", "c": "events", "w": 432, "h": 960}, {"id": 89, "t": "With Prof Aworetan: Celebrating Our Teachers", "p": "Okitipupa", "r": "", "c": "school", "w": 744, "h": 992}, {"id": 90, "t": "At a Member's Wedding (Foluke)", "p": "Okitipupa", "r": "", "c": "events", "w": 1280, "h": 562}, {"id": 91, "t": "Akure Reunion", "p": "Akure", "r": "", "c": "events", "w": 1080, "h": 810}, {"id": 92, "t": "Lawe Oluwalogbon", "p": "", "r": "", "c": "members", "w": 720, "h": 1207}, {"id": 93, "t": "Obukajeta James", "p": "Lagos", "r": "Lagos Coordinator", "c": "members", "w": 1080, "h": 1080}, {"id": 94, "t": "Netufo Bamise, Akinbowale Obolo and Akindele Sunday", "p": "", "r": "", "c": "events", "w": 1080, "h": 474}, {"id": 95, "t": "Akure Sit-Out", "p": "Akure", "r": "", "c": "events", "w": 1024, "h": 768}, {"id": 96, "t": "Mrs Adese, Our Yoruba Teacher, During Her 70th Birthday", "p": "", "r": "", "c": "school", "w": 810, "h": 1080}, {"id": 97, "t": "Akinsanmi Titilayo", "p": "", "r": "", "c": "members", "w": 810, "h": 1080}, {"id": 98, "t": "Akindutire Ebun", "p": "", "r": "", "c": "members", "w": 720, "h": 960}, {"id": 99, "t": "Ayoleyi", "p": "", "r": "", "c": "members", "w": 908, "h": 1007}, {"id": 100, "t": "Taiwo and Kehinde Ogunyankin", "p": "Ibadan", "r": "", "c": "events", "w": 720, "h": 720}, {"id": 101, "t": "Sadoh Endurance (Teddy Eddy)", "p": "Lagos", "r": "East/South-South Coordinator", "c": "members", "w": 427, "h": 722}, {"id": 102, "t": "Sadoh Endurance (Teddy Eddy) (photo 2)", "p": "Lagos", "r": "East/South-South Coordinator", "c": "members", "w": 960, "h": 1280}, {"id": 103, "t": "Adeyehun Kemi", "p": "UK", "r": "Diaspora Coordinator", "c": "members", "w": 720, "h": 960}, {"id": 104, "t": "Grace Diyi Netufo", "p": "Mowe Ibafo", "r": "", "c": "members", "w": 737, "h": 1280}, {"id": 105, "t": "Grace Diyi Netufo (photo 2)", "p": "Mowe Ibafo", "r": "", "c": "members", "w": 720, "h": 960}, {"id": 106, "t": "Akinwale Oluwole (Babangida)", "p": "Libya", "r": "Director of Mobilisation", "c": "members", "w": 809, "h": 1080}, {"id": 107, "t": "Akinwale Oluwole (Babangida) (photo 2)", "p": "Libya", "r": "Director of Mobilisation", "c": "members", "w": 720, "h": 1280}, {"id": 108, "t": "Akinbuwa Funmilayo", "p": "Ore", "r": "", "c": "members", "w": 780, "h": 1040}, {"id": 109, "t": "Oluwadare Mayowa", "p": "", "r": "", "c": "members", "w": 600, "h": 900}, {"id": 110, "t": "Akinsulere Omolere", "p": "", "r": "", "c": "members", "w": 612, "h": 816}, {"id": 111, "t": "Ayerin Tinuola", "p": "Ibadan", "r": "", "c": "members", "w": 780, "h": 1040}, {"id": 112, "t": "Adegun Kemi", "p": "Abuja", "r": "", "c": "members", "w": 780, "h": 1040}, {"id": 113, "t": "Adegun Kemi (photo 2)", "p": "Abuja", "r": "", "c": "members", "w": 576, "h": 1280}, {"id": 114, "t": "Oluwayemi Niyi", "p": "Akure", "r": "", "c": "members", "w": 720, "h": 725}, {"id": 115, "t": "Ayetiran Dele (Omo Emi)", "p": "Okitipupa", "r": "Okitipupa/Ore Coordinator", "c": "members", "w": 540, "h": 960}, {"id": 116, "t": "Konye Owoyemi", "p": "", "r": "Asst Director of Socials", "c": "members", "w": 670, "h": 808}, {"id": 117, "t": "Konye Owoyemi (photo 2)", "p": "", "r": "Asst Director of Socials", "c": "members", "w": 530, "h": 904}, {"id": 118, "t": "Ololajulo Oluremi", "p": "Akure, Ondo State", "r": "Welfare Director (Male)", "c": "members", "w": 1024, "h": 1536}, {"id": 119, "t": "Owuru Peter Francis", "p": "Lagos", "r": "Director of Socials", "c": "members", "w": 384, "h": 458}, {"id": 120, "t": "At a Member's Event", "p": "Ilutitun", "r": "", "c": "events", "w": 432, "h": 960}, {"id": 121, "t": "Olasehinwa Oladipupo with Gbenga", "p": "Abuja", "r": "", "c": "events", "w": 576, "h": 1280}, {"id": 122, "t": "Lebile Folarin", "p": "Lagos", "r": "Financial Secretary", "c": "members", "w": 206, "h": 722}, {"id": 123, "t": "Abilawon Seun", "p": "Ibadan", "r": "", "c": "members", "w": 720, "h": 1068}, {"id": 124, "t": "Olomu Roselyn", "p": "Igbokoda", "r": "", "c": "members", "w": 719, "h": 1058}, {"id": 125, "t": "Adebisi Samuel", "p": "", "r": "", "c": "members", "w": 718, "h": 1096}];

/* MEMBER PROFILES: n = name, p = place, r = role, x = executive office shown in the Excos strip, img = gallery id */
window.MMGS_PROFILES = [
 {
  "n": "Leke Gbebemi",
  "p": "Igbokoda",
  "r": "",
  "img": 1
 },
 {
  "n": "Obolo Olusola Samuel",
  "p": "Lagos / Ore, Ondo State",
  "r": "CEO, S O Painting and Decorations Ltd",
  "img": 2
 },
 {
  "n": "Sunday Akindele Pardon",
  "p": "Akungba Akoko, Ondo State",
  "r": "Owo/Akoko Coordinator · Civil servant, Adekunle Ajasin University",
  "img": 3
 },
 {
  "n": "Idepefo Funmilayo Victoria (Lajuwomi)",
  "p": "Okitipupa",
  "r": "Nurse",
  "img": 5
 },
 {
  "n": "Sola Emmanuel Olowogboye",
  "p": "Ijebu-Ode / Ore",
  "r": "Assistant General Secretary · Businessman, Osem Company International Godcom Ltd",
  "img": 7
 },
 {
  "n": "Olusola Ade-Aworetan",
  "p": "Badagry, Seme Border, Lagos",
  "r": "Ilaje/Ise-Odo Coordinator · Public servant, NPF",
  "img": 10
 },
 {
  "n": "Ogunmola Ayokunle Olasimbo",
  "p": "Sango-Ota",
  "r": "Asst Director of Mobilisation · Senior Sales Manager, Coronation Life Assurance",
  "img": 11
 },
 {
  "n": "Ogunyankin Taiwo Olarinde",
  "p": "Ibadan, Oyo State",
  "r": "Oyo State TESCOM",
  "img": 13
 },
 {
  "n": "Omotimehin Damilare",
  "p": "Lagos",
  "r": "Asst Publicity Secretary",
  "img": 15
 },
 {
  "n": "Adebayo Funmilayo",
  "p": "",
  "r": "",
  "img": 16
 },
 {
  "n": "Adefuwa Oluwole",
  "p": "",
  "r": "",
  "img": 17
 },
 {
  "n": "Rayesomo Seun",
  "p": "Winnipeg, Manitoba, Canada",
  "r": "",
  "img": 18
 },
 {
  "n": "Olanrewaju Jimoh (Lanry J)",
  "p": "Osun / Kwara",
  "r": "FRSC Officer",
  "img": 21
 },
 {
  "n": "Bunmi Iluyemi",
  "p": "UK",
  "r": "Director of Projects",
  "img": 22
 },
 {
  "n": "Iwajubu Gbenga (Chief Bobasuwa)",
  "p": "Akure",
  "r": "Akure/Ondo Coordinator · Businessman",
  "img": 23
 },
 {
  "n": "Ikuemola Orimisan",
  "p": "Germany",
  "r": "Diaspora Coordinator",
  "img": 24
 },
 {
  "n": "Adeyemi Olaitan",
  "p": "",
  "r": "",
  "img": 25
 },
 {
  "n": "Fasuyi Ifeoluwa",
  "p": "",
  "r": "",
  "img": 28
 },
 {
  "n": "Lupo Abiodun",
  "p": "",
  "r": "",
  "img": 30
 },
 {
  "n": "Iseyemi Ajayi",
  "p": "",
  "r": "",
  "img": 31
 },
 {
  "n": "Akindutire Sunday",
  "p": "",
  "r": "",
  "img": 32
 },
 {
  "n": "Ijimakinwa Seun",
  "p": "",
  "r": "Asst Director of Career and Business Empowerment",
  "img": 33
 },
 {
  "n": "Olatuyi Seun",
  "p": "Lagos",
  "r": "Asst Head of Protocol",
  "img": 35
 },
 {
  "n": "Idowu Ijimakinwa",
  "p": "",
  "r": "Okitipupa/Ore Coordinator",
  "img": 38
 },
 {
  "n": "Ijimakinwa Segun",
  "p": "",
  "r": "Director of Fundraising",
  "img": 39
 },
 {
  "n": "Akunyemi Ayokunle",
  "p": "Ogun State",
  "r": "Publicity Secretary",
  "img": 41
 },
 {
  "n": "Iyadunni Adeyemi (aka Portable)",
  "p": "Ogun State",
  "r": "Ogun Coordinator",
  "img": 43
 },
 {
  "n": "Arogbo Sekonla",
  "p": "Alli, Ondo",
  "r": "",
  "img": 44
 },
 {
  "n": "Ojajuni Opeoluwa",
  "p": "",
  "r": "Asst Director of Fundraising",
  "img": 45
 },
 {
  "n": "Aworetan Tayo (aka Ikenimu)",
  "p": "Okitipupa",
  "r": "",
  "img": 48
 },
 {
  "n": "Onos Helen (Chair Lady)",
  "p": "Okitipupa",
  "r": "Vice President",
  "img": 49
 },
 {
  "n": "Oluwole Tinuke Akinola",
  "p": "Scotland",
  "r": "Welfare Director (Female)",
  "img": 51
 },
 {
  "n": "Kikelomo Bajowa Adekuoroye",
  "p": "Abuja",
  "r": "Abuja/North Coordinator",
  "img": 53
 },
 {
  "n": "Akinbowale Obolo",
  "p": "Abuja",
  "r": "General Secretary",
  "img": 54,
  "x": "General Secretary"
 },
 {
  "n": "Akinjeji Olaoluwa",
  "p": "Lagos / Akure",
  "r": "Chairman",
  "img": 56,
  "x": "Chairman"
 },
 {
  "n": "Dare George",
  "p": "Ogun",
  "r": "Ogun Coordinator",
  "img": 57
 },
 {
  "n": "Elero Sunday (aka Amititi)",
  "p": "Igbokoda",
  "r": "",
  "img": 58
 },
 {
  "n": "Adekuoroye Sola",
  "p": "Abuja",
  "r": "",
  "img": 59
 },
 {
  "n": "Netufo Bamise John",
  "p": "Mowe Ibafo",
  "r": "Head of Protocol",
  "img": 60
 },
 {
  "n": "Eniagbojule Babatunde",
  "p": "Ogun",
  "r": "",
  "img": 61
 },
 {
  "n": "Penne Abigail",
  "p": "Lagos",
  "r": "Lagos Coordinator",
  "img": 62
 },
 {
  "n": "Daso Rotimi",
  "p": "Lagos",
  "r": "",
  "img": 63
 },
 {
  "n": "Iyabo Ayodeji Akinrogunde Ukanah",
  "p": "Akungba / Edo",
  "r": "Treasurer",
  "img": 77,
  "x": "Treasurer"
 },
 {
  "n": "Lawe Oluwalogbon",
  "p": "",
  "r": "",
  "img": 92
 },
 {
  "n": "Obukajeta James",
  "p": "Lagos",
  "r": "Lagos Coordinator",
  "img": 93
 },
 {
  "n": "Akinsanmi Titilayo",
  "p": "",
  "r": "",
  "img": 97
 },
 {
  "n": "Akindutire Ebun",
  "p": "",
  "r": "",
  "img": 98
 },
 {
  "n": "Ayoleyi",
  "p": "",
  "r": "",
  "img": 99
 },
 {
  "n": "Sadoh Endurance (Teddy Eddy)",
  "p": "Lagos",
  "r": "East/South-South Coordinator · Footballer, Seven Star Ltd",
  "img": 102
 },
 {
  "n": "Adeyehun Kemi",
  "p": "UK",
  "r": "Diaspora Coordinator",
  "img": 103
 },
 {
  "n": "Grace Diyi Netufo",
  "p": "Mowe Ibafo",
  "r": "",
  "img": 104
 },
 {
  "n": "Akinwale Oluwole (Babangida)",
  "p": "Libya",
  "r": "Director of Mobilisation",
  "img": 106
 },
 {
  "n": "Akinbuwa Funmilayo",
  "p": "Ore",
  "r": "",
  "img": 108
 },
 {
  "n": "Oluwadare Mayowa",
  "p": "",
  "r": "",
  "img": 109
 },
 {
  "n": "Akinsulere Omolere",
  "p": "",
  "r": "",
  "img": 110
 },
 {
  "n": "Ayerin Tinuola",
  "p": "Ibadan",
  "r": "",
  "img": 111
 },
 {
  "n": "Adegun Kemi",
  "p": "Abuja",
  "r": "",
  "img": 112
 },
 {
  "n": "Oluwayemi Niyi",
  "p": "Akure",
  "r": "",
  "img": 114
 },
 {
  "n": "Ayetiran Dele (Omo Emi)",
  "p": "Okitipupa",
  "r": "Okitipupa/Ore Coordinator",
  "img": 115
 },
 {
  "n": "Konye Owoyemi",
  "p": "",
  "r": "Asst Director of Socials",
  "img": 117
 },
 {
  "n": "Ololajulo Oluremi",
  "p": "Akure, Ondo State",
  "r": "Welfare Director (Male) · Director of Career and Business Empowerment",
  "img": 118
 },
 {
  "n": "Owuru Peter Francis",
  "p": "Lagos",
  "r": "Director of Socials · IT personnel",
  "img": 119
 },
 {
  "n": "Lebile Folarin",
  "p": "Lagos",
  "r": "Financial Secretary",
  "img": 122,
  "x": "Financial Secretary"
 },
 {
  "n": "Abilawon Seun",
  "p": "Ibadan",
  "r": "",
  "img": 123
 },
 {
  "n": "Olomu Roselyn",
  "p": "Igbokoda",
  "r": "",
  "img": 124
 },
 {
  "n": "Adebisi Samuel",
  "p": "",
  "r": "",
  "img": 125
 }
];

/* OFFICES: offices, current holders and assigned duties (Portfolios page). holders = names as nominated on 26 Dec 2025. */
window.MMGS_OFFICES = [
 {
  "office": "President/Chairman",
  "holders": [
   "Akinjeji Olaoluwa"
  ],
  "duties": [
   "Principal leader and chief ambassador of the association.",
   "Presides over all meetings and ensures effective coordination of activities.",
   "Guides strategic vision, policy direction, and annual plans.",
   "Ensures unity and harmony within the association.",
   "Represents the association at official events and public forums.",
   "Oversees performance and accountability of all excos.",
   "Endorses financial approvals with Treasurer/Financial Secretary and any other excos so assigned.",
   "Chairs the welfare and any emergency response decision-making committee."
  ]
 },
 {
  "office": "Vice President/Chairlady",
  "holders": [
   "Onos Helen"
  ],
  "duties": [
   "Supports the President in all leadership duties.",
   "Steps in to act as President in his/her absence.",
   "Supervises assigned committees and monitors progress.",
   "Responsible for conflict resolution and membership discipline follow-ups.",
   "Leads special strategic initiatives as delegated by the President."
  ]
 },
 {
  "office": "General Secretary",
  "holders": [
   "Obolo Akinbowale"
  ],
  "duties": [
   "Custodian of all administrative records, reports, and correspondence.",
   "Prepares and circulates meeting invitations, agenda, and minutes.",
   "Maintains official database of members with Regional Coordinators.",
   "Coordinates documentation for welfare approvals and executive decisions.",
   "Responsible for updating policies, constitution, and operational documents.",
   "Ensures timely communication to the entire membership."
  ]
 },
 {
  "office": "Assistant General Secretary",
  "holders": [
   "Olowogboye Sola"
  ],
  "duties": [
   "Assists the General Secretary in all roles.",
   "Coordinates internal communications (WhatsApp group, announcements).",
   "Manages task follow-ups and compliance reminders.",
   "Acts on behalf of the Gen Sec when absent."
  ]
 },
 {
  "office": "Treasurer",
  "holders": [
   "Iyabo Akinrogunde Ayodeji Ukanah"
  ],
  "duties": [
   "Custodian of physical and electronic funds and trust accounts.",
   "Manages receipts, deposits, and secure fund storage.",
   "Maintains accurate up-to-date financial balance records.",
   "Presents quarterly financial statements to members.",
   "Ensures all expenditures are authorized and documented.",
   "Co-signs disbursements with the President and Financial"
  ]
 },
 {
  "office": "Financial Secretary",
  "holders": [
   "Lebile Folarin"
  ],
  "duties": [
   "Responsible for membership dues collection tracking.",
   "Maintains payment registers and prepares monthly remittance reports.",
   "Leads revenue forecasting and budget planning.",
   "Facilitates online/mobile payments and bank reconciliation.",
   "Works closely with Treasurer to ensure transparency and accountability."
  ]
 },
 {
  "office": "Welfare Directors (Male & Female)",
  "holders": [
   "Ololajulo Oluremi (Male)",
   "Oluwole Atinuke (Female)"
  ],
  "duties": [
   "Oversees the emotional, social, and emergency support to members.",
   "Ensures equal and gender-sensitive representation in welfare outreach.",
   "Coordinates visits and solidarity at events, illness, bereavement.",
   "Reviews applications for welfare assistance and makes recommendations.",
   "Maintains discrete and confidential welfare records in coordination with the Gen Sec.",
   "Works with Regional Coordinators for quick response."
  ]
 },
 {
  "office": "Publicity Secretary",
  "holders": [
   "Akunyemi Ayokunle"
  ],
  "duties": [
   "Manages the association’s image, branding, and communication strategy.",
   "Leads WhatsApp and social media engagement campaigns.",
   "Publishes achievements, birthdays, successes and events publicly.",
   "Creates content for flyers, newsletters, and announcements.",
   "Works with Fundraising and Mobilisation teams for campaigns."
  ]
 },
 {
  "office": "Assistant Publicity Secretary",
  "holders": [
   "Omotimehin Damilare"
  ],
  "duties": [
   "Supports the Publicity Secretary with creative materials and posting schedules.",
   "Takes over publicity duties when the lead is absent.",
   "Helps track member engagement and feedback trends."
  ]
 },
 {
  "office": "Director of Socials",
  "holders": [
   "Owuru Peter"
  ],
  "duties": [
   "Organizes social gatherings, reunions, award nights, and cultural events.",
   "Designs association entertainment calendar.",
   "Coordinates with Welfare and Mobilisation for attendance boosting.",
   "Recommends recreational opportunities for members."
  ]
 },
 {
  "office": "Assistant Director of Socials",
  "holders": [
   "Konye Owoyemi"
  ],
  "duties": [
   "Supports program planning, logistics and hospitality roles.",
   "Manages venue arrangements and entertainment at events.",
   "Acts in place of Director of Socials when required."
  ]
 },
 {
  "office": "Director of Fundraising",
  "holders": [
   "Ijimakinwa Segun"
  ],
  "duties": [
   "Leads drives and campaigns to generate sustainable funding.",
   "Builds partnerships with donors and corporate sponsors.",
   "Coordinates fundraising dinner, merchandise sales and charitable drives.",
   "Prepares donor recognition lists and follow-ups.",
   "Works with Treasurer/Financial Sec on funds accountability."
  ]
 },
 {
  "office": "Assistant Director of Fundraising",
  "holders": [
   "Ojajuni Opeoluwa"
  ],
  "duties": [
   "Supports planning and execution of sponsorship and fundraising initiatives.",
   "Tracks donor engagement and follows up with potential sponsors.",
   "Helps organize fundraising events and promotional campaigns.",
   "Assists with merchandise sales and CSR outreach coordination.",
   "Maintains documentation of funds raised from each initiative.",
   "Works closely with Treasurer and Financial Secretary on income reports.",
   "Acts in place of the Director of Fundraising when needed."
  ]
 },
 {
  "office": "Director of Mobilisation",
  "holders": [
   "Akinwale Oluwole"
  ],
  "duties": [
   "Coordinates membership activation and reconnection.",
   "Oversees regional engagement and re-connection with missing members.",
   "Implements participation targets for events and meetings.",
   "Works directly with Regional & Diaspora Coordinators."
  ]
 },
 {
  "office": "Assistant Director of Mobilisation",
  "holders": [
   "Ogunmola Simbo"
  ],
  "duties": [
   "Supports membership activation and reconnection efforts.",
   "Assists in re-engaging inactive or missing members across all regions.",
   "Helps enforce participation targets for meetings, events and group activities.",
   "Works closely with and coordinates follow-ups from Regional and Diaspora Coordinators."
  ]
 },
 {
  "office": "Head of Protocol",
  "holders": [
   "Netufo Bamise"
  ],
  "duties": [
   "Ensures order, etiquette and decorum during events and meetings.",
   "Coordinates seating arrangement, introductions, and dignitary handling.",
   "Responsible for official invitation and reception procedures.",
   "Ensures VIP guest smooth logistics and security if required."
  ]
 },
 {
  "office": "Assistant Head of Protocol",
  "holders": [
   "Olatuyi Seun"
  ],
  "duties": [
   "Assists in ensuring protocol order, etiquette and smooth conduct of events.",
   "Coordinates guest reception, seating arrangements and introductions.",
   "Helps manage movement control and ceremony flow at association activities.",
   "Prepares protocol materials such as invitation lists and place tags.",
   "Supports handling of VIPs, senior guests, and special members.",
   "Ensures every event reflects professionalism and Association values.",
   "Acts for the Head of Protocol when he/she is absent."
  ]
 },
 {
  "office": "Regional Coordinators",
  "holders": [],
  "duties": [
   "Maintain regional contact list and membership register.",
   "Serve as first responders for members in need in their region.",
   "Mobilize representation for ceremonies and gatherings.",
   "Submit monthly membership reports to Gen Sec & Mobilisation Director.",
   "Recruit and reintegrate missing members.",
   "Coordinates regional visits, ‘shoutouts/reachouts’ and get-to-gethers for members."
  ]
 },
 {
  "office": "Diaspora Coordinators",
  "holders": [
   "Ikuemola Orimisan",
   "Adeyehun Kemi"
  ],
  "duties": [
   "Ensure association engagement continues for members abroad.",
   "Coordinate international support for welfare and fundraising drives.",
   "Provide mentorship or global networking opportunities to members.",
   "Promote the association’s image outside Nigeria.",
   "Coordinates visits, ‘shoutouts/reachouts’ and get-to-gethers for members abroad, where possible."
  ]
 },
 {
  "office": "Director of Projects",
  "holders": [
   "Iluyemi Bunmi"
  ],
  "duties": [
   "Identify humanitarian and MMGS-based outreach opportunities.",
   "Plan and execute annual flagship school project(s).",
   "Monitor impact and document success stories.",
   "Work with Fundraising, Welfare and Publicity teams.",
   "Recommend Corporate Social Responsibility (CSR) partnerships & scholarship initiatives.",
   "Lead volunteers during MMGS-based missions."
  ]
 },
 {
  "office": "Assistant Director of Projects",
  "holders": [
   "Ogunmefun Ayodeji"
  ],
  "duties": [
   "Assists in planning and organising all association projects and outreach.",
   "Handles project logistics (venue, materials, volunteers, timelines, follow-up).",
   "Helps coordinate with Welfare, Fundraising and Mobilisation during projects.",
   "Keeps records of project activities, beneficiaries, photos and reports.",
   "Supports monitoring and evaluation of project impact.",
   "Prepares draft project updates and reports in consultation with the Director.",
   "Represents the Director of Projects when he/she is absent or delegated."
  ]
 },
 {
  "office": "Director of Career and Business Empowerment",
  "holders": [
   "Ololajulo Oluremi"
  ],
  "duties": [
   "Drives economic empowerment and professional growth of members.",
   "Coordinates career development programs and job referral networks.",
   "Promotes business-to-business patronage among members.",
   "Establishes mentorship pairing for career and entrepreneurial guidance.",
   "Organizes seminars, trainings, and financial literacy sessions.",
   "Maintains a database of job, scholarship, and business opportunities.",
   "Works with Fundraising and Mobilisation teams to secure partnerships.",
   "Highlights member achievements and business successes regularly.",
   "Represents the Association in professional networking platforms and give feedbacks."
  ]
 },
 {
  "office": "Assistant Director of Career and Business Empowerment",
  "holders": [
   "Ijimakinwa Seun"
  ],
  "duties": [
   "Supports the planning and management of career empowerment programs.",
   "Assists in business promotion and mentorship coordination.",
   "Helps update and circulate job and scholarship opportunities.",
   "Provides technical support for online empowerment events and webinars.",
   "Assists in documenting and publishing member achievements.",
   "Acts for the Director in his/her absence as required."
  ]
 }
];

/* NOMINAL ROLL, MISSING AND LATE MEMBERS: edit the lists as the records change. */
window.MMGS_ROLL = [
 "Adewunmi Florence Idowu",
 "Akidutire Ebun Bosede",
 "Akinyode Oluwaseyi",
 "Akunyemi Ayokunle",
 "Akinboye Daniel Olatunji",
 "Daso Oluwarotimi Fola",
 "Iwajomo Morayo Tolulope",
 "Ogunegbola Ayodele",
 "Adekuoroye Olusola",
 "Iwajubu Gbenga",
 "Ade Aworetan Sola",
 "Adeyemi Dunni Lola",
 "Michael Chizuru Christy",
 "Abilawon Oluwaseunfunmi",
 "Sadoh Endurance Oziegbe",
 "Lupo Ayodeji",
 "Ayara Adesugba",
 "Oluwole Clara Tinuke",
 "Onyekachi Chukwu",
 "Orisadeni Gbemisola",
 "Akinfala Oluwole",
 "Adeyehun Oluwakemi",
 "Adegun Yinka",
 "Akindele Sunday",
 "Eniagbojule Babatunde",
 "Obukajeta James",
 "Akinsanmi Titilayo Bisi",
 "Ayerin Mabel Oluwaseyi",
 "Egbowon Margaret",
 "Bada Bayo",
 "Olowogboye Sola",
 "Akanni Oluwafemi Sunday",
 "Ijimakinwa Segun",
 "Agbeye Olarewaju",
 "Akinjeji Olaoluwa",
 "Lawe Logbon",
 "Magbamiyi Iseoluwa",
 "Owuru Peter Francis",
 "Adebisi Samuel Oluwagbemiga",
 "Oluwayemi Adeniyi",
 "Ayerin Tinuola Joy",
 "Arogbo Sekonla Dupe",
 "Agbeye Akinbobola",
 "Leke Gbebemi",
 "Ijimakinwa Idowu",
 "Iluyemi Bunmi",
 "Ijimakinwa Oluwaseun",
 "Netufo John Oluwabamise",
 "Aba Aanuoluwapo",
 "Olawete Mary Ebunola",
 "Akindutire Sunday",
 "Ogunmefun Ayodeji",
 "Fasuyi Ifeoluwa",
 "Bajowa Kikelomo",
 "Konye Festus Owoyemi",
 "George Damilare Bolaji",
 "Egbontolorun Omoniyi",
 "Bakare Mubaraka Olu",
 "Aderoloye Rebecca Ayo",
 "Ogunyankin Kehinde",
 "Penne Ayodeji Igbekele",
 "Sadoh Stanley Ehizoje",
 "Ogunyankin Taiwo",
 "Omotimehin Oluwadamilare",
 "Ogunyemi Abiodun",
 "Ololajulo Oluremi",
 "Akinufesi Sesan",
 "Oguntoye Justinah Busayo",
 "Penne Abigail",
 "Kunmi Oluwarotimi",
 "Akinrogunde Iyabo Ayodeji",
 "Ijimakinwa Taiwo",
 "Eruagan Augustine",
 "Onotagwono Hellen",
 "Obamoyegun Tolulope",
 "Enikanselu Abiodun",
 "Jimoh Olarewaju",
 "Fanegan Temidayo",
 "Francis Uche",
 "Diyi Grace Ibukun",
 "Iseyemi Ajayi",
 "Ojajuni Opeoluwa Omowumi",
 "Aworetan Eyitayo Esther",
 "Dairo Mary Funmilayo",
 "Fanegan Rebecca Temitope",
 "Lebile Folarin",
 "Obolo Akinsanmi Abiodun",
 "Akinsuyi Adewale",
 "Akinawo Monday",
 "Ikuemola Orimisan Donald",
 "Famakinwa Ibukun",
 "Ogunmola Olasimbo",
 "Olatuyi Stella Oluwaseun",
 "Oladipupo Rotimi",
 "Akinwale Oluwole",
 "Adeyeye Olaniyi",
 "Lupo Abiodun",
 "Obolo Akinbowale",
 "Bajowa Segun",
 "Ohunyeye Adetunji",
 "Omoseyi Olorunseemi",
 "Belie Folukemi Funmilayo",
 "Akinboyo Omoniyi Omoyemi",
 "Ayetiran Ayodele",
 "Adedayo Adebowale",
 "Ajayi Foluso",
 "Jegede Oluwole",
 "Elero Sunday",
 "Akinwale Oluwasegun",
 "Adebayo Abiola Omowumi",
 "Lajuwomi Funmilayo",
 "Aju Temidayo",
 "Fagbohunka Kunle",
 "Obolo Oluwasola",
 "Adebayo Funmilayo",
 "Aganyebi Juliet",
 "Konye Alaba",
 "Olomu Roseline",
 "Araromi Funmi",
 "Mafo Mary",
 "Bakare Sikiru Ayinde",
 "Adefuwa Oluwole",
 "Akinwumi Odutola",
 "Ayebo Festus",
 "Bosuwo Seyi",
 "Agbejoye Ayoleyi",
 "Eremiye Ajosanmi",
 "Adesanmi Idowu",
 "Oluwabufunmi Roseline",
 "Adeyekun Omosehin",
 "Jatto Christopher",
 "Jatto Omojewe",
 "Owate Aanu",
 "Medunoye Seyi",
 "Ogunboye Olusola",
 "Ajosanmi Foluke",
 "Akinbuwa Funmilola",
 "Oganbule Eunice Bunmi",
 "Oluwadare Mayowa",
 "Tolorogbe Funke",
 "Enisan Sunday",
 "Wilson Oluwole",
 "Olubokun Omoseye",
 "Olowomuke Gbenga",
 "Ojuri Sola",
 "Rayesomo Seun",
 "Enikanselu Orimisan",
 "Johnson Oke",
 "Olatukesi Kehinde",
 "Adejayan Olutayo",
 "Okunniyi Oyekan",
 "Bosuwo Ayodele",
 "Akinmusulere Omolere",
 "Omoboye Felicia",
 "Temiye Moniayo",
 "Roluseun Omorinola",
 "Adebayo Taiwo"
];
window.MMGS_MISSING = [
 "Adewunmi Florence Idowu",
 "Akindutire Ebun Bosede",
 "Akinboye Daniel Olatunji",
 "Ogunegbola Ayodele",
 "Michael Chizuru Christy",
 "Ayara Adesugba",
 "Orisadeni Gbemisola",
 "Akinfala Oluwole",
 "Ayerin Mabel Oluwaseyi",
 "Egbowon Margaret (not on Whatsapp)",
 "Magbamiyi Iseoluwa",
 "Oluwayemi Adeniyi",
 "Agbeye Akinbobola",
 "Aba Aanuoluwapo",
 "Olawete Mary Ebunola",
 "Fasuyi Ifeoluwa",
 "Ogunyemi Abiodun",
 "Oguntoye Justinah Busayo",
 "Kunmi Oluwarotimi",
 "Ijimakinwa Taiwo",
 "Eruagan Augustine",
 "Obamoyegun Tolulope",
 "Enikanselu Abiodun",
 "Obolo Akinsanmi Abiodun",
 "Akinawo Monday",
 "Omoseyi Olorunseemi",
 "Adedayo Adebowale",
 "Ajayi Foluso",
 "Jegede Oluwole",
 "Akinwale Oluwasegun",
 "Fagbohunka Kunle",
 "Adebayo Funmilayo",
 "Aganyebi Juliet",
 "Konye Alaba",
 "Bakare Sikiru Ayinde",
 "Akinwumi Odutola",
 "Ayebo Festus",
 "Bosuwo Seyi",
 "Adesanmi Idowu",
 "Oluwabufunmi Roseline",
 "Jatto Christopher",
 "Jatto Omojewe",
 "Owate Aanu",
 "Medunoye Seyi",
 "Ogunboye Olusola",
 "Tolorogbe Funke",
 "Wilson Oluwole",
 "Olubokun Omoseye",
 "Olowomuke Gbenga",
 "Ojuri Sola",
 "Enikanselu Orimisan",
 "Johnson Oke",
 "Olatukesi Kehinde",
 "Okunniyi Oyekan",
 "Bosuwo Ayodele",
 "Omoboye Felicia",
 "Temiye Moniayo"
];
window.MMGS_LATE = [
 "Onyekachi Chukwu",
 "Bada Bayo",
 "Fanegan Temidayo",
 "Fanegan Rebecca Temitope",
 "Oladipupo Rotimi",
 "Belie Folukemi Funmilayo",
 "Araromi Funmi",
 "Adeyekun Omosehin",
 "Akinsuyi Adewale",
 "Akinufesi Sesan",
 "Akinwale Oluwasegun"
];

/* MINUTES AND MAJOR DECISIONS: blocks are {k:"h"|"p"|"li", t:text}. */
window.MMGS_MINUTES = [{"id": "maiden-2022", "date": "27 February 2022", "title": "Maiden meeting", "sub": "Held virtually", "blocks": [{"k": "p", "t": "See Distribution February 2022"}, {"k": "h", "t": "MINUTES OF THE MAIDEN MEETING OF MANUWA MEMORIAL GRAMMAR SCHOOL OLD STUDENTS ASSOCIATION 1997/2003 SET HELD VIRTUALLY ON 27 FEBRUARY 2022"}, {"k": "p", "t": "Present: Ikuemola Orimisan Germany Co-host"}, {"k": "p", "t": "Akinjeji Olaoluwa Akure Co-host"}, {"k": "p", "t": "Akunyemi Ayokunle Ogun State Co-host"}, {"k": "p", "t": "Oluwole Atinuke Akure (Not for all agenda item)"}, {"k": "p", "t": "Lebile Folarin Lagos"}, {"k": "p", "t": "Lanry Jay (Jimoh) Osun"}, {"k": "p", "t": "Onos Helen Okitipupa"}, {"k": "p", "t": "Obukajeta James Lagos"}, {"k": "p", "t": "Honsimi ???? Akure ??"}, {"k": "p", "t": "Iphone ???? ????"}, {"k": "p", "t": "Sola Olowogboye Ogun State"}, {"k": "p", "t": "Adeyemi Dunni Ogun State"}, {"k": "p", "t": "George Mobolaji Dare Lagos"}, {"k": "p", "t": "Infinix Hot 7 ??? ????"}, {"k": "p", "t": "Daso Rotimi Lagos"}, {"k": "p", "t": "Damilare Oguntimehin Lagos"}, {"k": "p", "t": "Netufo Bamise Ogun (Not for all agenda item)"}, {"k": "p", "t": "Obolo Akinbowale Abuja Host/Secretary"}, {"k": "h", "t": "INTRODUCTION"}, {"k": "p", "n": "1.", "t": "Available members of 2003 set of MMGS Old Students Alumni held a virtual meeting via zoom on 27 February 2022 at 7pm. The aim of the meeting was to primarily discuss the administrative and operational concerns of the Association. The meeting also served the purpose of bringing members together again in order to recollect faces and names afresh. A few members were presents for the meeting due to reasons of bad network and unavoidable engagements among other reasons. Some important issues were discussed extensively while opinions, suggestions and decisions were made on behalf of the Association. However, some of the issues were still left open to further discussions and suggestions to allow for a larger participation of other members. Other agenda items were left for discussion during the next meeting for obvious reasons."}, {"k": "h", "t": "ITEM 1. WAYS OF BRINGING OTHER MEMBERS ON BOARD"}, {"k": "p", "n": "2.", "t": "The issues of other members who are yet to be on the group forum as well as those who have not been reached out to were discussed. The aim of this was to find out ways to bring such members on board. It would also help to determine how members could be keeping in touch with each other."}, {"k": "p", "n": "3.", "t": "It was noted that many members are yet to join up the group forum while others were have not been contacted. The fact that so many members may not even have phones that allow access to WhatsApp was also noted. The need to have smaller groups according to regions or states who would appoint excos that could deliberately search for other members and bring them on board was suggested. It was also observed that the type of the get – together recently held in Akure may be maintained by each smaller chapters while individual members could volunteer to host such occasion. Other suggestions include each regional groups having their own WhatsApp groups for dissemination of information. However, it was observed that there is an urgent need to have a nominal roll containing all members of 2003 MMGS set so that detail crusade could be carried out to get across to all members."}, {"k": "p", "n": "4.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "A detailed nominal roll for 2003 MMGS set was to be written not later than 15 March 2022 by Olaoluwa Akinjeji."}, {"k": "li", "l": 1, "m": "b.", "t": "States or regions such as Akure, Ogun, Lagos, Okitipupa (home base), Igbokoda etc were to organize themselves into smaller groups, create WhatsApp groups (if possible), appoint interim regional excos and host periodic get-togethers."}, {"k": "li", "l": 1, "m": "c.", "t": "State/regional excos were to ensure they brought other members within their regions on board."}, {"k": "h", "t": "ITEM 2. WELFARE TO ASSIST FELLOW MEMBERS"}, {"k": "p", "n": "5.", "t": "The next agenda item which was about the welfare of fellow members was discussed. This was to ensure that members who are in ‘opportunistic positions’ such as position of power, employment, financial buoyancy and other positive social status provide assistance to members who may be in need at any given time."}, {"k": "p", "n": "6.", "t": "It was opined that one of the most important focus of this association is the need to show care, concerns and compassion to fellow members when they are genuinely in need. It was also suggested that funerals, birthdays and wedding ceremonies among others should be celebrated with other colleagues when necessary. Publicity works such as job placements were suggested to be regularly done in order to inform members who needed them. Empowerment programs such as POS business was suggested for interested persons. It was however noted that there is the need to set up committee to follow up such programs to ensure that money voted was used for the intended purposes. It was agreed that members should not shy away from bringing up their issues to the floor when necessary."}, {"k": "p", "n": "7.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to post verified job placements on the group chat for the benefits of interested members."}, {"k": "li", "l": 1, "m": "b.", "t": "Members were to bring forward their issues when necessary."}, {"k": "li", "l": 1, "m": "c.", "t": "Members were to show concerns, care and celebrate with other members whenever the need arises."}, {"k": "h", "t": "ITEM 3. EXECUTIVE OFFICERS"}, {"k": "p", "n": "8.", "t": "Members brainstormed on the need for excos for the association. This was to ensure that such excos were saddled with the responsibilities of the association. The excos were also necessary to power several programs and also ensure more members were brought on board."}, {"k": "p", "n": "9.", "t": "Members generally agreed that the need for excos cannot be overemphasised. They opined that committed and dedicated excos would serve as the power house of the association. However, it was observed that the association was not yet ripe for substantive excos at this infertile stage. Interim excos or committees were therefore suggested. Members such as Olaoluwa, Obolo, Atinuke, Akunyemi, Helen and Damilare were nominated to act as interim excos pending the time when a formal election would be held for substantive excos."}, {"k": "p", "n": "10.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Interim excos be constituted pending a time when a formal election would be held."}, {"k": "li", "l": 1, "m": "b.", "t": "Olaoluwa, Obolo, Atinuke, Akunyemi, Helen and Damilare were to act as interim excos with immediate effect."}, {"k": "h", "t": "ITEM 4. REGULATION OF MESSAGES TO BE POSTED ON THE GROUP CHAT"}, {"k": "p", "n": "11.", "t": "The need to regulate the messages being posted on the group was brought to fore. This was to prevent avoidable conflicts and frictions among members. It was also to prevent fraudulent, untoward political and religious messages capable of inciting crisis among members."}, {"k": "p", "n": "12.", "t": "It was noted that certain messages could be offensive, defamatory or fraudulent. Such messages were observed to be capable of misleading the public and inciting crisis. However, it was agreed that all messages regarding old memories in MMGS were completely allowed to be posted on the group chat in order to bring back old memories and for the purpose of fun so as to keep the group lively. Political or religious messages were considered too sensitive to the usual divergent opinions and beliefs of people and were therefore discouraged. Meanwhile, members opined that all goodwill messages, job placements, business adverts and life lesson messages would all be welcomed on the group chat. Salacious messages may not be acceptable in this regards as suggested. However, it was opined that members were to kindly correct defaulters in love when such unacceptable messages were posted to avoid unnecessary rancour and frictions."}, {"k": "p", "n": "13.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "All MMGS related messages were allowed to be posted on the group."}, {"k": "li", "l": 1, "m": "b.", "t": "Sensitive political and religious messages must not be posted on the group chat."}, {"k": "li", "l": 1, "m": "c.", "t": "Life lesson messages, job placements, goodwill messages and business adverts were allowed to be posted on the group chat."}, {"k": "li", "l": 1, "m": "d.", "t": "Defaulting members were to be kindly corrected in love."}, {"k": "h", "t": "ITEM 5. AIONIAN 2022"}, {"k": "p", "n": "14.", "t": "The task ahead of the association regarding AIONIAN 2022 was extensively discussed. This was to ensure that the association was fully represented in the scheme of things at the larger national body of MMGS Old Students Association. It would also provide the opportunity for own set to contribute her quota to the hosting of the AIONIAN as well as the general infrastructural development of the school."}, {"k": "p", "n": "15.", "t": "It was made known to members that the national body of MMGS Alumni has mandated all sets to contribute a minimum sum of Four Hundred Thousand Naira (N400,000.00) as support for the smooth hosting of the AIONIAN Festival. Many sets were observed to have contributed more than this benchmark while others have simply contributed the exact amount. It was also noted that individuals have also made handsome donations and carried out personal projects in the school. However, members were advised to support collective donations in order to bring out the unity of own set rather than projecting individual glories that could be interpreted as personal financial braggadocio. In this regards, it was deliberated that members would not be requested to contribute any specific amount but to simply give whatever they could afford in support of the program. It was opined that a committee be set up to galvanize support for the project and to post an account for members to make their donations immediately as the AIONIAN comes up from 10 – 13 March 2022. It was also advised that list of contributors be kept but should not be displayed on the group chat so as not to discourage others. Members basically nominated the earlier suggested interim excos to also handle the collection and management of the donations."}, {"k": "p", "n": "16.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to contribute whatever they could afford to the AIONIAN project not later than 5 March 2022."}, {"k": "li", "l": 1, "m": "b.", "t": "Interim excos were to display an account number on the group chat for the collection of all donations, maintain a good record and liaise with the national alumni body accordingly not later than 28 February 2022."}, {"k": "h", "t": "SUMMARY OF MAJOR DECISIONS"}, {"k": "p", "n": "17.", "t": "The following are the summary of the major decisions:"}, {"k": "li", "l": 1, "m": "a.", "t": "All members were to:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Organize themselves into states or regions such as Akure, Ogun, Lagos, Okitipupa (home base), Igbokoda etc as smaller groups, create WhatsApp groups (if possible), appoint interim regional excos and host periodic get-togethers."}, {"k": "li", "l": 2, "m": "(2)", "t": "Post verified job placements on the group chat for the benefits of interested members."}, {"k": "li", "l": 2, "m": "(3)", "t": "Bring forward their issues when necessary."}, {"k": "li", "l": 2, "m": "(4)", "t": "Show concerns, care and celebrate with other members whenever the need arises."}, {"k": "li", "l": 2, "m": "(5)", "t": "Ensure that interim excos were constituted pending a time when a formal election would be held."}, {"k": "li", "l": 2, "m": "(6)", "t": "All MMGS related messages were allowed to be posted on the group."}, {"k": "li", "l": 2, "m": "(7)", "t": "Ensure that sensitive political and religious messages were not posted on the group chat."}, {"k": "li", "l": 2, "m": "(8)", "t": "Ensure that life lesson messages, job placements, goodwill messages and business adverts were allowed to be posted on the group chat."}, {"k": "li", "l": 2, "m": "(9)", "t": "Ensure that defaulting members were kindly corrected in love."}, {"k": "li", "l": 2, "m": "(10)", "t": "Contribute whatever they could afford to the AIONIAN project not later than 5 March 2022."}, {"k": "li", "l": 1, "m": "b.", "t": "A detailed nominal roll for 2003 MMGS set was to be written not later than 15 March 2022 by Akinjeji Olaoluwa."}, {"k": "li", "l": 1, "m": "c.", "t": "State/regional excos were to ensure they brought other members within their regions on board."}, {"k": "li", "l": 1, "m": "d.", "t": "Olaoluwa, Obolo, Atinuke, Akunyemi, Helen and Damilare were to act as interim excos with immediate effect."}, {"k": "p", "t": "OBOLO AKINBOWALE Secretary"}]}, {"id": "interim-2025", "date": "26 December 2025", "title": "Interim committee meeting", "sub": "Held virtually", "blocks": [{"k": "p", "t": "See Distribution 29 December 2025"}, {"k": "h", "t": "MINUTES OF INTERIM COMMITTEE MEETING OF 1997/2003 SET OF MANUWA MEMORIAL GRAMMAR SCHOOL OLD STUDENTS ASSOCIATION HELD VIRTUALLY ON 26 DECEMBER 2025"}, {"k": "p", "t": "Present: Ikuemola Orimisan Germany Co-host"}, {"k": "p", "t": "(Not for all agenda item)"}, {"k": "p", "t": "Akinjeji Olaoluwa Lagos"}, {"k": "p", "t": "Akunyemi Ayokunle Ogun State"}, {"k": "p", "t": "Iwajubu Gbenga Akure (Not for all agenda items)"}, {"k": "p", "t": "Lebile Folarin Ibadan"}, {"k": "p", "t": "Akinrogunde Iyabo Akungba Akoko"}, {"k": "p", "t": "Onos Helen Okitipupa"}, {"k": "p", "t": "Obukajeta James Lagos"}, {"k": "p", "t": "Ijimakinwa Segun Akure (Not for all agenda items)"}, {"k": "p", "t": "Adeyehun Kemi UK"}, {"k": "p", "t": "Ololajulo Oluremi Akure"}, {"k": "p", "t": "Ogunmefun Ayodeji South Africa (Not for all agenda items)"}, {"k": "p", "t": "Olatuyi Seun Lagos"}, {"k": "p", "t": "Ogunyakin Kehinde Ibadan"}, {"k": "p", "t": "Penne Abigail Lagos (Not for all agenda item)"}, {"k": "p", "t": "Damilare Omotimehin Lagos (Not for all agenda item)"}, {"k": "p", "t": "Netufo Bamise Ogun"}, {"k": "p", "t": "Aworetan Sola Lagos"}, {"k": "p", "t": "Obolo Akinbowale India Host/Secretary"}, {"k": "h", "t": "INTRODUCTION"}, {"k": "p", "n": "1.", "t": "The interim committee members of 2003 set of MMGS Old Students Alumni held a virtual meeting on 26 December 2025 at 6:30pm. The aim of the meeting was to discuss the administrative and operational concerns of the Association. The meeting also served the purpose of addressing issues and challenges identified to have been drawing back the Association. Majority of members were present while a few others could not attend due to bad network and unavoidable engagements among others. Some important issues were discussed extensively while opinions, suggestions and decisions were made on behalf of the Association. However, some of the issues were still left open to further discussions and suggestions to allow for a larger participation of other members. Other agenda items were left for discussion during the next meeting for obvious reasons."}, {"k": "h", "t": "ITEM 1. OPENING AND SUPPORTING REMARKS"}, {"k": "p", "n": "2.", "t": "The Co – host and the Host commenced the meeting with opening and supporting remarks respectively. The Co – host thanked all members present in the meeting and commended them for their commitments so far. He clearly stated the purpose of the meeting and urged members to contribute meaningfully to discussion during the meeting. He also enjoyed members to continue to support the activities of the Association."}, {"k": "p", "n": "3.", "t": "Similarly, the Host thanked all members for their support and presence. He then reminded members of the journey so far, itemised what has been achieved and identified challenges. He further emphasised the need for urgency of actions to revive the group, reinforced the vision and purpose of the group while also stating the way ahead. Some of the details are as stated below:"}, {"k": "li", "l": 1, "m": "a.", "t": "Achievements include establishment of the WhatsApp group to reunite members, reasonable attendance of members’ ceremonies, establishment of a contributory welfare scheme and a draft regulatory document among others."}, {"k": "li", "l": 1, "m": "b.", "t": "Identified issues include:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Low participation in group discussions."}, {"k": "li", "l": 2, "m": "(2)", "t": "Poor attendance of members’ events."}, {"k": "li", "l": 2, "m": "(3)", "t": "Inconsistent dues/welfare contributions."}, {"k": "li", "l": 2, "m": "(4)", "t": "Some members unreachable/uncommitted."}, {"k": "li", "l": 2, "m": "(5)", "t": "Communication gap and misinformation."}, {"k": "li", "l": 2, "m": "(6)", "t": "Lack of structured leadership roles."}, {"k": "h", "t": "ITEM 2. DECISION MAKING PROCESS"}, {"k": "p", "n": "5.", "t": "It was observed that the group’s decision making and execution mechanism present a major challenge to the Association. It was agreed that group requires a transparent, well thought out and all-inclusive decision-making process. To this end, it was decided that an active excos be nominated and presented for the whole house’s approval. Accordingly, members were nominated to take up various excos positions."}, {"k": "p", "n": "6.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Akinjeji Olaoluwa was to work out modalities for the nomination of members to fill up any vacant regional coordinators position."}, {"k": "li", "l": 1, "m": "b.", "t": "The list of excos nominees was to be presented in the full house for ratification/approval."}, {"k": "li", "l": 1, "m": "c.", "t": "The following members were nominated for the appointments against their names:"}, {"k": "li", "l": 2, "m": "(1)", "t": "President - Akinjeji Olaoluwa."}, {"k": "li", "l": 2, "m": "(2)", "t": "Vice President - Onos Helen."}, {"k": "li", "l": 2, "m": "(3)", "t": "Gen Secretary - Obolo Akinbowale."}, {"k": "li", "l": 2, "m": "(4)", "t": "Asst Gen Sec - Olowogboye Sola."}, {"k": "li", "l": 2, "m": "(5)", "t": "Treasurer - Iyabo Akinrogunde."}, {"k": "li", "l": 2, "m": "(6)", "t": "Fin Sec - Lebile Folarin."}, {"k": "li", "l": 2, "m": "(7)", "t": "Welfare Dir Male - Ololajulo Oluremi."}, {"k": "li", "l": 2, "m": "(8)", "t": "Welfare Dir Female - Oluwole Atinuke."}, {"k": "li", "l": 2, "m": "(9)", "t": "Publicity Sec - Akunyemi Ayokunle."}, {"k": "li", "l": 2, "m": "(10)", "t": "Asst Pub Sec - Omotimehin Damilare"}, {"k": "li", "l": 2, "m": "(11)", "t": "Dir of Social - Owuru Peter."}, {"k": "li", "l": 2, "m": "(12)", "t": "Asst Dir of Social - Konye Owoyemi"}, {"k": "li", "l": 2, "m": "(13)", "t": "Dir Fundraising - Ijimakinwa Segun."}, {"k": "li", "l": 2, "m": "(14)", "t": "Asst Dir Fundraising - Ojajuni Ope."}, {"k": "li", "l": 2, "m": "(15)", "t": "Dir of Mobilisation - Akinwale Oluwole."}, {"k": "li", "l": 2, "m": "(16)", "t": "Asst Dir of Mobilisation - Ogunmola Simbo."}, {"k": "li", "l": 2, "m": "(16)", "t": "Head of Protocol - Netufo Bamise."}, {"k": "li", "l": 2, "m": "(18)", "t": "Asst Head of Protocol - Olatuyi Seun."}, {"k": "li", "l": 2, "m": "(19)", "t": "Diaspora Coordinators - Ikuemola Orimisan and Adeyehun Kemi."}, {"k": "li", "l": 2, "m": "(20)", "t": "Okitipupa/Ore Coords - Ijimakinwa Idowu and Ayetiran Dele"}, {"k": "li", "l": 2, "m": "(21)", "t": "Lagos Coords - Obukajeta James and Penne Abigail"}, {"k": "li", "l": 2, "m": "(22)", "t": "Akure/Ondo Coords - Iwajubu Gbenga and Akinyode Seyi"}, {"k": "li", "l": 2, "m": "(23)", "t": "Ilaje/Ise Odo Coords - Sola Aworetan and Olomu Roseline"}, {"k": "li", "l": 2, "m": "(24)", "t": "Osun/Oyo Coords - Abilawon Seun and Ogunyakin Kehinde"}, {"k": "li", "l": 2, "m": "(25)", "t": "Abuja/North Coord - Bajowa Kikelomo"}, {"k": "li", "l": 2, "m": "(26)", "t": "East/South-South Coords - Sado Endurance and Ife Fasuyi"}, {"k": "li", "l": 2, "m": "(27)", "t": "Ogun Coords - Adeyemi Iyadunni and Dare George."}, {"k": "li", "l": 2, "m": "(28)", "t": "Owo/Akoko Region Coord - Akindele Sunday."}, {"k": "li", "l": 2, "m": "(29)", "t": "Director of Projects - Iluyemi Bunmi"}, {"k": "li", "l": 2, "m": "(30)", "t": "Asst Dir of Projects - Ogunmefun Ayodeji"}, {"k": "li", "l": 2, "m": "(31)", "t": "Director of Career and Business Empowerment"}, {"k": "p", "t": "- Ololajulo Oluremi"}, {"k": "li", "l": 2, "m": "(32)", "t": "Asst Dir of Career and Business Empowerment"}, {"k": "p", "t": "- Ijimakinwa Seun"}, {"k": "h", "t": "ITEM 3. CONTRIBUTORY WELFARE SCHEME"}, {"k": "p", "n": "7.", "t": "The issue of contributory welfare scheme was discussed extensively. It was generally agreed that the scheme was highly necessary for the funding of various activities of the group. The scheme was also agreed to be used to permanently replace emergency contributions once it has been well funded for at least a year. Members were therefore urged not only to make their one thousand Naira monthly contributions but to also encourage other members to do so promptly. However, the need to open and maintain and association account was emphasised. Other means and avenues to generate fund were also itemised."}, {"k": "p", "n": "8.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to promptly make their monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "b.", "t": "The scheme was to be used to fund all activities with effect from January 2027 immediately after which emergency contributions were to be discontinued."}, {"k": "li", "l": 1, "m": "c.", "t": "Various actions as listed below were to be used to fund the scheme:"}, {"k": "li", "l": 2, "m": "(1)", "t": "₦1,000 monthly contributory plan."}, {"k": "li", "l": 2, "m": "(2)", "t": "Seeking support from successful VIPs and non – members."}, {"k": "li", "l": 2, "m": "(3)", "t": "Corporate sponsorship for charity activities."}, {"k": "li", "l": 2, "m": "(4)", "t": "Alumni dinner/fundraising gala once a year."}, {"k": "li", "l": 2, "m": "(5)", "t": "Launch branded items (T-shirts, caps, notebooks)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Social media crowdfunding for humanitarian projects."}, {"k": "li", "l": 2, "m": "(7)", "t": "Grant applications through NGOs/government youth support programmes."}, {"k": "li", "l": 2, "m": "(8)", "t": "Personal donations from able and willing members"}, {"k": "li", "l": 1, "m": "d.", "t": "Excos were to provide clear financial transparency including:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Monthly report of inflows/outflows."}, {"k": "li", "l": 2, "m": "(2)", "t": "Committee approval for any disbursement."}, {"k": "li", "l": 2, "m": "(3)", "t": "Audit once a year."}, {"k": "li", "l": 1, "m": "e.", "t": "Use of funds was to include:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Support for members in need in accordance with the regulatory document."}, {"k": "li", "l": 2, "m": "(2)", "t": "Humanitarian outreach."}, {"k": "li", "l": 2, "m": "(3)", "t": "Alumni support to MMGS projects."}, {"k": "h", "t": "ITEM 4. GROUP ACTIVITIES"}, {"k": "p", "n": "9.", "t": "The need to emplace measures for maximum participation and liveliness of the group's WhatsApp platform was discussed. Various measures were suggested for immediate implementation. This was to encourage members to indulge in various activities. Additionally, low turnouts to members' events and generally poor financial/social commitment of some members were extensively discussed. Members were therefore encouraged to consider the collective mission and purpose of the group for maximum participation. Some of the suggested measures for group engagements include simple but regular posts like inspirations, career tips, birthdays and memory throwbacks; encouragement of open ended conversation topics e.g. ‘what is one win this week? And share a childhood memory from school’. Other suggestions include highlighting members’ achievements and monthly challenges such as ‘reconnect with a classmate and bring them back to the group."}, {"k": "p", "n": "10.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "A participatory data was to be opened, maintained and updated from time to time."}, {"k": "li", "l": 1, "m": "b.", "t": "A 'Call your Classmates Challenge' was to be launched with effect from January 2026 and conducted every month. Members were to be requested to reach out to a member and same recorded. The member called in the previous month was to be different from the next month."}, {"k": "li", "l": 1, "m": "c.", "t": "A weekly group activity schedule was to be prepared while Two members were to be detailed monthly to coordinate such activities and ensure liveliness of the group."}, {"k": "h", "t": "ITEM 5. UNADDRESSED ISSUES"}, {"k": "p", "n": "11.", "t": "The need to address certain complaints and disagreements was brought to fore. This was necessary to reunite members, avoid resentment and prevent future occurrence. Matters such as the sharing formula of some contributed funds and the group's failure to respond to some members' invitations for their ceremonies were considered."}, {"k": "p", "n": "12.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "A letter of apology was to be written to affected members."}, {"k": "li", "l": 1, "m": "b.", "t": "A specific amount of cash token was to be disbursed to the affected members as soon as the welfare scheme was matured for use, subject to approval of members."}, {"k": "li", "l": 1, "m": "c.", "t": "The balance of the cash for the last contribution was to be refunded to the 2 affected members."}, {"k": "h", "t": "ITEM 6. GROUP ACCOUNT"}, {"k": "p", "n": "13.", "t": "The need to open an association account was considered. This was necessary considering the need for the association to be more corporate, responsible and transparent. Accordingly, various requirements for opening of the account were discussed. Additionally, the need to open the account with a significant amount of money was considered."}, {"k": "p", "n": "14.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "The Sec was to collate all requirements and ensure the opening of the account not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "b.", "t": "The account signatories were to be decided and requested to provide the necessary documents for the account opening not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "c.", "t": "Arrangements were to be made to get a letter of introduction in respect of the group from MMGS Principal not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "d.", "t": "An application letter was to be prepared with regards to the opening of the account."}, {"k": "li", "l": 1, "m": "e.", "t": "The Sec was to coordinate the raising of a minimum of N200, 000 for the account through donations from willing members, friends and associates not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "f.", "t": "The Sec was to prepare a suitable letter for public fund raising as soon as possible."}, {"k": "h", "t": "ITEM 7. REGIONAL COORDINATION AND MOBILISATION"}, {"k": "p", "n": "15.", "t": "The fact that many members have not been connected to the group’s WhatsApp platform for various reasons was widely deliberated. Factors such as lack of smart phones, lack of awareness, disagreement and inferiority complex among others were adduced as reasons why some members have stayed away or left the group. The need for members to also observe activities such as ‘meet and greet’, regional reunion or get-to-gether was well noted."}, {"k": "p", "n": "16.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Each region was to maintain updated list of members."}, {"k": "li", "l": 1, "m": "b.", "t": "Regions were to plan quarterly meet – ups/visits within regions."}, {"k": "li", "l": 1, "m": "c.", "t": "Regions were to mobilise members for events within regions."}, {"k": "li", "l": 1, "m": "d.", "t": "The Sec was to work out modalities for the planning and execution of group reunion event at any suitable time in 2026."}, {"k": "li", "l": 1, "m": "e.", "t": "Members were to reach out to all missing members."}, {"k": "li", "l": 1, "m": "f.", "t": "Members were to re-engage those who left the group due to misunderstanding or silence."}, {"k": "li", "l": 1, "m": "g.", "t": "The group was to reach out to the children of late members, if any, not later than 31 January 2026."}, {"k": "li", "l": 1, "m": "h.", "t": "The group was to launch a ’30 – day Bring Back of Classmates’ challenge with effect from 2 January 2026."}, {"k": "li", "l": 1, "m": "i.", "t": "The Sec was to prepare the following supporting tool, forms and templates:"}, {"k": "li", "l": 2, "m": "(1)", "t": "WhatsApp weekly engagement template."}, {"k": "li", "l": 2, "m": "(2)", "t": "Membership Data Form (to build complete updated database)."}, {"k": "li", "l": 2, "m": "(3)", "t": "Regional coordinator sheet (track reach and mobilisation)."}, {"k": "li", "l": 2, "m": "(4)", "t": "Welfare fund ledger (financial transparency)."}, {"k": "li", "l": 2, "m": "(5)", "t": "Attendance and Event Support Register (commitment tracking)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Any other document suitable for the smooth running of the group."}, {"k": "li", "l": 1, "m": "j.", "t": "Aworetan Sola was to reach out to Egbowon Margret and give feedbacks afterwards."}, {"k": "li", "l": 1, "m": "k.", "t": "Names and phone numbers of our teachers were to be collated and presented to the group."}, {"k": "li", "l": 1, "m": "l.", "t": "Obukajeta James was to get his sister to join the group not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "m.", "t": "Social directors were to work out modalities to ensure maximum attendance of members’ events and group events on final approval of their appointments and feedback the group not later than 15 January 2026."}, {"k": "h", "t": "ITEM 8. ANY OTHER BUSINESS"}, {"k": "p", "n": "17.", "t": "The meeting was adjourned to January 2026 (date was to be communicated later)"}, {"k": "h", "t": "SUMMARY OF MAJOR DECISIONS"}, {"k": "p", "n": "18.", "t": "All members were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Approve the following members nominated for the appointments against their names:"}, {"k": "li", "l": 2, "m": "(1)", "t": "President - Akinjeji Olaoluwa."}, {"k": "li", "l": 2, "m": "(2)", "t": "Vice President - Onos Helen."}, {"k": "li", "l": 2, "m": "(3)", "t": "Gen Secretary - Obolo Akinbowale."}, {"k": "li", "l": 2, "m": "(4)", "t": "Asst Gen Sec - Olowogboye Sola."}, {"k": "li", "l": 2, "m": "(5)", "t": "Treasurer - Iyabo Akinrogunde."}, {"k": "li", "l": 2, "m": "(6)", "t": "Fin Sec - Lebile Folarin."}, {"k": "li", "l": 2, "m": "(7)", "t": "Welfare Dir Male - Ololajulo Oluremi."}, {"k": "li", "l": 2, "m": "(8)", "t": "Welfare Dir Female - Oluwole Atinuke."}, {"k": "li", "l": 2, "m": "(9)", "t": "Publicity Sec - Akunyemi Ayokunle."}, {"k": "li", "l": 2, "m": "(10)", "t": "Asst Pub Sec - Omotimehin Damilare"}, {"k": "li", "l": 2, "m": "(11)", "t": "Dir of Social - Owuru Peter."}, {"k": "li", "l": 2, "m": "(12)", "t": "Asst Dir of Social - Konye Owoyemi"}, {"k": "li", "l": 2, "m": "(13)", "t": "Dir Fundraising - Ijimakinwa Segun."}, {"k": "li", "l": 2, "m": "(14)", "t": "Asst Dir of Fundraising - Ojajuni Ope"}, {"k": "li", "l": 2, "m": "(15)", "t": "Dir of Mobilisation - Akinwale Oluwole."}, {"k": "li", "l": 2, "m": "(16)", "t": "Asst Dir of Mobilisation - Ogunmola Simbo."}, {"k": "li", "l": 2, "m": "(17)", "t": "Head of Protocol - Netufo Bamise."}, {"k": "li", "l": 2, "m": "(18)", "t": "Asst Head of Protocol - Olatuyi Seun."}, {"k": "li", "l": 2, "m": "(19)", "t": "Diaspora Coordinator - Ikuemola Orimisan and Adeyehun Kemi."}, {"k": "li", "l": 2, "m": "(20)", "t": "Okitipupa/Ore Coords - Ijimakinwa Idowu and Ayetiran Dele."}, {"k": "li", "l": 2, "m": "(21)", "t": "Lagos Coords - Obukajeta James and Penne Abigail"}, {"k": "li", "l": 2, "m": "(22)", "t": "Akure/Ondo Coords - Iwajubu Gbenga and Akinyode Seyi"}, {"k": "li", "l": 2, "m": "(23)", "t": "Ilaje/Ise Odo Coords - Sola Aworetan and Olomu Roseline"}, {"k": "li", "l": 2, "m": "(24)", "t": "Osun/Oyo Coords - Abilawon Seun and Ogunyakin Kehinde"}, {"k": "li", "l": 2, "m": "(25)", "t": "Abuja/North Coords - Bajowa Kikelomo"}, {"k": "li", "l": 2, "m": "(26)", "t": "East/South-South Coords - Sado Endurance and Ife Fasuyi."}, {"k": "li", "l": 2, "m": "(27)", "t": "Ogun Coords - Adeyemi Iyadunni and Dare George."}, {"k": "li", "l": 2, "m": "(28)", "t": "Owo/Akoko Coord - Akindele Sunday."}, {"k": "li", "l": 2, "m": "(29)", "t": "Director of Projects - Iluyemi Bunmi"}, {"k": "li", "l": 2, "m": "(30)", "t": "Asst Dir of Projects - Ogunmefun Ayodeji"}, {"k": "li", "l": 2, "m": "(31)", "t": "Director of Career and Business Empowerment"}, {"k": "p", "t": "- Ololajulo Oluremi."}, {"k": "li", "l": 2, "m": "(32)", "t": "Asst Dir of Career and Business Empowerment"}, {"k": "p", "t": "- Ijimakinwa Seun"}, {"k": "li", "l": 1, "m": "b.", "t": "Make their monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "c.", "t": "Note that the scheme was to be used to fund all activities with effect from January 2027 immediately after which emergency contributions were to be discontinued."}, {"k": "li", "l": 1, "m": "d.", "t": "Note that various actions as listed below were to be used to fund the scheme:"}, {"k": "li", "l": 2, "m": "(1)", "t": "₦1,000 monthly contributory plan."}, {"k": "li", "l": 2, "m": "(2)", "t": "Seeking support from successful VIPs and non – members."}, {"k": "li", "l": 2, "m": "(3)", "t": "Corporate sponsorship for charity activities."}, {"k": "li", "l": 2, "m": "(4)", "t": "Alumni dinner/fundraising gala once a year."}, {"k": "li", "l": 2, "m": "(5)", "t": "Launch branded items (T-shirts, caps, notebooks)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Social media crowdfunding for humanitarian projects."}, {"k": "li", "l": 2, "m": "(7)", "t": "Grant applications through NGOs/government youth support programmes."}, {"k": "li", "l": 2, "m": "(8)", "t": "Personal donations from able and willing members"}, {"k": "li", "l": 1, "m": "e.", "t": "Note that use of funds was to include:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Support for members in need in accordance with the regulatory document."}, {"k": "li", "l": 2, "m": "(2)", "t": "Humanitarian outreach."}, {"k": "li", "l": 2, "m": "(3)", "t": "Alumni support to MMGS projects."}, {"k": "li", "l": 1, "m": "f.", "t": "Reach out to all missing members."}, {"k": "li", "l": 1, "m": "g.", "t": "Re-engage those who left the group due to misunderstanding or silence."}, {"k": "p", "n": "19.", "t": "Excos were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Provide clear financial transparency including:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Monthly report of inflows/outflows."}, {"k": "li", "l": 2, "m": "(2)", "t": "Committee approval for any disbursement."}, {"k": "li", "l": 2, "m": "(3)", "t": "Audit once a year."}, {"k": "li", "l": 1, "m": "b.", "t": "Launch a 'Call your Classmates Challenge' with effect from January 2026 and conducted every month. Members were to be requested to reach out to a member and same recorded. The member called in the previous month was to be different from the next month."}, {"k": "li", "l": 1, "m": "c.", "t": "Disburse a specific amount of cash token to the affected members as soon as the welfare scheme was matured for use, subject to approval of members."}, {"k": "li", "l": 1, "m": "d.", "t": "Refund the balance of the cash for the last contribution to the 2 affected members"}, {"k": "li", "l": 1, "m": "e.", "t": "Decide on and request the account signatories to provide the necessary documents for the account opening not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "f.", "t": "The group was to launch a ’30 – day Bring Back of Classmates challenge with effect from 2 January 2026."}, {"k": "p", "n": "20.", "t": "Akinjeji Olaoluwa was to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Work out modalities for the nomination of members to fill up any vacant positions of regional coordinators."}, {"k": "li", "l": 1, "m": "b.", "t": "Make arrangements to get a letter of introduction in respect of the group from MMGS Principal not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "c.", "t": "Ensure that the group reaches out to the children of late members, if any, not later than 31 January 2026."}, {"k": "p", "n": "21.", "t": "Regions were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Maintain updated list of members."}, {"k": "li", "l": 1, "m": "b.", "t": "Plan quarterly meet – ups/visits within regions."}, {"k": "li", "l": 1, "m": "c.", "t": "Mobilise members for events within regions."}, {"k": "p", "n": "22.", "t": "Aworetan Sola was to reach out to Egbowon Margret and give feedbacks afterwards."}, {"k": "p", "n": "23.", "t": "Names and phone numbers of our teachers were to be collated and presented to the group."}, {"k": "p", "n": "24.", "t": "Obukajeta James was to get his sister to join the group not later than 15 January 2026."}, {"k": "p", "n": "25.", "t": "Social directors were to work out modalities to ensure maximum attendance of members’ events and group events on final approval of their appointment and feedback the group not later than 15 January 2026."}, {"k": "p", "n": "26.", "t": "The Secretary was to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Present the list of excos nominees in the full house for ratification/approval."}, {"k": "li", "l": 1, "m": "b.", "t": "Ensure that a participatory data was opened, maintained and updated from time to time."}, {"k": "li", "l": 1, "m": "c.", "t": "Prepare a weekly group activity schedule and ensure Two members were detailed monthly to coordinate such activities and ensure liveliness of the group."}, {"k": "li", "l": 1, "m": "d.", "t": "Write a letter of apology to affected members."}, {"k": "li", "l": 1, "m": "e.", "t": "Collate all requirements and ensure the opening of the account not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "g.", "t": "Prepare an application letter with regards to opening of the account."}, {"k": "li", "l": 1, "m": "h.", "t": "Coordinate the raising of a minimum of N200, 000 for the account through donations from willing members, friends and associates not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "i.", "t": "Prepare a suitable letter for public fund raising as soon as possible."}, {"k": "li", "l": 1, "m": "k.", "t": "Work out modalities for the planning and execution of group reunion event any suitable time in 2026."}, {"k": "li", "l": 1, "m": "l.", "t": "Prepare the following supporting tool, forms and templates:"}, {"k": "li", "l": 2, "m": "(1)", "t": "WhatsApp weekly engagement template."}, {"k": "li", "l": 2, "m": "(2)", "t": "Membership Data Form (to build complete updated database)."}, {"k": "li", "l": 2, "m": "(3)", "t": "Regional coordinator sheet (track reach and mobilisation)."}, {"k": "li", "l": 2, "m": "(4)", "t": "Welfare fund ledger (financial transparency)."}, {"k": "li", "l": 2, "m": "(5)", "t": "Attendance and Event Support Register (commitment tracking)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Any other document suitable for the smooth running of the group."}, {"k": "p", "t": "OBOLO AKINBOWALE Secretary/Host"}]}, {"id": "general-2026", "date": "8 February 2026", "title": "General meeting", "sub": "Held virtually", "blocks": [{"k": "p", "t": "February 2026"}, {"k": "h", "t": "MINUTES OF GENERAL MEETING OF 1997/2003 SET OF MANUWA MEMORIAL GRAMMAR SCHOOL OLD STUDENTS ASSOCIATION HELD VIRTUALLY ON 8 FEBRUARY 2026"}, {"k": "p", "t": "Present: Akinjeji Olaoluwa Lagos Chairman"}, {"k": "p", "t": "Onos Helen Okitipupa Vice Chairman Akunyemi Ayokunle Ogun State Pub Sec"}, {"k": "p", "t": "Iwajubu Gbenga Akure (Not for all agenda items) Akure/Ondo Coord"}, {"k": "p", "t": "Lebile Folarin Ibadan Fin Sec"}, {"k": "p", "t": "Akinrogunde Iyabo Akungba Akoko Treasure"}, {"k": "p", "t": "Ogunmola Simbo Ogun State Asst Dir Mob"}, {"k": "p", "t": "Obukajeta James Lagos Lagos Coord"}, {"k": "p", "t": "Ijimakinwa Segun Akure (Not for all agenda items) Dir Fundraising"}, {"k": "p", "t": "Oluwole Tinuke UK Welfare Dir Female"}, {"k": "p", "t": "Ololajulo Oluremi Akure Welfare Dir Male"}, {"k": "p", "t": "Ogunmefun Ayodeji South Africa (Not for all agenda items) Asst Dir of Projects"}, {"k": "p", "t": "Ojajuni Opeoluwa Oyo State Asst Dir Fundraising"}, {"k": "p", "t": "Ogunyakin Kehinde Ibadan Coord Oyo/Osun"}, {"k": "p", "t": "Konye Owoyemi Lagos Asst Dir of Social"}, {"k": "p", "t": "Abilawon Seun Ibadan Oyo/Osun Coord"}, {"k": "p", "t": "Netufo Bamise Ogun Head of Protocol"}, {"k": "p", "t": "Aworetan Sola Lagos (Not for all agenda items) Ilaje/Ese Odo Coord"}, {"k": "p", "t": "Ikuemola Orimisan Germany (Not for all agenda items) Diaspora Coord"}, {"k": "p", "t": "Bakare Mubarak Lagos (Not for all agenda items) Member"}, {"k": "p", "t": "Olomu Roseline Igbokoda (Not for all agenda items) Ilaje/Ese Odo Coord"}, {"k": "p", "t": "Akindele Sunday Akungba (Not for all agenda items) Owo/Ondo North Coord"}, {"k": "p", "t": "Agbeye Lanre Akure(Not for all agenda items) Member"}, {"k": "p", "t": "Aderoloye Ayomipo Ilutitun Member"}, {"k": "p", "t": "Akinsanmi Titi Lagos Member"}, {"k": "p", "t": "Agbejoye Ayoleyi Igbokoda Member"}, {"k": "p", "t": "Dare George Ogun State Ogun Coord"}, {"k": "p", "t": "Aju Dayo Akure Member"}, {"k": "p", "t": "Aworetan Esther Igbokoda Member"}, {"k": "p", "t": "Adejayan Olutayo Member"}, {"k": "p", "t": "Daso Rotimi Lagos Member"}, {"k": "p", "t": "Ajosanmi Folukemi Member"}, {"k": "p", "t": "Adewunmi Idowu Akure Member"}, {"k": "p", "t": "Obolo Akinbowale India Gen Secretary"}, {"k": "h", "t": "ITEM 1. MINUTES OF LAST MEETING"}, {"k": "p", "n": "1.", "t": "Sequel to the opening prayer and the Chairman’s address, the minutes of the last meeting held on 26 December 2025 was read out to members. This was to recollect the major decisions taken, identify various decisions that have been implemented, those still ongoing and the ones that were yet to be achieved. Details were adopted accordingly."}, {"k": "p", "n": "2.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to pay up their N1,000 monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "b.", "t": "Excos were to take their responsibilities seriously and contribute positively to the progress and development of the Association."}, {"k": "li", "l": 1, "m": "c.", "t": "Members were to follow the Association’s Facebook page and invite their friends to do same."}, {"k": "li", "l": 1, "m": "d.", "t": "Members were to check out the list of missing members and make good efforts to reconnect them."}, {"k": "li", "l": 1, "m": "e.", "t": "Publicity Secretary was to refund the balance of N49,000 to Iwajubu Gbenga and Olatuyi Seun."}, {"k": "li", "l": 1, "m": "f.", "t": "Regional Coordinators were to take up their responsibilities, ensure mobilisation and organise periodic get – togethers."}, {"k": "li", "l": 1, "m": "g.", "t": "Social Director was to ensure maximum attendance of members’, group’s or national body’s events as required."}, {"k": "h", "t": "ITEM 2. GROUP VISION"}, {"k": "p", "n": "3.", "t": "The Group’s Vision was adequately shared during the meeting. This was to intimate members of the tasks ahead and the need to be committed to the development and progress of the Association. It was made clear that a huge, life-touching and globally recognised organisation was being built. The need to build a well-structured, united and supportive association that would remain as shining examples to others was emphasised. Members were encouraged to share job offers, business opportunities and support each others within their capacities."}, {"k": "p", "n": "4.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to share and explain the vision to new members."}, {"k": "li", "l": 1, "m": "b.", "t": "Members were to keep faith in the Association and contribute to its progess and development at all time."}, {"k": "h", "t": "ITEM 3. ACTION PLAN 2026"}, {"k": "p", "n": "5.", "t": "The need to painstakingly implement the Association’s Action Plan 2026 was discussed. This was to build a united, credible and globally recognised alumni association that supports its members, empowers future generations and gives back meaningfully to the society. Certain aspects of Branding and Visibility which have been implemented were itemised while members were encouraged to support the achievement of other aspects such as e-Brochure, google branding and website development."}, {"k": "p", "n": "6.", "t": "Other aspects such as Fundraising/Resource Mobilisation and Annual Progammes/Activities were also deliberated upon. Accordingly, the need to ensure specific activities were planned early enough for smooth execution was considered. It was therefore agreed that all necessary arrangements be put in place by concerned members for the success of the plans."}, {"k": "p", "n": "7.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to provide their details and passports when required for the development of the Association’s e-Brochure."}, {"k": "li", "l": 1, "m": "b.", "t": "Director of Fundraising was to work out modalities for better fundraising process."}, {"k": "li", "l": 1, "m": "c.", "t": "The Secretary was to prepare a letter of appreciation for the organisation that provided financial support for the Association."}, {"k": "li", "l": 1, "m": "d.", "t": "The Secretary was to prepare a fundraising support letter for members to deliver to their potential donors."}, {"k": "li", "l": 1, "m": "e.", "t": "Members were to identify generous friends, allies and corporate organisations that could support own fundraising drive and deliver the fundraising support letters to them."}, {"k": "li", "l": 1, "m": "f.", "t": "Financially capable members were to make voluntary donations to boost the Association’s account."}, {"k": "li", "l": 1, "m": "g.", "t": "The Chairman was to set up a committee to organise the Association’s reunion scheduled for April 2026."}, {"k": "li", "l": 1, "m": "h.", "t": "Welfare Directors were to come up with a specific programme/project to be executed in MMGS for Year 2026."}, {"k": "li", "l": 1, "m": "i.", "t": "Director of Social and Publicity Secretary were to ensure that all projects, programmes and events were well documented including videos and pictures."}, {"k": "li", "l": 1, "m": "j.", "t": "Excos were to ensure that action plans are prepared annually."}, {"k": "h", "t": "ITEM 4. MEMBERS OBLIGATIONS BRIEF"}, {"k": "p", "n": "8.", "t": "Members were adequately briefed on their obligations to the Association. This was to eliminate any doubt and to guide members on what was expected of them at every point in time. Accordingly, various points were itemised."}, {"k": "p", "n": "9.", "t": "Decisions. It was decided that, for the progress and development of the Association, every member was to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Participate actively in meetings, discussions and Association activities whenever called upon."}, {"k": "li", "l": 1, "m": "b.", "t": "Respond promptly to official communications, polls and calls to action."}, {"k": "li", "l": 1, "m": "c.", "t": "Pay agreed dues and contributions regularly and as at when due to support welfare and projects."}, {"k": "li", "l": 1, "m": "d.", "t": "Support Association programmes (reunions, fundraisers, projects) either physically, financially, or morally."}, {"k": "li", "l": 1, "m": "e.", "t": "Promote unity and harmony by expressing opinions respectfully and constructively."}, {"k": "li", "l": 1, "m": "f.", "t": "Bring ideas, initiatives and solutions, not just criticisms, to help the Association grow."}, {"k": "li", "l": 1, "m": "g.", "t": "Serve when called upon, either in leadership, committees, or volunteer roles."}, {"k": "li", "l": 1, "m": "h.", "t": "Represent the Association positively in character, conduct and public engagements."}, {"k": "li", "l": 1, "m": "i.", "t": "Assist in mobilising support by reconnecting members and introducing potential partners or donors."}, {"k": "li", "l": 1, "m": "j.", "t": "Uphold integrity, transparency and trust in all dealings related to the Association."}, {"k": "li", "l": 1, "m": "k.", "t": "Support the Excos and agreed decisions, even when personal views differ, in the interest of collective progress."}, {"k": "h", "t": "ITEM 5. WELFARE BRIEF"}, {"k": "p", "n": "10.", "t": "A brief on the welfare outlook of the Association was presented. This was to bring members up to date on welfare plans and goals. Various welfare packages and support plans being developed to cater for members’ needs, including welfare assistance and empowerment initiatives were outlined. Members were also informed of the receipt of some applications for empowerment support. However, it was emphasised that the Association must first build a strong and sustainable financial base to effectively support such requests. Members were assured that all welfare and empowerment matters would be duly reviewed and addressed in due course, in line with available resources."}, {"k": "p", "n": "11.", "t": "Furthermore, members’ attention was drawn to the children of a late member (late Fanegan Tope), stressing the moral responsibility of the Association to support them. Accordingly, it was proposed that a chair-to-chair cash donation drive specifically to raise funds for this purpose be initiated and members welcomed the idea. During discussions, differing opinions were expressed regarding non-payment of monthly contributions by some members. While some members attributed this to financial constraints, others stressed the importance of collective responsibility in sustaining the Association’s welfare and developmental goals."}, {"k": "p", "n": "12.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Welfare Directors were to continue developing welfare and empowerment frameworks, subject to the financial capacity of the Association."}, {"k": "li", "l": 1, "m": "b.", "t": "Members were to understand and support the agreement that financial strength remains a priority before full-scale welfare and empowerment disbursements can be undertaken."}, {"k": "li", "l": 1, "m": "c.", "t": "Welfare Director (Female) was to commence a voluntary chair-to-chair cash donation drive to support the children of the late member (late Tope Fanegan)."}, {"k": "li", "l": 1, "m": "d.", "t": "Members were to support welfare initiatives according to their capacity, while the Association continues to encourage regular contributions in a humane and understanding manner."}, {"k": "li", "l": 1, "m": "e.", "t": "Excos were to review contribution challenges and explore flexible approaches that balance compassion with organisational sustainability."}, {"k": "h", "t": "ITEM 6. FINANCIAL BRIEF"}, {"k": "p", "n": "13.", "t": "The financial brief was presented to members, providing details of the Association’s current financial position. Various inflows received into the Association’s account, indicating the sources and amounts received over the period under review were outlined. Members were further informed of the total funds available in the Association’s account and the current account balance was said to stand at Three Million, Three Hundred and Sixty Seven Thousand, Eight Hundred and Ten Naira (₦3,367,810.00) only as at the date of the meeting. Members received the report and commended the transparency in the financial presentation."}, {"k": "p", "n": "14.", "t": "Decisions. It was decided that:"}, {"k": "li", "l": 1, "m": "a.", "t": "Members were to note the details of the Financial Brief."}, {"k": "li", "l": 1, "m": "b.", "t": "The Financial Secretary and the Treasurer were to continue maintaining accurate records and to give periodic financial updates to members as and when due."}, {"k": "li", "l": 1, "m": "c.", "t": "All financial decisions and disbursements were to continue to be guided by the Association’s priorities and approved resolutions."}, {"k": "h", "t": "ITEM 7. ANY OTHER BUSINESS"}, {"k": "p", "n": "15.", "t": "No additional issues were raised under Any Other Business. There being no further business, the Chairman thanked members for their participation and the meeting was brought to a close."}, {"k": "h", "t": "SUMMARY OF MAJOR DECISIONS"}, {"k": "p", "n": "16.", "t": "All members were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Pay up their N1,000 monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "b.", "t": "Follow the Association’s Facebook page and invite their friends to do same."}, {"k": "li", "l": 1, "m": "c.", "t": "Check out the list of missing members and make good efforts to reconnect them."}, {"k": "li", "l": 1, "m": "d.", "t": "Share and explain the vision to new members."}, {"k": "li", "l": 1, "m": "e.", "t": "Keep faith in the Association and contribute to its progress and development at all time."}, {"k": "li", "l": 1, "m": "f.", "t": "Provide their details and passports when required for the development of the Association’s e-Brochure."}, {"k": "li", "l": 1, "m": "g.", "t": "Identify generous friends, allies and corporate organisations that could support own fundraising drive and deliver the fundraising support letters to them."}, {"k": "li", "l": 1, "m": "h.", "t": "Make voluntary donations to boost the Association’s account (Financially capable members)."}, {"k": "li", "l": 1, "m": "i.", "t": "Participate actively in meetings, discussions and Association activities whenever called upon."}, {"k": "li", "l": 1, "m": "j.", "t": "Respond promptly to official communications, polls and calls to action."}, {"k": "li", "l": 1, "m": "k.", "t": "Pay agreed dues and contributions regularly and as at when due to support welfare and projects."}, {"k": "li", "l": 1, "m": "l.", "t": "Support Association programmes (reunions, fundraisers, projects) either physically, financially, or morally."}, {"k": "li", "l": 1, "m": "m.", "t": "Promote unity and harmony by expressing opinions respectfully and constructively."}, {"k": "li", "l": 1, "m": "n.", "t": "Bring ideas, initiatives and solutions, not just criticisms, to help the Association grow."}, {"k": "li", "l": 1, "m": "o.", "t": "Serve when called upon, either in leadership, committees, or volunteer roles."}, {"k": "li", "l": 1, "m": "p.", "t": "Represent the Association positively in character, conduct and public engagements."}, {"k": "li", "l": 1, "m": "q.", "t": "Assist in mobilising support by reconnecting members and introducing potential partners or donors."}, {"k": "li", "l": 1, "m": "r.", "t": "Uphold integrity, transparency and trust in all dealings related to the Association."}, {"k": "li", "l": 1, "m": "s.", "t": "Support the Executives and agreed decisions, even when personal views differ, in the interest of collective progress."}, {"k": "li", "l": 1, "m": "t.", "t": "Understand and support the agreement that financial strength remains a priority before full-scale welfare and empowerment disbursements can be undertaken."}, {"k": "li", "l": 1, "m": "u.", "t": "Note the details of the Financial Brief."}, {"k": "li", "l": 1, "m": "v.", "t": "Support welfare initiatives according to their capacity, while the Association continues to encourage regular contributions in a humane and understanding manner."}, {"k": "p", "n": "17.", "t": "Excos were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Take their responsibilities seriously and contribute positively to the progress and development of the Association."}, {"k": "li", "l": 1, "m": "b.", "t": "Ensure that action plans are prepared annually."}, {"k": "li", "l": 1, "m": "c.", "t": "Review contribution challenges and explore flexible approaches that balance compassion with organisational sustainability."}, {"k": "p", "n": "18.", "t": "Publicity Secretary was to refund the balance of N49,000 to Iwajubu Gbenga and Olatuyi Seun."}, {"k": "p", "n": "19.", "t": "Regional Coordinators were to take up their responsibilities, ensure mobilisation and organise periodic get – to - gethers."}, {"k": "p", "n": "20.", "t": "Social Director was to ensure maximum attendance of members’, group’s or national body’s events as required."}, {"k": "p", "n": "21.", "t": "Social Director and Publicity Secretary were to ensure that all projects, programmes and events were well documented including videos and pictures."}, {"k": "p", "n": "22.", "t": "The Chairman was to set up a committee to organise the Association’s reunion scheduled for April 2026."}, {"k": "p", "n": "23.", "t": "Director of Fundraising was to work out modalities for better fundraising process."}, {"k": "p", "n": "24.", "t": "Welfare Directors were to continue developing welfare and empowerment frameworks, subject to the financial capacity of the Association."}, {"k": "p", "n": "25.", "t": "Welfare Director (Female) was to commence a voluntary chair-to-chair cash donation drive to support the children of the late member (late Tope Fanegan)."}, {"k": "p", "n": "26.", "t": "The Financial Secretary and the Treasurer were to continue maintaining accurate records and to give periodic financial updates to members as and when due."}, {"k": "p", "n": "28.", "t": "All financial decisions and disbursements were to continue to be guided by the Association’s priorities and approved resolutions."}, {"k": "p", "n": "29.", "t": "The Secretary was to prepare a letter of appreciation for the organisation that provided financial support for the Association."}, {"k": "p", "n": "30.", "t": "The Secretary was to prepare a fundraising support letter for members to deliver to their potential donors."}, {"k": "h", "t": "OBOLO AKINBOWALE"}, {"k": "p", "t": "General Secretary"}]}];
window.MMGS_DECISIONS = [{"id": "dec-2025", "date": "26 December 2025", "title": "Interim committee meeting", "sub": "Summary of major decisions", "blocks": [{"k": "h", "t": "SUMMARY OF MAJOR DECISIONS TAKEN DURING A VIRTUAL INTERIM COMMITTEE MEETING OF MMGS 2003 SET OLD STUDENTS ASSOCIATION HELD ON 26 DECEMBER 2025"}, {"k": "p", "n": "1.", "t": "All members were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Approve the following members nominated for the appointments against their names:"}, {"k": "li", "l": 2, "m": "(1)", "t": "President - Akinjeji Olaoluwa."}, {"k": "li", "l": 2, "m": "(2)", "t": "Vice President - Onos Helen."}, {"k": "li", "l": 2, "m": "(3)", "t": "Gen Secretary - Obolo Akinbowale."}, {"k": "li", "l": 2, "m": "(4)", "t": "Asst Gen Sec - Olowogboye Sola."}, {"k": "li", "l": 2, "m": "(5)", "t": "Treasurer - Iyabo Akinrogunde."}, {"k": "li", "l": 2, "m": "(6)", "t": "Fin Sec - Lebile Folarin."}, {"k": "li", "l": 2, "m": "(7)", "t": "Welfare Dir Male - Ololajulo Oluremi."}, {"k": "li", "l": 2, "m": "(8)", "t": "Welfare Dir Female - Oluwole Atinuke."}, {"k": "li", "l": 2, "m": "(9)", "t": "Publicity Sec - Akunyemi Ayokunle."}, {"k": "li", "l": 2, "m": "(10)", "t": "Asst Pub Sec - Omotimehin Damilare"}, {"k": "li", "l": 2, "m": "(11)", "t": "Dir of Social - Owuru Peter."}, {"k": "li", "l": 2, "m": "(12)", "t": "Asst Dir of Social - Konye Owoyemi"}, {"k": "li", "l": 2, "m": "(13)", "t": "Dir Fundraising - Ijimakinwa Segun."}, {"k": "li", "l": 2, "m": "(14)", "t": "Asst Dir Fundraising - Ojajuni Ope."}, {"k": "li", "l": 2, "m": "(15)", "t": "Dir of Mobilisation - Akinwale Oluwole."}, {"k": "li", "l": 2, "m": "(16)", "t": "Asst Dir of Mobilisation - Ogunmola Simbo."}, {"k": "li", "l": 2, "m": "(17)", "t": "Head of Protocol - Netufo Bamise."}, {"k": "li", "l": 2, "m": "(18)", "t": "Asst Head of Protocol - Olatuyi Seun."}, {"k": "li", "l": 2, "m": "(19)", "t": "Diaspora Coordinator - Ikuemola Orimisan and Adeyehun Kemi."}, {"k": "li", "l": 2, "m": "(20)", "t": "Okitipupa/Ore Coords - Ijimakinwa Idowu and Ayetiran Dele"}, {"k": "li", "l": 2, "m": "(21)", "t": "Lagos Coords - Obukajeta James and Penne Abigail"}, {"k": "li", "l": 2, "m": "(22)", "t": "Akure/Ondo Coords - Iwajubu Gbenga and Akinyode Seyi"}, {"k": "li", "l": 2, "m": "(23)", "t": "Ilaje/Ise Odo Coords - Sola Aworetan and Olomu Roseline."}, {"k": "li", "l": 2, "m": "(24)", "t": "Osun/Oyo Coords - Abilawon Seun and Ogunyakin Kehinde"}, {"k": "li", "l": 2, "m": "(25)", "t": "Abuja/North Coords - Bajowa Kikelomo"}, {"k": "li", "l": 2, "m": "(26)", "t": "East/South-South Coords - Sado Endurance and Ife Fasuyi."}, {"k": "li", "l": 2, "m": "(27)", "t": "Ogun Coords - Adeyemi Iyadunni and Dare George."}, {"k": "li", "l": 2, "m": "(28)", "t": "Owo/Akoko Coord - Akindele Sunday."}, {"k": "li", "l": 2, "m": "(29)", "t": "Director of Projects - Iluyemi Bunmi."}, {"k": "li", "l": 2, "m": "(30)", "t": "Asst Dir of Projects - Ogunmefun Ayodeji"}, {"k": "li", "l": 2, "m": "(31)", "t": "Director of Career and Business Empowerment"}, {"k": "p", "t": "- Ololajulo Oluremi"}, {"k": "li", "l": 2, "m": "(32)", "t": "Asst Dir of Career and Business Empowerment"}, {"k": "p", "t": "- Ijimakinwa Seun"}, {"k": "li", "l": 1, "m": "b.", "t": "Make their monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "c.", "t": "Note that the scheme was to be used to fund all activities with effect from January 2027 immediately after which emergency contributions were to be discontinued."}, {"k": "li", "l": 1, "m": "d.", "t": "Note that various actions as listed below were to be used to fund the scheme:"}, {"k": "li", "l": 2, "m": "(1)", "t": "₦1,000 monthly contributory plan."}, {"k": "li", "l": 2, "m": "(2)", "t": "Seeking support from successful VIPs and non – members."}, {"k": "li", "l": 2, "m": "(3)", "t": "Corporate sponsorship for charity activities."}, {"k": "li", "l": 2, "m": "(4)", "t": "Alumni dinner/fundraising gala once a year."}, {"k": "li", "l": 2, "m": "(5)", "t": "Launch branded items (T-shirts, caps, notebooks)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Social media crowdfunding for humanitarian projects."}, {"k": "li", "l": 2, "m": "(7)", "t": "Grant applications through NGOs/government youth support programmes."}, {"k": "li", "l": 2, "m": "(8)", "t": "Personal donations from able and willing members"}, {"k": "li", "l": 1, "m": "e.", "t": "Note that use of funds was to include:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Support for members in need in accordance with the regulatory document."}, {"k": "li", "l": 2, "m": "(2)", "t": "Humanitarian outreach."}, {"k": "li", "l": 2, "m": "(3)", "t": "Alumni support to MMGS projects."}, {"k": "li", "l": 1, "m": "f.", "t": "Reach out to all missing members."}, {"k": "li", "l": 1, "m": "g.", "t": "Re-engage those who left the group due to misunderstanding or silence."}, {"k": "p", "n": "2.", "t": "Excos were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Provide clear financial transparency including:"}, {"k": "li", "l": 2, "m": "(1)", "t": "Monthly report of inflows/outflows."}, {"k": "li", "l": 2, "m": "(2)", "t": "Committee approval for any disbursement."}, {"k": "li", "l": 2, "m": "(3)", "t": "Audit once a year."}, {"k": "li", "l": 1, "m": "b.", "t": "Launch a 'Call your Classmates Challenge' with effect from January 2026 and conducted every month. Members were to be requested to reach out to a member and same recorded. The member called in the previous month was to be different from the next month."}, {"k": "li", "l": 1, "m": "c.", "t": "Disburse a specific amount of cash token to the affected members as soon as the welfare scheme was matured for use, subject to approval of members."}, {"k": "li", "l": 1, "m": "d.", "t": "Refund the balance of the cash for the last contribution to the 2 affected members"}, {"k": "li", "l": 1, "m": "e.", "t": "Decide on and request the account signatories to provide the necessary documents for the account opening not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "f.", "t": "The group was to launch a ’30 – day Bring Back of Classmates challenge with effect from 2 January 2026."}, {"k": "p", "n": "3.", "t": "Akinjeji Olaoluwa was to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Work out modalities for the nomination of members to fill up any vacant positions of regional coordinators."}, {"k": "li", "l": 1, "m": "b.", "t": "Make arrangements to get a letter of introduction in respect of the group from MMGS Principal not later than 10 January 2026."}, {"k": "li", "l": 1, "m": "c.", "t": "Ensure that the group reaches out to the children of late members, if any, not later than 31 January 2026."}, {"k": "p", "n": "4.", "t": "Regions were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Maintain updated list of members."}, {"k": "li", "l": 1, "m": "b.", "t": "Plan quarterly meet – ups/visits within regions."}, {"k": "li", "l": 1, "m": "c.", "t": "Mobilise members for events within regions."}, {"k": "p", "n": "5.", "t": "Aworetan Sola was to reach out to Egbowon Margret and give feedbacks afterwards."}, {"k": "p", "n": "6.", "t": "Names and phone numbers of our teachers were to be collated and presented to the group."}, {"k": "p", "n": "7.", "t": "Obukajeta James was to get his sister to join the group not later than 15 January 2026."}, {"k": "p", "n": "8.", "t": "Social directors were to work out modalities to ensure maximum attendance of members’ events and group events on final approval of their appointment and feedback the group not later than 15 January 2026."}, {"k": "p", "n": "9.", "t": "The Secretary was to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Present the list of excos nominees in the full house for ratification/approval."}, {"k": "li", "l": 1, "m": "b.", "t": "Ensure that a participatory data was opened, maintained and updated from time to time."}, {"k": "li", "l": 1, "m": "c.", "t": "Prepare a weekly group activity schedule and ensure Two members were detailed monthly to coordinate such activities and ensure liveliness of the group."}, {"k": "li", "l": 1, "m": "d.", "t": "Write a letter of apology to affected members."}, {"k": "li", "l": 1, "m": "e.", "t": "Collate all requirements and ensure the opening of the account not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "g.", "t": "Prepare an application letter with regards to opening of the account."}, {"k": "li", "l": 1, "m": "h.", "t": "Coordinate the raising of a minimum of N200, 000 for the account through donations from willing members, friends and associates not later than 15 January 2026."}, {"k": "li", "l": 1, "m": "i.", "t": "Prepare a suitable letter for public fund raising as soon as possible."}, {"k": "li", "l": 1, "m": "k.", "t": "Work out modalities for the planning and execution of group reunion event any suitable time in 2026."}, {"k": "li", "l": 1, "m": "l.", "t": "Prepare the following supporting tool, forms and templates:"}, {"k": "li", "l": 2, "m": "(1)", "t": "WhatsApp weekly engagement template."}, {"k": "li", "l": 2, "m": "(2)", "t": "Membership Data Form (to build complete updated database)."}, {"k": "li", "l": 2, "m": "(3)", "t": "Regional coordinator sheet (track reach and mobilisation)."}, {"k": "li", "l": 2, "m": "(4)", "t": "Welfare fund ledger (financial transparency)."}, {"k": "li", "l": 2, "m": "(5)", "t": "Attendance and Event Support Register (commitment tracking)."}, {"k": "li", "l": 2, "m": "(6)", "t": "Any other document suitable for the smooth running of the group."}, {"k": "p", "t": "OBOLO AKINBOWALE Secretary/Host"}, {"k": "p", "t": "December 2025"}]}, {"id": "feb-2026", "date": "8 February 2026", "title": "General meeting", "sub": "Summary of major decisions", "blocks": [{"k": "h", "t": "SUMMARY OF MAJOR DECISIONS TAKEN DURING A GENERAL MEETING OF 1997/2003 SET OF MANUWA MEMORIAL GRAMMAR SCHOOL OLD STUDENTS ASSOCIATION HELD VIRTUALLY ON 8 FEBRUARY 2026"}, {"k": "p", "n": "1.", "t": "All members were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Pay up their N1,000 monthly contributions and encourage others to do same."}, {"k": "li", "l": 1, "m": "b.", "t": "Follow the Association’s Facebook page and invite their friends to do same."}, {"k": "li", "l": 1, "m": "c.", "t": "Check out the list of missing members and make good efforts to reconnect them."}, {"k": "li", "l": 1, "m": "d.", "t": "Share and explain the vision to new members."}, {"k": "li", "l": 1, "m": "e.", "t": "Keep faith in the Association and contribute to its progress and development at all time."}, {"k": "li", "l": 1, "m": "f.", "t": "Provide their details and passports when required for the development of the Association’s e-Brochure."}, {"k": "li", "l": 1, "m": "g.", "t": "Identify generous friends, allies and corporate organisations that could support own fundraising drive and deliver the fundraising support letters to them."}, {"k": "li", "l": 1, "m": "h.", "t": "Make voluntary donations to boost the Association’s account (Financially capable members)."}, {"k": "li", "l": 1, "m": "i.", "t": "Participate actively in meetings, discussions and Association activities whenever called upon."}, {"k": "li", "l": 1, "m": "j.", "t": "Respond promptly to official communications, polls and calls to action."}, {"k": "li", "l": 1, "m": "k.", "t": "Pay agreed dues and contributions regularly and as at when due to support welfare and projects."}, {"k": "li", "l": 1, "m": "l.", "t": "Support Association programmes (reunions, fundraisers, projects) either physically, financially, or morally."}, {"k": "li", "l": 1, "m": "m.", "t": "Promote unity and harmony by expressing opinions respectfully and constructively."}, {"k": "li", "l": 1, "m": "n.", "t": "Bring ideas, initiatives and solutions, not just criticisms, to help the Association grow."}, {"k": "li", "l": 1, "m": "o.", "t": "Serve when called upon, either in leadership, committees, or volunteer roles."}, {"k": "li", "l": 1, "m": "p.", "t": "Represent the Association positively in character, conduct and public engagements."}, {"k": "li", "l": 1, "m": "q.", "t": "Assist in mobilising support by reconnecting members and introducing potential partners or donors."}, {"k": "li", "l": 1, "m": "r.", "t": "Uphold integrity, transparency and trust in all dealings related to the Association."}, {"k": "li", "l": 1, "m": "s.", "t": "Support the Executives and agreed decisions, even when personal views differ, in the interest of collective progress."}, {"k": "li", "l": 1, "m": "t.", "t": "Understand and support the agreement that financial strength remains a priority before full-scale welfare and empowerment disbursements can be undertaken."}, {"k": "li", "l": 1, "m": "u.", "t": "Note the details of the Financial Brief."}, {"k": "li", "l": 1, "m": "v.", "t": "Support welfare initiatives according to their capacity, while the Association continues to encourage regular contributions in a humane and understanding manner."}, {"k": "p", "n": "2.", "t": "Excos were to:"}, {"k": "li", "l": 1, "m": "a.", "t": "Take their responsibilities seriously and contribute positively to the progress and development of the Association."}, {"k": "li", "l": 1, "m": "b.", "t": "Ensure that action plans are prepared annually."}, {"k": "li", "l": 1, "m": "c.", "t": "Review contribution challenges and explore flexible approaches that balance compassion with organisational sustainability."}, {"k": "p", "n": "3.", "t": "Publicity Secretary was to refund the balance of N49,000 to Iwajubu Gbenga and Olatuyi Seun."}, {"k": "p", "n": "4.", "t": "Regional Coordinators were to take up their responsibilities, ensure mobilisation and organise periodic get – to - gethers."}, {"k": "p", "n": "5.", "t": "Social Director was to ensure maximum attendance of members’, group’s or national body’s events as required."}, {"k": "p", "n": "6.", "t": "Social Director and Publicity Secretary were to ensure that all projects, programmes and events were well documented including videos and pictures."}, {"k": "p", "n": "7.", "t": "The Chairman was to set up a committee to organise the Association’s reunion scheduled for April 2026."}, {"k": "p", "n": "8.", "t": "Director of Fundraising was to work out modalities for better fundraising process."}, {"k": "p", "n": "9.", "t": "Welfare Directors were to continue developing welfare and empowerment frameworks, subject to the financial capacity of the Association."}, {"k": "p", "n": "10.", "t": "Welfare Director (Female) was to commence a voluntary chair-to-chair cash donation drive to support the children of the late member (late Tope Fanegan)."}, {"k": "p", "n": "11.", "t": "The Financial Secretary and the Treasurer were to continue maintaining accurate records and to give periodic financial updates to members as and when due."}, {"k": "p", "n": "12.", "t": "All financial decisions and disbursements were to continue to be guided by the Association’s priorities and approved resolutions."}, {"k": "p", "n": "13.", "t": "The Secretary was to prepare a letter of appreciation for the organisation that provided financial support for the Association."}, {"k": "p", "n": "14.", "t": "The Secretary was to prepare a fundraising support letter for members to deliver to their potential donors."}, {"k": "h", "t": "OBOLO AKINBOWALE"}, {"k": "p", "t": "General Secretary"}]}];
window.MMGS_WELFARE = [{"k": "h", "t": "MMGS 2003 SET WELFARE CONTRIBUTORY SCHEME AGREEMENT"}, {"k": "h", "t": "PRAYER 1"}, {"k": "p", "n": "1.", "t": "Establishment and Membership."}, {"k": "p", "t": "1.1. There shall be established a MMGS 2003 Set Welfare Contributory Scheme, membership to which shall be volountary."}, {"k": "p", "t": "1.2. Contributing members who \"become in need\", shall be entitled to predetermined sums as outlined later in this agreement."}, {"k": "p", "t": "1.3. For purpose of avoiding ambiguity, \"become in need\" shall mean specific situations or conditions (hereafter outlined), wherein contributing member(s) require huge financial support, the support in themselves, which are fixed amounts drawable from the total contributed sum. The term shall also apply to non – contributory members but subject to collective decision and agreement by contributory members."}, {"k": "p", "t": "1.4. Any member of MMGS 2003 Set who wishes to partake in the scheme shall personally indicate interest by contacting the account managers. Any non-contributing member who wishes to join the scheme at a later time after initiation of the scheme, shall first pay into the scheme account, an amount equal to the total monthly contribution since initiation of the scheme. However, waver may be granted in this regards, subject to collective agreement by contributory members."}, {"k": "h", "t": "PRAYER 2"}, {"k": "p", "n": "2.", "t": "Beneficiary Matters."}, {"k": "p", "t": "2.1. Beneficiaries from the total contributed sum shall be only contributing members."}, {"k": "p", "t": "2.2. Emergency loan or support could however be granted to non-contributing members subject to collective agreement by contributory members"}, {"k": "h", "t": "PRAYER 3"}, {"k": "p", "n": "3.", "t": "Scheme Account Modalities."}, {"k": "p", "t": "3.1. Each member shall contribute the sum of One Thousand Naira every month to the scheme. This amount shall be reviewed as deemed necessary by members from time to time in other to meet contemporary financial realities."}, {"k": "p", "t": "3.2. ‘Financially blessed’ members could also make lump sums as personal contributions/support to the scheme based on their capacities from time to time in addition to their monthly dues."}, {"k": "p", "t": "3.3. The already existing account used as the set account, shall be continued as the scheme account in the meantime. However, a MMGS 2003 Set account shall be opened for this purpose not later than end of first quarter 2026."}, {"k": "p", "t": "3.4. Financial managers shall be appointed/selected to be signatory to and manage the account."}, {"k": "p", "t": "3.5. Current contributors shall continue as usual, while new contributors shall redeem their payment up to date."}, {"k": "p", "t": "3.6. Any current contributor who may wish to discontinue shall convey his or her intention to the account managers (via the general forum), who in turn shall refund total amount so far contributed by such member."}, {"k": "p", "t": "3.7. All contributed amounts shall be brought forward and credited as advanced payments for each existing contributor accordingly."}, {"k": "p", "t": "3.8. A message shall be sent to every member of MMGS 2003 Set informing them of the new developments with the new scheme account."}, {"k": "p", "t": "3.9. The group shall be updated at least once a month, or as may be deemed necessary anytime by the account managers, of the financial status of the scheme account."}, {"k": "h", "t": "PRAYER 4"}, {"k": "p", "n": "4.", "t": "Conditions Warranting Benefit by a Bona-fide Contributor."}, {"k": "p", "t": "4.1. Death. On the account of death of a bona-fide contributing member, the sum of 300,000 Naira only shall be withdrawn from the scheme account and given to the NOK of the deceased, or any other family member so found worthy by a temporary committee so setup by the general body of MMGS 2003 Set for this specific purpose. Death of a family member or relative of a member does not herein qualify for benefit. In case of burial ceremony of direct parent (s) of a member, the sum of 100,000 Naira only shall be paid to such member."}, {"k": "p", "t": "4.2. RTA. In the event where a bona-fide contributor is involved in a RTA, and his automobile becomes BER, the maximum sum of 100, 000 Naira only shall be accruable to such member as benefit."}, {"k": "p", "t": "4.3. Under the provision of RTA, it must be verified by the welfare committee that the concerned member was the one driving as at the time of the crash. Also, only the crash of a member's POV can warrant benefit. Borrowed cars are not covered under this scheme."}, {"k": "p", "t": "4.4. Any other lesser POV apart from automobile, eg power bike, shall attract a maximum sum of 50,000 Naira only."}, {"k": "p", "t": "4.5. House Fire. In the event of a house fire where the furnishing and personal effects of a bona-fide contributor are gutted by fire, the sum of 100,000 Naira only shall accrue as benefit. Only fire accident where the member's living quarters is involved shall be considered under this provision. A squatting accommodation shall not be grounds for compensation."}, {"k": "p", "t": "4.6. Severe Illness or Injury. In the event where a bona-fide contributor is severely ill or injured, where the bill for treatment and medications exceed or will exceed 200,000 Naira, a maximum sum of 150,000 Naira only shall be accruable as support to such member."}, {"k": "p", "t": "4.7. Business Loan. A loan of a maximum sum of 30% of the total savings of the scheme could be granted to a member who requests for it. Such member is to state the method of refund and final date of completion of repayment. A committee shall then be set up to recommend such loan grant based on the perceived ability of the potential debtor to pay back as promised."}, {"k": "p", "t": "4.8. All benefits under the above unfavourable circumstances shall be extended to non – contributory members, subject to collective agreement by contributory members."}, {"k": "p", "t": "4.9. For the purpose of clarity, a bona-fide contributing member here-above referred to is any member whose contribution has been up to date to the last month of pay. Under this definition, arears or advance contribution is viewed as up to date."}, {"k": "p", "n": "10.", "t": "RTA means Road Traffic Accident."}, {"k": "p", "t": "4.11. BER means Beyond Economic Repair, otherwise referred to as write-off."}, {"k": "p", "t": "4.12. POV means Personally Owned Vehicle."}, {"k": "h", "t": "PRAYER 5"}, {"k": "p", "n": "5.", "t": "Compensation Ambiguity. Under any circumstance wherein the situation of a member falls under the combination of more than one conditions for compensation (eg house fire where death of a member occurred, and POV, power bike as well as personal effects were gutted by fire), an emergency committee shall be temporarily setup to determine a total sum accruable in such unique circumstances. Benefit for such circumstance shall however not be an aggregate sum of accruable benefit for the individual conditions considered separately."}, {"k": "h", "t": "PRAYER 6"}, {"k": "p", "n": "6.", "t": "Timeline."}, {"k": "p", "t": "6.1. For any condition so warranting benefit by a bona-fide contributor, all benefits accruable shall be paid to the beneficiary within a maximum period of one week, except otherwise for reasons of unavailability of cash in the scheme account."}, {"k": "p", "t": "6.2. Benefits shall always be paid according to the date of occurrence, except in such cases which involves an emergency and where inadequate funds might set in, in which situation the priority of date of occurrence shall be set aside, while the most urgent and emergency case shall be paid first."}, {"k": "h", "t": "SUMMARY"}, {"k": "p", "n": "7.", "t": "A committee to work out modalities and measures for better running and functioning of MMGS 2003 Set was set up. Parts of the recommendations of the committee was the setting up of a contributory scheme which commenced at the end of October 2025. Accordingly, the foregoing provisions were therefore drawn up. These provisions, once approved by MMGS 2003 Set members, shall be subject to review from time to time as the need arises and shall become binding on every contributing member with effect from the commencement of the scheme (end of October 2025). Should any provision herein contained create an ambiguity, which is not covered already, a constituted committee shall sit to determine and/or establish a new provision, approval of which is subject to MMGS 2003 Set main group decision, to cater for such ambiguity."}, {"k": "h", "t": "Obolo Akinbowale"}, {"k": "p", "t": "Gen Sec"}];

/* =====================================================================
   CONSTITUTION - adopted and signed 10 January 2026.
   Each item is [level, number, text]. The duties of officers (Article 5.3)
   are shown from MMGS_OFFICES above, so edit them in one place only.
   ===================================================================== */
window.MMGS_CONSTITUTION = {
  adopted: "10 January 2026",
  signed: [["Akinjeji Olaoluwa", "President"], ["Akinbowale Obolo", "General Secretary"]],
  preamble: "We, the alumni of Manuwa Memorial Grammar School, Iju-Odo, Ondo State, the Class of 2003, united by shared history, guided by integrity, love and brotherhood, do hereby solemnly establish this Constitution to govern our collective aspirations and activities. We affirm our commitment to:",
  preambleItems: ["Uphold unity, empathy and mutual support.", "Invest in the well-being and growth of our members.", "Give back to our alma mater and our society through impactful humanitarian service.", "Build a future where every alumnus and every child at MMGS can thrive."],
  preambleEnd: "This Constitution shall serve as the supreme guiding document of our Association.",
  articles: [
    { n: 1, t: "Name, Status and Motto", items: [
      [0, "1.1", "Name. MMGS 2003 Set Old Students Association (hereinafter referred to as “the Association”)."],
      [0, "1.2", "Motto. Giving Back to the Society for a Better Tomorrow."],
      [0, "1.3", "Identity Elements."], [1, "1.3.1", "Official Colors: Green & White."], [1, "1.3.2", "Emblem/Logo: MMGS Badge."], [1, "1.3.3", "Slogan: “Together We Rise, Together We Win”."]] },
    { n: 2, t: "Vision, Mission and Core Values", items: [
      [0, "2.1", "Vision. To be a globally recognized alumni body, united, respected and impactful."],
      [0, "2.2", "Mission. To empower members, uplift young students and contribute meaningfully to community development and educational progress."],
      [0, "2.3", "Core Values."], [1, "2.3.1", "Brotherhood & Respect."], [1, "2.3.2", "Service & Sacrifice."], [1, "2.3.3", "Transparency & Accountability."], [1, "2.3.4", "Excellence & Discipline."], [1, "2.3.5", "Inclusiveness & Equality."]] },
    { n: 3, t: "Objectives", items: [
      [0, "3.1", "The Association shall:"],
      [1, "3.1.1", "Foster unity and lifelong relationships among members."], [1, "3.1.2", "Support members through welfare, empowerment and solidarity actions."],
      [1, "3.1.3", "Provide educational support (scholarships, materials, mentorship) to students of MMGS."], [1, "3.1.4", "Promote career development, economic growth and entrepreneurship among members."],
      [1, "3.1.5", "Execute impactful humanitarian and school support projects annually."], [1, "3.1.6", "Maintain effective communication channels across global chapters."], [1, "3.1.7", "Uplift the reputation and legacy of MMGS worldwide."]] },
    { n: 4, t: "Membership", items: [
      [0, "4.1", "Eligibility. Open to all students who graduated from MMGS in the year 2003, or as may be decided from time to time by members."],
      [0, "4.2", "Rights."], [1, "4.2.1", "Vote and be voted for."], [1, "4.2.2", "Full access to welfare and empowerment initiatives."], [1, "4.2.3", "Participate in all Association programs and decisions."],
      [0, "4.3", "Duties."], [1, "4.3.1", "Be a good ambassador of MMGS."], [1, "4.3.2", "Pay dues and fulfill assigned commitments."], [1, "4.3.3", "Promote unity, discipline and positive image of the Association."], [1, "4.3.4", "Look out for the good of other members."],
      [0, "4.4", "Discipline and Sanctions. Members who violate the Constitution or cause division may face:"], [1, "4.4.1", "Warning."], [1, "4.4.2", "Suspension."], [1, "4.4.3", "Fine."], [1, "4.4.4", "Delisting (subject to fair hearing)."],
      [0, "4.5", "Communication Protocol."],
      [1, "4.5.1", "Official announcements to be done by the General Secretary/Assistant General Secretary or Publicity Secretary/Assistant Publicity Secretary as the case may be."],
      [1, "4.5.2", "Disputes Resolution mechanism: members to privately send messages to the Vice President (Dispute Resolution Officer), who may then notify other Excos for immediate resolution."],
      [1, "4.5.3", "Respectful language to be used by all members, no abuse, insults, or sarcasm."],
      [0, "4.6", "Membership Activation."], [1, "4.6.1", "Each Regional Coordinator updates status monthly."], [1, "4.6.2", "Mobilisation Director to follow up on inactive members regularly."]] },
    { n: 5, t: "Governance and Executive Structure", items: [
      [0, "5.1", "Leadership Organs."], [1, "5.1.1", "General Assembly. The highest decision-making body."], [1, "5.1.2", "Executive Council. Responsible for administration and implementation."],
      [0, "5.2", "Tenure."], [1, "5.2.1", "2-year term, renewable as may be decided from time to time by the General Assembly."], [1, "5.2.2", "Mid-term replacement subject to ratification."],
      [0, "5.3", "Officers and their Duties. The duties of each officer are set out on the Portfolios and Assigned Duties page."]], offices: true },
    { n: 6, t: "Meetings", items: [
      [0, "6.1", "General Assembly: Quarterly."], [0, "6.2", "Executive Meetings: Monthly."], [0, "6.3", "Emergency Meetings: at request of President or 30% of members."],
      [0, "6.4", "Quorum:"], [1, "6.4.1", "General Assembly: one-third of active members."], [1, "6.4.2", "Executive Council: simple majority."]] },
    { n: 7, t: "Finance and Welfare", items: [
      [0, "7.1", "Sources of Income."], [1, "7.1.1", "Monthly Dues & Welfare Contributions."], [1, "7.1.2", "Donations & Sponsorships."], [1, "7.1.3", "Fundraising Projects & Merchandise Sales."], [1, "7.1.4", "Grants and partnership supports."],
      [0, "7.2", "Account Mandate."], [1, "7.2.1", "Any 2 of 4 authorized signatories must sign with the consent of others."], [1, "7.2.2", "Financial statements rendered monthly."],
      [0, "7.3", "Welfare."], [1, "7.3.2", "Defined support for illness, bereavement, emergencies and events."], [1, "7.3.3", "Confidential log maintained by Welfare Directors."], [1, "7.3.4", "Welfare decisions guided by transparency and fairness."],
      [0, "7.4", "Financial Approvals."], [1, "7.4.1", "Welfare spending: recommended by Welfare Director and approved by Excos."], [1, "7.4.2", "Projects expenditure: approved by Exco majority vote, with the monthly financial statement posted on the group."],
      [0, "7.5", "Fundraising."], [1, "7.5.1", "Sponsorships & donations documented in outreach tracker."], [1, "7.5.2", "Donor appreciation published through Publicity Secretary."],
      [0, "7.6", "Welfare Response."], [1, "7.6.1", "Visit or representation required for every crisis or event."], [1, "7.6.2", "Gender-specific matters handled by respective Welfare Director."]] },
    { n: 8, t: "Code of Conduct", items: [
      [0, "8.1", "Members must:"], [1, "8.1.1", "Respect all."], [1, "8.1.2", "Avoid unhealthy gossip, insults and tribal/religious bias."], [1, "8.1.3", "Uphold confidentiality."], [1, "8.1.4", "Show maturity in disagreements."], [1, "8.1.5", "Promote peace and unity at all times."],
      [0, "8.2", "Misconduct attracts investigation and disciplinary action(s) as stated in Article 4.4 above."]] },
    { n: 9, t: "Amendment Procedure", items: [
      [0, "9.1", "Motion submitted minimum 21 days before vote."], [0, "9.2", "Requires two-thirds majority approval at General Assembly."]] },
    { n: 10, t: "Ratification and Effective Date", items: [
      [0, "10", "This Constitution becomes effective upon adoption and signature by authorized officers of the Association."]] }
  ]
};

/* MMGS ANTHEM: one array of lines per stanza. */
window.MMGS_ANTHEM = [
 [
  "Once to every man and nation",
  "Comes the moment to decide,",
  "In the strife of truth with falsehood,",
  "For the good or evil side",
  "Some great cause, God’s new messiah,",
  "Offering, each the bloom or blight.",
  "And the choice goes by for ever",
  "Twixt that darkness and that light."
 ],
 [
  "Then to side with truth is noble,",
  "When we share her wretched crust,",
  "Ere her cause bring fame and profit,",
  "And ’tis prosperous to be just:",
  "Then it is the brave man chooses,",
  "While the coward stands aside,",
  "Till the multitude make virtue",
  "Of the faith they had denied."
 ],
 [
  "By the light of burning martyrs,",
  "Christ, thy bleeding feet we track",
  "Toiling up new calvaries ever",
  "With the cross that turns not back.",
  "New occasions teach new duties:",
  "Time makes ancient good uncouth:",
  "They must (UPWARD STILL AND ONWARD)",
  "Who would keep abreast of truth?"
 ],
 [
  "Though the cause of evil prosper,",
  "Yet ’tis truth alone is strong:",
  "Though her portion be the scaffold,",
  "And upon the throne be wrong,",
  "Yet that scaffold sways the future,",
  "And behind the dim unknown",
  "Standeth God within the shadow",
  "Keeping watch above his own."
 ]
];

/* FLASHBACK MEMES: t = title, i = [[file number, width, height], ...] for images/flashback/NNN.jpg */
window.MMGS_FLASHBACK = [{"t": "Our School Prefects Taking Their Oaths of Office", "i": [[1, 1080, 703]]}, {"t": "The Young Shall Grow: Where We All Started", "i": [[2, 720, 504]]}, {"t": "How Many of You Used This While in MMGS? Don't Lie. We Know the Rubber Sandal Group 🤣", "i": [[3, 1080, 1076]]}, {"t": "Original Ladies' Basket 🤣", "i": [[4, 942, 1005]]}, {"t": "Our Premium Juice: Our Life Saving Fanmilk", "i": [[5, 639, 599]]}, {"t": "Yes O! This Is How We Do It and We Indeed Did It", "i": [[6, 720, 850]]}, {"t": "Thank God This Member Is Now a Pastor", "i": [[7, 719, 649]]}, {"t": "Many of Us Had to Go Pick Up Cassava From Farm Immediately After School Daily", "i": [[8, 1080, 948]]}, {"t": "Mother of All Foods", "i": [[9, 718, 1080]]}, {"t": "Hmmm. If You Know You Know: Our One and Only Staple Food. Pupuru of Life", "i": [[10, 256, 256]]}, {"t": "Our Home Made G-Wagon", "i": [[11, 636, 553]]}, {"t": "With This Ancient Thread We Patched Our Usually Old and Worn-Out Uniforms", "i": [[12, 954, 980]]}, {"t": "The Principal (Prince Adeyemi Juba), VPs (Mr Obamoyegun, Mr Ohunyeye, Dr Aworetan, Now Prof) and School Prefects of MMGS 1997/2003 Set", "i": [[13, 848, 1280]]}, {"t": "The First School Principal of MMGS: Rev Wilson", "i": [[14, 960, 1280]]}, {"t": "Another Great School Principal of MMGS: Pa Agagu", "i": [[15, 257, 257]]}, {"t": "Our Yoruba Teacher, Mrs Adese, During Her 70th Birthday", "i": [[16, 810, 1080]]}, {"t": "Our Able Sports Master, Late Mr Olowosusi Steve (a.k.a. Agbalagba)", "i": [[17, 715, 953]]}, {"t": "Surely the Young Shall Grow", "i": [[18, 960, 1280]]}, {"t": "Oluwole Tinuke, Now 200 Level (2007)", "i": [[19, 600, 800]]}, {"t": "And the Story Continues (Ajayi Isheyemi)", "i": [[20, 312, 392]]}, {"t": "Still on the Story: Obolo Akinbowale's NECO Exams Card of 2003", "i": [[21, 764, 1080], [22, 1080, 768]]}, {"t": "Our First Participation in Aionian (March 1998), Second Term JSS1", "i": [[23, 1080, 809], [24, 729, 1000]]}, {"t": "We Can All Relate. Don't Worry About Those Standing or Sitting", "i": [[25, 1040, 780]]}, {"t": "Our Current Chairman, Akinjeji Olaoluwa, and MMGS Students (Amapetu House)", "i": [[26, 1280, 960]]}, {"t": "With Teachers and Student of MMGS, Iju-Odo", "i": [[27, 1020, 765], [28, 1020, 765]]}, {"t": "With Our School Principal, Prince Adeyemi Juba", "i": [[29, 1040, 684]]}, {"t": "Our Special Ladies", "i": [[30, 1040, 780]]}, {"t": "Members at 70th Anniversary of MMGS, Iju-Odo", "i": [[31, 1280, 960]]}, {"t": "‘Brothers in Crime’", "i": [[32, 810, 1080]]}, {"t": "Yes O. That's What Happens When You Fail to Do Your Assignments", "i": [[33, 750, 967]]}, {"t": "All of You That Ironed Your Uniform This Way, You All Know Yourselves", "i": [[34, 485, 1080]]}, {"t": "Do You Know Any of These Our Local Fruits?", "i": [[35, 1280, 1280]]}, {"t": "Time for Riddles and Jokes", "i": [[36, 577, 721]]}, {"t": "Elero (Amititi): Boys Must Hustle", "i": [[37, 607, 1080]]}, {"t": "Akure Re-Union", "i": [[38, 1280, 1072]]}, {"t": "Our First Reunion Mufflers", "i": [[39, 607, 1080]]}, {"t": "Young School Leaver Teachers: Sola and Eddy", "i": [[40, 810, 1080]]}, {"t": "Late Rotimi Oladipupo (No Bouncing) and His Wife (the Year He Passed)", "i": [[41, 1050, 750]]}, {"t": "The Only Son of Late Rotimi Oladipupo (No Bouncing)", "i": [[42, 600, 900]]}, {"t": "Late Tope Fanegan: Tributes", "i": [[43, 612, 816]]}];

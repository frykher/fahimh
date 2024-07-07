import Job from "./Job";

const experiences = [
  {
    organization: "We Care Act NYC",
    href: "https://wecareactnyc.org",
    role: "Head of IT",
    timeline: "sept 2022 - present",
    actions: [
      "Building digital infrastructure to efficiently handle the processing of over 236 laptop/computer donations to underserved students across NYC",
      "Directing development of company website using modern web technologies and SEO techniques",
      "Built digital storefront to raise funds sustainably through Stripe and PostgreSQL",
    ],
  },
  {
    organization: "AtomHacks",
    href: "https://atomhacks.org",
    role: "Head of Programming",
    timeline: "sept 2020 - june 2024",
    actions: [
      "Organized annual hackathons at Bronx Science by leading a team to create promotional materials and establish an online presence",
      "Directed creation of event website from scratch every year",
      "Negotiated and secured sponsorships with acclaimed tech companies every year",
      "Provided programming assistance to students over the course of each hackathon",
    ],
  },
  {
    organization: "Steel City Codes",
    href: "https://www.steelcitycodes.org/",
    role: "Curriculum Manager",
    timeline: "sept 2022 - june 2024",
    actions: [
      "Tutored small cohorts of middle schoolers on fundamentals of programming with Python and Java",
      "Helped to create and update lesson plans for 600+ students nationwide to utilize",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <h1 id="experience">Experience</h1>
      <p className="text-gray-500">scroll</p>
      <div className="flex flex-nowrap scrolling-touch max-w-[90vw] overflow-x-scroll m-0 gap-4">
        {experiences.map((exp, i) => (
          <Job exp={exp} key={i} />
        ))}
      </div>
    </div>
  );
}

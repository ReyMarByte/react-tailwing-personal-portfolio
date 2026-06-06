const experiences = [
  {
    period: "2025 - 2026",
    role: "Full Stack Developer",
    company: "Young People for Haifa",
    description: "Contributed to building ypfh.org as part of a small development team. Implemented backend logic using Flask: service layer, schema validation, repository pattern. Developed a Feedback feature end-to-end (React + REST API + Flask). Maintained i18n locale files for multilingual support (EN/RU/HE). Collaborated via Git/GitHub using feature branches and pull requests.",
    technologies: ["React + Tailwind", "Flask concepts", "Github", "AI tools - debugging"],
    current: false,
  },
  {
    period: "2020 - 2022",
    role: "IT Support Technician",
    company: "IT Cel",
    description: "Maintained and supported a small office environment (workstations, network, peripherals). Configured LAN and Wi-Fi networks, including IP, DNS, VPN; set up and managed basic networking equipment. Maintained PC hardware, upgraded and looked for problems solutions. Automated routine tasks using PowerShell and batch scripts, basic work with Linux OS.",
    technologies: ["IT Support", "Advanced networking", "Basic Linux"],
    current: false,
  },
  {
    period: "2018 - 2019",
    role: "IT Helpdesk",
    company: "RosTelecom",
    description: "Troubleshot Windows OS, drivers, and peripheral devices, Wi-Fi, and basic network connectivity issues, performed network diagnostics. Used CMD, PowerShell, and Registry Editor for diagnostics and system configuration. Assisted users with software setup, account configuration, and general PC maintenance.",
    technologies: ["Hardware hands-on", "Basic OS concepts", "Basic networking"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  )}
                </div>
                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, indx) => (
                        <span
                          key={indx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

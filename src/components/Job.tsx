type Props = {
  exp: {
    organization: string;
    href: string;
    role: string;
    timeline: string;
    actions: string[];
  };
};

export default function Job({ exp }: Props) {
  return (
    <div className="p-4 pt-2 min-w-[95%] bg-slate-200/5 rounded-xl">
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h2 className="text-2xl">
            {`${exp.role} `}
            <span className="text-primary">for</span>{" "}
            <a href={exp.href} target="_blank">
              <span>{exp.organization}</span>
            </a>
          </h2>
          <p>
            <i>{exp.timeline}</i>
          </p>
        </div>
        <ul>
          {exp.actions.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

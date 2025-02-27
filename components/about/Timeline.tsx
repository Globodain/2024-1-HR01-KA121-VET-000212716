export default function Timeline() {
  const milestones = [
    {
      year: "2021",
      title: "SoftCamp Launch",
      description: "Started our journey in software development education in Croatia",
    },
    {
      year: "2022",
      title: "Java Bootcamp Success",
      description: "Successfully launched our comprehensive Java development program",
    },
    {
      year: "2023",
      title: "Testing Program",
      description: "Expanded our curriculum to include software testing courses",
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Continuing to expand our reach and impact in tech education",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="min-w-[100px] text-xl font-bold">{milestone.year}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

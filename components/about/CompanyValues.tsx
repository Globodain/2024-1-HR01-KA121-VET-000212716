export default function CompanyValues() {
  const values = [
    {
      title: "Practical Learning",
      description: "Focus on real-world programming skills and hands-on experience",
      icon: "💻",
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from experienced industry professionals",
      icon: "👨‍🏫",
    },
    {
      title: "Job Readiness",
      description: "Preparing students for immediate employment in IT sector",
      icon: "🎯",
    },
    {
      title: "Modern Technology",
      description: "Training in current Java technologies and testing frameworks",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

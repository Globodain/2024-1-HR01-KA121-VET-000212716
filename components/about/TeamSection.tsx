export default function TeamSection() {
  const team = [
    {
      name: "Josip Cerlek",
      role: "Founder & Lead Instructor",
      image: "/team/josip.jpg",
      description: "Java Development Expert"
    },
    {
      name: "Ana Cerlek",
      role: "Operations Manager",
      image: "/team/ana.jpg",
      description: "Program Coordinator"
    },
    {
      name: "Ivan Ivić",
      role: "Senior Java Instructor",
      image: "/team/ivan.jpg",
      description: "Technical Lead"
    },
    {
      name: "Marija Horvat",
      role: "Testing Instructor",
      image: "/team/marija.jpg",
      description: "QA Specialist"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Experts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

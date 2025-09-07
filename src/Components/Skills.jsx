
const Skills = () => {
  const skills = [
    { title: "UX Design", desc: "UI design is the process of designing the visuals and interactive elements of a user interface, such as buttons, icons and layouts to create an intuitive and pleasing experience for user." },
    { title: "UI Design", desc: "UI design is the process of designing the visuals and interactive elements of a user interface, such as buttons, icons and layouts to create an intuitive and pleasing experience for user." },
    { title: "UX Design", desc: "UI design is the process of designing the visuals and interactive elements of a user interface, such as buttons, icons and layouts to create an intuitive and pleasing experience for user." },
    { title: "UX Design", desc: "UI design is the process of designing the visuals and interactive elements of a user interface, such as buttons, icons and layouts to create an intuitive and pleasing experience for user." },
  ];

  return (
    <section id="skills" className="px-4 sm:px-8 py-12 bg-black">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">SKILLS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded border-gray-500 border">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full border-8 border-pink-500 flex items-center justify-center text-lg font-bold">
                97%
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-extrabold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

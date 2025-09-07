const Portfolio = () => {
  const products = Array(8).fill("Chaintech Product");

  return (
    <section id="portfolio" className="px-4 sm:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">PORTFOLIO</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((name, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-xl text-center">
            <img
              src="/src/assets/vibrant-gradient-background_1132956-1425.jpg"
              alt={name}
              className="rounded-lg mx-auto"
            />
            <h3 className="mt-3 font-semibold">{name}</h3>
            <div className="flex flex-wrap justify-center gap-1 mt-1">
              <button className="border-2 rounded bg-violet-300 px-1 text-xs">UX Design</button>
              <button className="border-2 rounded bg-violet-300 px-1 text-xs">Angular</button>
              <button className="border-2 rounded bg-violet-300 px-1 text-xs">Javascript</button>
            </div>
            <button className="mt-3 text-sm border px-4 py-1 hover:bg-gray-800 w-full">
              View Product Detail
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

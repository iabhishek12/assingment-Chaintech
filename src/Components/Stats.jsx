const Stats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-900 text-center py-12 px-4 sm:px-8">
      <div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-green-300">90%</h3>
        <p className="mt-2 text-green-300">Job Success <br /> Score on Upwork</p>
      </div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-green-300">&lt;25.000</h3>
        <p className="mt-2 text-green-300">Duplicates on Figma <br /> Community</p>
      </div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-green-300">&lt;2K</h3>
        <p className="mt-2 text-green-300">In Finished <br /> Works</p>
      </div>
    </section>
  );
};

export default Stats;

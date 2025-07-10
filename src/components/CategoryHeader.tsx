
export const CategoryHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8 md:mb-10">
    <h2 className="text-2xl font-orbitron md:text-3xl font-bold text-slate-600 pl-4">
      {title}
    </h2>
    <p className="text-slate-600 mt-2 pl-5">{description}</p>
  </div>
);

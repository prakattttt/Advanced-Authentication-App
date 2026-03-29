const FactCard = ({ icon, title, body }) => {
  return (
    <div
      className="relative p-5 rounded-md overflow-hidden border-2 border-white/30 
      hover:scale-105 hover:border-white transition-all duration-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10">
        <div className="mb-3">
          {icon}
        </div>
        <h2 className="text-lg font-bold mb-2 max-lg:text-base">{title}</h2>
        <p className="text-sm text-gray-300 leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

export default FactCard;
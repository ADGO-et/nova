const Header = () => {
  return (
    <div className="relative text-center md:h-[385px] py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(/about.svg)' }}
      ></div>
      <div className="relative z-9">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Empowering TV Stations in the</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Digital Era</h1>
      </div>
    </div>
  );
};

export default Header;
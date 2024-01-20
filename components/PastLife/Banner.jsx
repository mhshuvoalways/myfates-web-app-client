const Banner = () => {
  return (
    <div className="pl-banner bg-cover h-48 flex justify-center items-center">
      <div className="text-center space-y-4 mycontainer">
        <p className="text-white text-2xl sm:text-4xl font-semibold">
          Why are you having a hard time today?
        </p>
        <p className="text-white text-lg sm:text-xl font-semibold">{`Did something bad happen today? It's because of karma from a past life.`}</p>
      </div>
    </div>
  );
};

export default Banner;

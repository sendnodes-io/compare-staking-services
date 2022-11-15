export default function Header() {
  return (
    <div className="relative bg-indigo-300 w-full ">
      <div className="absolute inset-0 w-full">
        <img
          className="h-full w-full object-cover object-top"
          src="/hero.jpeg"
          alt=""
        />
        <div
          className="absolute inset-0 bg-indigo-300 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative  max-w-7xl mx-auto py-24 px-4 sm:py-32 min-h-[50vh]">
        <div className="sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <img
              src="/logo3x.png"
              alt="Compare Node Runners"
              className="h-32 w-auto"
              width={1000}
              height={342}
            />
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-indigo-100">
            A list of all Pocket Network staking services. This list breaks down
            the services by their staking rewards, staking fees, and staking
            minimums.
          </p>
        </div>
      </div>
    </div>
  );
}

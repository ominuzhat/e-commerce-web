import Link from "next/link";

const HomeCartSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto  px-2">
      <div className="lg:grid lg:grid-cols-3 gap-5 space-y-2 ">
        <div className="rounded-2xl heroBgOne space-y-3 py-16 px-7">
          <h1 className="text-green-600 text-sm font-semibold">
            Hot Collection
          </h1>
          <p className="text-2xl font-semibold w-56">
            Best Travel Sale Collections
          </p>
          <p>
            <Link
              href={"/"}
              className="underline uppercase font-semibold text-sm text-gray-600"
            >
              Discover Now
            </Link>
          </p>
        </div>
        <div className="rounded-2xl heroBgTwo space-y-3 py-16 px-7">
          <h1 className="text-green-600 text-sm font-semibold">
            Hot Collection
          </h1>
          <p className="text-2xl font-semibold w-56">
            Best Travel Sale Collections
          </p>
          <p>
            <Link
              href={"/"}
              className="underline uppercase font-semibold text-sm text-gray-600"
            >
              Discover Now
            </Link>
          </p>
        </div>
        <div className="rounded-2xl heroBgThree space-y-3 py-16 px-7">
          <h1 className="text-green-600 text-sm font-semibold">
            Hot Collection
          </h1>
          <p className="text-2xl font-semibold w-56">
            Best Travel Sale Collections
          </p>
          <p>
            <Link
              href={"/"}
              className="underline uppercase font-semibold text-sm text-gray-600"
            >
              Discover Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCartSection;

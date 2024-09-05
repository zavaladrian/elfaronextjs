import React from "react";
import Link from "next/link";

interface Feature {
  place: string;
  address: string;
  city: string;
  downtown: string;
  west: string;
  east: string;
  north: string;
  south: string;
  google: string;
  photo: string;
}

interface DirectionsProps {
  data: Feature[];
}

const Directions: React.FC<DirectionsProps> = ({ data }) => {
  return (
    <div className="bg-white sm:my-6 md:my-10 sm:mx-20 text-balance rounded-xl border-8 border-rose-900 shadow-lg shadow-slate-400">
      <section
        aria-labelledby="features-heading"
        className="relative grid grid-s-1 lg:grid-cols-2"
      >
        <div className="aspect-h-1 aspect-w-3 overflow-hidden sm:aspect-w-5">
          <img
            src={data[0].photo}
            alt="map"
            className="h-full w-full object-cover hidden md:flex rounded-l-lg"
          />
        </div>

        <div className="max-w-9xl px-4 pb-24 md:pt-16 text-center sm:px-6 sm:pb-32">
          <h2
            id="features-heading"
            className="font-medium text-gray-500 text-4xl text-pretty"
          >
            Come Visit Our Location
          </h2>
          <p className="mt-4 text-gray-600 text-3xl pb-2 font-semibold text-pretty">
            Directions to Our Restaurant:
          </p>

          {data.map((feature) => (
            <div key={feature.place}>
              <div className="text-red-800" >
                <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                  {feature.place}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
                  {feature.address}
                </p>
                <p className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">
                  {feature.city}
                </p>
                <br />
              </div>
              <dl className="gap-x-8 gap-y-10 space-y-4">
                <dt className="font-medium text-gray-900 text-xl lg:text-2xl">
                  From Downtown Chicago
                </dt>
                <dd className="mt-2 text-gray-500 font-semibold text-balance text-lg">
                  {feature.downtown}
                </dd>
                <dt className="font-medium text-gray-900 text-xl lg:text-2xl">
                  West Suburbs
                </dt>
                <dd className="mt-2 text-gray-500 font-semibold text-balance text-lg">
                  {feature.west}
                </dd>
                <dt className="font-medium text-gray-900 text-xl lg:text-2xl">
                  East Suburbs
                </dt>
                <dd className="mt-2 text-gray-500 font-semibold text-balance text-lg">
                  {feature.east}
                </dd>
                <dt className="font-medium text-gray-900 text-xl lg:text-2xl">
                  North Suburbs
                </dt>
                <dd className="mt-2 text-gray-500 font-semibold text-balance text-lg">
                  {feature.north}
                </dd>
                <dt className="font-medium text-gray-900 text-xl lg:text-2xl">
                  South Suburbs
                </dt>
                <dd className="mt-2 text-gray-500 pb-3 font-semibold text-balance text-lg">
                  {feature.south}
                </dd>

                <Link href={feature.google} target="_blank">
                  <button
                    className="relative z-0 items-center gap-2 overflow-hidden rounded-lg border-[2px]
                                border-red-600 px-2 py-2 mt-5 bg-red-400
                                  uppercase text-black transition-all duration-500 font-dosis

                                  before:absolute before:inset-0
                                  before:-z-10 before:translate-x-[150%]
                                  before:translate-y-[150%] before:scale-[2.5]
                                  before:rounded-[100%] before:bg-red-600
                                  before:transition-transform before:duration-1000 
                                  
                                  hover:scale-105 hover:text-white
                                  hover:before:translate-x-[0%]
                                  hover:before:translate-y-[0%]
                                  active:scale-95
                                  shadow-lg shadow-neutral-600  hover:shadow-black"
                  >
                    <span className="text-2xl">Google Driving Directions</span>
                  </button>
                </Link>
              </dl>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Directions;

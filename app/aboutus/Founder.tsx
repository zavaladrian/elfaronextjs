import React from "react";



const Founder = () => {
  return (
    <div className="bg-black ">
      <div className="bg-rose-950 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div>
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:-mx-20 xl:aspect-[2/2]">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-rose-950 object-cover shadow-xl shadow-black"
                  src="/gramps.png"
                  alt="Jose Zavala"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-9 md:pt-0 ">
                <blockquote className=" font-extralight font-dosis leading-8 text-white sm:leading-9">
                  <p className="text-balance text-lg md:text-2xl ">
                    Jose Zavala Hernandez, a native of Mexico City, Mexico,
                    possessed an innate entrepreneurial spirit. From a young
                    age, he delved into the restaurant business, selling tacos
                    on the vibrant streets of Mexico City. In 1978, he embarked
                    on a journey to achieve the American Dream and established a
                    modest eatery named Los Portales in 1979. In 1980, seizing
                    an opportunity, he took over a restaurant called El Faro
                    near 31st and Pulaski. With a growing family, he enlisted
                    the help of his children, turning the venture into a family
                    affair. Just a year later, he expanded his entrepreneurial
                    endeavors by opening another El Faro in Summit, transforming
                    it into a 24-hour burrito hotspot with a menu resembling the
                    one we enjoy today. Though he had to part ways with the 31st
                    street El Faro, the restaurant retained its name.
                    Tragically, in 1989, he passed away, leaving behind two
                    thriving businesses, eleven children, and a devoted wife.
                    Today, his legacy lives on through the capable hands of his
                    eldest son, Pablo
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;

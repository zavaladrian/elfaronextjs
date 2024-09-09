import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

interface Service {
    logo: string;
    name: string;
    online: string;
    id: number;
}

interface OrderProps {
    services: Service[];
}

const OrderOnline: React.FC<OrderProps> = ({ services }) => {
  return (
    <div className="sm:mx-20 -my-4">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8">
          <h2 className="mx-auto max-w-lg  xl:max-w-screen-xl text-center sm:text-4xl lg:text-5xl  font-bold tracking-tight text-white font-roboto underline">
            Online Pick Up And Delivery Services 
          </h2>
          <div className="mt-8 flow-root justify-center lg:mt-0">
            <div className="-ml-8 -mt-4 flex flex-wrap justify-center gap-x-10 gap-y-8 lg:-ml-4">
              {services.map((service) => (
                <Link href={service.online} key={service.id} target="_blank">
                  <div className="ml-8 mt-4  justify-center lg:ml-4 gap-y-3">
                    <Image
                      className="hover:saturate-200 lg:h-40  w-auto"
                      src={service.logo}
                      alt={service.name}
                      height={100}
                      width={100}
                    />    
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderOnline

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds",
  },
  {
    name: "Guarentee Quality",
    Icon: CheckCircle,
    description: "Every Product is verified by our team",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 1% of sales to the preservation of the natural environment.",
  }
]

const Home = () => {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex items-center justify-center flex-col max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>You marketplace for high quality {' '} 
            <span className='text-blue-600'>digital assets</span>
            </h1>
            .
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to DigitalHippo. Every Asset on our plateform is verfied by our team to ensure highest quality standards</p>

            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
              <Link href={"/products"} className={buttonVariants()}>Browse Trending</Link>
              <Button className='text-white' variant={"ghost"}>Our Quality &rarr;</Button>
            </div>
      </div>


      {/* TODO list Products */}
    </MaxWidthWrapper>
    <section className='bg-gray-900'>
<MaxWidthWrapper className='py-20'>
  <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
      {
        perks.map((perk) => (
          <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-gray-950 text-blue-500'>
                  {<perk.Icon className='w-1/3 h-1/3'/>}
                  </div>
            </div>
              <div className='mt-6 ml:ml-4 md:mt-0 lg:ml-0 lg:mt-3'> 
              <h3 className='text-base text-white font-medium'>
                {perk.name}
              </h3>
              <p className='mt-3 text-sm text-muted-foreground'>
                {perk.description}
              </p>
              </div>
          </div>
        ))
      }
  </div>
</MaxWidthWrapper>
    </section>
    </>
  )
}

export default Home

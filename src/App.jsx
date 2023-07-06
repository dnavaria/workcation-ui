import React from 'react'
import Data from './data/popularDestinations'
import DestinationCard from './components/DestinationCard'

function App() {
    return (
        <div>
            <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                    <div className="xl:max-w-xl">
                        <img className="h-10" src="img/logo-brand.svg" alt="Workcation" />
                        <img className="mt-6 rounded-xl shadow-xl sm:mt-8 sm:h-64 sm:w-full object-cover object-center lg:hidden"
                            src="img/beach-work.jpg" alt="Woman workcationing on the beach" />
                        <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-grey-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            You can work from anywhere.
                            <br className="hidden lg:inline" />
                            <span className="text-brand">Take advantage of it.</span>
                        </h1>
                        <p className="mt-2 text-grey-600 sm:mt-4 sm:text-xl">
                            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice
                            weather even when you're not on vacation.
                        </p>
                        <div className="mt-4 space-x-3 sm:mt-6">
                            <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href="#">
                                Book your escape
                            </a>
                            <a className="btn btn-secondary" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden relative lg:block 2xl:col-span-3">
                    <img className="absolute inset-0 w-full h-full object-cover object-center" src="img/beach-work.jpg"
                        alt="Woman workcationing on the beach" />
                </div>
            </div>
            <div className='max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8'>
                <h2 className='text-xl text-gray-900'>Popular Destinations</h2>
                <p className='mt-2 text-gray-600'>A selection of great work-firendly cities with lots to see and explore.</p>
                <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                    {
                        Data.map((item, index) => {
                            return (
                                <DestinationCard key={index} destination={item} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default App
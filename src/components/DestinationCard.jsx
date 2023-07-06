import React from 'react'

const imageSize = {
    height: "h-32",
    width: "w-32"
}

function DestinationCard({
    destination
}) {
    const { imageUrl, imageAlt, city, averagePrice, propertyCount } = destination;
    const imageSizeClassName = `${imageSize.height} ${imageSize.width} flex-shrink-0`;
    return (
        <div className='flex items-center rounded-lg bg-white shadow-lg overflow-hidden'>
            <img className={imageSizeClassName} src={imageUrl} alt={imageAlt} />
            <div className='px-6 py-4'>
                <h3 className='text-lg font-semibold text-gray-800'>
                    {city}
                </h3>
                <p className='text-gray-600'>
                    ${averagePrice} / night average
                </p>
                <div className='mt-4'>
                    <a href="#" className='text-brand hover:text-brand-light font-semibold text-md'>
                        Explore {propertyCount} properties
                    </a>
                </div>
            </div>

        </div>
    )
}

export default DestinationCard
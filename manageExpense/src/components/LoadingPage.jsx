import React from 'react'
import { BarLoader, BeatLoader } from 'react-spinners'
const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center -z-10 bg-white/15 relative h-screen w-screen'>
            <BeatLoader className='absolute z-20 '
                color="#4CA1A3"
                margin={4}
                size={25}
            />
        </div>
    )
}

export default LoadingPage
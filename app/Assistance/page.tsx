import ContinuedCare from '@/components/Assistance/ContinuedCare/ContinuedCare'
import HeroSection from '@/components/Assistance/HeroSection/Herosection'
import React from 'react'

const Assistance = () => {
    return (
        <div className="flex flex-col font-ohno">
            <HeroSection/>
            <ContinuedCare/>
        </div>
    )
}

export default Assistance
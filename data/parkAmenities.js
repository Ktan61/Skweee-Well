import Image from "next/image"

export const parkAmenities = {
    parkAmenitiesArray : [
        {
            question: "Location",
            answer: "3883 Imperial St, Burnaby",
            icon: 
            <Image
                src="/images_interface/parkicon_location.svg"
                width={30}
                height={30}
                alt="location icon"
            /> 
        },
        {
            question: "Hours",
            answer: "Open from dawn to dusk, year-round.",
            icon: 
            <Image
                src="/images_interface/parkicon_time.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Parking",
            answer: "Weekdays: 6AM–6PM, Weekends and Holidays: 8AM–4PM",
            icon: 
            <Image
                src="/images_interface/parkicon_parking.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Washrooms",
            answer: "Open from dawn to dusk, year-round.",
            icon: 
            <Image
                src="/images_interface/parkicon_washroom.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Pitch and Putt Golf Course",
            answer: "Open 40 minutes after sunrise, to dusk. Weather dependent. Please call  604-280-4653 to confirm.",
            icon: 
            <Image
                src="/images_interface/parkicon_golf.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Swangard Stadium",
            answer: "Open arena for soccer games, sports events, festivals, and concerts. A running track surrounds the field, open for use daily. ",
            icon: 
            <Image
                src="/images_interface/parkicon_stadium.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Tennis Courts",
            answer: "12 outdoor courts are available on a  first-come, first-served basis, and open year-round depending on the weather. \n Courts without lights are open from7:30 AM–dusk. \n Courts with lights are open from 7:30 AM–10:00 PM.",
            icon: 
            <Image
                src="/images_interface/parkicon_tennis.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        },
        {
            question: "Outdoor Swimming Pool",
            answer: "Central Park outdoor pool is currently closed for the season. Please check back in June 2024 for our opening date!",
            icon: 
            <Image
                src="/images_interface/parkicon_pool.svg"
                width={30}
                height={30}
                alt="location icon"
            />
        }
    ]
}
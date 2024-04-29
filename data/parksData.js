import Image from "next/image"

export const inventory = {
    parks: [
        {
            parkName: "Robert Burnaby Park",
            distance: 8.0,
            amenities: ["Swimming pool", "Trails", "Picnic Tables", "Playground", "Sports amenities", "Golf course", "Pet friendly"],
            sqweeeHunt: false,
            image: 
                <Image
                    src="/images_content/PC_RobertBurnabyPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Robert Burnaby Park"
                /> 
        },
        {
            parkName: "Burnaby Mountain Conservation Area",
            distance: 10.1,
            amenities: ["Trails", "Picnic Tables", "Concession", "Playground", "Pet friendly"],
            sqweeeHunt: false,
            image: 
                <Image
                    src="/images_content/PC_BurnabyMtnConsArea.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Burnaby Mountain Conservation Area"
                /> 
        },
        {
            parkName: "Central Park",
            distance: 3.7,
            amenities: ["Washroom", "Stadium", "Trails", "Picnic Tables", "Concession", "Playground", "Pet friendly", "Water Fountains", "Sports amenities", "Golf course"],
            sqweeeHunt: true,
            image: 
                <Image
                    src="/images_content/PC_CentralPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Central Park"
                /> 
        },
        {
            parkName: "Taylor Park",
            distance: 7.0,
            amenities: ["Washroom", "Picnic Tables", "Playground", "Pet friendly", "Sports amenities"],
            sqweeeHunt: false,
            image: 
                <Image
                    src="/images_content/PC_TaylorPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Taylor Park"
                /> 
        },
        {
            parkName: "Confederation Park",
            distance: 3.9,
            amenities: ["Washroom", "Picnic Tables", "Swimming Pool", "Playground", "Pet friendly", "Sports amenities", "Trails"],
            sqweeeHunt: false,
            image: 
                <Image
                    src="/images_content/PC_ConfederationPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Confederation Park"
                /> 
        },
        {
            parkName: "Kensington Park",
            distance: 6.9,
            amenities: ["Picnic Tables", "Swimming Pool", "Playground", "Sports amenities", "Golf course"],
            sqweeeHunt: false,
            image: 
                <Image
                    src="/images_content/PC_KensingtonPark.svg"
                    width={185}
                    height={166}
                    alt="Landscape image of Kensington Park"
                /> 
        },

    ]
}
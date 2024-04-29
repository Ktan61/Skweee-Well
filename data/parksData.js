import Image from "next/image"

export const inventory = {
    parks: [
        {
            parkName: "Robert Burnaby Park",
            distance: 8.0,
            amenities: ["Swimming pool", "Trails", "Picnic Tables", "Playground", "Sports Amenities", "Golf Course", "Pet Friendly"],
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
            amenities: ["Trails", "Picnic Tables", "Concession", "Playground", "Pet Friendly"],
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
            amenities: ["Washroom", "Stadium", "Trails", "Picnic Tables", "Concession", "Playground", "Pet Friendly", "Water Fountain", "Sports Amenities", "Golf Course"],
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
            amenities: ["Washroom", "Picnic Tables", "Playground", "Pet Friendly", "Sports Amenities"],
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
            amenities: ["Washroom", "Picnic Tables", "Swimming Pool", "Playground", "Pet Friendly", "Sports Amenities", "Trails"],
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
            amenities: ["Picnic Tables", "Swimming Pool", "Playground", "Sports Amenities", "Golf course"],
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
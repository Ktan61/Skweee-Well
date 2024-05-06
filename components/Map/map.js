import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import styles from './Map.module.css';
import { useCallback, useState } from 'react';
import Image from 'next/image';

import { MapContainer, TileLayer, Marker} from 'react-leaflet'

export default function Map() {
    const [position, setPosition] = useState([49.231900, -123.019710]);
    const [map, setMap] = useState(null);

    const parkingPosition = [49.231297, -123.013018]
    const washroomPosition = [49.23205018416982, -123.01950102189362]
    const stadiumPosition = [49.23099449849083, -123.02140538722364]
    const tennisPosition = [49.22632607441752, -123.01318314417719]
    const waterPosition = [49.228135388951884, -123.02008889119962]
    const poolPosition = [49.228419149507424, -123.02228562039738]
    const playgroundPosition = [49.23176766916034, -123.01890161746299]
    const picnicPosition = [49.22692282522505, -123.02035269261953]
    const foodPosition = [49.22267487595222, -123.01869609324548]
    

    return (
        <div>
            <MapContainer className={styles.mapStyle} center={position} zoom={17} scrollWheelZoom={true} ref={setMap}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
            </MapContainer>
            <div className={styles.mapIcons}>
                <Image
                    src="/images_interface/mapicon_parking.svg"
                    width={35}
                    height={35}
                    alt="parking interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(parkingPosition, 17, {"animate":true});
                        setPosition(parkingPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_washroom.svg"
                    width={35}
                    height={35}
                    alt="washroom interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(washroomPosition, 17, {"animate":true});
                        setPosition(washroomPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_stadium.svg"
                    width={35}
                    height={35}
                    alt="stadium interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(stadiumPosition, 17, {"animate":true});
                        setPosition(stadiumPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_tennis.svg"
                    width={35}
                    height={35}
                    alt="tennis interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(tennisPosition, 17, {"animate":true});
                        setPosition(tennisPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_water.svg"
                    width={35}
                    height={35}
                    alt="water fountain interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(waterPosition, 17, {"animate":true});
                        setPosition(waterPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_swimming.svg"
                    width={35}
                    height={35}
                    alt="swimming interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(poolPosition, 17, {"animate":true});
                        setPosition(poolPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_playground.svg"
                    width={35}
                    height={35}
                    alt="playground interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(playgroundPosition, 17, {"animate":true});
                        setPosition(playgroundPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_picnic.svg"
                    width={35}
                    height={35}
                    alt="picnic interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(picnicPosition, 17, {"animate":true});
                        setPosition(picnicPosition);
                    }}
                />
                <Image
                    src="/images_interface/mapicon_food.svg"
                    width={35}
                    height={35}
                    alt="food interactive icon"
                    className={styles.mapIndividualIcon}
                    onClick={() => {
                        map.setView(foodPosition, 17, {"animate":true});
                        setPosition(foodPosition);
                    }}
                />
         </div>
        </div>
    )
}
import React from "react";
import styles from "./GoogleMaps.module.css";

import GoogleMapReact from "google-map-react";
import { FilterContext } from "../Filter/context";
import { Typography } from "@material-ui/core";

const AnyReactComponent = ({ text, contact }) => (
    <div className={styles.marker}>
        <Typography variant="h6" gutterBottom>
            {text}
        </Typography>
        <Typography variant="body2">
            {contact.name} {contact.surname}
        </Typography>
        <Typography variant="body2">Telefon: {contact.tel}</Typography>
    </div>
);
const defaultProps = {
    center: {
        lat: 52.52437,
        lng: 13.41053
    },
    zoom: 11
};

const getMapBounds = (map, maps, locations) => {
    const bounds = new maps.LatLngBounds();

    locations.forEach(({ adress: { cordinates } }, index) => {
        bounds.extend(new maps.LatLng(parseFloat(cordinates.lat), parseFloat(cordinates.lang)));
    });

    map.fitBounds(bounds);
};

const GoogleMaps = () => {
    const { filterResults } = React.useContext(FilterContext);
    return (
        <div className={styles.googleMaps}>
            <div style={{ height: 600, width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCU_R5SVAK41jJCURdBu9xA1vfZktjXvEo" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    onGoogleApiLoaded={({ map, maps }) => getMapBounds(map, maps, filterResults)}
                >
                    {filterResults.map(({ name, contact, adress: { cordinates } }, index) => {
                        return (
                            <AnyReactComponent
                                key={index}
                                lat={parseFloat(cordinates.lat)}
                                lng={parseFloat(cordinates.lang)}
                                text={name}
                                contact={contact}
                            />
                        );
                    })}
                </GoogleMapReact>
            </div>
        </div>
    );
};

GoogleMaps.propTypes = {};

GoogleMaps.defaultProps = {};

export default GoogleMaps;

import React from "react";
import { Container } from "@material-ui/core";

import GoogleMaps from "./components/GoogleMaps/GoogleMaps";
import Filter from "./components/Filter/Filter";
import FilterOptions from "./components/Filter/FilerOptions";
import FilterResults from "./components/Filter/FilterResults";

const Map = ({ hospitals }) => {
    return (
        <Container fixed>
            <Filter hospitals={hospitals}>
                <GoogleMaps />
                <FilterOptions />
                <FilterResults />
            </Filter>
        </Container>
    );
};

export default Map;

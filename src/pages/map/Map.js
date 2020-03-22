import React from "react";
import { Container } from "@material-ui/core";

import GoogleMaps from "./components/GoogleMaps/GoogleMaps";
import Filter from "./components/Filter/Filter";
import FilterOptions from "./components/Filter/FilerOptions";
import FilterResults from "./components/Filter/FilterResults";
import LayoutWrapper from "../../components/layoutWrapper/LayoutWrapper";

const Map = ({ hospitals }) => {
    return (
        <LayoutWrapper headline={"Deine Suchergebnisse"}>
            <Filter hospitals={hospitals}>
                <GoogleMaps />
                <FilterOptions />
                <FilterResults />
            </Filter>
        </LayoutWrapper>
    );
};

export default Map;

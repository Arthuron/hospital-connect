const initialState = {
    "6": {
        name: "Evangelische Elisabeth Klinik",
        tel: "030 765765756",

        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lang: "432423.3",
                lat: "534534534"
            },
            street: "Lützowstraße 26",
            postalcode: 13467
        },
        hilfsmittel: [
            {
                name: "Atemschutz",
                status: 0
            },
            {
                name: "Handschuhe",
                status: 1
            },
            {
                name: "Schuhe",
                status: 2
            }
        ]
    },
    "33": {
        name: "Alexianer St. Hedwig Krankenhaus",
        tel: "030 765765756",

        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lang: "432423.3",
                lat: "534534534"
            },
            street: "Lützowstraße 26",
            postalcode: 13467
        },
        hilfsmittel: [
            {
                name: "Atemschutz",
                status: 1
            },
            {
                name: "Handschuhe",
                status: 2
            },
            {
                name: "Schuhe",
                status: 0
            }
        ]
    },
    "42": {
        name: "St. Joseph Krankenhaus",
        tel: "030 765765756",

        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lang: "432423.3",
                lat: "534534534"
            },
            street: "Lützowstraße 26",
            postalcode: 13467
        },
        hilfsmittel: [
            {
                name: "Atemschutz",
                status: 2
            },
            {
                name: "Handschuhe",
                status: 2
            },
            {
                name: "Schuhe",
                status: 0
            }
        ]
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

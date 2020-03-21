const initialState = {
    "6": {
        name: "Evangelische Elisabeth Klinik",
        verband: "Verband 1",
        tel: "030 765765756",

        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lat: "52.503727",
                lang: "13.364056"
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
        name: "Charite",
        verband: "Verband 2",
        tel: "030 765765756",

        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lat: "52.526462",
                lang: "13.376625"
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
        verband: "Verband 3",
        tel: "030 765765756",
        contact: {
            name: "Vorname",
            surname: "Nachname",
            tel: "030 42354463534"
        },
        adress: {
            cordinates: {
                lat: "52.478142",
                lang: "13.372949"
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

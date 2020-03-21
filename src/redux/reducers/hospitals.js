const initialState = [
    {
        hospitals: [
            {
                name: "NAME",
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
                    street: "Straße 67",
                    postalcode: 13467
                },
                hilfsmittel: [
                    {
                        name: "Name",
                        status: 0
                    }
                ]
            }
        ]
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

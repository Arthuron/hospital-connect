import { fetchHospitalsPending, fetchHospitalsSuccess, fetchHospitalsError } from "./actions";

function fetchHospitals() {
    return dispatch => {
        dispatch(fetchHospitalsPending());
        fetch("http://59d264410ecfcb0011fd4c43.mockapi.io/hospitals")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchHospitalsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchHospitalsError(error));
            });
    };
}

export default fetchHospitals;

import { FETCH_HOSPITALS_PENDING, FETCH_HOSPITALS_SUCCESS, FETCH_HOSPITALS_ERROR } from "./constants";

export function fetchHospitalsPending() {
    return {
        type: FETCH_HOSPITALS_PENDING
    };
}

export function fetchHospitalsSuccess(hospitals) {
    return {
        type: FETCH_HOSPITALS_SUCCESS,
        hospitals
    };
}

export function fetchHospitalsError(error) {
    return {
        type: FETCH_HOSPITALS_ERROR,
        error: error
    };
}

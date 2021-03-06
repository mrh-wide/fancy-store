import axios from "../utils/axios";

export function apiGetProduct(pageNum, type) {
    return axios.get(`product/all?pageNum=${pageNum}&category=${type}`);
}
export function apiGetBanner() {
    return axios.get(`banner/all`);
}
export function apiGetDetail(uid) {
    return axios.get(`product/detail?uid=${uid}`);
}

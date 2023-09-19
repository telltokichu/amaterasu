import axios from "axios";

import { ROOT_URL } from "./constants";
// import { getToken } from "./common-action";

const API_CALL = ({ method = "get", url, data, type, callback, headerConfig, file, customUrl }) => {
	axios.interceptors.request.use(
		async (config) => {
			let header = {
				"Cache-Control": "no-store",
				// Authorization: `Bearer ${await getToken()}`,
			};
			config.headers = { ...header };
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			const {
				response: { status },
			} = error;
			if (status === 401) {
				window.location.reload();
			}
		}
	);

	if (callback) {
		axios({
			method,
			url: customUrl || ROOT_URL + url,
			data,
			validateStatus: (status) => {
				if (status === 401) return false;
				else return true; // I'm always returning true, you may want to do it depending on the status received
			},
			responseType: file ? "arraybuffer" : "json",
		}).then((data) => {
			return callback(data);
		});
	} else {
		return axios({
			method,
			url: customUrl || ROOT_URL + url,
			data,
			validateStatus: (status) => {
				if (status === 401) return false;
				else return true; // I'm always returning true, you may want to do it depending on the status received
			},
		});
	}
};

export default API_CALL;
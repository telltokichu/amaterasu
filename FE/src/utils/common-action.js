import { notification } from "antd";
import _debounce from "lodash/debounce";

export const Toast = {
	add: (props) => {
		const { type, message, title, duration, ...rest } = props;
		notification[type]({
			message: message,
			duration: duration ? duration : 3,
			placement: "top",
			...rest,
		});
	},
	remove: () => notification.destroy(),
};


export const debounce = _debounce((fn) => fn(), 500);

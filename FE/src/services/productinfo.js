import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "../utils/common-action";
import API_CALL from "../utils/service-call";

const initialState = {
    isLoading: false,
    hasError: false,
    response: {},
    activeStep: 0,
    // response: {
    //     "id": "dc3c9669-c565-4631-601d-08db88f015b4",
    //     "title": "PepsiconnectDEV-Dev",
    //     "shortDescription": "This app improves frontline processes and helps to increase sales",
    //     "longDescription": "B2B PepsiConnect global platform works to improve frontline processes by enabling product ordering via a mobile and web application, reducing reliance on store representatives. The digital application increases sales through prescriptive recommendations for prospecting (Suggested Order) and strengthens adoption via promotions and rewards.",
    //     "siteId": "23070483-4891-4d53-838d-600913b554a0",
    //     "siteName": "PepsiconnectDEV-Dev_EUREJ9",
    //     "groupId": "1740a7fc-94f0-49f3-9092-6d324001639b",
    //     "adAppClientId": null,
    //     "appPackageUrl": null,
    //     "colorIconBlobName": "Nitro_Pepsi_CAN_Glass@2x-1689849795.png",
    //     "outlineIconBlobName": "Nitro_Pepsi_CAN_Glass@2x-1689849796.png",
    //     "layout": null,
    //     "status": "InProgress",
    //     "createdAt": "2023-07-20T10:43:17.1028076Z",
    //     "updatedAt": null
    // },
    // activeStep: 1
};

export const initPortal = createAsyncThunk(
    "productInfo/initPortal",
    async (payload, { getState }) => {
        const { productInfo } = getState();
        const { data, status } = await API_CALL({
            method: "post",
            url: `admin/product`,
            data: payload,
        });
        if (status === 201) return { data: data.data, activeStep: 1 }
        Toast.add({ type: "error", message: data.message });
        return { data: {}, activeStep: 0 }
    }
);

const productInfo = createSlice({
    name: "productInfo",
    initialState,
    reducers: {
        updateProductInfo: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initPortal.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(initPortal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload.data;
                state.activeStep = action.payload.activeStep
            })
            .addCase(initPortal.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = action.error;
            });
    },
});
export const { updateProductInfo } = productInfo.actions;
export default productInfo.reducer;

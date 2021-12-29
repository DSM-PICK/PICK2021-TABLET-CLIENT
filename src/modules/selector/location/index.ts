import { selector } from "recoil";
import location from "../../../lib/api/location/locationApi";

export const locationListSelector = selector({
  key: "locationListSelector/get",
  get: async () => {
    try {
      const res = await location.getLocationList();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

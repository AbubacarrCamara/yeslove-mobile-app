import { UserProfile } from "@/generated-api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    info: {} as UserProfile,
    view: { activeTab: "Timeline", activeAboutTab: "View" },
  }, //defines initial state
  reducers: {
    setProfileInformationAction: (
      state,
      action: PayloadAction<UserProfile>
    ) => {
      state.info = action.payload;
    },
    setNameAction: (state, action: PayloadAction<string>) => {
      if (state.info.contact_info == undefined) return;
      state.info.contact_info.name = action.payload;
    },
    setEmailAction: (state, action: PayloadAction<string>) => {
      if (state.info.contact_info == undefined) return;
      state.info.contact_info.email = action.payload;
    },
    setPhoneAction: (state, action: PayloadAction<string>) => {
      if (state.info.contact_info == undefined) return;
      state.info.contact_info.phone = action.payload;
    },
    setAddressAction: (state, action: PayloadAction<string>) => {
      if (state.info.contact_info == undefined) return;
      state.info.contact_info.address = action.payload;
    },
    setWebsiteAction: (state, action: PayloadAction<string>) => {
      if (state.info.contact_info == undefined) return;
      state.info.contact_info.website = action.payload;
    },
    setBioAction: (state, action: PayloadAction<string>) => {
      state.info.bio = action.payload;
    },
    setActiveTabAction: (state, action: PayloadAction<string>) => {
      state.view.activeTab = action.payload;
    },
    setActiveAboutTabAction: (state, action: PayloadAction<string>) => {
      state.view.activeAboutTab = action.payload;
    },
    persistUserInfoAction: (state, action: PayloadAction<void>) => {},
  },
});

export const {
  setProfileInformationAction,
  setNameAction,
  setAddressAction,
  setEmailAction,
  setPhoneAction,
  setBioAction,
  setWebsiteAction,
  setActiveAboutTabAction,
  setActiveTabAction,
  persistUserInfoAction,
} = profileSlice.actions;
export default profileSlice.reducer;

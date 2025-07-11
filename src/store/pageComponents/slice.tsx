import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { requestType } from "@/types/common";
import { componentType, pageComponentType } from "@/types/pageComponents";

type propsType = {
  pageComponents: requestType<pageComponentType>;
  topPsterIteem?: componentType;
  selectedPageCompoents?: string;
};

const initialState: propsType = {
  pageComponents: { loading: true },
};

export const pageComponentsSlice = createSlice({
  name: "pageComponents",
  initialState,
  reducers: {
    setSelectedPageComponent(state, action: PayloadAction<string>) {
      state.selectedPageCompoents = action.payload;
    },
  },
});

export const pageComponentsAction = pageComponentsSlice.actions;
export default pageComponentsSlice.reducer;

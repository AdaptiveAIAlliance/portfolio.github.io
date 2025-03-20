// Need to use the React-specific entry point to import `createApi`
import SimpleThree, { ISimpleThree } from "@/lib/data-structures/simple-three";
import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FileThreeSliceState {
  node: SimpleThree;
  selected: string;
  openedFolders: string[];
  renameName: string;
}
const placeHolderNode = new SimpleThree({
  name: "Root",
  children: [
    new SimpleThree({
      name: "user",
      children: [
        new SimpleThree({ name: "document", children: [] }),
        new SimpleThree({ name: "photos", children: [] }),
      ],
    }),
    new SimpleThree({
      name: "system",
      children: [
        new SimpleThree({ name: "programs" }),
        new SimpleThree({ name: "files" }),
      ],
    }),
    new SimpleThree({
      name: "workspace",
      children: [
        new SimpleThree({ name: "project_a", children: [] }),
        new SimpleThree({ name: "project_b", children: [] }),
      ],
    }),
  ],
});
const initialState: FileThreeSliceState = {
  node: placeHolderNode,
  selected: "",
  openedFolders: [],
  renameName: "",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const fileThreeSlice = createAppSlice({
  name: "fileThree",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Use the `PayloadAction` type to declare the contents of `action.payload`
  reducers: (create) => ({
    setSelected: create.reducer((state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    }),
    setNode: create.reducer((state, action: PayloadAction<Object>) => {
      state.node = SimpleThree.fromJSON(action.payload);
    }),
    setOpenedFolders: create.reducer(
      (state, action: PayloadAction<string[]>) => {
        state.openedFolders = action.payload;
      }
    ),
    setRenameName: create.reducer((state, action: PayloadAction<string>) => {
      state.renameName = action.payload;
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectSelected: (fileThree) => fileThree.selected,
    selectOpenedFolders: (fileThree) => fileThree.openedFolders,
    selectRenameName: (fileThree) => fileThree.renameName,
    selectNode: (fileThree) => fileThree.node,
  },
});

// Action creators are generated for each case reducer function.
export const { setSelected, setOpenedFolders, setNode, setRenameName } =
  fileThreeSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectSelected,
  selectOpenedFolders,
  selectRenameName,
  selectNode,
} = fileThreeSlice.selectors;

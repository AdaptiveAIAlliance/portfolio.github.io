// Need to use the React-specific entry point to import `createApi`

import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BasicThree } from "@/types/types";
import { BasicThreeHelper } from "@/lib/helpers/BasicThreeHelper";

interface FileThreeSliceState {
  node: BasicThree;
  selected: string;
  openedFolders: string[];
  renameName: string;
}
const placeHolderNode = BasicThreeHelper.makeThree({
  name: "Root",
  children: [
    BasicThreeHelper.makeThree({
      name: "user",
      children: [
        BasicThreeHelper.makeThree({ name: "document", children: [] }),
        BasicThreeHelper.makeThree({ name: "photos", children: [] }),
      ],
    }),
    BasicThreeHelper.makeThree({
      name: "system",
      children: [
        BasicThreeHelper.makeThree({ name: "programs" }),
        BasicThreeHelper.makeThree({ name: "files" }),
      ],
    }),
    BasicThreeHelper.makeThree({
      name: "workspace",
      children: [
        BasicThreeHelper.makeThree({ name: "project_a", children: [] }),
        BasicThreeHelper.makeThree({ name: "project_b", children: [] }),
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
      console.log(state.selected);
    }),
    setNode: create.reducer((state, action: PayloadAction<BasicThree>) => {
      state.node = action.payload;
    }),
    setOpenedFolders: create.reducer(
      (state, action: PayloadAction<string[]>) => {
        state.openedFolders = action.payload;
      }
    ),

    setRenameName: create.reducer((state, action: PayloadAction<string>) => {
      state.renameName = action.payload;
    }),
    addItem: create.reducer(
      (state, action: PayloadAction<{ name: string; type: string }>) => {
        const target = BasicThreeHelper.findByid(state.node, state.selected);
        if (target) {
          if (state.openedFolders.indexOf(target.tag) === -1) {
            state.openedFolders = [...state.openedFolders, target.tag];
          }
          console.log("state.openedFolders");
          console.log(state.openedFolders);
          console.log(action.payload);

          if (BasicThreeHelper.getChildren(target) !== null) {
            const addedNode = BasicThreeHelper.addChild(
              target,
              BasicThreeHelper.makeThree({
                name: action.payload.name,
                children: action.payload.type === "Folder" ? [] : null,
              })
            );
            console.log(addedNode);

            state.selected = `${addedNode.tag}:rename`;
            console.log(state.selected);
          } else {
            const parent = BasicThreeHelper.getParent(state.node, target);
            if (parent) {
              console.log("parent");
              console.log(parent);
              const addedNode = BasicThreeHelper.addChild(
                parent,
                BasicThreeHelper.makeThree({
                  name: action.payload.name,
                  children: action.payload.type === "Folder" ? [] : null,
                })
              );
              console.log(parent);
              state.selected = `${addedNode.tag}:rename`;
              console.log(state.selected);
            }
          }
        }
      }
    ),
    renameNode: create.reducer((state, action: PayloadAction<string>) => {
      const target = BasicThreeHelper.findByid(state.node, action.payload);
      if (target) {
        if (state.openedFolders.indexOf(target.tag) !== -1) {
          state.openedFolders.filter((tag) => tag !== target.tag);
          BasicThreeHelper.setName(target, state.renameName);
          state.openedFolders = [...state.openedFolders, target.tag];
          // dispatch(setOpenedFolders([...state.openedFolders, target.tag]));
        } else {
          BasicThreeHelper.setName(target, state.renameName);
        }
        state.renameName = "";
        state.selected = target.tag;
      }
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
export const {
  setSelected,
  setOpenedFolders,
  setNode,
  setRenameName,
  addItem,
  renameNode,
} = fileThreeSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectSelected,
  selectOpenedFolders,
  selectRenameName,
  selectNode,
} = fileThreeSlice.selectors;

// Need to use the React-specific entry point to import `createApi`

import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BasicThree } from "@/types/types";
import { BasicTreeHelper } from "@/lib/helpers/BasicThreeHelper";

interface FileThreeSliceState {
  node: BasicThree;
  selected: string;
  openedFolders: string[];
  renameName: string;
}
const placeHolderNode = BasicTreeHelper.makeThree({
  name: "Root",
  children: [
    BasicTreeHelper.makeThree({
      name: "user",
      children: [
        BasicTreeHelper.makeThree({ name: "document", children: [] }),
        BasicTreeHelper.makeThree({ name: "photos", children: [] }),
      ],
    }),
    BasicTreeHelper.makeThree({
      name: "system",
      children: [
        BasicTreeHelper.makeThree({ name: "programs" }),
        BasicTreeHelper.makeThree({ name: "files" }),
      ],
    }),
    BasicTreeHelper.makeThree({
      name: "workspace",
      children: [
        BasicTreeHelper.makeThree({ name: "project_a", children: [] }),
        BasicTreeHelper.makeThree({ name: "project_b", children: [] }),
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
export const fileTreeSlice = createAppSlice({
  name: "fileThree",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // Use the `PayloadAction` type to declare the contents of `action.payload`
  reducers: (create) => ({
    setSelected: create.reducer((state, action: PayloadAction<string>) => {
      state.selected = action.payload;
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
        const target = BasicTreeHelper.findByid(state.node, state.selected);
        if (target) {
          if (state.openedFolders.indexOf(target.tag) === -1) {
            state.openedFolders = [...state.openedFolders, target.tag];
          }

          if (BasicTreeHelper.getChildren(target) !== null) {
            const addedNode = BasicTreeHelper.addChild(
              target,
              BasicTreeHelper.makeThree({
                name: action.payload.name,
                children: action.payload.type === "Folder" ? [] : null,
              })
            );

            state.selected = `${addedNode.tag}:rename`;
            console.log(state.selected);
          } else {
            const parent = BasicTreeHelper.getParent(state.node, target);
            if (parent) {
              const addedNode = BasicTreeHelper.addChild(
                parent,
                BasicTreeHelper.makeThree({
                  name: action.payload.name,
                  children: action.payload.type === "Folder" ? [] : null,
                })
              );
              state.selected = `${addedNode.tag}:rename`;
            }
          }
        }
      }
    ),
    renameNode: create.reducer((state, action: PayloadAction<string>) => {
      const target = BasicTreeHelper.findByid(state.node, action.payload);
      if (target) {
        if (state.openedFolders.indexOf(target.tag) !== -1) {
          state.openedFolders.filter((tag) => tag !== target.tag);
          BasicTreeHelper.setName(target, state.renameName);
          state.openedFolders = [...state.openedFolders, target.tag];
          // dispatch(setOpenedFolders([...state.openedFolders, target.tag]));
        } else {
          BasicTreeHelper.setName(target, state.renameName);
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
} = fileTreeSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectSelected,
  selectOpenedFolders,
  selectRenameName,
  selectNode,
} = fileTreeSlice.selectors;

import {
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu";
import { ContextMenuContent } from "../ui/context-menu";
import { File, Folder, FolderOpen, MinusIcon, PlusIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addItem,
  renameNode,
  selectNode,
  selectOpenedFolders,
  selectRenameName,
  selectSelected,
  setNode,
  setOpenedFolders,
  setRenameName,
  setSelected,
} from "@/lib/features/file-tree/fileTreeSlice";
import { BasicThree } from "@/types/types";
import { BasicTreeHelper } from "@/lib/helpers/BasicThreeHelper";

export default function FileThree({
  node,
  className,
}: {
  node: BasicThree;
  className?: string;
}) {
  const dispatch = useAppDispatch();

  const sliceNode = useAppSelector(selectNode);
  const hasMounted: MutableRefObject<boolean> = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      if (node) {
        dispatch(setNode(node));
      }
      hasMounted.current = true;
    }
  }, [node, dispatch]);
  useEffect(() => {}, []);
  const Menu = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(selectSelected);
    const openedFolders = useAppSelector(selectOpenedFolders);
    const sliceNode = useAppSelector(selectNode);

    const handleAddItem = (
      name: string,

      type: "Folder" | "File"
    ) => {
      if (selected !== "") {
        dispatch(addItem({ name, type }));
      } else {
        alert("Please select an item first");
      }
    };
    const handleCreateFolder = () => {
      handleAddItem("New Folder", "Folder");
    };
    const handleCreateFile = () => {
      handleAddItem("New File", "File");
    };
    const handleRename = () => {
      if (selected !== "") {
        const target = BasicTreeHelper.findByid(sliceNode, selected);
        if (target) {
          dispatch(setSelected(`${target.tag}:rename`));
        }
      } else {
        alert("Please select an item first");
      }
    };
    return (
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={handleCreateFolder}>
            Create new folder
          </ContextMenuItem>
          <ContextMenuItem onClick={handleCreateFile}>
            Create new file
          </ContextMenuItem>
          <ContextMenuItem onClick={handleRename}>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  };

  const FileThreeContent = ({
    className,
    node,
  }: {
    className?: string;
    node: BasicThree;
  }) => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(selectSelected);
    const openedFolders = useAppSelector(selectOpenedFolders);
    const renameName = useAppSelector(selectRenameName);
    const sliceNode = useAppSelector(selectNode);

    const children = BasicTreeHelper.getChildren(node);

    const handleOpenFolder = (e: MouseEvent) => {
      dispatch(
        setOpenedFolders(
          openedFolders.indexOf(node.tag) !== -1
            ? openedFolders.filter((tag) => tag !== node.tag)
            : [...openedFolders, node.tag]
        )
      );
    };
    const handleSelect = (e: MouseEvent) => {
      !selected?.split(":")[1] &&
        (selected !== node.tag
          ? dispatch(setSelected(node.tag))
          : dispatch(setSelected("")));
    };
    const isOpen = openedFolders.indexOf(node.tag) !== -1;

    const isFolder = BasicTreeHelper.getChildren(node) !== null;
    return (
      <>
        <details
          open={isOpen}
          onClick={(e) => {
            e.preventDefault();
          }}
          className={`list-none ${className}`}
        >
          <summary
            className={`list-none flex gap-2 items-center  transition duration-300  ease-in-out transform
                ${
                  selected?.split(":")[0] === node.tag
                    ? "dark:bg-lime-900 dark:text-lime-200 bg-slate-900 text-slate-200  scale-100"
                    : "bg-transparent"
                }`}
          >
            {isFolder ? (
              isOpen ? (
                <MinusIcon size={16} onClick={handleOpenFolder} />
              ) : (
                <PlusIcon size={16} onClick={handleOpenFolder} />
              )
            ) : (
              <div className="w-4"></div>
            )}
            <div className="flex gap-1 items-center" onClick={handleSelect}>
              {isFolder ? isOpen ? <FolderOpen /> : <Folder /> : <File />}
              {selected?.split(":")[0] === node.tag &&
              selected?.split(":")[1] === "rename" ? (
                <input
                  autoFocus
                  className="px-2 w-fit my-px text-slate-600 dark:text-emerald-300 block border border-slate-400 dark:border-emerald-400 animate-pulse"
                  type="text"
                  value={renameName}
                  onChange={(e) => {
                    e.preventDefault();
                    dispatch(setRenameName(e.target.value));
                  }}
                  onBlur={(e) => {
                    if (
                      BasicTreeHelper.getParent(
                        sliceNode,
                        node
                      )?.children?.some((e) => e.name === renameName)
                    ) {
                      return alert("Another item with a same name exist");
                    }
                    if (renameName) {
                      dispatch(renameNode(node.tag));
                    } else {
                      alert("please entere a name");
                      e.target.focus();
                    }
                  }}
                />
              ) : (
                <p>{node.name}</p>
              )}
            </div>
          </summary>
          {children != null && children.length > 0
            ? children.map((child, index: number) => (
                <FileThreeContent
                  key={child.tag}
                  node={child}
                  className="pl-4"
                />
              ))
            : null}
        </details>
      </>
    );
  };

  return (
    <Menu>
      <div className="w-full h-80 overflow-scroll p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
        <FileThreeContent node={sliceNode} className={className} />
      </div>
    </Menu>
  );
}

import { MouseEvent, ReactNode, useEffect } from "react";
import SimpleThree, { ISimpleThree } from "@/lib/data-structures/simple-three";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu";
import { ContextMenuContent } from "../ui/context-menu";
import { File, Folder, FolderOpen, MinusIcon, PlusIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectNode,
  selectOpenedFolders,
  selectRenameName,
  selectSelected,
  setNode,
  setOpenedFolders,
  setRenameName,
  setSelected,
} from "@/lib/features/file-three/fileThreeSlice";
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
export default function FileThree({
  node = placeHolderNode,
  className,
}: {
  node: ISimpleThree;
  className?: string;
}) {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectSelected);
  const openedFolders = useAppSelector(selectOpenedFolders);
  const renameName = useAppSelector(selectRenameName);
  const sliceNode = useAppSelector(selectNode);
  // const sliceNode = SimpleThree.fromJSON(sliceNodeJSON);
  // const [files, setFiles] = useState<FileList | null>(null);
  // const [selected, setSelected] = useState<string>("");
  // const [openedFolders, setOpenedFolders] = useState<string[]>([]);
  useEffect(() => {
    if (node) {
      console.log(node.toJSON());
      console.log(SimpleThree.fromJSON(node.toJSON()));

      dispatch(setNode(node.toJSON()));
    }
  }, []);
  const Menu = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(selectSelected);
    const openedFolders = useAppSelector(selectOpenedFolders);
    const sliceNode = useAppSelector(selectNode);
    // console.log(sliceNode.toJSON());

    // const sliceNode = SimpleThree.fromJSON(sliceNodeJSON);
    const handleAddItem = (
      name: string,

      type: "Folder" | "File"
    ) => {
      if (selected !== "") {
        const target = sliceNode.findByid(selected);
        if (target) {
          openedFolders.indexOf(target.id) === -1 &&
            dispatch(setOpenedFolders([...openedFolders, target.id]));

          if (target.getChildren() !== null) {
            const addedNode = target.addChild(
              new SimpleThree({
                name: name,
                parent: target,
                children: type === "Folder" ? [] : null,
              })
            );
            dispatch(setSelected(`${addedNode.id}:rename`));
          } else {
            const parent = target.getParent();
            if (parent) {
              const addedNode = parent.addChild(
                new SimpleThree({
                  name: name,
                  parent: target,
                  children: type === "Folder" ? [] : undefined,
                })
              );
              dispatch(setSelected(`${addedNode.id}:rename`));
            } else {
              alert("Can not add to a file");
            }
          }
        }
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
        const target = sliceNode.findByid(selected);
        if (target) {
          dispatch(setSelected(`${target.id}:rename`));
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
    node: ISimpleThree;
  }) => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(selectSelected);
    const openedFolders = useAppSelector(selectOpenedFolders);
    const renameName = useAppSelector(selectRenameName);
    const children = node.getChildren();
    const handleOpenFolder = (e: MouseEvent) => {
      dispatch(
        setOpenedFolders(
          openedFolders.indexOf(node.id) !== -1
            ? openedFolders.filter((id) => id !== node.id)
            : [...openedFolders, node.id]
        )
      );
      // setOpenedFolders(
      //   openedFolders.indexOf(node.id) !== -1
      //     ? openedFolders.filter((id) => id !== node.id)
      //     : [...openedFolders, node.id]
      // );
    };
    const handleSelect = (e: MouseEvent) => {
      !selected?.split(":")[1] &&
        (selected !== node.id
          ? dispatch(setSelected(node.id))
          : dispatch(setSelected("")));
    };
    const isOpen = openedFolders.indexOf(node.id) !== -1;
    const isFolder = node.getChildren() !== null;
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
                  selected?.split(":")[0] === node.id
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
              {selected?.split(":")[0] === node.id &&
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
                      node.parent?.children?.some((e) => e.name === renameName)
                    ) {
                      return alert("Another item with a same name exist");
                    }
                    if (renameName) {
                      if (openedFolders.indexOf(node.id) !== -1) {
                        openedFolders.filter((id) => id !== node.id);
                        node.setName(renameName);
                        dispatch(setOpenedFolders([...openedFolders, node.id]));
                      } else {
                        node.setName(renameName);
                      }
                      dispatch(setRenameName(""));
                      dispatch(setSelected(node.id));
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
                <FileThreeContent key={index} node={child} className="pl-4" />
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

import {
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import SimpleThree, { ISimpleThree } from "@/lib/data-structures/simple-three";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu";
import { ContextMenuContent } from "../ui/context-menu";
import { File, Folder, FolderOpen, MinusIcon, PlusIcon } from "lucide-react";
import { FcOpenedFolder } from "react-icons/fc";
export default function FileThree({
  node,
  className,
}: {
  node: ISimpleThree;
  className?: string;
}) {
  // const [files, setFiles] = useState<FileList | null>(null);
  const [selected, setSelected] = useState<string>("");
  const [openedFolders, setOpenedFolders] = useState<string[]>([]);
  console.log(node.name);

  const Menu = ({
    node,
    selected,
    setSelected,
    children,
    openedFolders,
    setOpenedFolders,
  }: {
    node: ISimpleThree;
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    children: ReactNode;
    openedFolders: string[];
    setOpenedFolders: Dispatch<SetStateAction<string[]>>;
  }) => {
    const handleAddItem = (
      name: string,
      selected: string,
      type: "Folder" | "File"
    ) => {
      if (selected !== "") {
        const target = node.findByid(selected);
        if (target) {
          openedFolders.indexOf(target.id) === -1 &&
            setOpenedFolders([...openedFolders, target.id]);

          if (target.getChildren() !== null) {
            const addedNode = target.addChild(
              new SimpleThree(name, target, type === "Folder" ? [] : undefined)
            );
            setSelected(`${addedNode.id}:rename`);
          } else {
            const parent = target.getParent();
            if (parent) {
              const addedNode = parent.addChild(
                new SimpleThree(
                  name,
                  target,
                  type === "Folder" ? [] : undefined
                )
              );
              setSelected(`${addedNode.id}:rename`);
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
      handleAddItem("New Folder", selected, "Folder");
    };
    const handleCreateFile = () => {
      handleAddItem("New File", selected, "File");
    };
    const handleRename = () => {
      if (selected !== "") {
        const target = node.findByid(selected);
        if (target) {
          setSelected(`${target.id}:rename`);
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
    selected,
    setSelected,
    openedFolders,
    setOpenedFolders,
  }: {
    className?: string;
    node: ISimpleThree;
    selected?: string;
    setSelected?: Dispatch<SetStateAction<string>>;
    openedFolders: string[];
    setOpenedFolders: Dispatch<SetStateAction<string[]>>;
  }) => {
    const children = node.getChildren();
    const handleOpenFolder = (e: MouseEvent) => {
      setOpenedFolders(
        openedFolders.indexOf(node.id) !== -1
          ? openedFolders.filter((id) => id !== node.id)
          : [...openedFolders, node.id]
      );
    };
    const handleSelect = (e: MouseEvent) => {
      !selected?.split(":")[1] &&
        setSelected &&
        (selected !== node.id ? setSelected(node.id) : setSelected(""));
    };
    const isOpen = openedFolders.indexOf(node.id) !== -1;
    const isFolder = node.getChildren() !== null;
    const [name, setName] = useState<string>("");
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
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                  onBlur={(e) => {
                    if (node.parent?.children?.some((e) => e.name === name)) {
                      return alert("Another item with a same name exist");
                    }
                    if (name) {
                      if (openedFolders.indexOf(node.id) !== -1) {
                        openedFolders.filter((id) => id !== node.id);
                        node.setName(name);
                        setOpenedFolders([...openedFolders, node.id]);
                      } else {
                        node.setName(name);
                      }
                      setName("");
                      setSelected && setSelected(node.id);
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
                  key={index}
                  node={child}
                  selected={selected}
                  setSelected={setSelected}
                  openedFolders={openedFolders}
                  setOpenedFolders={setOpenedFolders}
                  className="pl-4"
                />
              ))
            : null}
        </details>
      </>
    );
  };

  return (
    <Menu
      node={node}
      selected={selected}
      setSelected={setSelected}
      openedFolders={openedFolders}
      setOpenedFolders={setOpenedFolders}
    >
      <div className="w-full p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
        <FileThreeContent
          node={node}
          selected={selected}
          setSelected={setSelected}
          openedFolders={openedFolders}
          setOpenedFolders={setOpenedFolders}
        />
      </div>
    </Menu>
  );
}

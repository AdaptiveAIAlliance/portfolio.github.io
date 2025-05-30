import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  createColumnHelper,
  SortingState,
} from "@tanstack/react-table";
import { Input } from "../ui/input";
import {
  ChevronDown,
  ChevronDownCircle,
  ChevronUp,
  ChevronUpCircle,
} from "lucide-react";

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  role: string;
  department: string;
}

const data: Person[] = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
    role: "Developer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    role: "Manager",
    department: "HR",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 23,
    email: "alice.johnson@example.com",
    role: "Designer",
    department: "Marketing",
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 45,
    email: "bob.brown@example.com",
    role: "CEO",
    department: "Executive",
  },
  {
    id: 5,
    name: "Charlie White",
    age: 30,
    email: "charlie.white@example.com",
    role: "Analyst",
    department: "Finance",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: (info) => info.getValue(),
  },
];

const TanstackTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query)
      )
    );
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by name or email"
          className="bg-slate-100 dark:bg-slate-900 border-gray-300 px-4 py-2 w-full focus:visible-outline-none focus:border-slate-500 focus-visible:ring-offset-0 focus:ring-slate-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500 rounded-2xl"
        />
      </div>
      <table className="min-w-full rounded-2xl border-collapse border border-slate-300  dark:border-emerald-300 ">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border  border-slate-300 dark:border-emerald-300 px-4 py-2 bg-slate-100 dark:bg-emerald-900 cursor-pointer text-center"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {" "}
                  <div className="inline-flex h-6 items-center justify-center ml-2">
                    {" "}
                    <div className="w-6 h-6" />
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc" && <ChevronUp />}
                    {header.column.getIsSorted() === "desc" && <ChevronDown />}
                    {header.column.getIsSorted() === false && (
                      <div className="w-6 h-6" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-100/40 dark:hover:bg-emerald-800/40 transition-colors rounded-2xl duration-200 "
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-300 dark:border-gray-300 px-4 py-2 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TanstackTable;

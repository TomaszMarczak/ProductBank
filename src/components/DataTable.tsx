"use client";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./_ui/table";
import { Product } from "@/models/Product";

interface DataTableProps {
  data: Product[];
}

const DataTable = (props: DataTableProps) => {
  const { data } = props;
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="w-11"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.category.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.model}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;

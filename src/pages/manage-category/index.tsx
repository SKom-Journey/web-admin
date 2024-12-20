import { TableCategory } from "./components/TableCategory";
import { useGetCategories } from "@/usecase/manage-category/use-get-categories";

export function ManageCategoryPage() {
   const { data, isLoading, isError } = useGetCategories();

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error fetching QR data.</p>;

   return <TableCategory data={data ?? []} onDelete={() => { }} />;
}
import { CourseCatalog } from "../../components/CourseCatalog/CourseCatalog";

export const CoursePage = () => {
  return (
    <div className="flex gap-10">
      <aside className="w-400 bg-gray-100">Filters</aside>
      <CourseCatalog />
    </div>
  );
};

import { Toaster } from "react-hot-toast";

import SearchBar from "@/components/catalog/SearshBar/SearchBar";
import FiltersBar from "@/components/catalog/FiltersBar/FiltersBar";
import CarsCatalog from "@/components/catalog/CarsCatalog/CarsCatalog";

const AutoParkPage = () => {
  return (
    <>
      <SearchBar />
      <FiltersBar />
      <CarsCatalog />
      <Toaster />
    </>
  );
};

export default AutoParkPage;

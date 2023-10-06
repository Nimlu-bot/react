export type SearchContextType = {
  searchParams: { searchString: string };
  setSearchString: (searchParams: { searchString: string }) => void;
};

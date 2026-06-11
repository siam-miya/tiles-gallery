"use client";

import { Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SerachTiles = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("search") || "");
 
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (text) {
        router.push(`/all-tiles?search=${text}`);
      } else {
        router.push(`/all-tiles`); 
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [text, router]);

  return (
    <div className="py-10 text-center bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl p-6 my-5">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Search Our Gallery</h1>
        
        <SearchField name="search" value={text} onChange={(val) => setText(val)}>
          <Label className="sr-only">Search</Label>
         
          <SearchField.Group className="border-2 border-amber-400 bg-white p-2 rounded-full flex items-center shadow-md">
            <SearchField.SearchIcon className="ml-3 text-black w-5 h-5" />
            <SearchField.Input 
              className="w-full pl-3 pr-4 text-lg bg-transparent focus:outline-none text-gray-800" 
              placeholder="Search tiles by title..." 
            />
            {text && <SearchField.ClearButton className="mr-2" onClick={() => setText("")} />}
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default SerachTiles;
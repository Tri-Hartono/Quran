"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SurahType } from "@/types/Surah";
import { AppDispatch, RootState } from "@/store/store";
import { fetchSurat, setCurrentType } from "@/store/content-slice";
import ListSurah from "@/components/ListSurah";
import { HiSearch } from "react-icons/hi";
import Loading from "./loading";

const Surah = () => {
   const [active, setActive] = useState(false);
   const dispatch = useDispatch<AppDispatch>();
   const [contentLoading, setContentLoading] = useState<boolean>(false);

   const surat = useSelector((state: RootState) => state.content.surat);
   const contentStatus = useSelector(
      (state: RootState) => state.content.status
   );
   const contentType = useSelector(
      (state: RootState) => state.content.currentContentType
   );
   const [query, setQuery] = useState<string>("");

   const filtered = surat?.data.filter((item) => {
      const normalizeSurat = item.namaLatin.toLowerCase().replace("-", "");
      return normalizeSurat.includes(query);
   });

   useEffect(() => {
      if (contentType === "surat" && surat === undefined) {
         dispatch(fetchSurat(null));
         dispatch(setCurrentType("surat"));
      }
   }, [contentType, dispatch, surat]);

   useEffect(() => {
      if (contentStatus === "loading") {
         setContentLoading(true);
      }
      if (contentStatus === "succeeded") {
         setContentLoading(false);
      }
   }, [contentStatus]);

   return (
      <div>
         <div className="flex items-center relative gap-2 py-4 w-auto justify-end overflow-x-hidden ">
            <input
               onChange={(event) => setQuery(event.target.value)}
               type="text"
               placeholder="cari surah sesuai nama"
               className={`text-zinc-900 rounded-md px-4 py-2 focus:outline-none bg-white w-full transition-all duration-300  ${
                  active ? "scale-100" : "scale-0 "
               } `}
            />
            <div
               onClick={() => setActive(!active)}
               className="p-2 bg-blue-400 text-zinc-100 rounded-md"
            >
               <HiSearch className="w-5 h-5" />
            </div>
         </div>

         <div>
            {contentLoading ? (
               <div>
                  <Loading />
               </div>
            ) : (
               <div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                     {contentType === "surat" &&
                        surat?.data
                           .filter((item) => {
                              const normalizeSurat = item.namaLatin
                                 .toLowerCase()
                                 .replace("-", "");
                              return normalizeSurat.includes(query);
                           })
                           .map((surat) => {
                              return (
                                 <ListSurah
                                    key={surat.nomor}
                                    nomor={surat.nomor}
                                    nama={surat.nama}
                                    namaLatin={surat.namaLatin}
                                    jumlahAyat={surat.jumlahAyat}
                                    arti={surat.arti}
                                 />
                              );
                           })}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Surah;

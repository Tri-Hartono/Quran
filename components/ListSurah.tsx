import { SurahType } from '@/types/Surah';
import Link from 'next/link';
import React from 'react';

export default function ListSurah({ nomor, nama, namaLatin, jumlahAyat, arti }: SurahType) {
  return (
    <Link href={`/surah/${nomor}`} className="flex items-center justify-between border shadow  rounded-md  pr-6  overflow-hidden">
      <div className="flex gap-2 items-center  h-full">
        <div className=" bg-blue-500 text-white p-2 h-full rounded-br-xl   flex items-center justify-center">{nomor}</div>
        <div className="py-3">
          <h2>{namaLatin}</h2>
          <h3>{arti}</h3>
        </div>
      </div>
      <div className="py-3">
        <h2>{nama}</h2>
        <h3>{jumlahAyat} Ayat</h3>
      </div>
    </Link>
  );
}

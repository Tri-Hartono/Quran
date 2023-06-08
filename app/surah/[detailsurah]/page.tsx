'use client';
import React, { Suspense, useState } from 'react';
import SuratNavigation from '@/components/SuratNavigation';
import { Ayat } from '@/types/Ayat';
import { DataSurah } from '@/types/Surah';
import axios from 'axios';
import { HiSearch } from 'react-icons/hi';
import Link from 'next/link';

const getDataUsers = async (param: string) => {
  const res = await axios.get(`https://equran.id/api/v2/surat/${param}`);
  return res.data;
};

export default async function DetailSurah({ params }: { params: { detailsurah: string } }) {
  const [modal, setModal] = useState(false);
  const dataSurah = await getDataUsers(params.detailsurah);

  const suratSelanjutnya: DataSurah = dataSurah.data.suratSelanjutnya;
  const suratSebelumnya: DataSurah = dataSurah.data.suratSebelumnya;

  const isSuratSelesai = !suratSelanjutnya;
  return (
    <div className="py-10 relative">
      <Suspense fallback={<div> Loading detail surah....</div>}>
        {/*@ts-ignore*/}
        <div className="text-center text-3xl">Surah : {dataSurah.data.namaLatin}</div>
        <div className="space-y-4 py-10">
          {dataSurah.data.ayat.map((item: Ayat, index: number) => (
            <div key={index} className="space-y-6 border-t pt-6  border-blue-500  relative">
              <h2 className="absolute top-0 left-0 py-1 px-2 bg-blue-500  text-white rounded-br-xl">{item.nomorAyat}</h2>
              <h1 className="text-right leading-relaxed py-4">{item.teksArab}</h1>
              <div className="space-y-2">
                <h2>{item.teksLatin}</h2>
                <p>{item.teksIndonesia}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2  flex-col md:flex-row">
          {suratSebelumnya && <SuratNavigation surat={suratSebelumnya} label="Surat Sebelumnya" />}
          {isSuratSelesai ? <h2>Ini adalah surat terakhir</h2> : <SuratNavigation surat={suratSelanjutnya} label="Surat Selanjutnya" />}
        </div>
      </Suspense>

      <div onClick={() => setModal(true)} className="p-2 bg-blue-400 text-zinc-100 rounded-md fixed z-20 right-4 bottom-10">
        <HiSearch className="w-5 h-5" />
      </div>
      {modal && (
        <div className="fixed z-10 bg-white/90 flex flex-col text-center dark:bg-zinc-900/90 dark:text-white items-center justify-center inset-0 space-y-10">
          <h1>Apa anda ingin melakukan pencarian ?</h1>
          <div className="flex gap-4 items-center">
            <Link href="/surah" className="py-2 px-4 bg-blue-400 text-white rounded-md">
              Ya
            </Link>
            <div onClick={() => setModal(false)}>No</div>
          </div>
        </div>
      )}
    </div>
  );
}

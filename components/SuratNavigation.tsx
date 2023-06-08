import Link from 'next/link';

interface Surat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

interface SuratNavigationProps {
  surat: Surat;
  label: string;
}

const SuratNavigation: React.FC<SuratNavigationProps> = ({ surat, label }) => {
  return (
    <div className="bg-blue-500 text-white px-4 py-2 flex items-center justify-center  rounded-md">
      <Link href={`/surah/${surat.nomor}`} passHref>
        {label}: {surat.namaLatin}
      </Link>
    </div>
  );
};

export default SuratNavigation;

export interface SurahType {
  code: number;
  message: string;
  data: DataSurah[];
}

export interface DataSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  arti: string;
}

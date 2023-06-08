export interface AyatType {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  data: Data;
}

export interface Data {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
  ayat: Ayat[];
  suratSelanjutnya: NextPrevSurat;
  suratSebelumnya: NextPrevSurat;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: { [key: string]: string };
}

export interface NextPrevSurat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

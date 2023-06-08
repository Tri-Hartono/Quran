import axios from 'axios';
import { SurahType } from '@/types/Surah';

export const FetchSurahByNomor = async (nomor: number) => {
  const res = await axios.get(`https://equran.id/api/v2/surat/${nomor}`);
  return res.data as SurahType;
};

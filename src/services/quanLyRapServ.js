import { https } from './configServ';

export const quanLyRapServ = {
  getAllRap: () => {
    return https.get('/api/QuanLyRap/LayThongTinHeThongRap');
  },
};

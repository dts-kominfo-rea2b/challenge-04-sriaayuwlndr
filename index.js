// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// console.log(dates);


// TODO: Buatlah fungsi createDate
const createDate = (data,posisi) => {

  let panjangData = data.length;
  let resultAll = [];
  let resultBerdasarkanPosisi = [];
  

  //SEMUA DATA
  for (let i = 0; i < panjangData; i++)
  {
    resultAll[i] = Date.parse(data[i]);
    
    resultAll[i] = resultAll[i]/1000;
    

    // console.log(resultAll[i]);
  }

  // for (let i = posisi; i == posisi; i++)
  // {
  //   resultBerdasarkanPosisi[i] = Date.parse(data[i]);
    
  //   resultBerdasarkanPosisi[i] = resultBerdasarkanPosisi[i]/1000;
    

  //   // console.log(resultAll[i]);
  // }

  // DATA BERDASARKAN POSISI
  // let resultBerdasarkanPosisi = "";
  resultBerdasarkanPosisi[posisi] = Date.parse(data[posisi]);
  resultBerdasarkanPosisi[posisi] = resultBerdasarkanPosisi[posisi]/1000;
// console.log(resultBerdasarkanPosisi[posisi]);



  return {resultAll, resultBerdasarkanPosisi};
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};

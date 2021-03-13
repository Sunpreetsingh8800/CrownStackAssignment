import {getApiService} from './apiService';

export const homeOperations = {
  getSongsList: () =>
    new Promise(async (resolve, reject) => {
      try {
        const url = 'https://itunes.apple.com/search?term=Michael+jackson';
        const {data} = await getApiService(url);
        resolve(data);
      } catch (error) {
        recordCrashlyticsError(error);
        reject(error.response);
      }
    }),
};

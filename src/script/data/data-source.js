class DataSource {
  static searchPostcode(keyword) {
    if (keyword.length === 0) {
      return Promise.reject(new Error('Masukkan keyword pencarian'));
    }
    return fetch(`https://kodepos.vercel.app/search?q=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.data.length > 0) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(new Error(`Kodepos ${keyword} Tidak ditemukan!`));
          }
        });
  }
}

export default DataSource;

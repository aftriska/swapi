class GetLocalData {
  constructor(storageName) {
    this.storageName = storageName;
    this.getData();
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.storageName)) || [];
  }
}

export default GetLocalData;

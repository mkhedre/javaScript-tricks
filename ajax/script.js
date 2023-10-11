function loadData() {
  const http = new XMLHttpRequest();
  console.log(http);
  http.onreadystatechange = function () {
    console.log(this.readyState);
  };
}
loadData();

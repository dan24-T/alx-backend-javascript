export default function createIteratorObject(report) {
  return (function* _() {
    //disable-next-line
    for (const department of Object.values(report.allEmployees)) {
      //disable-next-line
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}

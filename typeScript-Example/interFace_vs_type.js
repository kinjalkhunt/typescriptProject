// ********************* Interface vs Type ********************* // 
// Like 
// type Data = Stud | StuAddress
// type Data = Stud & StuAddress
// const BioData: Data = {
var BioData = {
    name: "jaish",
    age: 19,
    city: "Surat",
    state: "Gujarat"
};
console.log("custom type : ", BioData);
// const BioData: Data1 = {
var BioData1 = {
    name: "jaish",
    age: 19,
    city: "Surat",
    state: "Gujarat"
};
console.log("custom interface variable : ", BioData1);
// const BioData: Data1 = {
var BioData2 = /** @class */ (function () {
    function BioData2(CompanyName, id, role, Cstaff) {
        this.CompanyName = CompanyName;
        this.id = id;
        this.role = role;
        this.Cstaff = Cstaff;
    }
    return BioData2;
}());
var BioDataa = new BioData2("Weetech Solution", 878654, "Frontend Developer", 25);
console.log("custom interface classes : ", BioDataa);

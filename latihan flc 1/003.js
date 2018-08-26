/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

//PSEUDOCODE
/*
PROCEDURE getReports(studentGrades)
  STORE empty list `output`
  FOR each studentGrades
    STORE `current` with value studentGrades[i]
    STORE `kelas` with value studentGrades[i].classCode
    IF output[kelas] is equal to null
      STORE output[kelas] with "property and property value" passed:[], failed:[]
    ENDIF
    IF current.score is greater than equal 70
      ADD current.name to output.[current.classCode].passed
    ELSE IF current.score is less than equal 70
      ADD current.name to output.[current.classCode].failed
    ENDIF
  RETURN `output`
ENDPROCEDURE
*/

function getReport(studentGrades) {
  var output = []

  for ( var i = 0 ; i < studentGrades.length ; i ++){
    var current = studentGrades[i]
    var kelas = studentGrades[i].classCode

    if(output[kelas] == null){
      output[kelas]={
        passed : [],
        failed : []
      }
    }

    if(current.score >= 70){
      output[current.classCode].passed.push(current.name)
    }else if(current.score <= 70){
      output[current.classCode].failed.push(current.name)
    }

  }
  
  return output
  
}


var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));


/*

[
  { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] }, //sepertinya terbalik karena john nilainya 80 sedangkan siti dan aaron nilai dibawah 70
  { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
  { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
]
*/
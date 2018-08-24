/*
  Buatlah sebuah algoritma atau pseudocode untuk kasus berikut:
  Suatu toko baju 'X' sedang mengadakan midnight sale dengan ketentuan sebagai berikut:
  - Jumlah baju yang dibeli lebih dari 9 maka akan mendapatkan 5 baju lagi
  - Jumlah baju yang dibeli lebih dari 5 maka akan mendapatkan 3 baju lagi
  - Jumlah baju yang dibeli lebih dari 2 maka akan mendapatkan 1 barang lagi
  Tampilkan jumlah baju yang didapatkan oleh pembeli.
  NOTED:
  Jika jumlah baju kurang dari 0 atau menerima input selain angka maka tampilkan 'Input Invalid'
*/

/*
PSEUDOCODE
READ and SAVE "bajuYangDibeli"
STORE "bonus" without any value
IF "bajuYangDibeli" is greater than 9
ADD 5 to "bonus"
ELSE IF "bajuYangDibeli" is greater than 5 but less than 9
ADD 3 to "bonus"
ELSE IF "bajuYangDibeli" is greater than 2 but less than 5
ADD 1 to "bonus"
ELSE IF "bajuYangDibeli" is less than equal 0
  DISPLAY "Input Invalid"
END IF
CALCULATE "bajuYangDibeli"+"bonus" and store as "jumlahBajuYangDidapat"
DISPLAY "jumlahBajuYangDidapat"
*/
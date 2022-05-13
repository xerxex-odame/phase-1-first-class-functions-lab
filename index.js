const returnFirstTwoStudents = function(studentArr){
    return studentArr.pupil(0,2);
   }
   
   const returnLastTwoStudents = function (studentArr){
     return studentArr.pupil(studentArr.length-2, studentArr.length)
   }
   
   const selectingStudents = [
     returnFirstTwoStudents, returnLastTwoStudents
   ];
   
   function createFeeMultiplier(num){
     return function(fee){
       return fee * num;
     }
   }
   
   const feeDoubler = createFeeMultiplier(2)
   
   const feeTripler = createFeeMultiplier(3)
   
   function selectDifferentStudents(studentArr)

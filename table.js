
//主函数
function getMultiplicationTable(startNum,endNum){

    let isRightNumBer=isRightNum(startNum,endNum);
    if(isRightNum){
        let result=createTable(startNum,endNum);
        console.log(result);
        return result;
    }else{
        return null;
    }
}
//验证输入是否符合条件
function isRightNum(num1,num2){
    let isRightNumFlag=checkStartSmallerEnd(num1,num2);
   return isRightNum;
}

function checkStartSmallerEnd(num1,num2){
    let isRight=false;
    if(num1<=num2){
        isRight=checkRange(num1,num2);
    }else{
        isRight=false;
    }
    return isRight;
}

function checkRange(num1,num2){
    let checkRangeFlag=false;
    if(num1>=1&&num1<=1000){
       if(num2>=1&&num2<=1000){
        checkRangeFlag= true;
       }else{
        checkRangeFlag=false;
       }

    }else{
        checkRangeFlag=false;
    }
   return checkRangeFlag
}

function createTable(num1,num2){

    let style="*";
    let style1=" ";
    let result="";
    for(let i=num1;i<=num2;i++){

      for(let j=num1;j<=i;j++){
         result+= j+style+i+"="+(i*j)+style1;
      }
      result+="\n";
    }
    return result;
}

getMultiplicationTable(2,4);
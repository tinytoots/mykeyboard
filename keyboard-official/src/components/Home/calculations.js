export function progressCal(start, end) {
    var startDate = new Date(start); 
    var endDate = new Date(end); 
    var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
    //           + Difference_In_Days); 
  
    var todayDate = new Date();
    var todayDate2 = todayDate.toLocaleDateString();
    // document.write("<br><br>今天日期为：" 
    //           + todayDate2); 
  
    var date3 = new Date(todayDate2);        
    var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
    var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
    // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
    //           + Difference_In_Days2); 
  
    var percent = Difference_In_Days2 / Difference_In_Days * 100;
    // document.write("<br><br>进度" + percent);
    return percent;
  }
  
  export function delayCal(start, end) {
    var startDate = new Date(start); 
    var endDate = new Date(end); 
    var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
    // 原计划总用时
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
    //           + Difference_In_Days); 
  
    var todayDate = new Date();
    var todayDate2 = todayDate.toLocaleDateString();
    // document.write("<br><br>今天日期为：" 
    //           + todayDate2); 
  
    var date3 = new Date(todayDate2);        
    var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
    // 目前总用时
    var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
    // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
    //           + Difference_In_Days2); 
  
    var percent2 = (Difference_In_Days2 - Difference_In_Days) / Difference_In_Days * 100;
    // document.write("<br><br>进度" + percent);
    return percent2;
  }
document.getElementById('count').onclick = function(){
    var Total_Water_Num = Number(document.getElementById('Total_Water').value);
    var Old_GH_Num = Number(document.getElementById('Old_GH').value);
    var New_UpDown_GH_Num = Number(document.getElementById('New_UpDown_GH').value);
    var Change_Water_Num = Number(document.getElementById('Change_Water').value); 
    var Add_Salt_Num = Number(document.getElementById('Add_Salt').value);   
    if ((New_UpDown_GH_Num > 0) || (Change_Water_Num => 0)){
      var a = 3.5/15; //1公升 = 0.23333蘇鹽 = GH6/1L
      var b = a/6; //1公升 = 0.03888蘇鹽 = GH1/1L
      var c = Change_Water_Num * b * Old_GH_Num //換水公升* GH1/1L蘇鹽 * 當前魚缸GH
      var d = c + Total_Water_Num * b * New_UpDown_GH_Num;
      var Name1 = "需加"; 
      var Name2 = "克蘇鹽";       
//      document.getElementById('total').textContent = Name1 + d.toFixed(3) + Name2;
      document.getElementById('Add_Salt').value = d.toFixed(3);       
    }
    if (New_UpDown_GH_Num < 0){
      var a = Total_Water_Num/Old_GH_Num; //總水量/當前GH = 1GH多少多水量
      var b = a * -1 * New_UpDown_GH_Num;   
      var Name1 = "需換"; 
      var Name2 = "公升純水"; 
//      document.getElementById('total').textContent = Name1 + b.toFixed(3) + Name2; 
      document.getElementById('Change_Water').value  = b.toFixed(3);
    }
    if ((New_UpDown_GH_Num == 0) && (Change_Water_Num == 0)){
       var Name = "你在跟我搞笑嗎?";
       document.getElementById('Change_Water').value  = 0; 
       document.getElementById('Add_Salt').value = 0;      
    }     
};

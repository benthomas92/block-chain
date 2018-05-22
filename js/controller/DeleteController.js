 var deleteController = pulseapp.controller('deleteController', function ($scope, $rootScope,$state,PulseData,ngProgressFactory,$window,$mdDialog,fileUpload,$mdToast,item,$q,$timeout,$interval) {
    	
 

 if($rootScope.delVal=='Report'){
  $scope.delTitle=item.report_title;
}else{
   $scope.delTitle=item.category_name;
}
 
  	 $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.deleteRecord= function(){

      if($rootScope.delVal=='Report'){

           $scope.requestParam={user_id:sessionStorage.getItem("P_user"),report_id:item.report_id};
           $scope.requestType='deleteReport';
           PulseData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessDeleteRecord,$scope.OnfailureDeleteRecord);


      }else{
          console.log(item.category_id);
         $scope.requestParam={user_id:sessionStorage.getItem("P_user"),category_id:item.category_id};
           $scope.requestType='deleteCategory';
           PulseData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessDeleteRecord,$scope.OnfailureDeleteRecord);


      }
     
    }

   $scope.OnSuccessDeleteRecord = function(response){

    console.log(response.data);
    $scope.showActionToast( $rootScope.delVal+'Deleted');
    $mdDialog.cancel();

    if($rootScope.delVal=='Report'){
       $rootScope.$emit("dialogClose");

    }else{
// $state.go($state.current);
     // $state.reload();
       $rootScope.$emit("reload");
      // $rootScope.$emit("dialogClose");

    }
   


  }
  $scope.OnfailureDeleteRecord = function(){

      console.log("failure Delete");
      $scope.showActionToast('Delete Failed!');
  }

  $scope.showActionToast = function(value) {
    var toast = $mdToast.simple()
      .textContent(value)
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .hideDelay(3000)
      .position('top right');


    $mdToast.show(toast).then(function(response) {
      if ( response == 'ok' ) {

        if($rootScope.delVal=='Report'){

             console.log(item.report_id);
          $scope.requestParam={user_id:sessionStorage.getItem("P_user"),report_id:item.report_id};
      $scope.requestType='undoReport';
      PulseData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessUndo,$scope.OnfailureUndo);

        }else{


             $scope.requestParam={user_id:sessionStorage.getItem("P_user"),category_id:item.category_id};
      $scope.requestType='undoCategory';
      PulseData.getdata($scope.requestParam,$scope.requestType,$scope.OnSuccessUndo,$scope.OnfailureUndo);


        }

        

       
      }
    });
  };



  $scope.OnSuccessUndo = function(response){
    console.log(response.data);
    $rootScope.$emit("dialogClose");

  }

   $scope.OnfailureUndo = function(){
    console.log("Undo Failed");
  }





 

});
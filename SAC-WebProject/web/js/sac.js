var TicketController = function($scope, $http) {
  $http.get('proxy/listar').success(function(data) {
    console.log(data);
    $scope.tickets = data;
  });
  
  $scope.addTicket = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = dd + '/' + mm + '/' + yyyy;
    $scope.tickets.push({
      "id": $scope.tickets.length + 1,
      "summary": $scope.ticketTitle,
      "description": $scope.ticketDesc,
      "status": "Aberto",
      "updateDate": today,
      "attachments": []
    });
    $scope.ticketTitle = '';
    $scope.ticketDesc = '';
    $("#formT").addClass("hidden");
    $("#tickets").removeClass("hidden");
    $("#ticketDetalhe").removeClass("hidden");
  }
}

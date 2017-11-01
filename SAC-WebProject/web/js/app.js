angular.module('app', []).
  config(function($routeProvider) {
    $routeProvider.
      when('/show/:ticketId', {
        controller: AttachmentController,
        templateUrl:'detail.html'});
  });

var TicketController = function($scope, /*Ticket, */$http) {
  $http.get('api/1/ticket').success(function(data) {
    $scope.tickets = data;
  });
  //$scope.tickets = Ticket.query();
  
  $scope.addTicket = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd}
    if(mm<10){mm='0'+mm}
    today = dd + '/' + mm + '/' + yyyy;
    /*$scope.tickets.push({
      "id": $scope.tickets.length + 1,
      "summary": $scope.ticketSummary,
      "description": $scope.ticketDescription,
      "status": "Novo",
      "updateDate": today,
      "attachments": []
    });*/
    $http({
        url: 'api/1/ticket',
        method: "POST",
        data: "summary=" + $scope.ticketSummary + "&description=" + $scope.ticketDescription,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
        // TODO: mudar isto!!
        alert("Adicionado com sucesso!!!");
        $scope.tickets = data;
        //$scope.persons = data; // assign  $scope.persons here as promise is resolved here 
    }).error(function (data, status, headers, config) {
        $scope.status = status;
    });
    $scope.ticketTitle = '';
    $scope.ticketDesc = '';
    $("#formT").addClass("hidden");
    $("#tickets").removeClass("hidden");
    $("#ticketDetalhe").removeClass("hidden");
  }
}

var AttachmentController = function($scope, $http, $routeParams ) {
  $http.get('api/1/ticket-attachment/' + $routeParams.ticketId).success(function(data) {
    console.log(data);
    $scope.attachments = data;
  });  
 
  $http.get('api/1/ticket-detail/' + $routeParams.ticketId).success(function(data) {
    console.log(data);
    $scope.details = data;
  });
}

/*
angular.module('ticketService', ['ngResource']).factory('Ticket', function($resource) {
    
    var Ticket = $resource('api/1/ticket/:id', {}, {});
 
//    Ticket.prototype.update = function(cb) {
//      return Ticket.update({id: this._id.$oid},
//          angular.extend({}, this, {_id:undefined}), cb);
//    };
//
//    Ticket.prototype.destroy = function(cb) {
//      return Ticket.remove({id: this._id.$oid}, cb);
//    };

    return Ticket;
  });
  */

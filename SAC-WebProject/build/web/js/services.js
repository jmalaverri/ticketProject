/*angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});*/
angular.module('ticketServices', ['ngResource']).
    factory('Ticket', function($resource){
        return $resource('proxy/listar', {}, {
            query: {method:'GET', params:{'proxy/listar':'tickets'}, isArray:true}
        });
    });


'use strict';

eventsApp.controller('EventListController',
    function EventsListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);
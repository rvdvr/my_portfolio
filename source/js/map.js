//Connect google map
if ($('.map-contacts').html()) {
    $(function() {
        
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 55.4014019, lng: 43.8266742},
            zoom: 15,
            scrollwheel: false,
            disableDefaultUI: true
        
        });
        
        var styles = [
            {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
            },
            {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
            },
            {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
            },
            {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
            },
            {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
            },
            {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
            },
            {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
            },
            {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
            },
            {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
            },
            {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
            },
            {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
            },
            {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#96d7c8'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
            }
        ];
        
        map.setOptions({styles: styles});
        
        }());
};

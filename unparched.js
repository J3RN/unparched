Samples = new Meteor.Collection("samples");

if (Meteor.isClient) {
    Meteor.startup(function() {
        var data = Samples.find({});

        var graphData = data.map(function(dataPoint) {
            return { x: dataPoint.time, y: dataPoint.level };
        });

        console.log(graphData);

        var graph = new Rickshaw.Graph({
            element: document.querySelector("#chart"),
            width: 580,
            height: 250,
            series: [ {
                color: 'steelblue',
                data: graphData
            } ]
        });

        graph.render();
    });

    // Template.trend-chart.helpers({
    //     data: function() {
    //         return Samples.find({});
    //     }
    // });

    // Template.hello.events({
    //     'click button': function () {
    //         // increment the counter when button is clicked
    //         Session.set('counter', Session.get('counter') + 1);
    //     }
    // });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

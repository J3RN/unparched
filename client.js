if (Meteor.isClient || Meteor.isCordova) {
    Meteor.subscribe("samples");
    var points = [];

    Meteor.startup(function() {
        var samplesCursor = Samples.find();

        samplesCursor.observe({
            added: function(doc) {
                Session.set("points", points.push(doc));
                console.log(doc);
                console.log("Added");

                drawGraph();
            }
        });
    });

    function drawGraph() {
        var items = points;

        graphData = items.map(function(item) {
            return { x: item.time, y: item.level };
        });

        console.log(graphData);

        var graph = new Rickshaw.Graph({
            element: document.querySelector("#chart"),
            width: 580,
            height: 250,
            series: [ {
                color: 'steelblue',
                data: graphData
            } ],
            interpolation: 'linear'
        });

        graph.render();
    }
}

Samples = new Meteor.Collection("samples");

if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.publish("samples", function() {
            return Samples.find();
        })
    });
}

function Route () {
    this._stations = [];
}

Route.prototype.addStation = function(station) {
    this._stations.push(station);
}

Route.prototype.getStations = function() {
    return this._stations;
}
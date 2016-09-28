"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Ashe' },
            { id: 2, name: 'Garen' },
            { id: 3, name: 'Annie' },
            { id: 4, name: 'Malzahar' },
            { id: 5, name: 'Xerath' },
            { id: 6, name: 'Varus' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
angular.module('app',['ui.bootstrap']);

angular.module('app').controller('ctrl1', ctrl1);

ctrl1.$inject = ['promiseMaker', '$q'];

function ctrl1(promiseMaker) {
    var vm = this;
    vm.promises = [];
    vm.showbar = false;
    vm.originalPromiseCount = 0;

    vm.getPromises = function () {
        vm.originalPromiseCount = 0;
        var newPromises = promiseMaker.getVolley();
        vm.showbar = true;
        vm.originalPromiseCount = newPromises.length;
        newPromises.forEach(function (prom) {
            pushPromise(prom)
        })
    };

    vm.getPercentComplete = function () {
        if (vm.promises.length === 0) {
            return 0;
        }
        return 100 * (vm.originalPromiseCount - vm.promises.length) / vm.originalPromiseCount;
    };

    function pushPromise(prom) {
        prom.finally(function () {
            console.log('and last but not least', prom);
            removePromise(prom);
        });
        vm.promises.push(prom);
    }

    function removePromise(prom) {
        vm.promises.pop();
        vm.promises.length === 0 ? vm.showbar = false : vm.showbar = true;
        console.log('promises is now', this.promises);
    }

    return vm;
}
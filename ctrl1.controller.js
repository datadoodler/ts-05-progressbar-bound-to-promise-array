angular.module('app').controller('ctrl1', ctrl1);

ctrl1.$inject = ['promiseMaker','$q'];

function ctrl1(promiseMaker, $q) {
    var cb = function (d) {
        alert(d)
    }
    var vm = this;
    vm.promises = [];
    vm.promises.push(promiseMaker.getVolley(cb));
    vm.name = 'kent';
    var que=$q;
    console.log('que1',que)
    vm.getMorePromises = function () {
console.log('que',que)
        //vm.promises.push(promiseMaker.getVolley());
        que.all(promiseMaker.getVolley()).then(function (value) {
            console.log("$q.all SUCCESS", value)
        });
    };

$q.all(vm.promises).then(function(val){
    console.log('$q.all outside resolved',val)
})

    vm.denominator = vm.promises.length;

    vm.getPromiseStatus = function () {
        console.log('vm.promises[0];', vm.promises[0]);
        return vm.promises[0];

    }

    //promiseMaker.processLotsOfData(['data','d1','d2','d3'])
    //    .then(function(result){
    //        // success
    //        console.log('there has been success',result)
    //    }, function(error){
    //        // error
    //        console.log('there has been error',error)
    //    }, function(percentComplete){
    //        console.log('there has been progress',percentComplete);
    //        vm.progress = percentComplete;
    //    });

    return vm;
}
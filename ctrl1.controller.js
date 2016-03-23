angular.module('app').controller('tsCtrl', tsCtrl);

tsCtrl.$inject=['promiseMaker'];

function tsCtrl(promiseMaker) {
    var cb=function(d){
        alert(d)
    }
    var vm = this;
    vm.promises = [];
    vm.promises.push(promiseMaker.getVolley(cb));
    vm.name = 'kent';
    vm.getMorePromises = function () {
        vm.promises.push(promiseMaker.getVolley())
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
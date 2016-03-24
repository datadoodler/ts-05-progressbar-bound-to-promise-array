angular.module('app')
    .factory('promiseMaker', function ($q, $timeout) {
        var promiseMaker = {};

        promiseMaker.getVolley = function (cb) {
            console.log('starting getVolley', new Date());
            var rtrn=[];

            //for(var i=0;i<10;i++){
            //    rtrn.push($q.when($timeout(function () {
            //        console.log('new', new Date())
            //    }, 1000 + (Math.random() * 3000))));
            //}


            for(var i=0;i<10;i++){
                rtrn.push($timeout(function(){$q.when({abc:"def"})},1000+(Math.random() * 3000)));
            }

            return rtrn;

        };

        return promiseMaker;
    });
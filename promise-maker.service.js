angular.module('app')
    .factory('promiseMaker', function ($q, $timeout) {
        var promiseMaker = {};

        promiseMaker.getVolley = function (cb) {
            var t = new Date();
            console.log('starting getVolley', new Date());
            var rtrn=[];

            for(var i=0;i<10;i++){
                rtrn.push($q.when($timeout(function (params) {
                    console.log('new', new Date())
                }, 1000 + (Math.random() * 5000))));
            }

            return rtrn;
            //return $q.when($timeout(function () {
            //    console.log('new', new Date())
            //}, 15000));
            //var deferred= $q.defer();
            //$timeout(function(){
            //    //console.log();
            //    console.log('new',new Date());
            //    deferred.resolve("OK")
            //    cb(t)
            //},3000);
            //return deferred.promise
        };

        promiseMaker.processLotsOfData = function (data) {
            var output = [],
                deferred = $q.defer(),
                percentComplete = 0;

            for (var i = 0; i < data.length; i++) {

                $timeout(function () {
                    var dt1 = data[i];
                    var thiscount = i;
                    console.log(dt1);
                    output.push(dt1 + 'processed');
                    percentComplete = (thiscount + 1) / data.length * 100;
                    deferred.notify(percentComplete);
                }, 500);

            }

            deferred.resolve(output);

            return deferred.promise;
        };

        return promiseMaker;
    });
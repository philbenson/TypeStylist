(function() {
    app = angular.module('typestylist', ['dm.style']);

    app.controller('StyleController', function() {
        var vm = this;
        
        vm.base = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 1.5,
            letterSpacing: 0
        };
        
        vm.heading = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h1 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 13,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };
    });
})();
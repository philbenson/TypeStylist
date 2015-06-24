(function() {
    app = angular.module('typeStylist', ['dm.style']);

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
            fontSize: 1.9,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h2 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.75,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h3 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.6,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h4 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.45,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h5 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.3,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h6 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.15,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.h6 = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: 1.15,
            fontWeight: '700',
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.small = {
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontSize: .6,
            fontWeight: '400',
            letterSpacing: 0,
            textTransform: 'none'
        };

        vm.list = {
            marginLeft: 10
        };

        vm.ol = {
            listStyleType: 'decimal'
        };

        vm.nestedOl = {
            listStyleType: 'lower-alpha'
        };

        vm.ul = {
            listStyleType: 'disc'
        };

        vm.nestedUl = {
            listStyleType: 'circle'
        };

        // Functions to set h1-6 values equal to heading values, called when heading values are changed
        vm.resetHeadingFontFamily = function(fontFamily) {
            vm.h1.fontFamily = fontFamily;
            vm.h2.fontFamily = fontFamily;
            vm.h3.fontFamily = fontFamily;
            vm.h4.fontFamily = fontFamily;
            vm.h5.fontFamily = fontFamily;
            vm.h6.fontFamily = fontFamily;
        };

        vm.resetHeadingFontStyle = function(fontStyle) {
            vm.h1.fontStyle = fontStyle;
            vm.h2.fontStyle = fontStyle;
            vm.h3.fontStyle = fontStyle;
            vm.h4.fontStyle = fontStyle;
            vm.h5.fontStyle = fontStyle;
            vm.h6.fontStyle = fontStyle;
        };

        vm.resetHeadingFontVariant = function(fontVariant) {
            vm.h1.fontVariant = fontVariant;
            vm.h2.fontVariant = fontVariant;
            vm.h3.fontVariant = fontVariant;
            vm.h4.fontVariant = fontVariant;
            vm.h5.fontVariant = fontVariant;
            vm.h6.fontVariant = fontVariant;
        };

        vm.resetHeadingFontWeight = function(fontWeight) {
            vm.h1.fontWeight = fontWeight;
            vm.h2.fontWeight = fontWeight;
            vm.h3.fontWeight = fontWeight;
            vm.h4.fontWeight = fontWeight;
            vm.h5.fontWeight = fontWeight;
            vm.h6.fontWeight = fontWeight;
        };

        vm.resetHeadingLineHeight = function(lineHeight) {
            vm.h1.lineHeight = lineHeight;
            vm.h2.lineHeight = lineHeight;
            vm.h3.lineHeight = lineHeight;
            vm.h4.lineHeight = lineHeight;
            vm.h5.lineHeight = lineHeight;
            vm.h6.lineHeight = lineHeight;
        };

        vm.resetHeadingLetterSpacing = function(letterSpacing) {
            vm.h1.letterSpacing = letterSpacing;
            vm.h2.letterSpacing = letterSpacing;
            vm.h3.letterSpacing = letterSpacing;
            vm.h4.letterSpacing = letterSpacing;
            vm.h5.letterSpacing = letterSpacing;
            vm.h6.letterSpacing = letterSpacing;
        };

        vm.resetHeadingTextTransform = function(textTransform) {
            vm.h1.textTransform = textTransform;
            vm.h2.textTransform = textTransform;
            vm.h3.textTransform = textTransform;
            vm.h4.textTransform = textTransform;
            vm.h5.textTransform = textTransform;
            vm.h6.textTransform = textTransform;
        };
    });
})();
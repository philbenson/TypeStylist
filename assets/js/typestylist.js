// Base Styles ----------------------------------------
$('#base-font-family').on('change', function() {
    var baseFontFamily = $('#base-font-family').val();
    $('body').css('font-family', baseFontFamily);
});
$('#base-font-style').on('change', function() {
    var baseFontStyle = $('#base-font-style').val();
    $('body').css('font-style', baseFontStyle);
});
$('#base-font-variant').on('change', function() {
    var baseFontVariant = $('#base-font-variant').val();
    $('body').css('font-variant', baseFontVariant);
});
$('#base-font-size').on('change keyup', function() {
    var baseFontSize = $('#base-font-size').val();
    $('body').css('font-size', baseFontSize+'px');
});
$('#base-font-weight').on('change', function() {
    var baseFontWeight = $('#base-font-weight').val();
    $('body').css('font-weight', baseFontWeight);
});
$('#base-line-height').on('change keyup', function() {
    var baseLineHeight = $('#base-line-height').val();
    $('body').css('line-height', baseLineHeight+'em');
});
$('#base-letter-spacing').on('change keyup', function() {
    var baseLetterSpacing = $('#base-letter-spacing').val();
    $('body').css('letter-spacing', baseLetterSpacing+'em');
});

// Heading Styles -------------------------------------
// These are set to default values in advance to avoid being overwritten by base styles
var headingFontFamily = $('#heading-font-family').val();
$(':header').css('font-family', headingFontFamily);
var headingFontStyle = $('#heading-font-style').val();
$(':header').css('font-style', headingFontStyle);
var headingFontVariant = $('#heading-font-variant').val();
$(':header').css('font-variant', headingFontVariant);
var headingFontWeight = $('#heading-font-weight').val();
$(':header').css('font-weight', headingFontWeight);
var headingLineHeight = $('#heading-line-height').val();
$(':header').css('line-height', headingLineHeight+'em');
var headingLetterSpacing = $('#heading-letter-spacing').val();
$(':header').css('letter-spacing', headingLetterSpacing+'em');
var headingTextTransform = $('#heading-text-transform').val();
$(':header').css('text-transform', headingTextTransform);

// These overwrite the settings for h1-6
$('#heading-font-family').on('change', function() {
    var headingFontFamily = $('#heading-font-family').val();
    $(':header').css('font-family', headingFontFamily);
    var h1FontFamily = headingFontFamily;
    $('#h1-font-family').val(h1FontFamily);
    var h2FontFamily = headingFontFamily;
    $('#h2-font-family').val(h2FontFamily);
    var h3FontFamily = headingFontFamily;
    $('#h3-font-family').val(h3FontFamily);
    var h4FontFamily = headingFontFamily;
    $('#h4-font-family').val(h4FontFamily);
    var h5FontFamily = headingFontFamily;
    $('#h5-font-family').val(h5FontFamily);
    var h6FontFamily = headingFontFamily;
    $('#h6-font-family').val(h6FontFamily);
});
$('#heading-font-style').on('change', function() {
    var headingFontStyle = $('#heading-font-style').val();
    $(':header').css('font-style', headingFontStyle);
    var h1FontStyle = headingFontStyle;
    $('#h1-font-style').val(h1FontStyle);
    var h2FontStyle = headingFontStyle;
    $('#h2-font-style').val(h2FontStyle);
    var h3FontStyle = headingFontStyle;
    $('#h3-font-style').val(h3FontStyle);
    var h4FontStyle = headingFontStyle;
    $('#h4-font-style').val(h4FontStyle);
    var h5FontStyle = headingFontStyle;
    $('#h5-font-style').val(h5FontStyle);
    var h6FontStyle = headingFontStyle;
    $('#h6-font-style').val(h6FontStyle);
});
$('#heading-font-variant').on('change', function() {
    var headingFontVariant = $('#heading-font-variant').val();
    $(':header').css('font-variant', headingFontVariant);
    var h1FontVariant = headingFontVariant;
    $('#h1-font-variant').val(h1FontVariant);
    var h2FontVariant = headingFontVariant;
    $('#h2-font-variant').val(h2FontVariant);
    var h3FontVariant = headingFontVariant;
    $('#h3-font-variant').val(h3FontVariant);
    var h4FontVariant = headingFontVariant;
    $('#h4-font-variant').val(h4FontVariant);
    var h5FontVariant = headingFontVariant;
    $('#h5-font-variant').val(h5FontVariant);
    var h6FontVariant = headingFontVariant;
    $('#h6-font-variant').val(h6FontVariant);
});
$('#heading-font-weight').on('change', function() {
    var headingFontWeight = $('#heading-font-weight').val();
    $(':header').css('font-weight', headingFontWeight);
    var h1FontWeight = headingFontWeight;
    $('#h1-font-weight').val(h1FontWeight);
    var h2FontWeight = headingFontWeight;
    $('#h2-font-weight').val(h2FontWeight);
    var h3FontWeight = headingFontWeight;
    $('#h3-font-weight').val(h3FontWeight);
    var h4FontWeight = headingFontWeight;
    $('#h4-font-weight').val(h4FontWeight);
    var h5FontWeight = headingFontWeight;
    $('#h5-font-weight').val(h5FontWeight);
    var h6FontWeight = headingFontWeight;
    $('#h6-font-weight').val(h6FontWeight);
});
$('#heading-line-height').on('change keyup', function() {
    var headingLineHeight = $('#heading-line-height').val();
    $(':header').css('line-height', headingLineHeight+'em');
    var h1LineHeight = headingLineHeight;
    $('#h1-line-height').val(h1LineHeight);
    var h2LineHeight = headingLineHeight;
    $('#h2-line-height').val(h2LineHeight);
    var h3LineHeight = headingLineHeight;
    $('#h3-line-height').val(h3LineHeight);
    var h4LineHeight = headingLineHeight;
    $('#h4-line-height').val(h4LineHeight);
    var h5LineHeight = headingLineHeight;
    $('#h5-line-height').val(h5LineHeight);
    var h6LineHeight = headingLineHeight;
    $('#h6-line-height').val(h6LineHeight);
});
$('#heading-letter-spacing').on('change keyup', function() {
    var headingLetterSpacing = $('#heading-letter-spacing').val();
    $(':header').css('letter-spacing', headingLetterSpacing+'em');
    var h1LetterSpacing = headingLetterSpacing;
    $('#h1-letter-spacing').val(h1LetterSpacing);
    var h2LetterSpacing = headingLetterSpacing;
    $('#h2-letter-spacing').val(h2LetterSpacing);
    var h3LetterSpacing = headingLetterSpacing;
    $('#h3-letter-spacing').val(h3LetterSpacing);
    var h4LetterSpacing = headingLetterSpacing;
    $('#h4-letter-spacing').val(h4LetterSpacing);
    var h5LetterSpacing = headingLetterSpacing;
    $('#h5-letter-spacing').val(h5LetterSpacing);
    var h6LetterSpacing = headingLetterSpacing;
    $('#h6-letter-spacing').val(h6LetterSpacing);
});
$('#heading-text-transform').on('change keyup', function() {
    var headingTextTransform = $('#heading-text-transform').val();
    $(':header').css('text-transform', headingTextTransform);
    var h1TextTransform = headingTextTransform;
    $('#h1-text-transform').val(h1TextTransform);
    var h2TextTransform = headingTextTransform;
    $('#h2-text-transform').val(h2TextTransform);
    var h3TextTransform = headingTextTransform;
    $('#h3-text-transform').val(h3TextTransform);
    var h4TextTransform = headingTextTransform;
    $('#h4-text-transform').val(h4TextTransform);
    var h5TextTransform = headingTextTransform;
    $('#h5-text-transform').val(h5TextTransform);
    var h6TextTransform = headingTextTransform;
    $('#h6-text-transform').val(h6TextTransform);
});

// h1 Styles ------------------------------------------
$('#h1-font-family').on('change', function() {
    var h1FontFamily = $('#h1-font-family').val();
    $('h1').css('font-family', h1FontFamily);
});
$('#h1-font-style').on('change', function() {
    var h1FontStyle = $('#h1-font-style').val();
    $('h1').css('font-style', h1FontStyle);
});
$('#h1-font-variant').on('change', function() {
    var h1FontVariant = $('#h1-font-variant').val();
    $('h1').css('font-variant', h1FontVariant);
});
$('#h1-font-size').on('change keyup', function() {
    var h1FontSize = $('#h1-font-size').val();
    $('h1').css('font-size', h1FontSize+'em');
});
$('#h1-font-weight').on('change', function() {
    var h1FontWeight = $('#h1-font-weight').val();
    $('h1').css('font-weight', h1FontWeight);
});
$('#h1-line-height').on('change keyup', function() {
    var h1LineHeight = $('#h1-line-height').val();
    $('h1').css('line-height', h1LineHeight+'em');
});
$('#h1-letter-spacing').on('change keyup', function() {
    var h1LetterSpacing = $('#h1-letter-spacing').val();
    $('h1').css('letter-spacing', h1LetterSpacing+'em');
});
$('#h1-text-transform').on('change', function() {
    var h1TextTransform = $('#h1-text-transform').val();
    $('h1').css('text-transform', h1TextTransform);
});

// h2 Styles ------------------------------------------
$('#h2-font-family').on('change', function() {
    var h2FontFamily = $('#h2-font-family').val();
    $('h2').css('font-family', h2FontFamily);
});
$('#h2-font-style').on('change', function() {
    var h2FontStyle = $('#h2-font-style').val();
    $('h2').css('font-style', h2FontStyle);
});
$('#h2-font-variant').on('change', function() {
    var h2FontVariant = $('#h2-font-variant').val();
    $('h2').css('font-variant', h2FontVariant);
});
$('#h2-font-size').on('change keyup', function() {
    var h2FontSize = $('#h2-font-size').val();
    $('h2').css('font-size', h2FontSize+'em');
});
$('#h2-font-weight').on('change', function() {
    var h2FontWeight = $('#h2-font-weight').val();
    $('h2').css('font-weight', h2FontWeight);
});
$('#h2-line-height').on('change keyup', function() {
    var h2LineHeight = $('#h2-line-height').val();
    $('h2').css('line-height', h2LineHeight+'em');
});
$('#h2-letter-spacing').on('change keyup', function() {
    var h2LetterSpacing = $('#h2-letter-spacing').val();
    $('h2').css('letter-spacing', h2LetterSpacing+'em');
});
$('#h2-text-transform').on('change', function() {
    var h2TextTransform = $('#h2-text-transform').val();
    $('h2').css('text-transform', h2TextTransform);
});

// h3 Styles ------------------------------------------
$('#h3-font-family').on('change', function() {
    var h3FontFamily = $('#h3-font-family').val();
    $('h3').css('font-family', h3FontFamily);
});
$('#h3-font-style').on('change', function() {
    var h3FontStyle = $('#h3-font-style').val();
    $('h3').css('font-style', h3FontStyle);
});
$('#h3-font-variant').on('change', function() {
    var h3FontVariant = $('#h3-font-variant').val();
    $('h3').css('font-variant', h3FontVariant);
});
$('#h3-font-size').on('change keyup', function() {
    var h3FontSize = $('#h3-font-size').val();
    $('h3').css('font-size', h3FontSize+'em');
});
$('#h3-font-weight').on('change', function() {
    var h3FontWeight = $('#h3-font-weight').val();
    $('h3').css('font-weight', h3FontWeight);
});
$('#h3-line-height').on('change keyup', function() {
    var h3LineHeight = $('#h3-line-height').val();
    $('h3').css('line-height', h3LineHeight+'em');
});
$('#h3-letter-spacing').on('change keyup', function() {
    var h3LetterSpacing = $('#h3-letter-spacing').val();
    $('h3').css('letter-spacing', h3LetterSpacing+'em');
});
$('#h3-text-transform').on('change', function() {
    var h3TextTransform = $('#h3-text-transform').val();
    $('h3').css('text-transform', h3TextTransform);
});

// h4 Styles ------------------------------------------
$('#h4-font-family').on('change', function() {
    var h4FontFamily = $('#h4-font-family').val();
    $('h4').css('font-family', h4FontFamily);
});
$('#h4-font-style').on('change', function() {
    var h4FontStyle = $('#h4-font-style').val();
    $('h4').css('font-style', h4FontStyle);
});
$('#h4-font-variant').on('change', function() {
    var h4FontVariant = $('#h4-font-variant').val();
    $('h4').css('font-variant', h4FontVariant);
});
$('#h4-font-size').on('change keyup', function() {
    var h4FontSize = $('#h4-font-size').val();
    $('h4').css('font-size', h4FontSize+'em');
});
$('#h4-font-weight').on('change', function() {
    var h4FontWeight = $('#h4-font-weight').val();
    $('h4').css('font-weight', h4FontWeight);
});
$('#h4-line-height').on('change keyup', function() {
    var h4LineHeight = $('#h4-line-height').val();
    $('h4').css('line-height', h4LineHeight+'em');
});
$('#h4-letter-spacing').on('change keyup', function() {
    var h4LetterSpacing = $('#h4-letter-spacing').val();
    $('h4').css('letter-spacing', h4LetterSpacing+'em');
});
$('#h4-text-transform').on('change', function() {
    var h4TextTransform = $('#h4-text-transform').val();
    $('h4').css('text-transform', h4TextTransform);
});

// h5 Styles ------------------------------------------
$('#h5-font-family').on('change', function() {
    var h5FontFamily = $('#h5-font-family').val();
    $('h5').css('font-family', h5FontFamily);
});
$('#h5-font-style').on('change', function() {
    var h5FontStyle = $('#h5-font-style').val();
    $('h5').css('font-style', h5FontStyle);
});
$('#h5-font-variant').on('change', function() {
    var h5FontVariant = $('#h5-font-variant').val();
    $('h5').css('font-variant', h5FontVariant);
});
$('#h5-font-size').on('change keyup', function() {
    var h5FontSize = $('#h5-font-size').val();
    $('h5').css('font-size', h5FontSize+'em');
});
$('#h5-font-weight').on('change', function() {
    var h5FontWeight = $('#h5-font-weight').val();
    $('h5').css('font-weight', h5FontWeight);
});
$('#h5-line-height').on('change keyup', function() {
    var h5LineHeight = $('#h5-line-height').val();
    $('h5').css('line-height', h5LineHeight+'em');
});
$('#h5-letter-spacing').on('change keyup', function() {
    var h5LetterSpacing = $('#h5-letter-spacing').val();
    $('h5').css('letter-spacing', h5LetterSpacing+'em');
});
$('#h5-text-transform').on('change', function() {
    var h5TextTransform = $('#h5-text-transform').val();
    $('h5').css('text-transform', h5TextTransform);
});

// h6 Styles ------------------------------------------
$('#h6-font-family').on('change', function() {
    var h6FontFamily = $('#h6-font-family').val();
    $('h6').css('font-family', h6FontFamily);
});
$('#h6-font-style').on('change', function() {
    var h6FontStyle = $('#h6-font-style').val();
    $('h6').css('font-style', h6FontStyle);
});
$('#h6-font-variant').on('change', function() {
    var h6FontVariant = $('#h6-font-variant').val();
    $('h6').css('font-variant', h6FontVariant);
});
$('#h6-font-size').on('change keyup', function() {
    var h6FontSize = $('#h6-font-size').val();
    $('h6').css('font-size', h6FontSize+'em');
});
$('#h6-font-weight').on('change', function() {
    var h6FontWeight = $('#h6-font-weight').val();
    $('h6').css('font-weight', h6FontWeight);
});
$('#h6-line-height').on('change keyup', function() {
    var h6LineHeight = $('#h6-line-height').val();
    $('h6').css('line-height', h6LineHeight+'em');
});
$('#h6-letter-spacing').on('change keyup', function() {
    var h6LetterSpacing = $('#h6-letter-spacing').val();
    $('h6').css('letter-spacing', h6LetterSpacing+'em');
});
$('#h6-text-transform').on('change', function() {
    var h6TextTransform = $('#h6-text-transform').val();
    $('h6').css('text-transform', h6TextTransform);
});

// small Styles ------------------------------------------
// These are set to default values in advance to avoid being overwritten by heading styles
var smallFontFamily = $('#small-font-family').val();
$('small').css('font-family', smallFontFamily);
var smallFontStyle = $('#small-font-style').val();
$('small').css('font-style', smallFontStyle);
var smallFontVariant = $('#small-font-variant').val();
$('small').css('font-variant', smallFontVariant);
var smallFontSize = $('#small-font-size').val();
$('small').css('font-size', smallFontSize+'em');
var smallFontWeight = $('#small-font-weight').val();
$('small').css('font-weight', smallFontWeight);
/*var smallLineHeight = $('#small-line-height').val();
$('small').css('line-height', smallLineHeight+'em');*/
var smallLetterSpacing = $('#small-letter-spacing').val();
$('small').css('letter-spacing', smallLetterSpacing+'em');
var smallTextTransform = $('#small-text-transform').val();
$('small').css('text-transform', smallTextTransform);

$('#small-font-family').on('change', function() {
    var smallFontFamily = $('#small-font-family').val();
    $('small').css('font-family', smallFontFamily);
});
$('#small-font-style').on('change', function() {
    var smallFontStyle = $('#small-font-style').val();
    $('small').css('font-style', smallFontStyle);
});
$('#small-font-variant').on('change', function() {
    var smallFontVariant = $('#small-font-variant').val();
    $('small').css('font-variant', smallFontVariant);
});
$('#small-font-size').on('change keyup', function() {
    var smallFontSize = $('#small-font-size').val();
    $('small').css('font-size', smallFontSize+'em');
});
$('#small-font-weight').on('change', function() {
    var smallFontWeight = $('#small-font-weight').val();
    $('small').css('font-weight', smallFontWeight);
});
/*$('#small-line-height').on('change keyup', function() {
    var smallLineHeight = $('#small-line-height').val();
    $('small').css('line-height', smallLineHeight+'em');
});*/
$('#small-letter-spacing').on('change keyup', function() {
    var smallLetterSpacing = $('#small-letter-spacing').val();
    $('small').css('letter-spacing', smallLetterSpacing+'em');
});
$('#small-text-transform').on('change', function() {
    var smallTextTransform = $('#small-text-transform').val();
    $('small').css('text-transform', smallTextTransform);
});

// List Style ------------------------------------------
$('#list-margin-left').on('change keyup', function() {
    var listMarginLeft = $('#list-margin-left').val();
    $('ol, ul').css('margin-left', listMarginLeft+'px');
});

// ol Style ------------------------------------------
/*$('#ol-margin-left').on('change keyup', function() {
    var olMarginLeft = $('#ol-margin-left').val();
    $('ol').css('margin-left', olMarginLeft+'px');
});*/
$('#ol-list-style-type').on('change', function() {
    var olListStyleType = $('#ol-list-style-type').val();
    $('ol').css('list-style-type', olListStyleType);
    // Preserve nested ol style
    var nestedOlListStyleType = $('#nested-ol-list-style-type').val();
    $('ol ol').css('list-style-type', nestedOlListStyleType);
});

// Nested ol Style ------------------------------------------
$('#nested-ol-list-style-type').on('change', function() {
    var nestedOlListStyleType = $('#nested-ol-list-style-type').val();
    $('ol ol').css('list-style-type', nestedOlListStyleType);
});

// ul Style ------------------------------------------
/*$('#ul-margin-left').on('change keyup', function() {
    var ulMarginLeft = $('#ul-margin-left').val();
    $('ul').css('margin-left', ulMarginLeft+'px');
});*/
$('#ul-list-style-type').on('change', function() {
    var ulListStyleType = $('#ul-list-style-type').val();
    $('ul').css('list-style-type', ulListStyleType);
    // Preserve nested ul style
    var nestedUlListStyleType = $('#nested-ul-list-style-type').val();
    $('ul ul').css('list-style-type', nestedUlListStyleType);
});

// Nested ul Style ------------------------------------------
$('#nested-ul-list-style-type').on('change', function() {
    var nestedUlListStyleType = $('#nested-ul-list-style-type').val();
    $('ul ul').css('list-style-type', nestedUlListStyleType);
});
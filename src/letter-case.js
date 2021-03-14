var kapheinJsTypeTrait = require("kaphein-js-type-trait");
var isDefinedAndNotNull = kapheinJsTypeTrait.isDefinedAndNotNull;

module.exports = (function ()
{
    var _isAlphabetic = /[^.,/#!$%^&*;:{}=\-_`~()0-9]/;
    var _isPunctuation = /[.,/#!$%^&*;:{}=\-_`~()]/;

    /**
     *  @param {string} text
     *  @param {string} [delimiter]
     *  @param {{}} [option]
     */
    function toDelimiterSeparatedCase(text)
    {
        var delimiter = arguments[1];
        if(!isDefinedAndNotNull(delimiter))
        {
            delimiter = "_";
        }

        var option = arguments[2];
        if(!isDefinedAndNotNull(option))
        {
            option = {};
        }

        var shouldIncrementE = false;
        var shouldExtractToken = false;
        var initial;
        var tokens = [];
        var s = 0, e = 1;
        while(s < text.length)
        {
            if(e < text.length)
            {
                var c = text[e];

                if(_isAlphabetic.test(c))
                {
                    shouldExtractToken = c === c.toUpperCase();
                }
                else
                {
                    shouldExtractToken = (e > 0 && _isAlphabetic.test(text[e - 1]));
                }

                shouldIncrementE = true;
            }
            else
            {
                shouldExtractToken = true;
            }

            if(shouldExtractToken)
            {
                shouldExtractToken = false;

                initial = text[s];
                tokens.push(initial.toLowerCase() + text.substring(s + 1, e).toLowerCase());

                s = e;
            }

            if(shouldIncrementE)
            {
                shouldIncrementE = false;
                ++e;
            }
        }

        return tokens.join(delimiter);
    }

    /**
     *  @param {string} text
     *  @param {string | RegExp} [delimiter]
     *  @param {{
            capitalizeInitial? : boolean;
        }} [option]
     */
    function toCapitalizedCase(text)
    {
        var delimiter = arguments[1];
        if(!isDefinedAndNotNull(delimiter))
        {
            delimiter = _isPunctuation;
        }

        var option = arguments[2];
        if(!isDefinedAndNotNull(option))
        {
            option = {};
        }

        var tokens = text.split(delimiter);
        for(var i = 0; i < tokens.length; ++i)
        {
            var finalToken = tokens[i].toLowerCase();
            if(finalToken.length > 0)
            {
                if(i > 0 || option.capitalizeInitial)
                {
                    finalToken = finalToken[0].toUpperCase() + finalToken.substring(1);
                }
            }

            tokens[i] = finalToken;
        }

        return tokens.join("");
    }

    return {
        toDelimiterSeparatedCase : toDelimiterSeparatedCase,
        toCapitalizedCase : toCapitalizedCase
    };
})();

var kapheinJsTypeTrait = require("kaphein-js-type-trait");
var isDefinedAndNotNull = kapheinJsTypeTrait.isDefinedAndNotNull;

module.exports = (function ()
{
    var _isPunctuation = /[.,/#!$%^&*;:{}=\-_`~()]/;

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
        toCapitalizedCase : toCapitalizedCase
    };
})();

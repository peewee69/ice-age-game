window.IceAge = {
    CalculateEndResult: function() {
        var data = window.IceAge.DataPoints,
            vals = window.IceAge.Values;

        return data[vals.precession][vals.eccentricity][vals.obliquity];
    },
    Values: {
        precession: undefined,
        eccentricity: undefined,
        obliquity: undefined
    },
    runEndSequence: function ($endSlide, params) {
        alert(window.IceAge.CalculateEndResult());
    }
}
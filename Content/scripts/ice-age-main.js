window.IceAge = {
    Attempts: 0,
    Outcomes: [
        { 
            id: 'FullGlacial',
            title: 'Full Glacial',
            html: '<strong>Congratulations!</strong><p>You achieved an ice age in {0} attempts.</p>'
        },
        { 
            id: 'Stadial',
            title: 'Stadial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        },
        {
            id: 'Stadial-1',
            title: 'Stadial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        },
        {
            id: 'InterStadial-1',
            title: 'Interstadial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        },
        {
            id: 'InterStadial',
            title: 'Interstadial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        },
        {
            id: 'InterGlacial-1',
            title: 'Interglacial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        },
        {
            id: 'InterGlacial',
            title: 'Interglacial',
            html: '<p>You need to rethink your ideas regarding which conditions would produce the greatest cooling – then have another go.</p>'
        }
    ],
    CalculateEndResult: function() {
        var data = window.IceAge.DataPoints,
            vals = window.IceAge.Values;

        if (vals) {
            return data[vals.obliquity][vals.eccentricity][vals.precession];
        }

        return undefined;
    },
    Values: undefined,
    runEndSequence: function ($endSlide, params) {
        var result = parseInt(window.IceAge.CalculateEndResult());
        var outcome = window.IceAge.Outcomes[result - 1]
        var $video = $endSlide.find('#outcome-video');
        $video.prop('src', 'Content/videos/outcomes/' + outcome.id + '.mov');
        $video[0].addEventListener('ended', function () {
            window.IceAge.Attempts++;

            $video.hide();
            var $content = $endSlide.find('#outcome-content');

            $content.find('#outcome-image').prop('src', './images/outcomes/' + outcome.id + '.jpg');
            $content.find('#outcome-title').text(outcome.title);
            $content.find('#outcome-content').html(outcome.html.replace('{0}', window.IceAge.Attempts));
            $content.show();

            if (outcome.id == 'Glacial') {
                window.IceAge.Attempts = 0;
            }



        });
        $video[0].play();
    }
}
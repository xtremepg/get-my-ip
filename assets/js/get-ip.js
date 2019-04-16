$(document).ready(function() {
    $('.btn-ip').click(function() {

        var version = $(this).data('version');
        var url = version === 'v4' ? 'https://api.ipify.org/?format=json' : 'https://api6.ipify.org/?format=json';

        $.get(url, function(response) {
            $('#ip-result').html('<h2>Your Ip Address is: <strong>' + response.ip + '</strong></h2>').collapse();
        });
    });
});
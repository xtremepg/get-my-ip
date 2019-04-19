$(document).ready(function() {

    obterIp(obterUrl('v4'));

    $('.btn-ip').click(function() {
        var version = $(this).data('version');
        var url = obterUrl(version);
        obterIp(url);
    });
});

function obterUrl(version) {
    return version === 'v4' ? 'https://api.ipify.org/?format=json' : 'https://api6.ipify.org/?format=json';
}

function obterIp(url) {
    $.get(url, function(response) {
        $('.resultado-ip').html(response.ip).collapse();
    });
}
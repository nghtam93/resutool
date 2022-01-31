$(document).ready(function(){

    if( $('#table_userinfo').length > 0 ){
        $('#table_userinfo').DataTable({
            "searching": false,
            "paging": false,
            "info": false,
            "order": [0],
            "columnDefs": [ {
                'targets': "no-sort",
                'orderable': false, /* true or false */
            }],
        });
    }

    if( $('.table_list').length > 0 ){
        var table = $('.table_list').DataTable({
            searching: false,
            paging: false,
            info: false,
            order: [0],
            columnDefs: [ {
                'targets': "no-sort",
                'orderable': false, /* true or false */
            }],
            // responsive: true
        });
        table.columns().iterator( 'column', function (ctx, idx) {
            $( table.column(idx).header() ).find('div').append('<span class="sort-icon"/>');
        } );
    }

    

});



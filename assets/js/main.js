$(document).ready(function(){

    if( $('table').is('#table_userinfo')){
        var table = $('#table_userinfo').DataTable({
            searching: false,
            paging: false,
            info: false,
            order: [[ 0, "desc" ]],
            columnDefs: [ {
                'targets': "no-sort",
                'orderable': false, /* true or false */
            }],
        });
        table.columns().iterator( 'column', function (ctx, idx) {
            $( table.column(idx).header() ).find('div').append('<span class="sort-icon"/>');
        } );
    }

    if( $('table').is('.table_list') ){
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

    $('.box__toggle__header').click(function(){
        $(this).closest('.box__toggle').toggleClass('active').find('.box__toggle__content').slideToggle()
    })

});



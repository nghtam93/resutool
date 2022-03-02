$(document).ready(function(){

    // if( $('table').is('#table_userinfo')){
    //     var table = $('#table_userinfo').DataTable({
    //         searching: false,
    //         paging: false,
    //         info: false,
    //         order: [[ 0, "desc" ]],
    //         columnDefs: [ {
    //             'targets': "no-sort",
    //             'orderable': false, /* true or false */
    //         }],
    //     });
    //     table.columns().iterator( 'column', function (ctx, idx) {
    //         $( table.column(idx).header() ).find('div').append('<span class="sort-icon"/>');
    //     } );
    // }

    // if( $('table').is('.table_list') ){
    //     var table = $('.table_list').DataTable({
    //         searching: false,
    //         paging: false,
    //         info: false,
    //         order: [0],
    //         columnDefs: [ {
    //             'targets': "no-sort",
    //             'orderable': false, /* true or false */
    //         }],
    //         // responsive: true
    //     });
    //     table.columns().iterator( 'column', function (ctx, idx) {
    //         $( table.column(idx).header() ).find('div').append('<span class="sort-icon"/>');
    //     } );
    // }

    $('.box__toggle__header').click(function(){
        $(this).closest('.box__toggle').toggleClass('active').find('.box__toggle__content').slideToggle()
    })

    $('.js-table-edit tr').hover(function(e) {
        $('.js-table-edit tr').removeClass('active')
        $(this).addClass('active')
    })

    $('.table_list tbody input[type=checkbox]').click(function function_name(argument) {
        // body...
    })

    // Table checkbox all
    const DynamicCheckboxes = {

        checkboxes: document.querySelectorAll('.table_list tbody input[type=checkbox]'),
        selectAllTarget: document.querySelector('.js-checkbox-all input[type="checkbox"]'),

        init(){
            this.shiftToSelect();
            this.selectAll();
        },
        shiftToSelect(){
            const checkboxes = this.checkboxes;let lastChecked
            function handleCheck(event) {
                let check_checkbox = false
                let between = false
                if(event.shiftKey){
                    checkboxes.forEach(checkbox => {
                        if(checkbox === this || checkbox === lastChecked) between = !between
                        if(between){
                            checkbox.checked = true
                            check_checkbox = true
                        }
                    });
                }
                lastChecked = this

                // Add class checkbox
                checkboxes.forEach(checkbox => {
                    checkbox.closest('tr').classList.remove("row-acitve");
                    if(checkbox.checked == true){
                        check_checkbox = true
                        checkbox.closest('tr').classList.add("row-acitve");
                    }
                });

                $('.js-table-action-mb').removeClass('active')
                if(check_checkbox == true){
                    $('.js-table-action-mb').addClass('active')
                }else{
                    console.log(222222)
                }
            }
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener("click",handleCheck,false)
            });
        },
        selectAll(){
            this.selectAllTarget.addEventListener("click",handleSelectAll.bind(this),false)
            function handleSelectAll(){
                let checked = false
                if(this.selectAllTarget.checked) checked = true
                this.checkboxes.forEach(checkbox => {
                    checkbox.checked = checked
                    checkbox.closest('tr').classList.remove("row-acitve");
                    if(checkbox.checked == true){
                        checkbox.closest('tr').classList.add("row-acitve");
                    }
                });
            }
        }
      }
    if($('.table_list').length){
        DynamicCheckboxes.init()
    }

});



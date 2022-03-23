$(document).ready(function(){


    $('.box__toggle__header').click(function(){
        $(this).closest('.box__toggle').toggleClass('active').find('.box__toggle__content').slideToggle()
    })

    $('.js-table-edit tr').hover(function(e) {
        $('.js-table-edit tr').removeClass('active')
        $(this).addClass('active')
    })

    // Table checkbox all
    const DynamicCheckboxes = {

        checkboxes: document.querySelectorAll('.table_list tbody input[type=checkbox]'),
        selectAllTarget: document.querySelector('.js-checkbox-all input[type="checkbox"]'),

        init(){
            this.shiftToSelect();

            if(this.selectAllTarget){
                this.selectAll();
            }
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

                    $('.js-table-action-mb').removeClass('active')
                    if(checkbox.checked == true){
                        checkbox.closest('tr').classList.add("row-acitve");
                        $('.js-table-action-mb').addClass('active')
                    }
                });
            }
        }
      }
    if($('.table_list').length){
        DynamicCheckboxes.init()
    }

});



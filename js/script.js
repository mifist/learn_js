(function() {
'use strict'; // ES6 - строгий режим

    let appData = {
        'budget': get_budget(),
        'time': get_date(),
        'expenses': get_expenses_obj(), 
        'optional_expenses': {},
        'income': Array(),
        'savings': false
    };

    function get_budget() {
         let res_budget = prompt('Ваш бюджет на месяц?', '');
         return res_budget;
    }
    function get_date() {
        let res_date = prompt('Введите дату в формате YYYY-MM-DD', '');
        return res_date;
    }
    function get_expenses_obj() {
        let first_obj = '',
            second_obj = '',
            res_obj = {};
            for ( var i = 0; i < 2; i++ ) {
                first_obj = prompt('Введите обязательную статью расходов в этом месяце', '');
                second_obj = prompt('Во сколько обойдется', '');
                res_obj[first_obj] = second_obj;
            }
        return res_obj;
    }
    function show_budget() {
        let max_days = 30,
        bugget_oneday = appData.budget/max_days;
        console.log(appData);
        alert('Бюджет на 1 день '+bugget_oneday);
    
    }
    show_budget();

  
    
})();

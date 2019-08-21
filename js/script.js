(function() {
'use strict'; // ES6 - строгий режим

    let money = +prompt('Ваш бюджет на месяц?', ''),
        time = prompt('Введите дату в формате YYYY-MM-DD', ''),
        appData = {
            budget: money,
            time_date: time,
            expenses: get_expenses_obj(), 
            optional_expenses: {},
            income: Array(),
            savings: false
        };

    function get_expenses_obj() {
        let res_obj = {},
            count = 0;

        for ( let i = 0; i < 2; i++ ) {
            let first_obj = prompt('Введите обязательную статью расходов в этом месяце', ''),
                second_obj = prompt('Во сколько обойдется', '');

            if ( typeof(first_obj) === 'string' && typeof(first_obj) != null &&
                    typeof(second_obj) != null && first_obj != '' && second_obj != '' &&
                    first_obj < 50 ) {
                res_obj[first_obj] = second_obj;
            } else {
                alert ('Some problem with yours data..... Try one more time. Good luck!');
                break;
            }
        }
// -------------------------------------------------------           
        // do {
        //     let first_obj = prompt('Введите обязательную статью расходов в этом месяце', ''),
        //     second_obj = prompt('Во сколько обойдется', '');

        //     if ( typeof(first_obj) === 'string' && typeof(first_obj) != null &&
        //             typeof(second_obj) != null && first_obj != '' && second_obj != '' &&
        //             first_obj < 50 ) {
        //         res_obj[first_obj] = second_obj;
        //     }
        //     count++;
        // } while ( count < 2 );
// -------------------------------------------------------
        // while ( count < 2 ) {
        //     let first_obj = prompt('Введите обязательную статью расходов в этом месяце', ''),
        //     second_obj = prompt('Во сколько обойдется', '');

        //     if ( typeof(first_obj) === 'string' && typeof(first_obj) != null &&
        //             typeof(second_obj) != null && first_obj != '' && second_obj != '' &&
        //             first_obj < 50 ) {
        //         res_obj[first_obj] = second_obj;
        //     }
        //     count++;
        // }
// -------------------------------------------------------
        return res_obj;
    }
    function show_budget() {
        let max_days = 30;
        appData.money_per_day = appData.budget/max_days;
        console.log(appData);
       
        if ( appData.money_per_day < 100 ) {
            console.log('Heeeelp!!!!!!');
        } else if( appData.money_per_day > 100 && appData.money_per_day < 2000 ) {
            console.log('Not so bad.....');
        } else {
            console.log('Cool!!');
        }
        if ( appData.money_per_day ) {
            alert( 'Бюджет на 1 день: '+ appData.money_per_day ); 
        }
       
    }
    
    show_budget();
    
})();


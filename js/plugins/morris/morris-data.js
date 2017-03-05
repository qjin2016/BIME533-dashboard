// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 Q1',
            total_num_of_enrollees: 100,
            quarterly_active_users: 20,
            num_of_patients: 1232
        }, {
            period: '2016 Q2',
            total_num_of_enrollees: 120,
            quarterly_active_users: 50,
            num_of_patients: 1236
        }, {
            period: '2016 Q3',
            total_num_of_enrollees: 260,
            quarterly_active_users: 160,
            num_of_patients: 1344
        }, {
            period: '2016 Q4',
            total_num_of_enrollees: 500,
            quarterly_active_users: 230,
            num_of_patients: 1346
        }, {
            period: '2017 Q1',
            total_num_of_enrollees: 600,
            quarterly_active_users: 300,
            num_of_patients: 1346
        }, {
            period: '2017 Q2',
            total_num_of_enrollees: 1000,
            quarterly_active_users: 500,
            num_of_patients: 1349
        }, {
            period: '2017 Q3',
            total_num_of_enrollees: 1200,
            quarterly_active_users: 700,
            num_of_patients: 1400
        }, {
            period: '2017 Q4',
            total_num_of_enrollees: 1300,
            quarterly_active_users: 833,
            num_of_patients: 1344
        }, {
            period: '2018 Q1',
            total_num_of_enrollees: 1500,
            quarterly_active_users: 1200,
            num_of_patients: 1300
        }, {
            period: '2018 Q2',
            total_num_of_enrollees: 1566,
            quarterly_active_users: 1233,
            num_of_patients: 1299
        }],
        xkey: 'period',
        ykeys: ['total_num_of_enrollees', 'quarterly_active_users', 'num_of_patients'],
        labels: ['total num of enrollees', 'quarterly active  users', 'num of patients'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });


    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'total_num_of_enrollees',
            geekbench: 136
        }, {
            device: 'total_num_of_enrollees 3G',
            geekbench: 137
        }, {
            device: 'total_num_of_enrollees 3GS',
            geekbench: 275
        }, {
            device: 'total_num_of_enrollees 4',
            geekbench: 380
        }, {
            device: 'total_num_of_enrollees 4S',
            geekbench: 655
        }, {
            device: 'total_num_of_enrollees 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});

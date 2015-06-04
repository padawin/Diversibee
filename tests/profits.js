tests.addSuite([
    function() {
        //Test if the method Profits.basicProfits exists

        tests.isA(Profits.basicProfits, 'function');
    },
    function() {
        //Tests of the Profits.basicProfits method

        //No neighbours
        tests.equals(Profits.basicProfits([]), 0);

        //some neighbours
        var neighbours = [
            {beePop: [0, 0, 0, 0]},
            {beePop: [0, 0, 0, 0]},
            {beePop: [0, 0, 0, 0]},
            {beePop: [0, 0, 0, 0]},
            {beePop: [0, 0, 0, 0]}
        ];
        tests.equals(Profits.basicProfits(neighbours), 0);
        var neighbours = [
            {beePop: [1, 1, 1, 1]},
            {beePop: [1, 1, 1, 1]},
            {beePop: [1, 1, 1, 1]},
            {beePop: [1, 1, 1, 1]},
            {beePop: [1, 1, 1, 1]}
        ];
        tests.equals(Profits.basicProfits(neighbours), 20);
        var neighbours = [
            {beePop: [3,5,7,3]},
            {beePop: [7,3,2,7]},
            {beePop: [9,4,60,3]},
            {beePop: [64,1,0,4]},
            {beePop: [6,4,12,3]}
        ];
        tests.equals(Profits.basicProfits(neighbours), 207);
    }
]);
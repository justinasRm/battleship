const playerChooseShips=require('../PlayerChooseShips');

    test('player choosing his ships',()=>{
        expect(playerChooseShips([[1,1],[2,2],[4,5],[4,6]],[],[])).toEqual('whatever');
    })
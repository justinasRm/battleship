const GameBoardArrayUpdate=require('../GameBoardArray');
let GameBoard=[];

    // test('ship goes down',()=>{
    //     expect(GameBoardArrayUpdate(GameBoard,[1,1],[1,3])).toEqual('Tiles inbetween');
    // })
    // test('ship goes up',()=>{
    //     expect(GameBoardArrayUpdate(GameBoard,[1,3],[1,1])).toEqual('Tiles inbetween');
    // })
    test('ship goes right',()=>{
        expect(GameBoardArrayUpdate(GameBoard,[1,1],[3,1])).toEqual('Tiles inbetween');
    })
    test('ship goes left',()=>{
        expect(GameBoardArrayUpdate(GameBoard,[3,1],[1,1])).toBe('Tiles inbetween');
    })
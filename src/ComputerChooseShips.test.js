const ComputerChooseShips = require("./ComputerChooseShips.js");
// describe('Testing computer starting coordinate creation(is it random-ish), checking whether that tile is taken or not',function(){

//     test('Computer starting coords',()=>{
//         expect(ComputerChooseShips).toBe('Whatever');
//     })

// })

describe('Ship creation',function(){

    describe('Works when gameBoard is empty', function(){
        test('Cant go down or right',()=>{
            expect(ComputerChooseShips(2,[6,6],[])).toEqual([5,6]);
        })
        test('Cant go up or left',()=>{
            expect(ComputerChooseShips(2,[1,1],[])).toEqual([1,2]);
        })
        test('Cant go up or right',()=>{
            expect(ComputerChooseShips(2,[6,1],[])).toEqual([6,2]);
        })
        test('Cant go down or left',()=>{
            expect(ComputerChooseShips(2,[1,6],[])).toEqual([1,5]);
        })
})
    describe('When gameBoard isn`t empty', function(){

        test('Start coords are occupied on the gameBoard array',()=>{
            expect(ComputerChooseShips(2,[1,1],[[1,1]])).toEqual('start coords occupied');
        })
        test('Can`t go down - gameBoard array is filled on Y2',()=>{
            expect(ComputerChooseShips(2,[1,1],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]])).toEqual([2,1]);
        })
        test('Can go down - gameBoard array is filled on Y2, but the length is only 1 tile',()=>{
            expect(ComputerChooseShips(1,[1,1],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]])).toEqual([1,1]);
        })
        test('Can go left - gameBoard array is filled on Y2, length is 6',()=>{
            expect(ComputerChooseShips(6,[6,1],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]])).toEqual([1,1]);
        })
        test('length 6 cant go anywhere',()=>{
            expect(ComputerChooseShips(6,[1,1],[[2,2]])).toEqual([1,6]);
        })

        describe('StartCords bottom left',()=>{
            test('length 3 start coords occupied',()=>{
                expect(ComputerChooseShips(3,[1,6],[[1,6]])).toEqual('start coords occupied');
            })
            test('length 3 can go up',()=>{
                expect(ComputerChooseShips(3,[1,6],[])).toEqual([1,4]);
            })
            test('length 3 can go right',()=>{
                expect(ComputerChooseShips(3,[1,6],[[1,5],[1,4],[1,3],[2,6],[1,2],[1,1]])).toEqual([3,6]);
            })
            test('length 6 can go up',()=>{
                expect(ComputerChooseShips(6,[1,6],[])).toEqual([1,1]);
            })
            test('length 6 can go right',()=>{
                expect(ComputerChooseShips(6,[1,6],[[1,1]])).toEqual([6,6]);
            })
            test('length 1 blocked everywhere',()=>{
                expect(ComputerChooseShips(1,[1,6],[[1,5],[2,6]])).toEqual([1,6]);
            })
            test('length 5 gameBoard array is filled on Y2',()=>{
                expect(ComputerChooseShips(5,[1,6],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]])).toEqual([5,6]);
            })
            test('length 4 gameBoard array is filled on Y2',()=>{
                expect(ComputerChooseShips(4,[1,6],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]])).toEqual([1,3]);
            })
            test('length 6 blocked',()=>{
                expect(ComputerChooseShips(2,[1,6],[[1,5],[2,6]])).toEqual('no possibilities');
            })
            test('length 6 diagonal tile occupied',()=>{
                expect(ComputerChooseShips(6,[1,6],[[2,5],[3,4]])).toEqual([1,1]);
            })
            // NEED MORE TESTS. when one corner is done, copy and paste it with other corners, then go further and test startCords in the middle
        })





    })


})
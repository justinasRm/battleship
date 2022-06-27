const shipCreation=require('../shipCreation.js');
const shipConstructor=shipCreation.shipConstructor;

describe('ship creation and length check',function(){
// test('ship goes vertically',()=>{
//     const ship1=new shipConstructor([6,6],[6,1],[],false);
//     expect(ship1.length()).toBe(6);
// })
// test('ship goes horizontally',()=>{
//     const ship1=new shipConstructor([6,6],[1,6],[],false);
//     expect(ship1.length()).toBe(6);
// })
// test('ship goes vertically(end and start coords switched)',()=>{
//     const ship1=new shipConstructor([1,6],[6,6],[],false);
//     expect(ship1.length()).toBe(6);
// })
// test('ship goes horizontally(end and start coords switched)',()=>{
//     const ship1=new shipConstructor([6,1],[6,6],[],false);
//     expect(ship1.length()).toBe(6);
// })
// test('1 length ship',()=>{
//     const ship1=new shipConstructor([1,1],[1,1],[],false);
//     expect(ship1.length()).toBe(1);
// })
// test('4 length ship vertically',()=>{
//     const ship1=new shipConstructor([4,4],[4,1],[],false);
//     expect(ship1.length()).toBe(4);
// })
// test('4 length ship horizontally',()=>{
//     const ship1=new shipConstructor([4,4],[1,4],[],false);
//     expect(ship1.length()).toBe(4);
// })
})

describe('hit mechanics',function(){
// test('hit mechanics - 4 length vertical',()=>{
//     const ship1=new shipConstructor([4,4],[4,1],[],false);
//     expect(ship1.isHit([4,3])).toEqual([4,3]);
// })
// test('hit mechanics - 4 length horizontal',()=>{
//     const ship1=new shipConstructor([4,4],[1,4],[],false);
//     expect(ship1.isHit([4,4])).toEqual([4,4]);
// })
// test('hit mechanics - 4 length miss',()=>{
//     const ship1=new shipConstructor([4,4],[1,4],[],false);
//     expect(ship1.isHit([4,6])).toEqual('not hit');
// })
// test('hit mechanics - 1 length miss',()=>{
//     const ship1=new shipConstructor([2,2],[2,2],[],false);
//     expect(ship1.isHit([4,4])).toEqual('not hit');
// })
// test('hit mechanics - 1 length hit',()=>{
//     const ship1=new shipConstructor([2,2],[2,2],[],false);
//     expect(ship1.isHit([2,2])).toEqual([2,2]);
// })
// test('hit mechanics - 6 length vertical hit',()=>{
//     const ship1=new shipConstructor([6,6],[6,1],[],false);
//     expect(ship1.isHit([6,2])).toEqual([6,2]);
// })
// test('hit mechanics - 6 length vertical hit reversed start and end coords',()=>{
//     const ship1=new shipConstructor([6,1],[6,6],[],false);
//     expect(ship1.isHit([6,2])).toEqual([6,2]);
// })
// test('hit mechanics - check if hit position of the ship was changed by isHit() function',()=>{
//     const ship1=new shipConstructor([6,1],[6,6],[],false);
//     expect(ship1.isHit([6,2])).toEqual([6,2]);
//     expect(ship1.hitPosition[0]).toEqual([6,2]);
// })
})

// WORKS
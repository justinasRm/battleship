const index=require('./index.js');
const shipFactory=index.shipFactory;

test('ship goes vertically',()=>{
    const ship1=new shipFactory([6,6],[6,1],[],false);
    expect(ship1.length()).toBe(6);
})
test('ship goes horizontally',()=>{
    const ship1=new shipFactory([6,6],[1,6],[],false);
    expect(ship1.length()).toBe(6);
})
test('ship goes vertically(end and start coords switched)',()=>{
    const ship1=new shipFactory([1,6],[6,6],[],false);
    expect(ship1.length()).toBe(6);
})
test('ship goes horizontally(end and start coords switched)',()=>{
    const ship1=new shipFactory([6,1],[6,6],[],false);
    expect(ship1.length()).toBe(6);
})
test('1 length ship',()=>{
    const ship1=new shipFactory([1,1],[1,1],[],false);
    expect(ship1.length()).toBe(1);
})
test('4 length ship vertically',()=>{
    const ship1=new shipFactory([4,4],[4,1],[],false);
    expect(ship1.length()).toBe(4);
})
test('4 length ship horizontally',()=>{
    const ship1=new shipFactory([4,4],[1,4],[],false);
    expect(ship1.length()).toBe(4);
})
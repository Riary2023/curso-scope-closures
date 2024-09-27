//function moneyBox(coins) {
//    let saveCoins = 0;
//    saveCoins += coins; 
//    console.log(`MoneyBox: $${saveCoins}`);
//}
//moneyBox(5);
//moneyBox(5);

function moneyBox() {
    let saveCoins = 0; 
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);   
    }
    return countCoins;
}
const myMoneyBox = moneyBox(); 
myMoneyBox(5);                 // Ouput -> MoneyBox: $5
myMoneyBox(5);                 // Ouput -> MoneyBox: $10
myMoneyBox(15);                // Ouput -> MoneyBox: $25

const moneyBoxJuanes = moneyBox();
moneyBoxJuanes(10);            // Ouput -> MoneyBox: $10
moneyBoxJuanes(20);            // Ouput -> MoneyBox: $30
moneyBoxJuanes(5);             // Ouput -> MoneyBox: $35













// First Problem "kilometerToMeter" finish



function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("error !!!!!")
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var nanakilometer = kilometerToMeter(10);
console.log(nanakilometer);



// First Problem "kilometerToMeter" finish







// Second Problem "budgetCalculator" start



function budgetCalculator(watch, mobile, leptop) {
    if (watch < 0) {
        console.log("error !!!!!")
    }
    else if(mobile < 0){
        console.log("error !!!!!")
    }
    else if(leptop < 0){
        console.log("error !!!!!")
    }
    else {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var leptopPrice = leptop * 500;
        var calculateAllPrice = (watchPrice + mobilePrice + leptopPrice);
    }
    return calculateAllPrice;
}

var electronicsCost = budgetCalculator(10, 8, 2);
console.log(electronicsCost);



// Second Problem "budgetCalculator" start finish









// Third Problem "hotelCost" start



function hotelCost(days) {
    if (days < 0) {
        console.log("error !!!!!")
    }
    else if (days <= 10) {
        var firstPart = days * 100;
        totaDaysStay = firstPart
        return totaDaysStay;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaing = days - 10;
        var secondPart = remaing * 80;
        totaDaysStay = (firstPart + secondPart)
        return totaDaysStay;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaing = days - 20;
        var ThirdPart = remaing * 50;
        totaDaysStay = (firstPart + secondPart + ThirdPart);
        return totaDaysStay;
    }
}
var nightStay = 33;
var result = hotelCost(nightStay);
console.log(result);



// Third Problem "hotelCost" finish









// Forth Problem "megaFriend" start



function megaFriend(array) {
    var largestWord = "";

    array.forEach(function (word) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    });

    return largestWord;
}

var friendName = ["siyam", "Naim", "Rumen", "Abdullha", "Toriqul"];
var result = megaFriend(friendName);
console.log(result);



// Forth Problem "megaFriend" finish
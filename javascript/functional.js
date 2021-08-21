//-----------------------MEMORY PART-----------------------//

//8BG memory
const memory8GBButton = document.getElementById('8GB-memory-button');
memory8GBButton.addEventListener('click', function(){
   
  memoryTotalPrice('8GBMemory');
    //grandTotal('8GBMemory');
})

//16GB memory
const memory16GBButton = document.getElementById('16GB-memory-button');
memory16GBButton.addEventListener('click', function(){
     
  memoryTotalPrice('16GBMemory');
    //grandTotal('16GBMemory');
})

//-----------------------STORAGE PART-----------------------//

//256GB SSD storage
const SSD256GBButton = document.getElementById('256GB-SSD-button');
SSD256GBButton.addEventListener('click', function(){
    // SSDCost('256GBStorage');
    SSDtotalPrice('256GBStorage');
    //grandTotal('256GBStorage');
})

//512GB SSD storage
const SSD512GBButton = document.getElementById('512GB-SSD-button');
SSD512GBButton.addEventListener('click', function(){
    // SSDCost('512GBStorage');
    SSDtotalPrice('512GBStorage');
    //grandTotal('512GBStorage');
})

//1TB SSD storage
const SSD1TBButton = document.getElementById('1TB-SSD-button');
SSD1TBButton.addEventListener('click', function(){
    // SSDCost('1TBStorage');
    SSDtotalPrice('1TBStorage');
    //grandTotal('1TBStorage');
})

//-----------------------DELIVERY PART-----------------------//

//Free delivery
const freeDeliveryButton = document.getElementById('free-delivery');
freeDeliveryButton.addEventListener('click', function(){
    // deliveryCost('freeDelivery');
    deliveryTotalcost('freeDelivery');
    //grandTotal('freeDelivery');
})

//Charged delivery
const chargedDeliveryButton = document.getElementById('charged-delivery');
chargedDeliveryButton.addEventListener('click', function(){
    // deliveryCost('chargedDelivery');
    deliveryTotalcost('chargedDelivery');
    //grandTotal('chargedDelivery');
})

//-----------------------PROMO PART-----------------------//

document.getElementById('promo-button').addEventListener('click',function(){
  const getPromoInput = document.getElementById('promo-input');
  const setPromoInputValue = getPromoInput.value.toLowerCase() ;

  const getGrandTotalID = document.getElementById('grand-total');
      const getGrandTotalText = getGrandTotalID.innerText;
      const textToAmount = parseInt(getGrandTotalText);
      
//  if try one or more time promo 
  if(textToAmount<= 1039.2 )
  {
      alert("Sorry \n Promo Code Apply Onemore Time in A Moment");
      getPromoInput.value= '';
  }
  else if(getPromoInput.value== ''){
    alert("Please \n Enter a Valid Promo Code");
  }
  else{
    if(setPromoInputValue == 'stevekaku')
    {
      const grandAmount =textToAmount -((textToAmount/100) * 20);    
      getGrandTotalID.innerText = grandAmount;
      getPromoInput.value= '';
      
    }
  }
})

//-----------------------ALL THE FUNCTIONS-----------------------//

function extraMemoryCost(type){
    //Memory cost part
    const getMemoryID = document.getElementById('extra-memory-cost');
    const getMemoryText = getMemoryID.innerText;
    const textToAmount = parseInt(getMemoryText);
    //Need to calculate value for 8GB & 16GB 
    if(type == '8GBMemory'){
        getMemoryID.innerText = 0;
        const memory8GBPrice = parseInt(getMemoryID.innerText);
        return memory8GBPrice;
        
    }
    else if(type == '16GBMemory'){
        getMemoryID.innerText = 180;
        const memory16GBPrice = parseInt(getMemoryID.innerText);
        return memory16GBPrice;
    }
}

function SSDCost(type){
    //SSD storage cost part
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    const getSSDStorageText = getSSDStorageID.innerText;
    const textToAmount = parseInt(getSSDStorageText);
    //Need to calculate value for 256GB, 512GB & 1TB
    if(type == '256GBStorage'){
        getSSDStorageID.innerText = 0;
        const SSD256GBPrice = parseInt(getSSDStorageID.innerText);
        return SSD256GBPrice;
    }
    else if(type == '512GBStorage'){
        getSSDStorageID.innerText = 100;
        const SSD512GBPrice = parseInt(getSSDStorageID.innerText);
        return SSD512GBPrice;

    }
    else if(type == '1TBStorage'){
        getSSDStorageID.innerText = 180;
        const SSD1TBPrice = parseInt(getSSDStorageID.innerText);
        return SSD1TBPrice;
    }
}

function deliveryCost(type){
    const getDeliveryID = document.getElementById('delivery-charge');
    const getDeliveryText = getDeliveryID.innerText;
    const textToAmount = parseInt(getDeliveryText);
    //Need to calculate value for Aug 25 & Aug 21 
    if(type == 'freeDelivery'){
        getDeliveryID.innerText = 0;
        const freeCost = parseInt(getDeliveryID.innerText);
        return freeCost;
        
    }
    else if(type == 'chargedDelivery'){
        getDeliveryID.innerText = 20;
        const chargedCost = parseInt(getDeliveryID.innerText);
        return chargedCost;
    }
}

function memoryTotalPrice(type1){
  // Best Price Part 
  const getBestPrice = document.getElementById('best-price');
  const bestPriceAmount = parseInt(getBestPrice.innerText);

    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;
    //
    const getDeliveryID = document.getElementById('delivery-charge');
    

    //
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    

    //Need to calculate value for Memory (8GB & 16GB) + Storage (256GB, 512GB & 1TB) + Delivery (Free & Charge)
    const totalAmount = bestPriceAmount + extraMemoryCost(type1)+ parseInt(getSSDStorageID.innerText)+ parseInt(getDeliveryID.innerText) ;
    getTotalPriceID.innerText = totalAmount;

    // Grand Total part
    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);

    const grandAmount = bestPriceAmount + extraMemoryCost(type1)+ parseInt(getSSDStorageID.innerText)+ parseInt(getDeliveryID.innerText) ;
    getGrandTotalID.innerText = grandAmount;
   
}
function SSDtotalPrice(type1){
  // Best Price Part 
  const getBestPrice = document.getElementById('best-price');
  const bestPriceAmount = parseInt(getBestPrice.innerText);

    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;

    //
    const getDeliveryID = document.getElementById('delivery-charge');
    
    //
    const getMemoryID = document.getElementById('extra-memory-cost');
    
    
    //Need to calculate value for Memory (8GB & 16GB) + Storage (256GB, 512GB & 1TB) + Delivery (Free & Charge)
    const totalAmount = bestPriceAmount + SSDCost(type1)+parseInt(getDeliveryID.innerText)+parseInt(getMemoryID.innerText) ;
    getTotalPriceID.innerText = totalAmount;
// Grand Total part
    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);

    const grandAmount = bestPriceAmount + SSDCost(type1)+parseInt(getDeliveryID.innerText)+parseInt(getMemoryID.innerText) ;
    getGrandTotalID.innerText = grandAmount;
}

function deliveryTotalcost(type1){
  // Best Price Part 
  const getBestPrice = document.getElementById('best-price');
  const bestPriceAmount = parseInt(getBestPrice.innerText);

    //Total price part
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;

    //
    const getMemoryID = document.getElementById('extra-memory-cost');
    

    //
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    
    
    //Need to calculate value for Memory (8GB & 16GB) + Storage (256GB, 512GB & 1TB) + Delivery (Free & Charge)
    const totalAmount = bestPriceAmount + deliveryCost(type1)+parseInt(getMemoryID.innerText)+parseInt(getSSDStorageID.innerText);
    getTotalPriceID.innerText = totalAmount;

    // Grand Total part
    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);

    const grandAmount = bestPriceAmount + deliveryCost(type1)+parseInt(getMemoryID.innerText)+parseInt(getSSDStorageID.innerText);
    getGrandTotalID.innerText = grandAmount;
}





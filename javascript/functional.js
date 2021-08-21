//-----------------------MEMORY PART-----------------------//

//8BG memory
const memory8GBButton = document.getElementById('8GB-memory-button');
memory8GBButton.addEventListener('click', function(){
   
  memoryTotalPrice('8GBMemory');
  
})

//16GB memory
const memory16GBButton = document.getElementById('16GB-memory-button');
memory16GBButton.addEventListener('click', function(){
     
  memoryTotalPrice('16GBMemory');
    
})

//-----------------------STORAGE PART-----------------------//

//256GB SSD storage
const SSD256GBButton = document.getElementById('256GB-SSD-button');
SSD256GBButton.addEventListener('click', function(){
   
    SSDtotalPrice('256GBStorage');
  
})

//512GB SSD storage
const SSD512GBButton = document.getElementById('512GB-SSD-button');
SSD512GBButton.addEventListener('click', function(){
    
    SSDtotalPrice('512GBStorage');
    
})

//1TB SSD storage
const SSD1TBButton = document.getElementById('1TB-SSD-button');
SSD1TBButton.addEventListener('click', function(){
  
    SSDtotalPrice('1TBStorage');
    
})

//-----------------------DELIVERY PART-----------------------//

//Free delivery
const freeDeliveryButton = document.getElementById('free-delivery');
freeDeliveryButton.addEventListener('click', function(){
    
    deliveryTotalcost('freeDelivery');
    
})

//Charged delivery
const chargedDeliveryButton = document.getElementById('charged-delivery');
chargedDeliveryButton.addEventListener('click', function(){
    
    deliveryTotalcost('chargedDelivery');
   
})

//-----------------------PROMO PART-----------------------//

document.getElementById('promo-button').addEventListener('click',function(){
  const getPromoInput = document.getElementById('promo-input');
  const setPromoInputValue = getPromoInput.value.toLowerCase() ;

  const getGrandTotalID = document.getElementById('grand-total');
      const getGrandTotalText = getGrandTotalID.innerText;
      const textToAmount = parseInt(getGrandTotalText);
    
//  if try one or more time promo 
  if(textToAmount<= 1039.2  )
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
    //to get value of 8GB or 16GB 
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
    //to get value of 256GB, 512GB & 1TB
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
    //to get value of Aug 25 & Aug 21 
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
  // Get best pric
  const getBestPrice = document.getElementById('best-price');
  const bestPriceAmount = parseInt(getBestPrice.innerText);

    //Total price get
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;
    // get deliverycost 
    const getDeliveryID = document.getElementById('delivery-charge');
    // get storage cost
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    

    //calculate Total
    const totalAmount = bestPriceAmount + extraMemoryCost(type1)+ parseInt(getSSDStorageID.innerText)+ parseInt(getDeliveryID.innerText) ;
    getTotalPriceID.innerText = totalAmount;

    // Grand Total part Calculate
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

    //Total price get
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;

    // get delivery cost
    const getDeliveryID = document.getElementById('delivery-charge');
    
    //get memory cost
    const getMemoryID = document.getElementById('extra-memory-cost');
    
    // calculate  Total value
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

    //Total price get
    const getTotalPriceID = document.getElementById('total-price');
    const getPriceText = getTotalPriceID.innerText;

    //get memory cost
    const getMemoryID = document.getElementById('extra-memory-cost');
    

    //get storage cost
    const getSSDStorageID = document.getElementById('SSD-storage-cost');
    
    
    //calculate Total Value
    const totalAmount = bestPriceAmount + deliveryCost(type1)+parseInt(getMemoryID.innerText)+parseInt(getSSDStorageID.innerText);
    getTotalPriceID.innerText = totalAmount;

    // Grand Total part
    const getGrandTotalID = document.getElementById('grand-total');
    const getGrandTotalText = getGrandTotalID.innerText;
    const textToAmount = parseInt(getGrandTotalText);

    const grandAmount = bestPriceAmount + deliveryCost(type1)+parseInt(getMemoryID.innerText)+parseInt(getSSDStorageID.innerText);
    getGrandTotalID.innerText = grandAmount;
}





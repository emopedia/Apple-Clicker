// all the variables
var apples = 0;

var applesPerSecond = 0;

var applesPerClick = 1;

// costs of items
var iPhoneCost = 10;

var iPadCost = 10;

var airPodsCost = 500;

var penCost = 200;

var macCost = 10000;

var iMacCost = 1000000;

var appleStoreCost = 10000000;

var steveJobsCost = 1000000000;

// how many items you have
var iPhones = 0;

var iPads = 0;

var airPods = 0;

var pens = 0;

var macs = 0;

var iMacs = 0;

var appleStores = 0;

var steveJobs = 0;

function abbreviateNumber(value) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B", "T", "Q", "QT", "S", "ST", "O", "N", "D"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toPrecision(3);

  newValue += suffixes[suffixNum];
  return newValue;
}

function freeUpgrades() {
  iPhoneCost = 0;
  iPadCost = 0;
  airPodsCost = 0;
  penCost = 0;
  macCost = 0;
  iMacCost = 0;
  appleStoreCost = 0;
  steveJobsCost = 0;
}

// function that happens every second
function intervalFunction() {
	apples += applesPerSecond; // adds the number of apples per second to your total apples
	document.getElementById("showApples").innerText = "$" + abbreviateNumber(apples); // uses DOM to change the number of apples in the HTML
}

var interval = setInterval(intervalFunction, 1000) // every second (1000 milliseconds)

function increment() {
	apples += applesPerClick; // adds the number of apples per click to your total apples
	document.getElementById("showApples").innerText = "$" + abbreviateNumber(apples); // uses DOM to change the number of apples in the HTMl

	if (apples >= 7800000000) // if it's higher than world population
	{
		document.getElementById("gameOver").innerText = "You won the game! Apple dominates the Earth!"
	}
}

function buyIPhone() {
	if (apples >= iPhoneCost) {
		apples -= iPhoneCost; 
		document.getElementById("showApples").innerText = "$" + apples;
		iPhones++; 
		document.getElementById("iPhoneNum").innerText = iPhones;
		iPhoneCost *=1.25; 
    iPhoneCost = Math.round(iPhoneCost)
		document.getElementById("iPhoneCost").innerText = iPhoneCost;
		applesPerSecond += 1; 
		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	}	else { 
    alert("You need " + (iPhoneCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyIPad() {
	if (apples >= iPadCost) { 
		apples -= iPadCost; 
		document.getElementById("showApples").innerText = "$" + apples;
		iPads++; 
		document.getElementById("iPadNum").innerText = iPads;
		iPadCost *=1.25; 
    iPadCost = Math.round(iPadCost)
		document.getElementById("iPadCost").innerText = iPadCost;
		applesPerClick += 1; 
		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	} else { 
		alert("You need " + (iPadCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyPen() {
	if (apples >= penCost) {
		apples -= penCost; 
		document.getElementById("showApples").innerText = "$" + apples;
		pens++; 
		document.getElementById("penNum").innerText = pens;
		penCost *=1.25; 
    penCost = Math.round(penCost)
	  document.getElementById("penCost").innerText = penCost;
		applesPerSecond += 100; 
		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	} else { 
		alert("You need " + (penCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyAirPods() { 
	if (apples >= airPodsCost) { 
		apples -= airPodsCost; 
		document.getElementById("showApples").innerText = "$" + apples;
		airPods++; 
		document.getElementById("airPodsNum").innerText = airPods;
		airPodsCost *=1.25; 
    airPodsCost = Math.round(airPodsCost)
		document.getElementById("airPodsCost").innerText = airPodsCost;
		applesPerClick += 100; 
		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	}	else { 
		alert("You need " + (airPodsCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyMac() {
	if (apples >= macCost) {
		apples -= macCost;
		document.getElementById("showApples").innerText = "$" + apples;
		macs++; 
		document.getElementById("macNum").innerText = macs;
		macCost *=1.25; 
    macCost = Math.round(macCost)
		document.getElementById("macCost").innerText = macCost;
		applesPerSecond += 1000; 
		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	}	else { 
		alert("You need " + (macCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyIMac() {
	if (apples >= iMacCost) {
		apples -= iMacCost;
		document.getElementById("showApples").innerText = "$" + apples;
		iMacs++; 
		document.getElementById("iMacNum").innerText = iMacs;
		iMacCost *=1.25; 
    iMacCost = Math.round(iMacCost)
		document.getElementById("iMacCost").innerText = iMacCost;
		applesPerClick += 10000; 
		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	}	else { 
		alert("You need " + (iMacCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

function buyAppleStore() {
	if (apples >= appleStoreCost) {
		apples -= appleStoreCost;
		document.getElementById("showApples").innerText = "$" + apples;
		appleStores++; 
		document.getElementById("appleStoreNum").innerText = appleStores;	
		appleStoreCost *=1.25; 
    appleStoreCost = Math.round(appleStoreCost)
		document.getElementById("appleStoreCost").innerText = appleStoreCost;
		applesPerSecond += 100000; 
		document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	
	}	else { 
		alert("You need " + (appleStoreCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}
function buySteveJobs() {
	if (apples >= steveJobsCost) {
		apples -= steveJobsCost;
		document.getElementById("showApples").innerText = "$" + apples;
		steveJobs++; 
		document.getElementById("steveJobsNum").innerText = steveJobs;
		steveJobsCost *=1.25; 
    steveJobsCost = Math.round(steveJobsCost)
		document.getElementById("steveJobsCost").innerText = steveJobsCost;
		applesPerClick += 1000000; 
		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	}	else { 
		alert("You need " + (steveJobsCost-apples).toString() + " more apple(s) to buy this item.") 
	}
}

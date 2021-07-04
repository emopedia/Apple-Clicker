
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

// load variables
load();

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

function reset_game() {
  apples = 0;
  applesPerSecond = 0;
  applesPerClick = 1;

  iPhoneCost = 10;
  iPadCost = 10;
  airPodsCost = 500;
  penCost = 200;
  macCost = 10000;
  iMacCost = 1000000;
  appleStoreCost = 10000000;
  steveJobsCost = 1000000000;

  iPhones = 0;
  iPads = 0;
  airPods = 0;
  pens = 0;
  macs = 0;
  iMacs = 0;
  appleStores = 0;
  steveJobs = 0;
  save();
}

function save() {
  localStorage.setItem("apples", apples)
  localStorage.setItem("applesPerSecond", applesPerSecond)
  localStorage.setItem("applesPerClick", applesPerClick)

  localStorage.setItem("iPhoneCost", iPhoneCost)
  localStorage.setItem("iPadCost", iPadCost)
  localStorage.setItem("airPodsCost", airPodsCost)
  localStorage.setItem("penCost", penCost)
  localStorage.setItem("macCost", macCost)
  localStorage.setItem("iMacCost", iMacCost)
  localStorage.setItem("appleStoreCost", appleStoreCost)
  localStorage.setItem("steveJobsCost", steveJobsCost)
  
  localStorage.setItem("iPhones", iPhones)
  localStorage.setItem("iPads", iPads)
  localStorage.setItem("airPods", airPods)
  localStorage.setItem("pens", pens)
  localStorage.setItem("macs", macs)
  localStorage.setItem("iMacs", iMacs)
  localStorage.setItem("appleStores", appleStores)
  localStorage.setItem("steveJobs", steveJobs)
}

function load() {
  if (!!localStorage.getItem("apples")) {
    apples = parseInt(localStorage.getItem("apples"))
  } else {
    apples = 0
  }
  if (!!localStorage.getItem("applesPerSecond")) {
    applesPerSecond = parseInt(localStorage.getItem("applesPerSecond"))
  } else {
    applesPerSecond = 0
  }
  if (!!localStorage.getItem("applesPerClick")) {
    applesPerClick = parseInt(localStorage.getItem("applesPerClick"))
  } else {
    applesPerClick = 1
  }
  if (!!localStorage.getItem("iPhones")) {
    iPhones = parseInt(localStorage.getItem("iPhones"))
  } else {
    iPhones = 0
  }
  if (!!localStorage.getItem("iPads")) {
    iPads = parseInt(localStorage.getItem("iPads"))
  } else {
    iPads = 0
  }
  if (!!localStorage.getItem("airPods")) {
    airPods = parseInt(localStorage.getItem("airPods"))
  } else {
    airPods = 0
  }
  if (!!localStorage.getItem("pens")) {
    pens = parseInt(localStorage.getItem("pens"))
  } else {
    pens = 0
  }
  if (!!localStorage.getItem("macs")) {
    macs = parseInt(localStorage.getItem("macs"))
  } else {
    macs = 0
  }
  if (!!localStorage.getItem("iMacs")) {
    iMacs = parseInt(localStorage.getItem("iMacs"))
  } else {
    iMacs = 0
  }
  if (!!localStorage.getItem("appleStores")) {
    appleStores = parseInt(localStorage.getItem("appleStores"))
  } else {
    appleStores = 0
  }
  if (!!localStorage.getItem("steveJobs")) {
    steveJobs = parseInt(localStorage.getItem("steveJobs"))
  } else {
    steveJobs = 0
  }
  if (!!localStorage.getItem("iPhonesCost")) {
    iPhonesCost = parseInt(localStorage.getItem("iPhonesCost"))
  } else {
    iPhonesCost = 10
  }
  if (!!localStorage.getItem("iPadsCost")) {
    iPadsCost = parseInt(localStorage.getItem("iPadsCost"))
  } else {
    iPadsCost = 10
  }
  if (!!localStorage.getItem("airPodsCost")) {
    airPodsCost = parseInt(localStorage.getItem("airPodsCost"))
  } else {
    airPodsCost = 500
  }
  if (!!localStorage.getItem("pensCost")) {
    pensCost = parseInt(localStorage.getItem("pensCost"))
  } else {
    pensCost = 200
  }
  if (!!localStorage.getItem("macCost")) {
    macCost = parseInt(localStorage.getItem("macCost"))
  } else {
    macCost = 10000
  }
  if (!!localStorage.getItem("iMacCost")) {
    iMacCost = parseInt(localStorage.getItem("iMacCost"))
  } else {
    iMacCost = 1000000
  }
  if (!!localStorage.getItem("appleStoreCost")) {
    appleStoreCost = parseInt(localStorage.getItem("appleStoreCost"))
  } else {
    appleStoreCost = 10000000
  }
  if (!!localStorage.getItem("steveJobsCost")) {
    steveJobsCost = parseInt(localStorage.getItem("steveJobsCost"))
  } else {
    steveJobsCost = 1000000000
  }
}

saveInterval = setInterval(save, 100)
// function that happens every second
function intervalFunction() {
	apples += applesPerSecond; // adds the number of apples per second to your total apples
	document.getElementById("showApples").innerText = "$" + apples; // uses DOM to change the number of apples in the HTML
}

var interval = setInterval(intervalFunction, 1000) // every second (1000 milliseconds)

function increment() {
	apples += applesPerClick; // adds the number of apples per click to your total apples
	document.getElementById("showApples").innerText = "$" + apples; // uses DOM to change the number of apples in the HTMl

	if (apples >= 7870000000) // if it's higher than world population
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


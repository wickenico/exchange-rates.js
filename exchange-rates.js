const url = 'https://api.frankfurter.app/latest'
const req = new Request(url)
const res = await req.loadJSON()
const amount = res.amount;
const base = res.base;
const date = res.date;
const rates = res.rates.USD;
console.log(rates)

const i = new Request("https://raw.githubusercontent.com/transferwise/currency-flags/master/src/flags/eur.png");
const img = await i.loadImage()

let i2 = null;
let img2 = null;
i2 = new Request("https://raw.githubusercontent.com/transferwise/currency-flags/master/src/flags/usd.png");
img2 = await i2.loadImage()

const rates3 = res.rates.CHF;
let i3 = null;
let img3 = null;
i3 = new Request("https://raw.githubusercontent.com/transferwise/currency-flags/master/src/flags/chf.png");
img3 = await i3.loadImage()

const rates4 = res.rates.GBP;
let i4 = null;
let img4 = null;
i4 = new Request("https://raw.githubusercontent.com/transferwise/currency-flags/master/src/flags/gbp.png");
img4 = await i4.loadImage()

let widget = createWidget(amount)
if (config.runsInWidget) {
    // create and show widget
    Script.setWidget(widget)
    Script.complete()
}
else {
    widget.presentSmall()
}

function createWidget(amount) {
    let w = new ListWidget()
    w.setPadding(8, 8, 8, 8)
    w.backgroundColor = new Color("#1A1A1A")

    const upperStack = w.addStack()
    upperStack.layoutVertically()

    let logo = upperStack.addText("Exchange Rates")
    logo.font = Font.boldSystemFont(14)
    logo.textColor = Color.yellow()

    upperStack.addSpacer(10)

    let baseStack = upperStack.addStack();
    baseStack.layoutHorizontally()

    let amountText = baseStack.addText(amount + ' ' + base)
    baseStack.addSpacer(4)
    let image = baseStack.addImage(img)
    image.imageSize = new Size(20, 20)

    upperStack.addSpacer(4)

    let USDStack = upperStack.addStack();
    USDStack.layoutHorizontally()

    let firstCurrency = USDStack.addText(rates + ' USD')
    USDStack.addSpacer(4)
    let image2 = USDStack.addImage(img2)
    image2.imageSize = new Size(20, 20)

    upperStack.addSpacer(4)

    let CHFStack = upperStack.addStack();
    CHFStack.layoutHorizontally()

    let secondCurrency = CHFStack.addText(rates3 + ' CHF')
    CHFStack.addSpacer(4)
    let image3 = CHFStack.addImage(img3)
    image3.imageSize = new Size(20, 20)

    upperStack.addSpacer(4)

    let GBPStack = upperStack.addStack();
    GBPStack.layoutHorizontally()

    let thirdCurrency = GBPStack.addText(rates4 + ' GBP')
    GBPStack.addSpacer(4)
    let image4 = GBPStack.addImage(img4)
    image4.imageSize = new Size(20, 20)

    return w
}
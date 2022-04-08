function Shipping() {
    this.login = (credentials)=> {};
    this.setStart = (start)=> {};
    this.setDestination = (destination )=> {};
    this.calculate = (weight)=> {return "$35.20"};
}

function ShippingAdapter(credentials) {
    let shipping = new Shipping();

    shipping.login(credentials);

    return {
        request : (zipStart, ZipEnd, weight)=> {
            shipping.setStart();
            shipping.setDestination(ZipEnd);
            return shipping.calculate();
        }
    }
}

function run() {
    let credentials = {token : "$G%@#YG"}
    let adapter = new ShippingAdapter(credentials);
    let cost = adapter.request("78701", "10010", "2 lbs");

    console.log(cost);
}
run();
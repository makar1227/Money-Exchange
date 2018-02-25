// PLEASE DON'T change function name
module.exports =
    function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency <=0){
        return o={};
    }
    else {
        var o = new Object();
        let h = Math.trunc(currency / 50);
        let q = Math.trunc(currency % 50 / 25);
        let d = Math.trunc(currency % 50 % 25 / 10);
        let n = Math.trunc(currency % 50 % 25 % 10 / 5);
        let p = Math.trunc(currency % 50 % 25 % 10 % 5 / 1);

        if (h != 0)
            o.H=h;
        if (q != 0)
            o.Q= q;
        if (d != 0)
            o.D= d;
        if (n != 0)
            o.N= n;
        if (p != 0)
            o.P= p;
        return o;
    }
}
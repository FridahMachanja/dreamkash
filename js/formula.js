

            function myFunction() {

                var x = document.getElementById("amount_selected").value;
                document.getElementById("demo").innerHTML = x;

                var y = document.getElementById("time_period").value;
                document.getElementById("demo2").innerHTML = y;

                ir = 0.1 /12;
                np = y;
                pv = x;

                var pmt, pvif;

                function PMT(ir, np, pv, fv, type) {

                    fv || (fv = 0);
                    type || (type = 0);

                    pvif = Math.pow(1 + ir, np);
                    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

                    if (type === 1)
                        pmt /= (1 + ir);

                    return -pmt;

            }

            pmt = PMT(ir, np, pv).toFixed();
            payoff = (pmt * np).toFixed();
            wkly_payments = (payoff/(np * 4)).toFixed();

            console.log(pmt);

            document.getElementById("wkly_payments").innerHTML = wkly_payments;
            document.getElementById("wkly_payments_2").innerHTML = wkly_payments;

            }

            function myFunction2() {

                var x = document.getElementById("amount_selected2").value;
                document.getElementById("demo").innerHTML = x;

                var y = document.getElementById("time_period2").value;
                document.getElementById("demo2").innerHTML = y;

                ir = 0.1 / 12;
                np = y;
                pv = x;

                var pmt, pvif;

                function PMT(ir, np, pv, fv, type) {

                    fv || (fv = 0);
                    type || (type = 0);

                    pvif = Math.pow(1 + ir, np);
                    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

                    if (type === 1)
                        pmt /= (1 + ir);

                    return -pmt;

            }

            pmt = PMT(ir, np, pv).toFixed();
            payoff = (pmt * np).toFixed();
            wkly_payments = (payoff/(np * 4)).toFixed();

            console.log(pmt);
            
            document.getElementById("wkly_payments").innerHTML = wkly_payments;
            document.getElementById("wkly_payments_2").innerHTML = wkly_payments;

            }

                var x = document.getElementById("amount_selected").value;
                document.getElementById("demo").innerHTML = x;

                var y = document.getElementById("time_period").value;
                document.getElementById("demo2").innerHTML = y;

                ir = 0.1 /12;
                np = y;
                pv = x;

                var pmt, pvif;

                function PMT(ir, np, pv, fv, type) {

                    fv || (fv = 0);
                    type || (type = 0);

                    pvif = Math.pow(1 + ir, np);
                    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

                    if (type === 1)
                        pmt /= (1 + ir);

                    return -pmt;

            }

            pmt = PMT(ir, np, pv).toFixed();
            payoff = (pmt * np).toFixed();
            wkly_payments = (payoff/(np * 4)).toFixed();

            console.log(pmt);

            document.getElementById("wkly_payments").innerHTML = wkly_payments;
            document.getElementById("wkly_payments_2").innerHTML = wkly_payments;
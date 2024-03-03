
      function MyMathPower(b, n) {
        let r = b;
        for (let i = 1; i < n; i++) {
          r *= b;
        }
        console.log(`The ${n}th power of ${b} equals ${r}`);
      }

      function MyMathPowerDefault1(b, n) {
        b = b || 2; 
        n = n || 3;
        MyMathPower(b, n);
      }

      function MyMathPowerDefault2(b = 2, n= 3) {
        MyMathPower(b, n);
      }

      function TestAllFunctions() {
        MyMathPowerDefault1(2, 2);
        MyMathPowerDefault1(2);
        MyMathPowerDefault1(null, 2);
        MyMathPowerDefault1();

        MyMathPowerDefault2(4, 4);
        MyMathPowerDefault2( 4);
        MyMathPowerDefault2(null,4);
        MyMathPowerDefault2();
      }

      TestAllFunctions();
      
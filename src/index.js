var days_count;
var bs = [];
          bs[2000] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2001] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2002] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2003] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2004] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2005] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2006] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2007] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2008] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2009] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2010] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2011] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2012] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2013] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2014] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2015] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2016] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2017] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2018] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2019] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2020] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2021] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2022] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2023] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2024] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2025] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2026] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2027] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2028] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2029] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
          bs[2030] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2031] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2032] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2033] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2034] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2035] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2036] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2037] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2038] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2039] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2040] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2041] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2042] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2043] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2044] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2045] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2046] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2047] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2048] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2049] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2050] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2051] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2052] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2053] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2054] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2055] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2056] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
          bs[2057] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2058] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2059] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2060] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2061] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2062] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31);
          bs[2063] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2064] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2065] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2066] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2067] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2068] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2069] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2070] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2071] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2072] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2073] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2074] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2075] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2076] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2077] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2078] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2079] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2080] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2081] = new Array(31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2082] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2083] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2084] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2085] = new Array(31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30);
          bs[2086] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2087] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
          bs[2088] = new Array(30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30);
          bs[2089] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2090] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2091] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
          bs[2092] = new Array(30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2093] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2094] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2095] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30);
          bs[2096] = new Array(30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2097] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2098] = new Array(31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31);
          bs[2099] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30);
          bs[2100] = new Array(31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30);
var arraySum = function(a) {
    for (var b = 0, c = a.length; c; b += a[--c])
        ;
    return b
};

const nepalidate =  {
  install: (Vue) => {
    Vue.prototype.$nepalidate = {
      arrayDifference(arrayA, arrayB) {
        (arrayA.length < arrayB.length) && (arrayB = [arrayA, arrayA = arrayB][0]);

        return arrayA.filter((x) => {
          return arrayB.indexOf(x) < 0;
        });
      },
      get2DigitNo(a) {
          return a = parseInt(a, 10), 10 > a ? "0" + a.toString() : a.toString()
      },
      getMonths() {
          var a = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
          return a
      },
      getNepaliMonths() {
          var a = new Array("Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra");
          return a
      },
      getNepaliDaysShort() {
          var a = new Array("\u0906", "\u0938\u094b", "\u092e\u0902", "\u092c\u0941", "\u092c\u093f", "\u0936\u0941", "\u0936");
          return a
      },
      getNepaliMonthsInNepali() {
          return new Array("\u092c\u0948\u0936\u093e\u0916", "\u091c\u0947\u0920", "\u0905\u0937\u093e\u0922", "\u0936\u094d\u0930\u093e\u0935\u0923", "\u092d\u093e\u0926\u094d\u0930", "\u0906\u0936\u094d\u0935\u093f\u0928", "\u0915\u093e\u0930\u094d\u0924\u093f\u0915", "\u092e\u0919\u094d\u0938\u093f\u0930", "\u092a\u094c\u0937", "\u092e\u093e\u0918", "\u092b\u093e\u0932\u094d\u0917\u0941\u0928", "\u091a\u0948\u0924\u094d\u0930")
      },
      getNepaliMonth(a) {
          a = parseInt(a, 10);
          var b = getNepaliMonthsInNepali();
          return b[a]
      },
      getCurrentDayName() {
          var a = new Date,
              b = a.getDay(),
              c = new Array(7);
          return c[0] = "Sunday", c[1] = "Monday", c[2] = "Tuesday", c[3] = "Wednesday", c[4] = "Thursday", c[5] = "Friday", c[6] = "Saturday", c[b]
      },
      getDayFromDate(a) {
          var b = a.split("-"),
              c = b[2],
              d = b[1],
              e = b[0],
              f = new Date(e, d - 1, c),
              g = f.getDay(),
              h = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
          return h[g]
      },
      numberOfBsDays(a, b) {
          var c = this.NepaliDateConverter();
          return c.bs[a][b]
      },
      numberOfDays(a, b) {
          var c = new Date(a, b, 0);
          return c.getDate()
      },
      AD2BS(a) {
          var b = this.NepaliDateConverter();
          return b.ad2bs(this.getNepaliFormat(a))
      },
      BS2AD(a) {
          var b = this.NepaliDateConverter();
          return b.bs2ad(this.getNepaliFormat(a))
      },
      getNepaliDate() {
          var a = this.NepaliDateConverter();
          return a.ad2bs(this.getDateInNo("/"))
      },
      getDateInWords() {
          var a = getMonths(),
              b = new Date,
              c = b.getDate(),
              d = b.getMonth() + 1,
              e = b.getYear(),
              f = 1e3 > e ? e + 1900 : e;
          return c + " " + a[d] + ", " + f
      },
      getDateInNo(a) {
          var b = new Date,
              c = b.getDate(),
              d = b.getMonth() + 1,
              e = b.getFullYear();
          return d + a + c + a + e
      },
      getNepaliFormat(a) {
          var b = a.split("-"),
              c = b[2],
              d = b[1],
              e = b[0];
          return d + "/" + c + "/" + e
      },
      getAdDateInWords(a) {
          var b = getMonths(),
              c = a.split("-"),
              d = c[2],
              e = c[1],
              f = c[0];
          return d + " " + b[e] + ", " + f
      },
      getNepaliDateInWords(a) {
          var b = getNepaliMonths(),
              c = a.split("-"),
              d = parseInt(c[2]),
              e = parseInt(c[1])-1,
              f = parseInt(c[0]);
          return d + " " + b[e] + ", " + f
      },
      getCurrentYear() {
          var a = new Date,
              b = a.getFullYear();
          return b
      },
      getCurrentMonth() {
          var a = new Date,
              b = a.getMonth() + 1;
          return b
      },
      getCurrentDay() {
          var a = new Date,
              b = a.getDate();
          return b
      },
      makeArray() {
          for (i = 0; i < makeArray.arguments.length; i++)
              this[i + 1] = makeArray.arguments[i]
      },
      englishNo2Nep(a) {
          a = a.toString();
          for (var b = "", c = 0; c < a.length; c++)
              b += convertNos(a[c]);
          return b
      },
      convertNos(a) {
          switch (a) {
          case "\u0966":
              return 0;
          case "\u0967":
              return 1;
          case "\u0968":
              return 2;
          case "\u0969":
              return 3;
          case "\u096a":
              return 4;
          case "\u096b":
              return 5;
          case "\u096c":
              return 6;
          case "\u096d":
              return 7;
          case "\u096e":
              return 8;
          case "\u096f":
              return 9;
          case "0":
              return "\u0966";
          case "1":
              return "\u0967";
          case "2":
              return "\u0968";
          case "3":
              return "\u0969";
          case "4":
              return "\u096a";
          case "5":
              return "\u096b";
          case "6":
              return "\u096c";
          case "7":
              return "\u096d";
          case "8":
              return "\u096e";
          case "9":
              return "\u096f"
          }
      },
      NepaliDateConverter() {
          var bs = [];
          bs[2000] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2001] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2002] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2003] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2004] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2005] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2006] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2007] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2008] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2009] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2010] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2011] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2012] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2013] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2014] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2015] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2016] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2017] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2018] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2019] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2020] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2021] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2022] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2023] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2024] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2025] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2026] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2027] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2028] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2029] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
          bs[2030] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2031] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2032] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2033] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2034] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2035] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2036] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2037] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2038] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2039] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2040] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2041] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2042] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2043] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2044] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2045] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2046] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2047] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2048] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2049] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2050] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2051] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2052] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2053] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2054] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2055] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2056] = new Array(31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30);
          bs[2057] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2058] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2059] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2060] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2061] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2062] = new Array(30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31);
          bs[2063] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2064] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2065] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2066] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31);
          bs[2067] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2068] = new Array(31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2069] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2070] = new Array(31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30);
          bs[2071] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2072] = new Array(31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2073] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31);
          bs[2074] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2075] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2076] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2077] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31);
          bs[2078] = new Array(31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2079] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30);
          bs[2080] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30);
          bs[2081] = new Array(31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2082] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2083] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2084] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2085] = new Array(31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30);
          bs[2086] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2087] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
          bs[2088] = new Array(30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30);
          bs[2089] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2090] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2091] = new Array(31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30);
          bs[2092] = new Array(30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2093] = new Array(30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2094] = new Array(31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2095] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30);
          bs[2096] = new Array(30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30);
          bs[2097] = new Array(31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30);
          bs[2098] = new Array(31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31);
          bs[2099] = new Array(31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30);
          bs[2100] = new Array(31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30);

          let obj_to_return = {
            count_ad_days : this.count_ad_days,
            count_bs_days : this.count_bs_days,
            add_bs_days : this.add_bs_days,
            add_ad_days : this.add_bs_days,
            bs2ad : this.bs2ad,
            ad2bs : this.ad2bs,
            bs_date_eq : "09/17/2000",
            ad_date_eq : "01/01/1944",
            bs: bs, 
          }

          return obj_to_return;
          
      },
      count_ad_days(a, b) {
          var c = 864e5,
              d = a.split("/"),
              e = b.split("/");
          d[2] = Number(d[2]), d[1] = Number(d[1]), d[0] = Number(d[0]), e[2] = Number(e[2]), e[1] = Number(e[1]), e[0] = Number(e[0]);
          var f = new Date(d[2], d[0] - 1, d[1]),
              g = new Date(e[2], e[0] - 1, e[1]),
              h = Math.ceil((g.getTime() - f.getTime()) / c);
          return h
      },
      count_bs_days(a, b) {
          var c = a.split("/"),
              d = b.split("/"),
              e = Number(c[2]),
              f = Number(c[0]),
              g = Number(c[1]),
              h = Number(d[2]),
              i = Number(d[0]),
              j = Number(d[1]),
              k = 0,
              l = 0;
          for (l = e; h >= l; l++)
              k += arraySum(this.bs[l]);
          for (l = 0; f > l; l++)
              k -= this.bs[e][l];
          for (k += this.bs[e][11], l = i - 1; 12 > l; l++)
              k -= this.bs[h][l];
          return k -= g + 1, k += j - 1
      },
      add_ad_days(a, b) {
          var c = new Date(a);
          c.setDate(c.getDate() + b);
          let ad_month = c.getMonth() + 1;
          let ad_day = c.getDate();
          // debugger;
          return  c.getFullYear() + "-" + (ad_month < 10 ? "0" + ad_month.toString() : ad_month) + "-" + (ad_day < 10 ? "0" + ad_day.toString() : ad_day)
      },
      substract_ad_days(a, b) {
          var c = new Date(a);
          c.setDate(c.getDate() - b);
          let ad_month = c.getMonth() + 1;
          let ad_day = c.getDate();
          // debugger;
          return  c.getFullYear() + "-" + (ad_month < 10 ? "0" + ad_month.toString() : ad_month) + "-" + (ad_day < 10 ? "0" + ad_day.toString() : ad_day)
      },
      add_bs_days(a, b) {
          var c = a.split("/"),
              d = Number(c[2]),
              e = Number(c[0]),
              f = Number(c[1]);
          for (f += b; f > this.bs[d][e - 1];)
              f -= this.bs[d][e - 1], e++, e > 12 && (e = 1, d++);
          return d + "-" + (10 > e ? "0" + e.toString() : e) + "-" + (10 > f ? "0" + f.toString() : f)
      },
      substract_bs_days(a, b) {
          let eng_date = this.substract_ad_days(this.BS2AD(a),b);
          return this.AD2BS(eng_date);
      },
      bs2ad(a) {
          days_count =this.count_bs_days(this.bs_date_eq, a);
          let test = new Date(this.ad_date_eq);
          test.setDate(test.getDate()+days_count);
          let ad_month = test.getMonth() + 1;
          let ad_day = test.getDate();
          let ad_full = test.getFullYear() + "-" + (ad_month < 10 ? "0" + ad_month.toString() : ad_month) + "-" + (ad_day < 10 ? "0" + ad_day.toString() : ad_day);
          return ad_full;
      },
      ad2bs(a) {
          return days_count =this.count_ad_days(this.ad_date_eq, a), this.add_bs_days(this.bs_date_eq, days_count)
      },


      fiscalYear()
      {
          var date=this.getNepaliDate();
          var a=date.split('-');

          var year = a[0];
          var month = a[1];
         

          if(month>3)
          {
              var fyear=year;
              var tyear=parseInt(year)+1;
          }
          else
          {
              var i=2;

              var fyear=parseInt(year)-1;
              var tyear=year;
          }

          var ret=fyear+'/'+tyear;
          ret=ret.substring(2,4)+ret.substring(7,9);

          return ret ;
      }
    };
  }
};

export default nepalidate;
document.addEventListener('DOMContentLoaded', () => {
    d3.formatDefaultLocale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["£", ""]
    });
    const dataSet = [{"date": "2017-03-14","value": 498.56},{"date": "2017-04-05","value": 212614.11},{"date": "2017-04-06","value": 49801.05},{"date": "2017-04-07","value": 48450.56},{"date": "2017-04-08","value": 48786.92},{"date": "2017-04-09","value": 47817.08},{"date": "2017-04-10","value": 96648.29},{"date": "2017-04-11","value": 111674.8},{"date": "2017-04-12","value": 214116.68},{"date": "2017-04-13","value": 221277.38},{"date": "2017-04-14","value": 40758.94},{"date": "2017-04-15","value": 27922.53},{"date": "2017-04-16","value": 27878.24},{"date": "2017-04-17","value": 34803.51},{"date": "2017-04-18","value": 321938.03},{"date": "2017-04-19","value": 63893.57},{"date": "2017-04-20","value": 192826.02},{"date": "2017-04-21","value": 118181.5},{"date": "2017-04-22","value": 2072.55},{"date": "2017-04-23","value": 1631.92},{"date": "2017-04-24","value": 22637.81},{"date": "2017-04-25","value": 5599.36},{"date": "2017-04-26","value": 153963.04},{"date": "2017-04-27","value": 293526.41},{"date": "2017-04-28","value": 138959.41},{"date": "2017-04-29","value": 21895.8},{"date": "2017-04-30","value": 21895.8},{"date": "2017-05-01","value": 21895.8},{"date": "2017-05-02","value": 402166.43},{"date": "2017-05-03","value": 11350.97},{"date": "2017-05-04","value": 168876},{"date": "2017-05-05","value": 370986.93},{"date": "2017-05-06","value": 70670.49},{"date": "2017-05-07","value": 69305.14},{"date": "2017-05-08","value": 231289.63},{"date": "2017-05-09","value": 284597.35},{"date": "2017-05-10","value": 503026.11},{"date": "2017-05-11","value": 480135.37},{"date": "2017-05-12","value": 380527.12},{"date": "2017-05-13","value": 110388.97},{"date": "2017-05-14","value": 110776.71},{"date": "2017-05-15","value": 421300.08},{"date": "2017-05-16","value": 500560.68},{"date": "2017-05-17","value": 354499.83},{"date": "2017-05-18","value": 473267.19},{"date": "2017-05-19","value": 429977.22},{"date": "2017-05-20","value": 61897.59},{"date": "2017-05-21","value": 62382.51},{"date": "2017-05-23","value": 219448.51},{"date": "2017-05-24","value": 289072.16},{"date": "2017-05-25","value": 1139931.16},{"date": "2017-05-26","value": 376188.28},{"date": "2017-05-29","value": 2267.73},{"date": "2017-05-30","value": 192041.43},{"date": "2017-05-31","value": 394223.38},{"date": "2017-06-01","value": 268733.31},{"date": "2017-06-02","value": 618227.41},{"date": "2017-06-03","value": 65687.4},{"date": "2017-06-04","value": 105648.35},{"date": "2017-06-05","value": 478368.06},{"date": "2017-06-06","value": 507378.8},{"date": "2017-06-07","value": 453483.26},{"date": "2017-06-08","value": 341762.43},{"date": "2017-06-09","value": 415482.55},{"date": "2017-06-10","value": 65456.85},{"date": "2017-06-11","value": 58109.81},{"date": "2017-06-12","value": 187721.21},{"date": "2017-06-13","value": 438461.45},{"date": "2017-06-14","value": 329270},{"date": "2017-06-15","value": 287365.65},{"date": "2017-06-16","value": 549952.27},{"date": "2017-06-17","value": 83647.87},{"date": "2017-06-18","value": 69921.09},{"date": "2017-06-19","value": 299788.15},{"date": "2017-06-20","value": 344307.11},{"date": "2017-06-21","value": 251962.8},{"date": "2017-06-22","value": 214127.06},{"date": "2017-06-23","value": 183475.35},{"date": "2017-06-26","value": 194371.94},{"date": "2017-06-27","value": 272230.58},{"date": "2017-06-28","value": 262777.54},{"date": "2017-06-29","value": 607690.77},{"date": "2017-06-30","value": 221948.78},{"date": "2017-07-03","value": 216191.68},{"date": "2017-07-04","value": 404030.8},{"date": "2017-07-05","value": 661781.98},{"date": "2017-07-06","value": 893352.09},{"date": "2017-07-07","value": 250154.82},{"date": "2017-07-11","value": 352528.16},{"date": "2017-07-12","value": 177247.08},{"date": "2017-07-13","value": 368315.82},{"date": "2017-07-14","value": 334573.59},{"date": "2017-07-15","value": 1458.69},{"date": "2017-07-17","value": 180241.52},{"date": "2017-07-18","value": 358308.58},{"date": "2017-07-19","value": 291225.78},{"date": "2017-07-20","value": 296711.9},{"date": "2017-07-21","value": 164750.8},{"date": "2017-07-22","value": 77354.09},{"date": "2017-07-23","value": 77883.3},{"date": "2017-07-24","value": 145381.73},{"date": "2017-07-25","value": 97202.75},{"date": "2017-07-26","value": 640035.78},{"date": "2017-07-27","value": 463243.52},{"date": "2017-07-28","value": 303107.42},{"date": "2017-07-31","value": 324266.89},{"date": "2017-08-01","value": 235381.12},{"date": "2017-08-02","value": 136409.94},{"date": "2017-08-03","value": 302648.69},{"date": "2017-08-04","value": 272676.67},{"date": "2017-08-05","value": 3592},{"date": "2017-08-07","value": 473689.58},{"date": "2017-08-08","value": 575078.89},{"date": "2017-08-09","value": 753672.51},{"date": "2017-08-10","value": 585270.84},{"date": "2017-08-11","value": 211816.1},{"date": "2017-08-12","value": 64005.44},{"date": "2017-08-13","value": 63872.57},{"date": "2017-08-14","value": 543682.89},{"date": "2017-08-15","value": 443522.77},{"date": "2017-08-16","value": 860929.16},{"date": "2017-08-17","value": 850337.55},{"date": "2017-08-18","value": 329078.76},{"date": "2017-08-21","value": 670006.14},{"date": "2017-08-22","value": 329970.28},{"date": "2017-08-23","value": 729256.26},{"date": "2017-08-24","value": 530112.18},{"date": "2017-08-25","value": 493302.43},{"date": "2017-08-26","value": 7621.88},{"date": "2017-08-27","value": 7621.88},{"date": "2017-08-28","value": 7136.96},{"date": "2017-08-29","value": 408741.54},{"date": "2017-08-30","value": 506378.11},{"date": "2017-08-31","value": 655881.79},{"date": "2017-09-01","value": 266672.79},{"date": "2017-09-04","value": 418450.69},{"date": "2017-09-05","value": 469310.42},{"date": "2017-09-06","value": 291540.89},{"date": "2017-09-07","value": 307825.31},{"date": "2017-09-08","value": 310643.82},{"date": "2017-09-09","value": 64054.02},{"date": "2017-09-10","value": 48734.84},{"date": "2017-09-11","value": 179867.2},{"date": "2017-09-12","value": 294338.06},{"date": "2017-09-13","value": 332092.95},{"date": "2017-09-14","value": 180614.35},{"date": "2017-09-15","value": 196250.76},{"date": "2017-09-16","value": 39605.69},{"date": "2017-09-17","value": 211199.47},{"date": "2017-09-18","value": 459363.67},{"date": "2017-09-19","value": 282324.39},{"date": "2017-09-20","value": 495465.36},{"date": "2017-09-21","value": 265062.27},{"date": "2017-09-22","value": 271237.48},{"date": "2017-09-24","value": 48},{"date": "2017-09-25","value": 127348.88},{"date": "2017-09-26","value": 234458.57},{"date": "2017-09-27","value": 297120.45},{"date": "2017-09-28","value": 128315.73},{"date": "2017-09-29","value": 164723.58},{"date": "2017-09-30","value": 116521.14},{"date": "2017-10-01","value": 66077.5},{"date": "2017-10-02","value": 251406.63},{"date": "2017-10-03","value": 193821.18},{"date": "2017-10-04","value": 22535.77},{"date": "2017-10-05","value": 420246.02},{"date": "2017-10-06","value": 349731.82},{"date": "2017-10-07","value": 85023.66},{"date": "2017-10-08","value": 170030.88},{"date": "2017-10-09","value": 173011.37},{"date": "2017-10-10","value": 179723.63},{"date": "2017-10-13","value": 65.27},{"date": "2017-10-16","value": 49.23},{"date": "2017-10-17","value": 155.92},{"date": "2017-10-18","value": 747066.07},{"date": "2017-10-19","value": 799098.4},{"date": "2017-10-20","value": 430062.16},{"date": "2017-10-21","value": 157999.17},{"date": "2017-10-22","value": 165288.37},{"date": "2017-10-23","value": 864169.77},{"date": "2017-10-24","value": 407143.54},{"date": "2017-10-25","value": 810512.42},{"date": "2017-10-26","value": 354064.02},{"date": "2017-10-27","value": 390821.03},{"date": "2017-10-28","value": 51070.99},{"date": "2017-10-29","value": 141448.82},{"date": "2017-10-30","value": 395114.85},{"date": "2017-10-31","value": 105264.72},{"date": "2017-11-01","value": 228106.35},{"date": "2017-11-02","value": 622273.27},{"date": "2017-11-03","value": 327399.49},{"date": "2017-11-04","value": 233043.1},{"date": "2017-11-05","value": 243470.23},{"date": "2017-11-06","value": 245434.29},{"date": "2017-11-07","value": 205158.77},{"date": "2017-11-08","value": 231776.07},{"date": "2017-11-09","value": 215391.83},{"date": "2017-11-10","value": 123813.25},{"date": "2017-11-11","value": 110525.88},{"date": "2017-11-12","value": 43759.13},{"date": "2017-11-13","value": 241927.34},{"date": "2017-11-14","value": 236898.04},{"date": "2017-11-15","value": 143669.47},{"date": "2017-11-16","value": 553141.91},{"date": "2017-11-17","value": 687491},{"date": "2017-11-18","value": 18016.88},{"date": "2017-11-20","value": 272768.05},{"date": "2017-11-21","value": 36625.12},{"date": "2017-11-22","value": 161449.73},{"date": "2017-11-23","value": 6996.26},{"date": "2017-11-24","value": 104726.74},{"date": "2017-11-25","value": 68221.51},{"date": "2017-11-26","value": 30380.94},{"date": "2017-11-27","value": 95728.55},{"date": "2017-11-28","value": 218386.18},{"date": "2017-11-29","value": 70604.81},{"date": "2017-11-30","value": 117502.86},{"date": "2017-12-01","value": 169634.59},{"date": "2017-12-02","value": 42833.58},{"date": "2017-12-03","value": 30910.15},{"date": "2017-12-04","value": 118384.12},{"date": "2017-12-05","value": 262202.73},{"date": "2017-12-06","value": 398638.15},{"date": "2017-12-07","value": 238932.49},{"date": "2017-12-08","value": 247010.03},{"date": "2017-12-10","value": 30865.86},{"date": "2017-12-11","value": 346700.04},{"date": "2017-12-12","value": 179808.08},{"date": "2017-12-13","value": 184441.04},{"date": "2017-12-14","value": 199040.93},{"date": "2017-12-15","value": 35024.57},{"date": "2017-12-16","value": 155.92},{"date": "2017-12-17","value": 58595.32},{"date": "2017-12-18","value": 119336.84},{"date": "2017-12-19","value": 118603.3},{"date": "2017-12-20","value": 246641.94},{"date": "2017-12-21","value": 158004.07},{"date": "2017-12-22","value": 63981.43},{"date": "2017-12-27","value": 199106.55},{"date": "2017-12-28","value": 89502.23},{"date": "2017-12-29","value": 30910.15},{"date": "2018-01-01","value": 63230.77},{"date": "2018-01-02","value": 99365.11},{"date": "2018-01-03","value": 131930.8},{"date": "2018-01-04","value": 114114.57},{"date": "2018-01-05","value": 91033.54},{"date": "2018-01-08","value": 106335.7},{"date": "2018-01-09","value": 236766.85},{"date": "2018-01-10","value": 517392.04},{"date": "2018-01-11","value": 132243.1},{"date": "2018-01-12","value": 597768.58},{"date": "2018-01-14","value": 6716.18},{"date": "2018-01-15","value": 39630.68},{"date": "2018-01-16","value": 14436.61},{"date": "2018-01-17","value": 29983.92},{"date": "2018-01-18","value": 245520.41},{"date": "2018-01-19","value": 454973.08},{"date": "2018-01-20","value": 23311.25},{"date": "2018-01-21","value": 21061.54},{"date": "2018-01-22","value": 224943.99},{"date": "2018-01-23","value": 257500.49},{"date": "2018-01-24","value": 247339.64},{"date": "2018-01-25","value": 279854.74},{"date": "2018-01-26","value": 201736.32},{"date": "2018-01-27","value": 47799.52},{"date": "2018-01-28","value": 36609.5},{"date": "2018-01-29","value": 278894.59},{"date": "2018-01-30","value": 267086.75},{"date": "2018-01-31","value": 714846.65},{"date": "2018-02-01","value": 953646.25},{"date": "2018-02-02","value": 475445.24},{"date": "2018-02-03","value": 92268.64},{"date": "2018-02-04","value": 86746.61},{"date": "2018-02-05","value": 459109.7},{"date": "2018-02-06","value": 527041.29},{"date": "2018-02-07","value": 1126526.71},{"date": "2018-02-08","value": 630702.14},{"date": "2018-02-09","value": 654936.51},{"date": "2018-02-12","value": 422986.13},{"date": "2018-02-13","value": 771115.11},{"date": "2018-02-14","value": 488802.56},{"date": "2018-02-15","value": 668612.78},{"date": "2018-02-16","value": 11600.6},{"date": "2018-02-17","value": 1631.92},{"date": "2018-02-18","value": 573.5},{"date": "2018-02-19","value": 358411.18},{"date": "2018-02-20","value": 458385.73},{"date": "2018-02-21","value": 313563.08},{"date": "2018-02-22","value": 814343.35},{"date": "2018-02-23","value": 2330999.21},{"date": "2018-02-24","value": 197475.12},{"date": "2018-02-25","value": 191989.7},{"date": "2018-02-26","value": 1519238.08},{"date": "2018-02-27","value": 1909702.46},{"date": "2018-02-28","value": 1552424.44},{"date": "2018-03-01","value": 1424478.05},{"date": "2018-03-02","value": 2289967.31},{"date": "2018-03-03","value": 104222.98},{"date": "2018-03-04","value": 213931.38},{"date": "2018-03-05","value": 743883.05},{"date": "2018-03-06","value": 1338340.5},{"date": "2018-03-07","value": 1584816.39},{"date": "2018-03-08","value": 566010.67},{"date": "2018-03-09","value": 828636.59},{"date": "2018-03-10","value": 92000.4},{"date": "2018-03-11","value": 96389.63},{"date": "2018-03-12","value": 698063.19},{"date": "2018-03-13","value": 364835.14},{"date": "2018-03-14","value": 467128.59},{"date": "2018-03-15","value": 912929.47},{"date": "2018-03-16","value": 308981.06},{"date": "2018-03-17","value": 221304.39},{"date": "2018-03-18","value": 186921.73},{"date": "2018-03-19","value": 393946.81},{"date": "2018-03-20","value": 2159498.31},{"date": "2018-03-21","value": 930440.02},{"date": "2018-03-22","value": 27606.42},{"date": "2018-03-23","value": 441897.86},{"date": "2018-03-26","value": 1832351.49},{"date": "2018-03-27","value": 2027774.07},{"date": "2018-03-28","value": 712617.82},{"date": "2018-03-29","value": 577853.2},{"date": "2018-03-30","value": 91976.93},{"date": "2018-03-31","value": 92902.48},{"date": "2018-04-01","value": 92858.19},{"date": "2018-04-02","value": 92858.19},{"date": "2018-04-03","value": 1369692.35},{"date": "2018-04-04","value": 319841.22},{"date": "2018-04-05","value": 1301765.06},{"date": "2018-04-06","value": 1478227.77},{"date": "2018-04-07","value": 297724.22},{"date": "2018-04-08","value": 314614.85},{"date": "2018-04-09","value": 1761699.59},{"date": "2018-04-10","value": 1518180.13},{"date": "2018-04-11","value": 833765.6},{"date": "2018-04-12","value": 15181.1},{"date": "2018-04-13","value": 2637.82},{"date": "2018-04-14","value": 49.23},{"date": "2018-04-15","value": 155.92},{"date": "2018-04-16","value": 745283.79},{"date": "2018-04-17","value": 786217.34},{"date": "2018-04-18","value": 901841.55},{"date": "2018-04-19","value": 827866.04},{"date": "2018-04-20","value": 613677.67},{"date": "2018-04-21","value": 130877.04},{"date": "2018-04-22","value": 163596.3},{"date": "2018-04-23","value": 614977.58},{"date": "2018-04-24","value": 327781.52},{"date": "2018-04-25","value": 479966.27},{"date": "2018-04-26","value": 688428.22},{"date": "2018-04-27","value": 953056.88},{"date": "2018-04-30","value": 486470.5},{"date": "2018-05-01","value": 380828.98},{"date": "2018-05-02","value": 441765.92},{"date": "2018-05-03","value": 528945.28},{"date": "2018-05-04","value": 612602.34},{"date": "2018-05-05","value": 397.1},{"date": "2018-05-07","value": 105012.63},{"date": "2018-05-08","value": 794243.66},{"date": "2018-05-09","value": 454798.3},{"date": "2018-05-10","value": 156936.88},{"date": "2018-05-11","value": 305722.93},{"date": "2018-05-14","value": 232871.33},{"date": "2018-05-15","value": 1035083.17},{"date": "2018-05-16","value": 878299.46},{"date": "2018-05-17","value": 947131.73},{"date": "2018-05-18","value": 1071533.36},{"date": "2018-05-21","value": 883718.15},{"date": "2018-05-22","value": 1371591.9},{"date": "2018-05-23","value": 1195221.49},{"date": "2018-05-24","value": 1134116.82},{"date": "2018-05-25","value": 1110811.47},{"date": "2018-05-28","value": 348080.37},{"date": "2018-05-29","value": 967248.89},{"date": "2018-05-30","value": 1787682.38},{"date": "2018-05-31","value": 779587.12},{"date": "2018-06-01","value": 623765.49},{"date": "2018-06-04","value": 1904928.65},{"date": "2018-06-05","value": 1444965.67},{"date": "2018-06-06","value": 587874.03},{"date": "2018-06-07","value": 842869.41},{"date": "2018-06-08","value": 464170.45},{"date": "2018-06-11","value": 298287.52},{"date": "2018-06-12","value": 921525.36},{"date": "2018-06-13","value": 370721.59},{"date": "2018-06-14","value": 1682096.48},{"date": "2018-06-15","value": 1195848.41},{"date": "2018-06-18","value": 1004485.64},{"date": "2018-06-19","value": 801293.65},{"date": "2018-06-20","value": 476568.3},{"date": "2018-06-21","value": 1586277.55},{"date": "2018-06-22","value": 1343762.24},{"date": "2018-06-25","value": 1204240.32},{"date": "2018-06-26","value": 926169.88},{"date": "2018-06-27","value": 1090569.7},{"date": "2018-06-28","value": 1155017.74},{"date": "2018-06-29","value": 1002282.91},{"date": "2018-07-02","value": 1547229.05},{"date": "2018-07-03","value": 1346312.1},{"date": "2018-07-04","value": 1573696.33},{"date": "2018-07-05","value": 880621.9},{"date": "2018-07-06","value": 929643.16},{"date": "2018-07-09","value": 972986.62},{"date": "2018-07-10","value": 1389132.82},{"date": "2018-07-11","value": 843955.11},{"date": "2018-07-12","value": 858504.56},{"date": "2018-07-13","value": 1143215.72},{"date": "2018-07-16","value": 753289.64},{"date": "2018-07-17","value": 786080.58},{"date": "2018-07-18","value": 869377.15},{"date": "2018-07-19","value": 1204795.55},{"date": "2018-07-20","value": 809398.52},{"date": "2018-07-23","value": 793874.13},{"date": "2018-07-24","value": 771868.3},{"date": "2018-07-25","value": 382901.64},{"date": "2018-07-26","value": 1249666.52},{"date": "2018-07-27","value": 1995588.23},{"date": "2018-07-30","value": 1202438.35},{"date": "2018-07-31","value": 1328016.09},{"date": "2018-08-01","value": 2091073.07},{"date": "2018-08-02","value": 1753458.16},{"date": "2018-08-03","value": 909258.36},{"date": "2018-08-06","value": 1201397.51},{"date": "2018-08-07","value": 1283392.81},{"date": "2018-08-08","value": 2042431.51},{"date": "2018-08-09","value": 1087674.06},{"date": "2018-08-10","value": 861575.69},{"date": "2018-08-11","value": 50305.96},{"date": "2018-08-13","value": 845752.9},{"date": "2018-08-14","value": 1229885.34},{"date": "2018-08-15","value": 1023334.93},{"date": "2018-08-16","value": 522952.42},{"date": "2018-08-17","value": 188506.67},{"date": "2018-08-20","value": 749068.97},{"date": "2018-08-21","value": 643758.98},{"date": "2018-08-22","value": 1398828.02},{"date": "2018-08-23","value": 524540.49},{"date": "2018-08-24","value": 670163.9},{"date": "2018-08-27","value": 271174.72},{"date": "2018-08-28","value": 567333.85},{"date": "2018-08-29","value": 668928.84},{"date": "2018-08-30","value": 303584.06},{"date": "2018-08-31","value": 1774735.96},{"date": "2018-09-03","value": 2883453.88},{"date": "2018-09-04","value": 1075448.23},{"date": "2018-09-05","value": 1597120.07},{"date": "2018-09-06","value": 1372662.24},{"date": "2018-09-07","value": 875326.31},{"date": "2018-09-10","value": 799036.06},{"date": "2018-09-11","value": 365151.96},{"date": "2018-09-12","value": 2014599.76},{"date": "2018-09-13","value": 830054.36},{"date": "2018-09-14","value": 910839.32},{"date": "2018-09-17","value": 956256.81},{"date": "2018-09-18","value": 1044001.81},{"date": "2018-09-19","value": 514553.36},{"date": "2018-09-20","value": 1543582.79},{"date": "2018-09-21","value": 1954559.55},{"date": "2018-09-24","value": 1804494.87},{"date": "2018-09-25","value": 1057904.34},{"date": "2018-09-26","value": 1128354},{"date": "2018-09-27","value": 1922455.07},{"date": "2018-09-28","value": 928425.89},{"date": "2018-10-01","value": 1039332.53},{"date": "2018-10-02","value": 225648.8},{"date": "2018-10-03","value": 903993.7},{"date": "2018-10-04","value": 403354.09},{"date": "2018-10-05","value": 982814.94},{"date": "2018-10-08","value": 1440666.86},{"date": "2018-10-09","value": 2017707.53},{"date": "2018-10-10","value": 1436808.47},{"date": "2018-10-11","value": 2021865.05},{"date": "2018-10-12","value": 1420567.8},{"date": "2018-10-13","value": 957.6},{"date": "2018-10-14","value": 638.4},{"date": "2018-10-15","value": 1797844.86},{"date": "2018-10-16","value": 1221902.03},{"date": "2018-10-17","value": 74084.65},{"date": "2018-10-18","value": 302479.08},{"date": "2018-10-19","value": 58134.27},{"date": "2018-10-20","value": 814.4},{"date": "2018-10-22","value": 56280.7},{"date": "2018-10-23","value": 522192.62},{"date": "2018-10-24","value": 1145127.37},{"date": "2018-10-25","value": 997366.64},{"date": "2018-10-26","value": 717387.08},{"date": "2018-10-27","value": 319.2},{"date": "2018-10-29","value": 893748.5},{"date": "2018-10-30","value": 274577.38},{"date": "2018-10-31","value": 388391.95},{"date": "2018-11-01","value": 252612.57},{"date": "2018-11-02","value": 493605.69},{"date": "2018-11-03","value": 5990.41},{"date": "2018-11-04","value": 5524.31},{"date": "2018-11-05","value": 787519.27},{"date": "2018-11-06","value": 513524.48},{"date": "2018-11-07","value": 866359.47},{"date": "2018-11-08","value": 364215.81},{"date": "2018-11-09","value": 536627.06},{"date": "2018-11-10","value": 4863.26},{"date": "2018-11-11","value": 4384.01},{"date": "2018-11-12","value": 190699.97},{"date": "2018-11-13","value": 1011013.48},{"date": "2018-11-14","value": 433862.01},{"date": "2018-11-15","value": 616739.39},{"date": "2018-11-16","value": 484645.31},{"date": "2018-11-17","value": 2188.1},{"date": "2018-11-18","value": 5403.21},{"date": "2018-11-19","value": 155050.26},{"date": "2018-11-20","value": 614117.37},{"date": "2018-11-21","value": 722391.99},{"date": "2018-11-22","value": 335736.14},{"date": "2018-11-23","value": 341804.46},{"date": "2018-11-24","value": 5440.21},{"date": "2018-11-25","value": 5593.31},{"date": "2018-11-26","value": 403559.8},{"date": "2018-11-27","value": 518394.3},{"date": "2018-11-28","value": 680933.92},{"date": "2018-11-29","value": 253288.73}];
    let points = dataSet.length;
    const maxVal = d3.max(dataSet, (d) => d.value);
    const width = 1024;
    const height = 300;
    const margin = 40;

    const xScale = d3.scaleLinear()
        .domain([0, points]) // input
        .range([margin, width - (2 * margin)]); // output

    var yScale = d3.scaleLinear()
        .domain([-1, maxVal]) // input
        .range([height - margin, margin]); // ouput (y is 0 at top)

    const svg = d3.select('#graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const xAxis = svg.append('g')
        .attr('transform', `translate(0, ${height - margin})`)
        .call(d3.axisBottom().scale(xScale));

    svg.append('g')
        .attr('transform', `translate(${margin}, 0)`)
        .call(d3.axisLeft(yScale).tickFormat(d3.formatPrefix(".1", 1e6)));

    const areaPlot = d3.area()
        .curve(d3.curveMonotoneX)
        .x((_d, i) => xScale(i))
        .y0(yScale(0))
        .y1((d) => yScale(d.value));

    svg.append('g')
        .attr('id', 'area')
        .append('path')
            .datum(dataSet)
            .attr('fill', 'blue')
            .attr('d', areaPlot);

    const barWidth = xScale(1) - xScale(0);

    svg.append('g')
            .attr('id', 'bar')
            .attr('display', 'none')
        .selectAll('rect')
            .data(dataSet)
                .enter()
                    .append('rect')
                    .attr('x', (_d, i) => xScale(i))
                    .attr('y', (d) => yScale(d.value))
                    .attr('width', barWidth)
                    .attr('height', (d) => yScale(-1) - yScale(d.value))
                    .attr('fill', 'green');

    const linePlot = d3.line()
        .curve(d3.curveMonotoneX)
        .x((_d, i) => xScale(i))
        .y((d) => yScale(d.value));

    svg.append('g')
        .attr('id', 'line')
        .attr('display', 'none')
        .append('path')
            .datum(dataSet)
            .attr('fill', 'none')
            .attr('stroke', 'red')
            .attr('d', linePlot);

    const info = svg.append('g')
        .attr('id', 'info')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'after-edge')
        .attr('font-size', '12px')
        .attr('font-family', 'sans-serif')
        .attr('transform', `translate(${width / 2}, ${height - 12})`)
            .append('text');

    const formatDate = (date) => {
        const parser = d3.timeParse('%Y-%m-%d');
        const formatter = d3.timeFormat('%e %b %Y');
        return formatter(parser(date));
    }

    svg.append('g')
        .attr('id', 'tips')
        .selectAll('circle')
            .data(dataSet)
                .enter()
                    .append('circle')
                    .attr('r', 4)
                    .attr('cx', (_d, i) => xScale(i))
                    .attr('cy', (d) => yScale(d.value))
                    .attr('fill', 'red')
                    .attr('opacity', 0)
                    .on('mouseover', (d, i, a) => {
                        d3.select(a[i]).attr('opacity', '0.5');
                        info.text(`${formatDate(d.date)} - ${d3.format("($,.2f")(d.value)}`);
                    })
                    .on('mouseout', (d, i, a) => {
                        d3.select(a[i]).attr('opacity', '0');
                        info.text('');
                    });


    d3.selectAll('[name=display]')
        .on('change', (data, index, array) => {
            array.forEach((input, arrayIndex) => {
                d3.select(`#${input.value}`)
                    .attr('display', index === arrayIndex ? 'inline' : 'none');
            });
        }, false)
}, false);

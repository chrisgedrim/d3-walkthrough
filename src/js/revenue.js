document.addEventListener('DOMContentLoaded', () => {
    const dataSet = [
        {"date": "2017-04-05", "amount": 186346.5},
        {"date": "2017-04-06", "amount": 43480.85},
        {"date": "2017-04-07", "amount": 43652.75},
        {"date": "2017-04-08", "amount": 43480.85},
        {"date": "2017-04-09", "amount": 43480.85},
        {"date": "2017-04-10", "amount": 86961.7},
        {"date": "2017-04-11", "amount": 93173.25},
        {"date": "2017-04-12", "amount": 192558.05},
        {"date": "2017-04-13", "amount": 198909.45},
        {"date": "2017-04-14", "amount": 37269.3},
        {"date": "2017-04-15", "amount": 24846.2},
        {"date": "2017-04-16", "amount": 24846.2},
        {"date": "2017-04-17", "amount": 31057.75},
        {"date": "2017-04-18", "amount": 291942.85},
        {"date": "2017-04-19", "amount": 56058.95},
        {"date": "2017-04-20", "amount": 193643.05},
        {"date": "2017-04-21", "amount": 99539.8},
        {"date": "2017-04-24", "amount": 1751.55},
        {"date": "2017-04-25", "amount": 404.73},
        {"date": "2017-04-26", "amount": 134954.3},
        {"date": "2017-04-27", "amount": 262595.29},
        {"date": "2017-04-28", "amount": 124403.6},
        {"date": "2017-04-29", "amount": 19099.65},
        {"date": "2017-04-30", "amount": 19099.65},
        {"date": "2017-05-01", "amount": 19099.65},
        {"date": "2017-05-02", "amount": 358156.9},
        {"date": "2017-05-03", "amount": 11878.08},
        {"date": "2017-05-04", "amount": 148732.7},
        {"date": "2017-05-05", "amount": 330821.28},
        {"date": "2017-05-06", "amount": 61263.2},
        {"date": "2017-05-07", "amount": 61263.2},
        {"date": "2017-05-08", "amount": 202562.9},
        {"date": "2017-05-09", "amount": 258960.44},
        {"date": "2017-05-10", "amount": 471849.14},
        {"date": "2017-05-11", "amount": 442696.91},
        {"date": "2017-05-12", "amount": 355495.79},
        {"date": "2017-05-13", "amount": 104147.44},
        {"date": "2017-05-14", "amount": 104147.44},
        {"date": "2017-05-15", "amount": 392257.23},
        {"date": "2017-05-16", "amount": 471726.64},
        {"date": "2017-05-17", "amount": 330869.55},
        {"date": "2017-05-18", "amount": 416717.26},
        {"date": "2017-05-19", "amount": 379831.84},
        {"date": "2017-05-20", "amount": 55136.88},
        {"date": "2017-05-21", "amount": 55136.88},
        {"date": "2017-05-23", "amount": 196164.74},
        {"date": "2017-05-24", "amount": 258022.83},
        {"date": "2017-05-25", "amount": 1035396.35},
        {"date": "2017-05-26", "amount": 343073.92},
        {"date": "2017-05-29", "amount": 3770},
        {"date": "2017-05-30", "amount": 171536.96},
        {"date": "2017-05-31", "amount": 353366.45},
        {"date": "2017-06-01", "amount": 235582.98},
        {"date": "2017-06-02", "amount": 547523.3},
        {"date": "2017-06-03", "amount": 57298.95},
        {"date": "2017-06-04", "amount": 101864.8},
        {"date": "2017-06-05", "amount": 445933.5},
        {"date": "2017-06-06", "amount": 491000.1},
        {"date": "2017-06-07", "amount": 439759.4},
        {"date": "2017-06-08", "amount": 319222.55},
        {"date": "2017-06-09", "amount": 366439.35},
        {"date": "2017-06-10", "amount": 57298.95},
        {"date": "2017-06-11", "amount": 50932.4},
        {"date": "2017-06-12", "amount": 172383.49},
        {"date": "2017-06-13", "amount": 388898.55},
        {"date": "2017-06-14", "amount": 292861.3},
        {"date": "2017-06-15", "amount": 261028.55},
        {"date": "2017-06-16", "amount": 509324},
        {"date": "2017-06-17", "amount": 76398.6},
        {"date": "2017-06-18", "amount": 63665.5},
        {"date": "2017-06-19", "amount": 280310.2},
        {"date": "2017-06-20", "amount": 318928.2},
        {"date": "2017-06-21", "amount": 229239.88},
        {"date": "2017-06-22", "amount": 190996.5},
        {"date": "2017-06-23", "amount": 165956},
        {"date": "2017-06-26", "amount": 171896.85},
        {"date": "2017-06-27", "amount": 242573.9},
        {"date": "2017-06-28", "amount": 235562.35},
        {"date": "2017-06-29", "amount": 541328.73},
        {"date": "2017-06-30", "amount": 197363.05},
        {"date": "2017-07-03", "amount": 193110.5},
        {"date": "2017-07-04", "amount": 356526.8},
        {"date": "2017-07-05", "amount": 592089.15},
        {"date": "2017-07-06", "amount": 815723.4},
        {"date": "2017-07-07", "amount": 210096.15},
        {"date": "2017-07-11", "amount": 318327.5},
        {"date": "2017-07-12", "amount": 159163.75},
        {"date": "2017-07-13", "amount": 331279.9},
        {"date": "2017-07-14", "amount": 301468.25},
        {"date": "2017-07-17", "amount": 164201.45},
        {"date": "2017-07-18", "amount": 318487.5},
        {"date": "2017-07-19", "amount": 261028.55},
        {"date": "2017-07-20", "amount": 266541.55},
        {"date": "2017-07-21", "amount": 148595.51},
        {"date": "2017-07-22", "amount": 70032.05},
        {"date": "2017-07-23", "amount": 70032.05},
        {"date": "2017-07-24", "amount": 128373.96},
        {"date": "2017-07-25", "amount": 82765.15},
        {"date": "2017-07-26", "amount": 579979.31},
        {"date": "2017-07-27", "amount": 420512.3},
        {"date": "2017-07-28", "amount": 273921.65},
        {"date": "2017-07-31", "amount": 293145.68},
        {"date": "2017-08-01", "amount": 210256.15},
        {"date": "2017-08-02", "amount": 121284.45},
        {"date": "2017-08-03", "amount": 280128.2},
        {"date": "2017-08-04", "amount": 254914.8},
        {"date": "2017-08-07", "amount": 432925.4},
        {"date": "2017-08-08", "amount": 522057.1},
        {"date": "2017-08-09", "amount": 693953.95},
        {"date": "2017-08-10", "amount": 528425.148},
        {"date": "2017-08-11", "amount": 191122.9},
        {"date": "2017-08-12", "amount": 57298.95},
        {"date": "2017-08-13", "amount": 57298.95},
        {"date": "2017-08-14", "amount": 496717.3},
        {"date": "2017-08-15", "amount": 401267.65},
        {"date": "2017-08-16", "amount": 803153.55},
        {"date": "2017-08-17", "amount": 751321.85},
        {"date": "2017-08-18", "amount": 286494.75},
        {"date": "2017-08-21", "amount": 611188.8},
        {"date": "2017-08-22", "amount": 292861.3},
        {"date": "2017-08-23", "amount": 662121.2},
        {"date": "2017-08-24", "amount": 477491.25},
        {"date": "2017-08-25", "amount": 439432.16},
        {"date": "2017-08-26", "amount": 6366.55},
        {"date": "2017-08-27", "amount": 6366.55},
        {"date": "2017-08-28", "amount": 6366.55},
        {"date": "2017-08-29", "amount": 369363.9},
        {"date": "2017-08-30", "amount": 452025.05},
        {"date": "2017-08-31", "amount": 587031.6},
        {"date": "2017-09-01", "amount": 235917.35},
        {"date": "2017-09-04", "amount": 375745.35},
        {"date": "2017-09-05", "amount": 409549.2},
        {"date": "2017-09-06", "amount": 254662},
        {"date": "2017-09-07", "amount": 267395.1},
        {"date": "2017-09-08", "amount": 273761.65},
        {"date": "2017-09-09", "amount": 57298.95},
        {"date": "2017-09-10", "amount": 44565.85},
        {"date": "2017-09-11", "amount": 159163.75},
        {"date": "2017-09-12", "amount": 254662},
        {"date": "2017-09-13", "amount": 292861.3},
        {"date": "2017-09-14", "amount": 159163.75},
        {"date": "2017-09-15", "amount": 172045.22},
        {"date": "2017-09-16", "amount": 38199.3},
        {"date": "2017-09-17", "amount": 203729.6},
        {"date": "2017-09-18", "amount": 407459.2},
        {"date": "2017-09-19", "amount": 241928.9},
        {"date": "2017-09-20", "amount": 413825.75},
        {"date": "2017-09-21", "amount": 188703.95},
        {"date": "2017-09-22", "amount": 236611.51},
        {"date": "2017-09-25", "amount": 114772.9},
        {"date": "2017-09-26", "amount": 207211.6},
        {"date": "2017-09-27", "amount": 248295.45},
        {"date": "2017-09-28", "amount": 109329.65},
        {"date": "2017-09-29", "amount": 146430.65},
        {"date": "2017-09-30", "amount": 108231.35},
        {"date": "2017-10-01", "amount": 63665.5},
        {"date": "2017-10-02", "amount": 223056.25},
        {"date": "2017-10-03", "amount": 152966.74},
        {"date": "2017-10-04", "amount": 6366.55},
        {"date": "2017-10-05", "amount": 363284.27},
        {"date": "2017-10-06", "amount": 299402.85},
        {"date": "2017-10-07", "amount": 76398.6},
        {"date": "2017-10-08", "amount": 152797.2},
        {"date": "2017-10-09", "amount": 140064.1},
        {"date": "2017-10-10", "amount": 152797.2},
        {"date": "2017-10-18", "amount": 703171.7},
        {"date": "2017-10-19", "amount": 763178.7},
        {"date": "2017-10-20", "amount": 415062.1},
        {"date": "2017-10-21", "amount": 153974.65},
        {"date": "2017-10-22", "amount": 160669.2},
        {"date": "2017-10-23", "amount": 816791.85},
        {"date": "2017-10-24", "amount": 368200.25},
        {"date": "2017-10-25", "amount": 776668.6},
        {"date": "2017-10-26", "amount": 313365.25},
        {"date": "2017-10-27", "amount": 346928.5},
        {"date": "2017-10-28", "amount": 45580.4},
        {"date": "2017-10-29", "amount": 125346.1},
        {"date": "2017-10-30", "amount": 335533.4},
        {"date": "2017-10-31", "amount": 91160.8},
        {"date": "2017-11-01", "amount": 193716.7},
        {"date": "2017-11-02", "amount": 552719.1},
        {"date": "2017-11-03", "amount": 284877.5},
        {"date": "2017-11-04", "amount": 214782},
        {"date": "2017-11-05", "amount": 225521.1},
        {"date": "2017-11-06", "amount": 220151.55},
        {"date": "2017-11-07", "amount": 187934.25},
        {"date": "2017-11-08", "amount": 204042.9},
        {"date": "2017-11-09", "amount": 192767.75},
        {"date": "2017-11-10", "amount": 107391},
        {"date": "2017-11-11", "amount": 96651.9},
        {"date": "2017-11-12", "amount": 37586.85},
        {"date": "2017-11-13", "amount": 204042.9},
        {"date": "2017-11-14", "amount": 203506.85},
        {"date": "2017-11-15", "amount": 123499.65},
        {"date": "2017-11-16", "amount": 483259.5},
        {"date": "2017-11-17", "amount": 596020.05},
        {"date": "2017-11-18", "amount": 16108.65},
        {"date": "2017-11-20", "amount": 220151.55},
        {"date": "2017-11-21", "amount": 26847.75},
        {"date": "2017-11-22", "amount": 134238.75},
        {"date": "2017-11-23", "amount": 5369.55},
        {"date": "2017-11-24", "amount": 85912.8},
        {"date": "2017-11-25", "amount": 59065.05},
        {"date": "2017-11-26", "amount": 26847.75},
        {"date": "2017-11-27", "amount": 80543.25},
        {"date": "2017-11-28", "amount": 186862.15},
        {"date": "2017-11-29", "amount": 59065.05},
        {"date": "2017-11-30", "amount": 102021.45},
        {"date": "2017-12-01", "amount": 150347.4},
        {"date": "2017-12-02", "amount": 37586.85},
        {"date": "2017-12-03", "amount": 26847.75},
        {"date": "2017-12-04", "amount": 102021.45},
        {"date": "2017-12-05", "amount": 225521.1},
        {"date": "2017-12-06", "amount": 343457.15},
        {"date": "2017-12-07", "amount": 208876.4},
        {"date": "2017-12-08", "amount": 214245.95},
        {"date": "2017-12-10", "amount": 26847.75},
        {"date": "2017-12-11", "amount": 289955.7},
        {"date": "2017-12-12", "amount": 155716.95},
        {"date": "2017-12-13", "amount": 142232.3},
        {"date": "2017-12-14", "amount": 172176.6},
        {"date": "2017-12-15", "amount": 32217.3},
        {"date": "2017-12-17", "amount": 53159.45},
        {"date": "2017-12-18", "amount": 96651.9},
        {"date": "2017-12-19", "amount": 102021.45},
        {"date": "2017-12-20", "amount": 198673.35},
        {"date": "2017-12-21", "amount": 128930.25},
        {"date": "2017-12-22", "amount": 53695.5},
        {"date": "2017-12-27", "amount": 166631.45},
        {"date": "2017-12-28", "amount": 75173.7},
        {"date": "2017-12-29", "amount": 26847.75},
        {"date": "2018-01-01", "amount": 53695.5},
        {"date": "2018-01-02", "amount": 85912.8},
        {"date": "2018-01-03", "amount": 107391},
        {"date": "2018-01-04", "amount": 96651.9},
        {"date": "2018-01-05", "amount": 69804.15},
        {"date": "2018-01-08", "amount": 85912.8},
        {"date": "2018-01-09", "amount": 214904.1},
        {"date": "2018-01-10", "amount": 456411.75},
        {"date": "2018-01-11", "amount": 107391},
        {"date": "2018-01-12", "amount": 488751.15},
        {"date": "2018-01-14", "amount": 5369.55},
        {"date": "2018-01-15", "amount": 32217.3},
        {"date": "2018-01-16", "amount": 10739.1},
        {"date": "2018-01-17", "amount": 21653.2},
        {"date": "2018-01-18", "amount": 193303.8},
        {"date": "2018-01-19", "amount": 381238.05},
        {"date": "2018-01-20", "amount": 16108.65},
        {"date": "2018-01-21", "amount": 16108.65},
        {"date": "2018-01-22", "amount": 178656.8},
        {"date": "2018-01-23", "amount": 219941.1},
        {"date": "2018-01-24", "amount": 219476.1},
        {"date": "2018-01-25", "amount": 235619.57},
        {"date": "2018-01-26", "amount": 172623.83},
        {"date": "2018-01-27", "amount": 41871.4},
        {"date": "2018-01-28", "amount": 31442.3},
        {"date": "2018-01-29", "amount": 245858.85},
        {"date": "2018-01-30", "amount": 234654.75},
        {"date": "2018-01-31", "amount": 636485.1},
        {"date": "2018-02-01", "amount": 845997.1},
        {"date": "2018-02-02", "amount": 407354.9},
        {"date": "2018-02-03", "amount": 83587.8},
        {"date": "2018-02-04", "amount": 78373.25},
        {"date": "2018-02-05", "amount": 417474},
        {"date": "2018-02-06", "amount": 422998.55},
        {"date": "2018-02-07", "amount": 1003983.6},
        {"date": "2018-02-08", "amount": 548457.75},
        {"date": "2018-02-09", "amount": 569450.85},
        {"date": "2018-02-12", "amount": 371608.05},
        {"date": "2018-02-13", "amount": 668857.4},
        {"date": "2018-02-14", "amount": 412724.45},
        {"date": "2018-02-15", "amount": 562726.85},
        {"date": "2018-02-19", "amount": 312873},
        {"date": "2018-02-20", "amount": 349374.85},
        {"date": "2018-02-21", "amount": 276371.15},
        {"date": "2018-02-22", "amount": 715033.05},
        {"date": "2018-02-23", "amount": 2200540.1},
        {"date": "2018-02-24", "amount": 187723.8},
        {"date": "2018-02-25", "amount": 182509.25},
        {"date": "2018-02-26", "amount": 1444223.65},
        {"date": "2018-02-27", "amount": 1784429.63},
        {"date": "2018-02-28", "amount": 1429066.65},
        {"date": "2018-03-01", "amount": 1324495.7},
        {"date": "2018-03-02", "amount": 2138050.45},
        {"date": "2018-03-03", "amount": 99076.45},
        {"date": "2018-03-04", "amount": 203367.45},
        {"date": "2018-03-05", "amount": 693575.1},
        {"date": "2018-03-06", "amount": 1235888.3},
        {"date": "2018-03-07", "amount": 1454899.4},
        {"date": "2018-03-08", "amount": 521601.95},
        {"date": "2018-03-09", "amount": 646804.2},
        {"date": "2018-03-10", "amount": 83432.8},
        {"date": "2018-03-11", "amount": 88647.35},
        {"date": "2018-03-12", "amount": 636329.92},
        {"date": "2018-03-13", "amount": 328723.05},
        {"date": "2018-03-14", "amount": 427593.1},
        {"date": "2018-03-15", "amount": 843384.55},
        {"date": "2018-03-16", "amount": 281585.7},
        {"date": "2018-03-17", "amount": 208582},
        {"date": "2018-03-18", "amount": 177294.7},
        {"date": "2018-03-19", "amount": 380662.15},
        {"date": "2018-03-20", "amount": 2040998.8},
        {"date": "2018-03-21", "amount": 853285.65},
        {"date": "2018-03-23", "amount": 443321.7},
        {"date": "2018-03-26", "amount": 1726575.77},
        {"date": "2018-03-27", "amount": 1899237.65},
        {"date": "2018-03-28", "amount": 648590.25},
        {"date": "2018-03-29", "amount": 521498.95},
        {"date": "2018-03-30", "amount": 83432.8},
        {"date": "2018-03-31", "amount": 83432.8},
        {"date": "2018-04-01", "amount": 83432.8},
        {"date": "2018-04-02", "amount": 83432.8},
        {"date": "2018-04-03", "amount": 1272377.15},
        {"date": "2018-04-04", "amount": 297229.35},
        {"date": "2018-04-05", "amount": 1230633.8},
        {"date": "2018-04-06", "amount": 1397534.22},
        {"date": "2018-04-07", "amount": 281585.7},
        {"date": "2018-04-08", "amount": 297229.35},
        {"date": "2018-04-09", "amount": 1661793.8},
        {"date": "2018-04-10", "amount": 1509844.73},
        {"date": "2018-04-11", "amount": 761436.2},
        {"date": "2018-04-12", "amount": 13736.35},
        {"date": "2018-04-13", "amount": 2685},
        {"date": "2018-04-16", "amount": 741001.1},
        {"date": "2018-04-17", "amount": 730183.95},
        {"date": "2018-04-18", "amount": 834328},
        {"date": "2018-04-19", "amount": 771873.4},
        {"date": "2018-04-20", "amount": 573600.5},
        {"date": "2018-04-21", "amount": 125149.2},
        {"date": "2018-04-22", "amount": 156436.5},
        {"date": "2018-04-23", "amount": 574890.5},
        {"date": "2018-04-24", "amount": 305023.9},
        {"date": "2018-04-25", "amount": 443236.75},
        {"date": "2018-04-26", "amount": 632380.82},
        {"date": "2018-04-27", "amount": 876156.3},
        {"date": "2018-04-30", "amount": 453665.85},
        {"date": "2018-05-01", "amount": 354589.4},
        {"date": "2018-05-02", "amount": 406774.85},
        {"date": "2018-05-03", "amount": 490167.7},
        {"date": "2018-05-04", "amount": 563171.4},
        {"date": "2018-05-07", "amount": 99076.45},
        {"date": "2018-05-08", "amount": 756109.75},
        {"date": "2018-05-09", "amount": 427760.1},
        {"date": "2018-05-10", "amount": 140792.85},
        {"date": "2018-05-11", "amount": 276371.15},
        {"date": "2018-05-14", "amount": 209083},
        {"date": "2018-05-15", "amount": 939122.35},
        {"date": "2018-05-16", "amount": 791127},
        {"date": "2018-05-17", "amount": 866596.3},
        {"date": "2018-05-18", "amount": 970333.25},
        {"date": "2018-05-21", "amount": 860400.75},
        {"date": "2018-05-22", "amount": 1314093.55},
        {"date": "2018-05-23", "amount": 1116033.7},
        {"date": "2018-05-24", "amount": 1032480.9},
        {"date": "2018-05-25", "amount": 1011703.95},
        {"date": "2018-05-28", "amount": 323302.1},
        {"date": "2018-05-29", "amount": 881258.95},
        {"date": "2018-05-30", "amount": 1647944.75},
        {"date": "2018-05-31", "amount": 714513.35},
        {"date": "2018-06-01", "amount": 573627.45},
        {"date": "2018-06-04", "amount": 1814730.3},
        {"date": "2018-06-05", "amount": 1354264.95},
        {"date": "2018-06-06", "amount": 525083.2},
        {"date": "2018-06-07", "amount": 736745.15},
        {"date": "2018-06-08", "amount": 411406.8},
        {"date": "2018-06-11", "amount": 263109},
        {"date": "2018-06-12", "amount": 813472.95},
        {"date": "2018-06-13", "amount": 330082.2},
        {"date": "2018-06-14", "amount": 1488028.7},
        {"date": "2018-06-15", "amount": 1057286.7},
        {"date": "2018-06-18", "amount": 894570.6},
        {"date": "2018-06-19", "amount": 712813.15},
        {"date": "2018-06-20", "amount": 430542},
        {"date": "2018-06-21", "amount": 1428100.44},
        {"date": "2018-06-22", "amount": 1196016.9},
        {"date": "2018-06-25", "amount": 1071711.1},
        {"date": "2018-06-26", "amount": 818064.62},
        {"date": "2018-06-27", "amount": 966327.6},
        {"date": "2018-06-28", "amount": 1033300.8},
        {"date": "2018-06-29", "amount": 899354.4},
        {"date": "2018-07-02", "amount": 1411221},
        {"date": "2018-07-03", "amount": 1215245.2},
        {"date": "2018-07-04", "amount": 1396869.6},
        {"date": "2018-07-05", "amount": 784543.2},
        {"date": "2018-07-06", "amount": 823453.5},
        {"date": "2018-07-09", "amount": 875475.38},
        {"date": "2018-07-10", "amount": 1226745.38},
        {"date": "2018-07-11", "amount": 775037.37},
        {"date": "2018-07-12", "amount": 770591.8},
        {"date": "2018-07-13", "amount": 1028517},
        {"date": "2018-07-16", "amount": 664066.15},
        {"date": "2018-07-17", "amount": 699034.75},
        {"date": "2018-07-18", "amount": 770231.75},
        {"date": "2018-07-19", "amount": 1066787.4},
        {"date": "2018-07-20", "amount": 755867.35},
        {"date": "2018-07-23", "amount": 741489},
        {"date": "2018-07-24", "amount": 698461.75},
        {"date": "2018-07-25", "amount": 334866},
        {"date": "2018-07-26", "amount": 1113817.9},
        {"date": "2018-07-27", "amount": 1783079.5},
        {"date": "2018-07-30", "amount": 1095262.67},
        {"date": "2018-07-31", "amount": 1240367.97},
        {"date": "2018-08-01", "amount": 1960058.36},
        {"date": "2018-08-02", "amount": 1625981.22},
        {"date": "2018-08-03", "amount": 840215},
        {"date": "2018-08-06", "amount": 1119846.95},
        {"date": "2018-08-07", "amount": 1232913.57},
        {"date": "2018-08-08", "amount": 1943673.65},
        {"date": "2018-08-09", "amount": 1022952.45},
        {"date": "2018-08-10", "amount": 802305.65},
        {"date": "2018-08-11", "amount": 48453.75},
        {"date": "2018-08-13", "amount": 812986.2},
        {"date": "2018-08-14", "amount": 1168313.7},
        {"date": "2018-08-15", "amount": 969101.95},
        {"date": "2018-08-16", "amount": 495305},
        {"date": "2018-08-17", "amount": 172280},
        {"date": "2018-08-20", "amount": 680148.2},
        {"date": "2018-08-21", "amount": 599712.5},
        {"date": "2018-08-22", "amount": 1284068.75},
        {"date": "2018-08-23", "amount": 473706.35},
        {"date": "2018-08-24", "amount": 591252.5},
        {"date": "2018-08-27", "amount": 238547.5},
        {"date": "2018-08-28", "amount": 507548.75},
        {"date": "2018-08-29", "amount": 613230.1},
        {"date": "2018-08-30", "amount": 282297.8},
        {"date": "2018-08-31", "amount": 1710771.57},
        {"date": "2018-09-03", "amount": 2752373.73},
        {"date": "2018-09-04", "amount": 1005136.65},
        {"date": "2018-09-05", "amount": 1484138.85},
        {"date": "2018-09-06", "amount": 1294609.95},
        {"date": "2018-09-07", "amount": 833082.65},
        {"date": "2018-09-10", "amount": 711778.9},
        {"date": "2018-09-11", "amount": 270750},
        {"date": "2018-09-12", "amount": 1836361.3},
        {"date": "2018-09-13", "amount": 761483.25},
        {"date": "2018-09-14", "amount": 820464.1},
        {"date": "2018-09-17", "amount": 910578},
        {"date": "2018-09-18", "amount": 926876.15},
        {"date": "2018-09-19", "amount": 449215.8},
        {"date": "2018-09-20", "amount": 1402398.4},
        {"date": "2018-09-21", "amount": 1831801.9},
        {"date": "2018-09-24", "amount": 1706759.11},
        {"date": "2018-09-25", "amount": 1001377.5},
        {"date": "2018-09-26", "amount": 1057680},
        {"date": "2018-09-27", "amount": 1793614.95},
        {"date": "2018-09-28", "amount": 118442.5},
        {"date": "2018-10-01", "amount": 959502.5},
        {"date": "2018-10-02", "amount": 210209.11},
        {"date": "2018-10-03", "amount": 839865},
        {"date": "2018-10-04", "amount": 376862.5},
        {"date": "2018-10-05", "amount": 211815},
        {"date": "2018-10-08", "amount": 1345308.22},
        {"date": "2018-10-09", "amount": 1880456.15},
        {"date": "2018-10-10", "amount": 1383663.7},
        {"date": "2018-10-11", "amount": 1906579.82},
        {"date": "2018-10-12", "amount": 181896.25},
        {"date": "2018-10-15", "amount": 1621382.2},
        {"date": "2018-10-16", "amount": 1148796.2},
        {"date": "2018-10-17", "amount": 27937.1},
        {"date": "2018-10-18", "amount": 190500},
        {"date": "2018-10-22", "amount": 47870.15},
        {"date": "2018-10-23", "amount": 491502.52},
        {"date": "2018-10-24", "amount": 1054131.15},
        {"date": "2018-10-25", "amount": 913484.4},
        {"date": "2018-10-26", "amount": 67312.65},
        {"date": "2018-10-29", "amount": 805906.6},
        {"date": "2018-10-30", "amount": 229862.45},
        {"date": "2018-10-31", "amount": 347733.05},
        {"date": "2018-11-01", "amount": 226973.05},
        {"date": "2018-11-02", "amount": 140210.2},
        {"date": "2018-11-05", "amount": 689659.53},
        {"date": "2018-11-06", "amount": 448145.75},
        {"date": "2018-11-07", "amount": 780622.15},
        {"date": "2018-11-08", "amount": 320866.85},
        {"date": "2018-11-09", "amount": 67312.65},
        {"date": "2018-11-12", "amount": 147838.7},
        {"date": "2018-11-13", "amount": 890982.32},
        {"date": "2018-11-14", "amount": 379852.2},
        {"date": "2018-11-15", "amount": 544436.65},
        {"date": "2018-11-19", "amount": 120543.15},
        {"date": "2018-11-20", "amount": 539471.95},
        {"date": "2018-11-21", "amount": 643933.8},
        {"date": "2018-11-22", "amount": 288740.15},
        {"date": "2018-11-26", "amount": 356684.1},
        {"date": "2018-11-27", "amount": 456334.47},
        {"date": "2018-11-28", "amount": 598580.2},
        {"date": "2018-11-29", "amount": 449926.2}
    ];
    let points = dataSet.length;
    const maxVal = d3.max(dataSet, (d) => d.amount);
    const minDate = d3.min(dataSet, (d) => new Date(d.date));
    const maxDate = d3.max(dataSet, (d) => new Date(d.date));
    // Add room for the last bar
    const maxDateBar = d3.max(dataSet, (d) => new Date(d.date)).setDate(maxDate.getDate() + 1);
    const width = 1024;
    const height = 300;
    const margin = 40;

    const svg = d3.select('#graph')
        .append('svg')
            .attr('width', width)
        .attr('height', height);

    var yScale = d3.scaleLinear()
        .domain([-1, maxVal]) // input
        .range([height - margin, margin]); // ouput (y is 0 at top)

    const xScale = d3.scaleTime()
        // Setup the scale for the bars first so we can calc the bar width
        .domain([minDate, maxDateBar]) // input
        .range([margin, width - (2 * margin)]); // output

    const dayOne = new Date(dataSet[0].date);
    let dayTwo = new Date(dataSet[0].date);
    dayTwo.setDate(dayTwo.getDate() + 1);
    const barWidth = xScale(dayTwo) - xScale(dayOne);

    svg.append('g')
            .attr('id', 'bar')
            .attr('display', 'none')
        .selectAll('rect')
            .data(dataSet)
                .enter()
                    .append('rect')
                    .attr('x', (d) => xScale(new Date(d.date)))
                    .attr('y', (d) => yScale(d.amount))
                    .attr('width', barWidth)
                    .attr('height', (d) => yScale(-1) - yScale(d.amount))
                    .attr('fill', 'green');

    // Reset the domain
    xScale.domain([minDate, maxDate]);

    const xAxis = svg.append('g')
        .attr('transform', `translate(0, ${height - margin})`)
        .call(d3.axisBottom().scale(xScale));

    svg.append('g')
        .attr('transform', `translate(${margin}, 0)`)
        .call(d3.axisLeft(yScale).tickFormat(d3.formatPrefix(".1", 1e6)));

    const areaPlot = d3.area()
        .curve(d3.curveMonotoneX)
        .x((d) => xScale(new Date(d.date)))
        .y0(yScale(0))
        .y1((d) => yScale(d.amount));

    svg.append('g')
        .attr('id', 'area')
        .append('path')
            .datum(dataSet)
            .attr('fill', 'blue')
            .attr('d', areaPlot);

    const linePlot = d3.line()
        .curve(d3.curveMonotoneX)
        .x((d) => xScale(new Date(d.date)))
        .y((d) => yScale(d.amount));

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
                    .attr('cx', (d) => xScale(new Date(d.date)))
                    .attr('cy', (d) => yScale(d.amount))
                    .attr('fill', 'red')
                    .attr('opacity', 0)
                    .on('mouseover', (d, i, a) => {
                        d3.select(a[i]).attr('opacity', '0.5');
                        info.text(`${formatDate(d.date)} - ${d3.format("($,.2f")(d.amount)}`);
                    })
                    .on('mouseout', (d, i, a) => {
                        d3.select(a[i]).attr('opacity', '0');
                        info.text('');
                    });


    d3.selectAll('[name=display]')
        .on('change', (data, index, array) => {
            array.forEach((input, arrayIndex) => {
                if (index === arrayIndex) {
                    d3.select(`#${input.value}`)
                        .attr('display', 'inline');

                    if (input.value === 'bar') {
                        xScale.domain([minDate, maxDateBar]);
                    } else {
                        xScale.domain([minDate, maxDate]);
                    }
                    xAxis.call(d3.axisBottom().scale(xScale));
                } else {
                    d3.select(`#${input.value}`)
                        .attr('display', 'none');
                }
            });
        }, false)
}, false);

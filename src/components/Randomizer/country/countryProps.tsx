interface CountryInfo {
  code: number,
  tw: string,
  en: string,
  locale: string,
  zh: string,
  lat: number,
  lng: number,
  emoji: string
}

type CountryMap = {
  [key: string]: CountryInfo;
};

const countryMap : CountryMap= {
    "1":
    {
      "code": 597,
      "tw": "蘇里南",
      "en": "Suriname",
      "locale": "SR",
      "zh": "苏里南",
      "lat": 4.7710247,
      "lng": -55.0493375,
      "emoji": "🇸🇷"
    },
  

    "2": {
      "code": 244,
      "tw": "安哥拉",
      "en": "Angola",
      "locale": "AO",
      "zh": "安哥拉",
      "lat": -9.3005898,
      "lng": 14.9134098,
      "emoji": "🇦🇴"
    },


  "3"	: {
    "code": 93,
    "tw": "阿富汗",
    "en": "Afghanistan",
    "locale": "AF",
    "zh": "阿富汗",
    "lat": 34.352865,
    "lng": 62.20402869999999,
    "emoji": "🇦🇫"
  },
  "4"	:{
    "code": 355,
    "tw": "阿爾巴尼亞",
    "en": "Albania",
    "locale": "AL",
    "zh": "阿尔巴尼亚",
    "lat": 41.11023,
    "lng": 20.0866554,
    "emoji": "🇦🇱"
  },
  "5"	:{
    "code": 213,
    "tw": "阿爾及利亞",
    "en": "Algeria",
    "locale": "DZ",
    "zh": "阿尔及利亚",
    "lat": 27.9716342,
    "lng": -0.1869644,
    "emoji": "🇩🇿"
  },
  "6"	:{
    "code": 54,
    "tw": "阿根廷",
    "en": "Argentina",
    "locale": "AR",
    "zh": "阿根廷",
    "lat": -31.7413197,
    "lng": -60.51154709999999,
    "emoji": "🇦🇷"
  },

  "7"	:{
    "code": 374,
    "tw": "亞美尼亞",
    "en": "Armenia",
    "locale": "AM",
    "zh": "亚美尼亚",
    "lat": 44.9873603,
    "lng": 41.1111326,
    "emoji": "🇦🇲"
  },
  "8"	:{
    "code": 61,
    "tw": "澳大利亞",
    "en": "Australia",
    "locale": "AU",
    "zh": "澳大利亚",
    "lat": -40.3523065,
    "lng": 175.6082145,
    "emoji": "🇦🇺"
  },

  "9"	:{
    "code": 43,
    "tw": "奧地利",
    "en": "Austria",
    "locale": "AT",
    "zh": "奥地利",
    "lat": 47.15371649999999,
    "lng": 16.2688797,
    "emoji": "🇦🇹"
  },

  "10"	:{
    "code": 994,
    "tw": "阿塞拜疆",
    "en": "Azerbaijan",
    "locale": "AZ",
    "zh": "阿塞拜疆",
    "lat": 40.3629693,
    "lng": 49.2736815,
    "emoji": "🇦🇿"
  },

  "11"	:{
    "code": 973,
    "tw": "巴林",
    "en": "Bahrain",
    "locale": "BH",
    "zh": "巴林",
    "lat": 26.2650742,
    "lng": 50.6223267,
    "emoji": "🇧🇭"
  },

  "12"	:{
    "code": 375,
    "tw": "白俄羅斯",
    "en": "Belarus",
    "locale": "BY",
    "zh": "白俄罗斯",
    "lat": 52.09762139999999,
    "lng": 23.7340503,
    "emoji": "🇧🇾"
  },
  "13"	:{
    "code": 32,
    "tw": "比利時",
    "en": "Belgium",
    "locale": "BE",
    "zh": "比利时",
    "lat": 50.5257076,
    "lng": 4.062101699999999,
    "emoji": "🇧🇪"
  },

  "14"	:{
    "code": 501,
    "tw": "伯利茲",
    "en": "Belize",
    "locale": "BZ",
    "zh": "伯利兹",
    "lat": 17.189877,
    "lng": -88.49765,
    "emoji": "🇧🇿"
  },

  "15"	:{
    "code": 229,
    "tw": "貝寧",
    "en": "Benin",
    "locale": "BJ",
    "zh": "贝宁",
    "lat": 10.9681093,
    "lng": 2.7779813,
    "emoji": "🇧🇯"
  },

  "16"	:{
    "code": 591,
    "tw": "玻利維亞",
    "en": "Bolivia",
    "locale": "BO",
    "zh": "玻利维亚",
    "lat": -16.5108547,
    "lng": -68.1858061,
    "emoji": "🇧🇴"
  },
  "17"	:
  {
    "code": 55,
    "tw": "巴西",
    "en": "Brazil",
    "locale": "BR",
    "zh": "巴西",
    "lat": 39.488691,
    "lng": 16.3828566,
    "emoji": "🇧🇷"
  },
  "18"	:{
    "code": 359,
    "tw": "保加利亞",
    "en": "Bulgaria",
    "locale": "BG",
    "zh": "保加利亚",
    "lat": 42.50479259999999,
    "lng": 27.4626361,
    "emoji": "🇧🇬"
  },
  "19"	:
  {
    "code": 226,
    "tw": "布基納法索",
    "en": "Burkina-faso",
    "locale": "BF",
    "zh": "布基纳法索",
    "lat": 46.6860182,
    "lng": 6.565371799999999,
    "emoji": "🇧🇫"
  },
  "20"	:
  {
    "code": 95,
    "tw": "緬甸",
    "en": "Burma",
    "locale": "MM",
    "zh": "缅甸",
    "lat": 12.4706876,
    "lng": 99.0128926,
    "emoji": "🇲🇲"
  },
  "21"	:
  {
    "code": 257,
    "tw": "布隆迪",
    "en": "Burundi",
    "locale": "BI",
    "zh": "布隆迪",
    "lat": -3.1572403,
    "lng": 29.3714909,
    "emoji": "🇧🇮"
  },
  "22"	:{
    "code": 237,
    "tw": "喀麥隆",
    "en": "Cameroon",
    "locale": "CM",
    "zh": "喀麦隆",
    "lat": 6.9181954,
    "lng": 12.8054753,
    "emoji": "🇨🇲"
  },
  "23"	:
  {
    "code": 1,
    "tw": "加拿大",
    "en": "Canada",
    "locale": "CA",
    "zh": "加拿大",
    "lat": 49.0504377,
    "lng": -122.3044697,
    "emoji": "🇨🇦"
  },
  "24"	:
  {
    "code": 236,
    "tw": "中非共和國",
    "en": "Central African Republic",
    "locale": "CF",
    "zh": "中非共和国",
    "lat": 6.4850984,
    "lng": 16.1580937,
    "emoji": "🇨🇫"
  },
  "25"	:
  {
    "code": 56,
    "tw": "智利",
    "en": "Chile",
    "locale": "CL",
    "zh": "智利",
    "lat": 32.715738,
    "lng": -117.1610838,
    "emoji": "🇨🇱"
  },
  "26"	:
  {
    "code": 57,
    "tw": "哥倫比亞",
    "en": "Colombia",
    "locale": "CO",
    "zh": "哥伦比亚",
    "lat": 7.076172,
    "lng": -70.71045699999999,
    "emoji": "🇨🇴"
  },
  "27"	:{
    "code": 506,
    "tw": "哥斯達黎加",
    "en": "Costa Rica",
    "locale": "CR",
    "zh": "哥斯达黎加",
    "lat": 10.0159394,
    "lng": -84.21417009999999,
    "emoji": "🇨🇷"
  },

  "28"	:{
    "code": 53,
    "tw": "古巴",
    "en": "Cuba",
    "locale": "CU",
    "zh": "古巴",
    "lat": 22.4133651,
    "lng": -83.6880257,
    "emoji": "🇨🇺"
  },
  "29"	:
  {
    "code": 357,
    "tw": "塞浦路斯",
    "en": "Cyprus",
    "locale": "CY",
    "zh": "塞浦路斯",
    "lat": 35.1855659,
    "lng": 33.38227639999999,
    "emoji": "🇨🇾"
  },
  "30"	:
  {
    "code": 45,
    "tw": "丹麥",
    "en": "Denmark",
    "locale": "DK",
    "zh": "丹麦",
    "lat": 56.162939,
    "lng": 10.203921,
    "emoji": "🇩🇰"
  },
  "31"	:
  {
    "code": 253,
    "tw": "吉布堤",
    "en": "Djibouti",
    "locale": "DJ",
    "zh": "吉布提",
    "lat": 30.6748041,
    "lng": 104.0820466,
    "emoji": "🇩🇯"
  },
  "32"	:
  {
    "code": 593,
    "tw": "厄瓜多爾",
    "en": "Ecuador",
    "locale": "EC",
    "zh": "厄瓜多尔",
    "lat": -2.8943068,
    "lng": -78.9968344,
    "emoji": "🇪🇨"
  },

  "33"	:{
    "code": 20,
    "tw": "埃及",
    "en": "Egypt",
    "locale": "EG",
    "zh": "埃及",
    "lat": 24.088938,
    "lng": 32.8998293,
    "emoji": "🇪🇬"
  },
  "34"	:
  {
    "code": 503,
    "tw": "薩爾瓦多",
    "en": "EI Salvador",
    "locale": "SV",
    "zh": "萨尔瓦多",
    "lat": 13.8086742,
    "lng": -89.1801225,
    "emoji": "🇸🇻"
  },

  "35"	:{
    "code": 372,
    "tw": "愛沙尼亞",
    "en": "Estonia",
    "locale": "EE",
    "zh": "爱沙尼亚",
    "lat": 59.33342390000001,
    "lng": 25.2466973,
    "emoji": "🇪🇪"
  },
  "36"	:
  {
    "code": 251,
    "tw": "埃塞俄比亞",
    "en": "Ethiopia",
    "locale": "ET",
    "zh": "埃塞俄比亚",
    "lat": 11.7559388,
    "lng": 40.958688,
    "emoji": "🇪🇹"
  },
  "37"	:
  {
    "code": 358,
    "tw": "芬蘭",
    "en": "Finland",
    "locale": "FI",
    "zh": "芬兰",
    "lat": 60.2054911,
    "lng": 24.6559001,
    "emoji": "🇫🇮"
  },
  "38"	:
  {
    "code": 33,
    "tw": "法國",
    "en": "France",
    "locale": "FR",
    "zh": "法国",
    "lat": 43.676647,
    "lng": 4.6277769,
    "emoji": "🇫🇷"
  },
  "39"	:
  {
    "code": 241,
    "tw": "加蓬",
    "en": "Gabon",
    "locale": "GA",
    "zh": "加蓬",
    "lat": -0.8844093,
    "lng": 12.4380581,
    "emoji": "🇬🇦"
  },
  "40"	:
  {
    "code": 49,
    "tw": "德國",
    "en": "Germany",
    "locale": "DE",
    "zh": "德国",
    "lat": 51.4073375,
    "lng": 8.052771,
    "emoji": "🇩🇪"
  },
  "41"	:
  {
    "code": 233,
    "tw": "加納",
    "en": "Ghana",
    "locale": "GH",
    "zh": "加纳",
    "lat": 6.7470436,
    "lng": -1.5208624,
    "emoji": "🇬🇭"
  },
  "42"	:
  {
    "code": 30,
    "tw": "希臘",
    "en": "Greece",
    "locale": "GR",
    "zh": "希腊",
    "lat": 35.5138298,
    "lng": 24.0180367,
    "emoji": "🇬🇷"
  },
  "43"	:
  {
    "code": 502,
    "tw": "危地馬拉",
    "en": "Guatemala",
    "locale": "GT",
    "zh": "危地马拉",
    "lat": 38.440429,
    "lng": -122.7140548,
    "emoji": "🇬🇹"
  },
  "44"	:
  {
    "code": 224,
    "tw": "幾內亞",
    "en": "Guinea",
    "locale": "GN",
    "zh": "几内亚",
    "lat": 7.954114400000001,
    "lng": -8.748116699999999,
    "emoji": "🇬🇳"
  },
  "45"	:
  {
    "code": 592,
    "tw": "圭亞那",
    "en": "Guyana",
    "locale": "GY",
    "zh": "圭亚那",
    "lat": 6.5720132,
    "lng": -58.4629997,
    "emoji": "🇬🇾"
  },
  "46"	:
  {
    "code": 504,
    "tw": "洪都拉斯",
    "en": "Honduras",
    "locale": "HN",
    "zh": "洪都拉斯",
    "lat": -34.77937910000001,
    "lng": -55.7596225,
    "emoji": "🇭🇳"
  },
  "47"	:
  {
    "code": 36,
    "tw": "匈牙利",
    "en": "Hungary",
    "locale": "HU",
    "zh": "匈牙利",
    "lat": 47.2555579,
    "lng": 20.5232456,
    "emoji": "🇭🇺"
  },
  "48"	:
  {
    "code": 91,
    "tw": "印度",
    "en": "India",
    "locale": "IN",
    "zh": "印度",
    "lat": 12.9715987,
    "lng": 77.5945627,
    "emoji": "🇮🇳"
  },
  "49"	:
  {
    "code": 62,
    "tw": "印度尼西亞",
    "en": "Indonesia",
    "locale": "ID",
    "zh": "印度尼西亚",
    "lat": -3.3194374,
    "lng": 103.914399,
    "emoji": "🇮🇩"
  },
  "50"	:
  {
    "code": 353,
    "tw": "愛爾蘭",
    "en": "Ireland",
    "locale": "IE",
    "zh": "爱尔兰",
    "lat": 53.2356871,
    "lng": -7.7122229,
    "emoji": "🇮🇪"
  },
  "51"	:
  {
    "code": 972,
    "tw": "以色列",
    "en": "Israel",
    "locale": "IL",
    "zh": "以色列",
    "lat": 31.804381,
    "lng": 34.655314,
    "emoji": "🇮🇱"
  },
  "52"	:
  {
    "code": 39,
    "tw": "意大利",
    "en": "Italy",
    "locale": "IT",
    "zh": "意大利",
    "lat": 44.90075119999999,
    "lng": 8.2064257,
    "emoji": "🇮🇹"
  },
  "53"	:
  {
    "code": 225,
    "tw": "科特迪瓦",
    "en": "Ivory Coast",
    "locale": "CI",
    "zh": "科特迪瓦",
    "lat": 6.223217500000001,
    "lng": -3.9062688,
    "emoji": "🇨🇮"
  },
  "54"	:
  {
    "code": 1876,
    "tw": "牙買加",
    "en": "Jamaica",
    "locale": "JM",
    "zh": "牙买加",
    "lat": 52.3758916,
    "lng": 9.732010400000002,
    "emoji": "🇯🇲"
  },
  "55"	:
  {
    "code": 81,
    "tw": "日本",
    "en": "Japan",
    "locale": "JP",
    "zh": "日本",
    "lat": 39.7036194,
    "lng": 141.1526839,
    "emoji": "🇯🇵"
  },
  "56"	:
  {
    "code": 962,
    "tw": "約旦",
    "en": "Jordan",
    "locale": "JO",
    "zh": "约旦",
    "lat": 29.5320522,
    "lng": 35.0063209,
    "emoji": "🇯🇴"
  },
  "57"	:
  {
    "code": 855,
    "tw": "柬埔寨",
    "en": "Kampuchea (Cambodia )",
    "locale": "KH",
    "zh": "柬埔寨",
    "lat": 14.1717195,
    "lng": 103.6362715,
    "emoji": "🇰🇭"
  },
  "58"	:
  {
    "code": 327,
    "tw": "哈薩克",
    "en": "Kazakstan",
    "locale": "KZ",
    "zh": "哈萨克斯坦",
    "lat": 51.916532,
    "lng": 69.4110493,
    "emoji": "🇰🇿"
  },
  "59"	:
  {
    "code": 254,
    "tw": "肯雅",
    "en": "Kenya",
    "locale": "KE",
    "zh": "肯尼亚",
    "lat": 0.6320551,
    "lng": 36.0567202,
    "emoji": "🇰🇪"
  },
  "60"	:
  {
    "code": 82,
    "tw": "韓國",
    "en": "Korea",
    "locale": "KR",
    "zh": "韩国",
    "lat": 35.7746388,
    "lng": 128.4317137,
    "emoji": "🇰🇷"
  },
  "61"	:
  {
    "code": 856,
    "tw": "寮國",
    "en": "Laos",
    "locale": "LA",
    "zh": "老挝",
    "lat": 14.8193696,
    "lng": 106.8207875,
    "emoji": "🇱🇦"
  },
  "62"	:
  {
    "code": 371,
    "tw": "拉脫維亞",
    "en": "Latvia",
    "locale": "LV",
    "zh": "拉脱维亚",
    "lat": 57.42078780000001,
    "lng": 27.0513491,
    "emoji": "🇱🇻"
  },
  "63"	:
  {
    "code": 961,
    "tw": "黎巴嫩",
    "en": "Lebanon",
    "locale": "LB",
    "zh": "黎巴嫩",
    "lat": 9.3407352,
    "lng": 34.536223,
    "emoji": "🇱🇧"
  },
  "64"	:
  {
    "code": 266,
    "tw": "萊索托",
    "en": "Lesotho",
    "locale": "LS",
    "zh": "莱索托",
    "lat": 37.568694,
    "lng": -84.2963223,
    "emoji": "🇱🇸"
  },
  "65"	:
  {
    "code": 231,
    "tw": "利比里亞",
    "en": "Liberia",
    "locale": "LR",
    "zh": "利比里亚",
    "lat": 7.495263700000001,
    "lng": -10.0807298,
    "emoji": "🇱🇷"
  },
  "66"	:
  {
    "code": 370,
    "tw": "立陶宛",
    "en": "Lithuania",
    "locale": "LT",
    "zh": "立陶宛",
    "lat": 54.3962938,
    "lng": 24.045876,
    "emoji": "🇱🇹"
  },
  "67"	:
  {
    "code": 352,
    "tw": "盧森堡",
    "en": "Luxembourg",
    "locale": "LU",
    "zh": "卢森堡",
    "lat": 49.8671784,
    "lng": 6.159563299999999,
    "emoji": "🇱🇺"
  },
  "68"	:
  {
    "code": 261,
    "tw": "馬達加斯加",
    "en": "Madagascar",
    "locale": "MG",
    "zh": "马达加斯加",
    "lat": -13.771539,
    "lng": 49.5279996,
    "emoji": "🇲🇬"
  },
  "69"	:
  {
    "code": 265,
    "tw": "馬拉維",
    "en": "Malawi",
    "locale": "MW",
    "zh": "马拉维",
    "lat": 32.8972246,
    "lng": 35.3027226,
    "emoji": "🇲🇼"
  },
  "70"	:
  {
    "code": 60,
    "tw": "馬來西亞",
    "en": "Malaysia",
    "locale": "MY",
    "zh": "马来西亚",
    "lat": 21.481291,
    "lng": 109.120161,
    "emoji": "🇲🇾"
  },
  "71"	:
  {
    "code": 960,
    "tw": "馬爾代夫",
    "en": "Maldives",
    "locale": "MV",
    "zh": "马尔代夫",
    "lat": 25.0691004,
    "lng": 121.6152989,
    "emoji": "🇲🇻"
  },
  "72"	:
  {
    "code": 223,
    "tw": "馬里",
    "en": "Mali",
    "locale": "ML",
    "zh": "马里",
    "lat": 18.4520713,
    "lng": 1.4096535,
    "emoji": "🇲🇱"
  },
  "73"	:
  {
    "code": 52,
    "tw": "墨西哥",
    "en": "Mexico",
    "locale": "MX",
    "zh": "墨西哥",
    "lat": 42.5987263,
    "lng": -5.5670959,
    "emoji": "🇲🇽"
  },
  "74"	:
  {
    "code": 976,
    "tw": "蒙古",
    "en": "Mongolia",
    "locale": "MN",
    "zh": "蒙古",
    "lat": 45.5822786,
    "lng": 106.7644209,
    "emoji": "🇲🇳"
  },
  "75"	:
  {
    "code": 264,
    "tw": "納米比亞",
    "en": "Namibia",
    "locale": "NA",
    "zh": "纳米比亚",
    "lat": -17.5979291,
    "lng": 16.8178377,
    "emoji": "🇳🇦"
  },
  "76"	:
  {
    "code": 31,
    "tw": "荷蘭",
    "en": "Netherlands",
    "locale": "NL",
    "zh": "荷兰",
    "lat": 52.3507849,
    "lng": 5.2647016,
    "emoji": "🇳🇱"
  },
  "77"	:
  {
    "code": 64,
    "tw": "新西蘭",
    "en": "New Zealand",
    "locale": "NZ",
    "zh": "新西兰",
    "lat": -36.8484597,
    "lng": 174.7633315,
    "emoji": "🇳🇿"
  },
  "78"	:
  {
    "code": 505,
    "tw": "尼加拉瓜",
    "en": "Nicaragua",
    "locale": "NI",
    "zh": "尼加拉瓜",
    "lat": 42.5987263,
    "lng": -5.5670959,
    "emoji": "🇳🇮"
  },
  "79"	:
  {
    "code": 227,
    "tw": "尼日爾",
    "en": "Niger",
    "locale": "NE",
    "zh": "尼日尔",
    "lat": 16.9741689,
    "lng": 7.986535,
    "emoji": "🇳🇪"
  },
  "80"	:
  {
    "code": 850,
    "tw": "朝鮮",
    "en": "North Korea",
    "locale": "KP",
    "zh": "朝鲜",
    "lat": 34.606756,
    "lng": 119.19371,
    "emoji": "🇰🇵"
  },
  "81"	:
  {
    "code": 47,
    "tw": "挪威",
    "en": "Norway",
    "locale": "NO",
    "zh": "挪威",
    "lat": 69.81782419999999,
    "lng": 18.7819365,
    "emoji": "🇳🇴"
  },
  "82"	:
  {
    "code": 968,
    "tw": "阿曼",
    "en": "Oman",
    "locale": "OM",
    "zh": "阿曼",
    "lat": 23.5880462,
    "lng": 58.3828798,
    "emoji": "🇴🇲"
  },
  "83"	:
  {
    "code": 92,
    "tw": "巴基斯坦",
    "en": "Pakistan",
    "locale": "PK",
    "zh": "巴基斯坦",
    "lat": 34.0149748,
    "lng": 71.5804899,
    "emoji": "🇵🇰"
  },
  "84"	:
  {
    "code": 675,
    "tw": "巴布亞新畿內亞",
    "en": "Papua New Cuinea",
    "locale": "PG",
    "zh": "巴布亚新几内亚",
    "lat": -6.375391899999999,
    "lng": 155.3807101,
    "emoji": "🇵🇬"
  },
  "85"	:
  {
    "code": 595,
    "tw": "巴拉圭",
    "en": "Paraguay",
    "locale": "PY",
    "zh": "巴拉圭",
    "lat": -23.1083066,
    "lng": -55.22566699999999,
    "emoji": "🇵🇾"
  },
  "86"	:
  {
    "code": 63,
    "tw": "菲律賓",
    "en": "Philippines",
    "locale": "PH",
    "zh": "菲律宾",
    "lat": 7.190708,
    "lng": 125.455341,
    "emoji": "🇵🇭"
  },
  "87"	:
  {
    "code": 48,
    "tw": "波蘭",
    "en": "Poland",
    "locale": "PL",
    "zh": "波兰",
    "lat": 54.1560613,
    "lng": 19.4044897,
    "emoji": "🇵🇱"
  },
  "88"	:
  {
    "code": 351,
    "tw": "葡萄牙",
    "en": "Portugal",
    "locale": "PT",
    "zh": "葡萄牙",
    "lat": 41.1579438,
    "lng": -8.629105299999999,
    "emoji": "🇵🇹"
  },
  "89"	:
  {
    "code": 974,
    "tw": "卡塔爾",
    "en": "Qatar",
    "locale": "QA",
    "zh": "卡塔尔",
    "lat": 25.2854473,
    "lng": 51.53103979999999,
    "emoji": "🇶🇦"
  },
  "90"	:
  {
    "code": 40,
    "tw": "羅馬尼亞",
    "en": "Romania",
    "locale": "RO",
    "zh": "罗马尼亚",
    "lat": 46.0823371,
    "lng": 23.5690265,
    "emoji": "🇷🇴"
  },
  "91"	:
  {
    "code": 7,
    "tw": "俄羅斯",
    "en": "Russia",
    "locale": "RU",
    "zh": "俄罗斯",
    "lat": 53.7175644,
    "lng": 91.4293172,
    "emoji": "🇷🇺"
  },
  "92"	:
  {
    "code": 221,
    "tw": "塞內加爾",
    "en": "Senegal",
    "locale": "SN",
    "zh": "塞内加尔",
    "lat": 46.0036778,
    "lng": 8.951051999999999,
    "emoji": "🇸🇳"
  },
  "93"	:
  {
    "code": 27,
    "tw": "南非",
    "en": "South Africa",
    "locale": "ZA",
    "zh": "南非",
    "lat": 51.4987962,
    "lng": 3.610998,
    "emoji": "🇿🇦"
  },
  "94"	:
  {
    "code": 34,
    "tw": "西班牙",
    "en": "Spain",
    "locale": "ES",
    "zh": "西班牙",
    "lat": 37.8881751,
    "lng": -4.7793835,
    "emoji": "🇪🇸"
  },
  "95"	:
  {
    "code": 94,
    "tw": "斯裡蘭卡",
    "en": "Sri Lanka",
    "locale": "LK",
    "zh": "斯里兰卡",
    "lat": 7.0873101,
    "lng": 80.01436559999999,
    "emoji": "🇱🇰"
  },
  "96"	:
  {
    "code": 249,
    "tw": "蘇丹",
    "en": "Sudan",
    "locale": "SD",
    "zh": "苏丹",
    "lat": 14.3782747,
    "lng": 24.9042208,
    "emoji": "🇸🇩"
  },
  "97"	:
  {
    "code": 86,
    "tw": "中國",
    "en": "China",
    "locale": "CN",
    "zh": "中国",
    "lat": 35.86166,
    "lng": 104.195397,
    "emoji": "🇨🇳"
  },

  "98"	:
  {
    "code": 46,
    "tw": "瑞典",
    "en": "Sweden",
    "locale": "SE",
    "zh": "瑞典",
    "lat": 66.8309216,
    "lng": 20.3991966,
    "emoji": "🇸🇪"
  },
  "99"	:
  {
    "code": 41,
    "tw": "瑞士",
    "en": "Switzerland",
    "locale": "CH",
    "zh": "瑞士",
    "lat": 47.366481,
    "lng": 9.3000916,
    "emoji": "🇨🇭"
  },
  "100"	:
  {
    "code": 255,
    "tw": "坦桑尼亞",
    "en": "Tanzania",
    "locale": "TZ",
    "zh": "坦桑尼亚",
    "lat": 39.00366,
    "lng": 117.710496,
    "emoji": "🇹🇿"
  },
  "101"	:
  {
    "code": 66,
    "tw": "泰國",
    "en": "Thailand",
    "locale": "TH",
    "zh": "泰国",
    "lat": 14.5896054,
    "lng": 100.455052,
    "emoji": "🇹🇭"
  },
  "102"	:
  {
    "code": 228,
    "tw": "多哥",
    "en": "Togo",
    "locale": "TG",
    "zh": "多哥",
    "lat": -7.323771400000001,
    "lng": 38.8205454,
    "emoji": "🇹🇬"
  },
  "103"	:
  {
    "code": 216,
    "tw": "突尼斯",
    "en": "Tunisia",
    "locale": "TN",
    "zh": "突尼斯",
    "lat": 36.7333193,
    "lng": 9.1843676,
    "emoji": "🇹🇳"
  },
  "104"	:
  {
    "code": 90,
    "tw": "土耳其",
    "en": "Turkey",
    "locale": "TR",
    "zh": "土耳其",
    "lat": 39.746797,
    "lng": 39.491124,
    "emoji": "🇹🇷"
  },
  "105"	:
  {
    "code": 993,
    "tw": "土庫曼",
    "en": "Turkmenistan",
    "locale": "TM",
    "zh": "土库曼斯坦",
    "lat": 38.4894305,
    "lng": 47.0683575,
    "emoji": "🇹🇲"
  },
  "106"	:
  {
    "code": 256,
    "tw": "烏幹達",
    "en": "Uganda",
    "locale": "UG",
    "zh": "乌干达",
    "lat": 0.707531,
    "lng": 30.0636349,
    "emoji": "🇺🇬"
  },
  "107"	:
  {
    "code": 380,
    "tw": "烏克蘭",
    "en": "Ukraine",
    "locale": "UA",
    "zh": "乌克兰",
    "lat": 50.4501,
    "lng": 30.5234,
    "emoji": "🇺🇦"
  },
  "108"	:
  {
    "code": 971,
    "tw": "阿拉伯聯合酋長國",
    "en": "United Arab Emirates",
    "locale": "AE",
    "zh": "阿拉伯联合酋长国",
    "lat": 24.453884,
    "lng": 54.3773438,
    "emoji": "🇦🇪"
  },
  "109"	:
  {
    "code": 44,
    "tw": "英國",
    "en": "United Kiongdom",
    "locale": "GB",
    "zh": "英国",
    "lat": 52.406822,
    "lng": -1.519693,
    "emoji": "🇬🇧"
  },
  "110"	:{
    "code": 1,
    "tw": "美國",
    "en": "United States of America",
    "locale": "US",
    "zh": "美国",
    "lat": 64.8377778,
    "lng": -147.7163889,
    "emoji": "🇺🇸"
  },
  "111"	:
  {
    "code": 598,
    "tw": "烏拉圭",
    "en": "Uruguay",
    "locale": "UY",
    "zh": "乌拉圭",
    "lat": 37.3382082,
    "lng": -121.8863286,
    "emoji": "🇺🇾"
  },
  "112"	:
  {
    "code": 998,
    "tw": "烏茲別克",
    "en": "Uzbekistan",
    "locale": "UZ",
    "zh": "乌兹别克斯坦",
    "lat": 39.7680827,
    "lng": 64.4555769,
    "emoji": "🇺🇿"
  },
  "113"	:
  {
    "code": 58,
    "tw": "委內瑞拉",
    "en": "Venezuela",
    "locale": "VE",
    "zh": "委内瑞拉",
    "lat": 10.2313205,
    "lng": -67.2847875,
    "emoji": "🇻🇪"
  },
  "114"	:
  {
    "code": 84,
    "tw": "越南",
    "en": "Vietnam",
    "locale": "VN",
    "zh": "越南",
    "lat": 20.8449115,
    "lng": 106.6880841,
    "emoji": "🇻🇳"
  },
  "115"	:
  {
    "code": 967,
    "tw": "也門",
    "en": "Yemen",
    "locale": "YE",
    "zh": "也门",
    "lat": 15.3694451,
    "lng": 44.1910066,
    "emoji": "🇾🇪"
  },
  "116"	:
  {
    "code": 263,
    "tw": "津巴布韋",
    "en": "Zimbabwe",
    "locale": "ZW",
    "zh": "津巴布韦",
    "lat": -18.5331566,
    "lng": 27.5495846,
    "emoji": "🇿🇼"
  },
  "117"	:
  {
    "code": 260,
    "tw": "贊比亞",
    "en": "Zambia",
    "locale": "ZM",
    "zh": "赞比亚",
    "lat": -11.564831,
    "lng": 29.0459927,
    "emoji": "🇿🇲"
  }

};


export default countryMap;
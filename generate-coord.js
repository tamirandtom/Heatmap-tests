var NodeGeocoder = require('node-geocoder');

var options = {
 provider: 'google',

 // Optional depending on the providers
 httpAdapter: 'https', // Default
 apiKey: ' ', // for Mapquest, OpenCage, Google Premier
 formatter: null // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);
// Using callback

 let addressarr = [
  " שד שאול המלך 39 ",
  " אבן גבירול 123 ",
  " אבן גבירול 108 ",
  " דיזנגוף 193 ",
  " בבלי 27 ",
  " דיזנגוף סנטר ",
  " גורדון י ל 42 ",
  " דיזנגוף 159 ",
  " המלך ג'ורג' 27 ",
  " אבן גבירול 68 ",
  " ז'בוטינסקי 108 ",
  " ויצמן 22 ",
  " אבן גבירול 160 ",
  " שד שאול המלך 2 ",
  " יהודה המכבי 56 ",
  " רלוזורוב 45 ",
  " הפטמן 3 ",
  " אבן גבירול 156 ",
  " בן יהודה 194 ",
  " בן יהודה 92 ",
  " בן יהודה 82 ",
  " אלנבי 76 ",
  " בן יהודה 66 ",
  " בן עמי 16 ",
  " דיזנגוף 101 ",
  " שד נורדאו 34 ",
  " ויצמן 36 ",
  " אלנבי 56 ",
  " החשמונאים 92 ",
  " דרך בגין 114 ",
  " בן אביגדור 4 ",
  " דרך בגין 74 ",
  " קרליבך 14 ",
  " המלך ג'ורג' 33 ",
  " אלנבי 60 ",
  " בן יהודה 25 ",
  " ככר יצחק רבין 8 ",
  " דרך שלמה 44 ",
  " בזל 44 ",
  " פראנקל 55 ",
  " יפת 121 ",
  " ישראל מסלנט 15 ",
  " ארלוזורוב 300 ",
  " דרך ההגנה 60 ",
  " דרך בר-לב חיים 100 ",
  " אצל 52 ",
  " דרך ההגנה 80 ",
  " נגבה 36 ",
  " אצל 28 ",
  " דרך דיין משה 5 ",
  " דרך ההגנה 61 ",
  " לה גארדיה 21 ",
  " לה גארדיה 76 ",
  " אלון יגאל 121 ",
  " עמק ברכה 23 ",
  " עפילי אגוז 57 ",
  " שד החיל 12 ",
  " קרמניצקי 7 ",
  " דרך השלום 101 ",
  " אצל 51 ",
  " אלון יגאל 153 ",
  " אשרמן יוסף 1 ",
  " מסילת ישרים 55 ",
  " לוינסקי 117 ",
  " אלנבי 47 ",
  " אלון יגאל 1 ",
  " יגיע כפיים 3 ",
  " מחל 79 ",
  " פנקס פינת ליפסקי ",
  " דרך בן צבי 54 ",
  " נחלת בנימין 68 ",
  " דרך שלמה 100 ",
  " המלך ג'ורג' 65 ",
  " אבן גבירול 77 ",
  " ויצמן 14 ",
  " אבן גבירול 30 ",
  " לסקוב חיים 4 ",
  " שד ירושלים 125 ",
  " אילת 31 ",
  " הפלמח 32 ",
  " אברבנאל 41 ",
  " יהודה המכבי 1 ",
  " דרך דיין משה 64 ",
  " לוינסקי 77 ",
  " מקוה ישראל 8 ",
  " ירמיהו 39 ",
  " אינשטיין 40 ",
  " יהודה הנשיא 34 ",
  " טאגור רבינדרנארט 32 ",
  " בית אל 12 ",
  " ברודצקי 34 ",
  " הדר יוסף 12 ",
  " אש שלום 9 ",
  " אחימאיר אבא 21 ",
  " טאגור רבינדרנארט 38 ",
  " אחימאיר אבא 28 ",
  " ברודצקי 15 ",
  " בן יוסף שלמה 20 ",
  " קהילת ורשה 73 ",
  " ברודצקי 43 ",
  " רוזן פנחס 72 ",
  " אורי צבי גרינברג 25 ",
  " רובינא חנה 30 ",
  " הדר יוסף 20 ",
  " הברזל 24 ",
  " לחי 14 ",
  " אלון יגאל 51 ",
  " הברזל 2 ",
  " יפת 246 ",
  " בוגרשוב 26 ",
  " עולי ציון 26 ",
  " דרך השלום 71 ",
  " נחלת יצחק 18 ",
  " אלנבי 128 ",
  " ניסים אלוני 10 ",
  " בן יהודה 72 ",
  " לוינסקי 43 ",
  " מסילת ישרים 1 ",
  " דרך דיין משה 133 ",
  " וולפסון 61 ",
  " בושם 45 ",
  " הכרמל 14 ",
  " שד ההשכלה 17 ",
  " בן יהודה 248 ",
  " הרצל 131 ",
  " אשרמן יוסף 32 ",
  " אצל 69 ",
  " לוינסקי 108 ",
  " שיינקין 17 ",
  " לוחמי גליפולי 22 ",
  " אבן גבירול 184 ",
  " חנוך 60 ",
  " בן יהודה 28 ",
  " רח יז כ שלם 6 ",
  " הרב אלנקווה 78 ",
  " מעפילי אגוז 59 ",
  " לה גארדיה 9 ",
  " המרד 29 ",
  " שבזי 53 ",
  " הכובשים 55 ",
  " אלנבי 75 ",
  " דרך שלמה 157 ",
  " שד יהודית 28 ",
  " נחלת בנימין 73 ",
  " שד ירושלים 32 ",
  " דזינגוף 81 ",
  " אילת 58 ",
  " דרך חיים ברלב 216 ",
  " יפת 60 ",
  " בית אל 14 ",
  " דרך בגין 40 ",
  " אלנבי 35 ",
  " לוחמי גליפולי 22 ",
  " צ'לנוב 23 ",
  " קיבוץ גלויות 77 ",
 ];



 addressarr.forEach(function(ADDR) {
 
 geocoder.geocode(ADDR + 'תל אביב', function(err, res) {
  if (!err)
  {
    console.log('{"type":"Feature","properties":{"dbh":10},"geometry":{"type":"Point","coordinates":['+res[0].longitude+','+res[0].latitude+']}},')
    // console.log(res[0].latitude);
    
  } else 
  
  {
    console.log(err);
  }
 });
});


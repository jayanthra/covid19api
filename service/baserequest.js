const BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
const request=require('request')
const csv = require('csvtojson')
 
const loadRequest = {
   loadData() {
    return csv().fromStream(request.get(BASE_URL))
          .subscribe((json)=>{
          return json
    });
  }
}

module.exports = loadRequest;

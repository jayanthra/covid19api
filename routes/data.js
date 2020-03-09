const router = require('express').Router();
const loadFromCSV = require('../service/baserequest');

router.route('/all').get((req, res) => {
  loadFromCSV.loadData().then(resp => {
    locations = []
    resp.forEach(item => {
      let objCopy = Object.assign({}, item);
      delete objCopy['Province/State']
      delete objCopy['Country/Region']
      delete objCopy['Lat']
      delete objCopy['Long']
      total = 0
      for (let key in objCopy) {
        total = objCopy[key]
      }
      let newItem = {
        country : item['Country/Region'],
        province: item['Province/State'],
        coordinates: {
          lat:  item['Lat'],
          long: item['Long'],
        },
        cases: objCopy ,
        total: total
      }
      locations.push(newItem)
    })
    res.json(locations)
  })
});

module.exports = router;
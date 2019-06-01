const mongoose = require('mongoose');
const URI = 'mongodb://react-app-db:95UMw85yI1ffyyAjsnltoLInJnS03kMIwG1Ib4BCSA2zelcma0wUEr0kM77HlTLWXHayyvqWdVDthZjM1SBwsw%3D%3D@react-app-db.documents.azure.com:10255/?ssl=true';

mongoose.connect(URI, {
  useNewUrlParser: false}
  )
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;

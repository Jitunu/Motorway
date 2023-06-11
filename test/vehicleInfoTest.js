let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app/index').app;
const Vehicle = require('../app/dto/VehicleData');
let should = chai.should();
var assert = chai.assert;
chai.use(chaiHttp);

/*
  * Test the /GET/:id route
  */
describe('/GET/:id/:timeStamp vehicle', () => {
    it('it should GET a vehcile info with statelog by the given id and timestamp', (done) => {
           chai.request(server)
          .get('/motorway/vehicle/' + 3+'/'+"2022-09-12 10:00:00+00")
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('vehicleInfo');
                res.body.should.have.property('vehicleInfo').a('object');
                assert.equal(res.body.vehicleInfo.VehicleID, 3);
                assert.equal(res.body.vehicleInfo.VehicleMake, 'VW');
                assert.equal(res.body.vehicleInfo.VehicleModel, 'GOLF');
                assert.equal(res.body.vehicleInfo.VehicleState, 'selling');
            done();
          });
          server.stop;
    });

    it('it should GET a "No Vehicle Info for the given input timestamp" when invalid timestamp provide', (done) => {
          chai.request(server)
          .get('/motorway/vehicle/' + 3+'/'+"2022-09-11 09:11:44+00")
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('vehicleInfo');
                res.body.should.have.property('vehicleInfo').a('string');
                assert.equal(res.body.vehicleInfo, 'No Vehicle Info for the given input timestamp');
            done();
          });
          server.stop;
    });

    it('it should GET a "No Vehicle Info for the given input timestamp" when invalid vehicleId provide', (done) => {
      chai.request(server)
      .get('/motorway/vehicle/' + 10+'/'+"2022-09-11 09:11:44+00")
      .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('vehicleInfo');
            res.body.should.have.property('vehicleInfo').a('string');
            assert.equal(res.body.vehicleInfo, 'No Vehicle Info for the given input timestamp');
        done();
      });
      server.stop;
});
});
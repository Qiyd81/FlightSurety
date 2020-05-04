const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require('fs');

module.exports = function(deployer, network, accounts) {

    // let firstAirline = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
    // let firstAirline = '4f1d0d8b74a8f455a684bc9381f62059b112901b2230266e5929e008be439a35';
    let firstAirline = accounts[1];
    deployer.deploy(FlightSuretyData, firstAirline, 'First Airline')
    .then(() => {
        return deployer.deploy(FlightSuretyApp, FlightSuretyData.address)
                .then(() => {
                    let config = {
                        localhost: {
                            url: 'http://localhost:9545',
                            dataAddress: FlightSuretyData.address,
                            appAddress: FlightSuretyApp.address,
                            firstAirline: firstAirline,
                            oracleInitialIndex: 11,
                            oracleLastIndex: 30,
                            gas: 4700000,
                            gasPrice: 8000000000
                        }
                    }
                    fs.writeFileSync(__dirname + '/../src/dapp/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
                    fs.writeFileSync(__dirname + '/../src/server/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
                });
    });
}
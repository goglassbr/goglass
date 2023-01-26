import { GoogleSpreadsheet } from "google-spreadsheet";

const goglassjson = {
  "type": "service_account",
  "project_id": "goglass-52156",
  "private_key_id": "846744bc81fe77c9a183ef4e0abf24357387a8d7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCS+uur4RKJxSTi\nZQK5Nn6fHLZHhZYZLm5D2j04Su/I5W8eet/2EsSZEe9VrQ//1TMDUHBNfwWq5mFL\ngNHW0lHwTsyuLh3WdOmAyGnW/4N/muxx6WmL6uzyjRUVxuocTQe8GarjlE1Bjy4W\nrZ7stNmu+EcRN8962B6wfXl8y87xmaI9we9pz7USLCxjMOkvdj7xZyGbZamFW5Na\nxz5l9eBbs05QZ+km+L6Ymj9/nHQPSKo9dyOJDD9/yimhmZDNE10APr8r1N8RLoHl\nmsSqQA58x19dx4HFG8INbK+Ou58GlnnSjanCjdhV12xWcGObNkyIK71L/rgkL/Ja\nafyLkgsDAgMBAAECggEAA/b4dXtNnIwbWcS0xUSRjNQ28d30yxAZZwN+OZmtNy5C\niEAd8M2Cd8iSkVfo7GiWsYUGyn2zLEV+TrhBBiTykzi6RQvhv9UJLsaj3ZSoj5V2\nbFTfWn1cpTxQsHTcVXrEdc/8GpsiVwg4NjdlEpMxo1/MzEuaRquJbw8AwHDfpQe1\nQynXSXWRvw4vk60AOahYFNkafUP7nnZlovNiBKxKsZiIwgByqTBiNfv/yOhDPvjM\nXF1zcSyU2gp9JA0spV5k1op4qsij+ENiARuj+Hx1t4E94nQq7Z5xO+rB0eIdxT1F\njTqIrMRvB0sKy67SW9jyfJPsNyCO+SGf2F43mqEKiQKBgQDKKAkp9XnVH1WEQGSj\n0wVeYZxJ7bZKUrX8Zw+lqBh8NxXCkxaDP2TqoqNwLWeITZJf3GAleKIrqsO1nIjF\n1IrSWuoQoHS9+iUBXvKMDSNzjPWrfwffnWupDoqlOFCbIJEzxTZWXJbaXbQ9YuFE\n/5J9GeIfKYovmtwgtGd9bWz1SQKBgQC6ILZdb/a0cHJnqs/Cvl7pB4YCRYW7R+Ih\nSrJpgFkaNauEX4YPrK58zeTKUIjXHIaTY1yT0+267Nhs8UDdhj+TXjVZPQ+mi98z\n8mxOgoyWHWqKnoSLO8l17477TiYiw5LnazCUNJfPHVG6GvqJ1uUxICz5q+N3qad5\naXhaEZLZ6wKBgBLzrehBGyrfxSSg5M52+gnfHMfRgUV2e5kuEEl3eNQsVd3n7DRh\nvRRCKxBZMVuV6iMShfD9Xja5y587DZd+VYVjAI6OfGNTECUQwaxfjvNGQ8HQJuzP\n1UgEFPtoTCY+513zHyT5iSrvnfYjTvso+pK/2nMRceMEoZ5vS0R2/cABAoGAIN+c\nNf6LbS0bF7I0hanH65J3mbkbuIsmpkiiID4Z/qYSCAwzCluuab6XtR/qO0v/fNKk\nzDs3Fre0NfGaSkXmvql59KvzMrArmOotNOSb3fuOELOUp17E4z6PW1VfKO6v6I2n\nA9YSJfOAtsUDEQtSaY3MQ8CXKVBekvQM3KOT80cCgYEAsq1a2hJqqq/6JgyPbORH\nGznNjXOmni/ZhP2F1wYvyAibTkZreuPSwfsO3irB9dn3FzC7U16EvzjQ1Ju92Rdn\nFl+NWSgo9dD2Rez209SkkdkIB9CRfphzTjww8osJfBooiPVP4dLvy+55ZlaNGPYy\nvXp/ApKumX9eVyQe2WMO+tE=\n-----END PRIVATE KEY-----\n",
  "client_email": "goglasssheets@goglass-52156.iam.gserviceaccount.com",
  "client_id": "117837497534912847914",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/goglasssheets%40goglass-52156.iam.gserviceaccount.com"
}

const doc = new GoogleSpreadsheet('1n-PZdpyjouAqjO4_MBwd3wu3B99ieYE88I6sUp69o_4');

const appendSpreadsheet = async (row: any) => {
try {
    await doc.useServiceAccountAuth({
    client_email: goglassjson.client_email,
    private_key: goglassjson.private_key
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const result = await sheet.addRow(row);
    return result;
} catch (e) {
    console.error('Error: ', e);
}
};

export const createFormResult = async (data: any) => {
    return appendSpreadsheet(data)
}

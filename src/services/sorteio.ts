import { GoogleSpreadsheet } from "google-spreadsheet";

const goglassjson = {
    "type": "service_account",
    "project_id": "goglass-327415",
    "private_key_id": "e87171ba8b0ea45d129336e855d954288b0cd185",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCh5XHhvu8Sfs2S\nOiKM2afg04FrSxKJUSE66HaG/SDUydrqWhIHg/DYdwhdfeRjRnI74PMYqLENfOnj\nC2jVPaxBP8fQIEIVC2JPutnCXvkFP0TFzg1NKMJJ55TbLDjFkpHcUgMRiFc8qdXf\nXznbTCeqPL+fu+A2FVgHN2CYR0mUrrcgViejrkn/3hmDBs2Lc8OciBZihnrlM/DQ\nJ+RHewuYH+rIIB/IK8TG9SPSnnkHbr5EApero/h2Gqed7TpOxSxYfT1yk11kwPd+\nPyxAigYtx+PvEJm99kTfDMgq8DiP9jwssaserVLQ3J74zS1puq1E6kd8TcSMFlWx\nysucs/IFAgMBAAECggEABpDBPkwpsliRmiNA6PDfucKiDjmYahiv7g1k1yMXTIHW\nHqhh8EuVvhWPsYjsNOlzswFzolWe/oLJEmPRT8qFPI0rW4GfZG6WgVC8yYDj/OY8\nsf/h8rXbMTeSxhOkRsDjqOlrhe+/R+7ERV99f2r2ddUqWT47gL37WKmSgYJslbqy\nl8+cCuMvMTPujnIjTtnwmrxF+J7IoL7Iix5kpquEirU5pXEiamTLnGb+AGc0kvVj\noOrPqnAz2BXTxg1LGrrHtHfZv8fdaWpY4b3Aipu/Vdg4B0Gikp4xAr6kkodvte96\nKGw5DGmtS3KDuLaHYOFAuKyeapb9VC1Iv29omkVgGQKBgQDYkBRDkucnm03RPFM7\nUrijkN407PLCg+LS/xajkRokhnGCGEUjQRfIYpgUi1HkHRl4FmHxKdZzaOVp/YQ8\nAxv2OyAM/M4yUFx41suBpQkagOLBA3MPd+0tfcg/qWurcykpIqaVBap0vwQYAlKn\neXH499XQdammX0E4Lar1xgV/+QKBgQC/YN8aRWViQ+YCEbShXomesTRxtjuV8TTd\nxZx12h8wyCltIDAmHKuGL5GvU+W8amvBxzHfPaS/kEkrPaAZPUvJB7XVNNBlNQVS\n8H/MxF1PmcUY9BN0bqhxnaWYaBaBFae3bCio86P+itg+/QEf3r2hKgKQe6hKqO6+\nhXtcmZddbQKBgQDFdbnEU3IJHwY5PfP2J1rLaQ/y2goPagmrsYOG6IsZuqxMnqyL\nlJKG178rHE0y3YWXhXEQX8F1wbNMjSfBQGSCgy6aKPgp0DRAyjkMoNpIHDSlIOwM\nsqDD1eh8g5H05jAlnb6eKmhdwr2M1rFemtFc3T1Lsb1aQYhKHPnA1ym0oQKBgEAz\nHgSxHPae8mzlRaQQk7gRmBdBW7HMLcDrxrXeSzJRI1yBPMW8PmoQUR3w1hOj26ww\nx3EtO7QrkfAYhzmQT3kLxhrU0cfxxmxxU138zZSjb/QUBOa9LHKYwPFkkZASFKY6\neVVcDjqYlzxiIVtwnEqRTjTr1qPdEeIF40FIIPftAoGBALpkq/wKedkSK89xSXjh\nzz1bVpoCN/Ya2ZeV9Uwb76SN1nX/2JsyD0PNOHepBUVhQx1YYlKJxn+3fEHIZk9W\nSki96QHlLmsEHH5UqOSKygJFNeAvjRzcgZkNUXTaFIkE+e/HSf1FxUWz7BqKcEHG\n4nXgm4iWH0OJEL40lS9r3kFG\n-----END PRIVATE KEY-----\n",
    "client_email": "goglasssheets@goglass-327415.iam.gserviceaccount.com",
    "client_id": "114225775238599886459",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/goglasssheets%40goglass-327415.iam.gserviceaccount.com"
}

const doc = new GoogleSpreadsheet('1Xb2egb-NxXDStS6MtbR2-YoEaS6XXecUon06NBjZQ5M');

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

export const createCustomerSorteio = async (data: any) => {
    return appendSpreadsheet(data)
}
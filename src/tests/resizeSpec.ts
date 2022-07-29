import resize from '../resize';

describe("send a valid filename and height and path to resize()", () => {
    it("expect resizedImgPath ./assets/thumb/fjord_400_300.jpg", async() => {
        const response = await resize('fjord', 400, 300);
        const reizedImgPath : string = `./assets/thumb/fjord_400_300.jpg`;

        expect(response).toEqual(reizedImgPath);
    });
});


describe("send a wrong file name to resize()", () => {
    it("expect internal server error", async() => {
        const response = await resize('testfile', 400, 300);

        expect(response).toEqual('internal server error!');
    });
});
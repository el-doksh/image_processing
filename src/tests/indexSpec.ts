import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('GET /api/images without sending filename to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get('/api/images?width=300&height=300');
        expect(response.status).toEqual(400);
    });
});

describe('GET /api/images with wrong filename to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=test&width=300&height=300'
        );
        expect(response.status).toEqual(400);
    });
});

describe('GET /api/images without sending width to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&height=300'
        );
        expect(response.status).toEqual(400);
    });
});
describe('GET /api/images with string value for width to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&height=300&width=test'
        );
        expect(response.status).toEqual(400);
    });
});
describe('GET /api/images with negative numeric value for width to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&height=300&width=-500'
        );
        expect(response.status).toEqual(400);
    });
});

describe('GET /api/images without sending height to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&width=300'
        );
        expect(response.status).toEqual(400);
    });
});
describe('GET /api/images with string value for height to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&width=300&height=test'
        );
        expect(response.status).toEqual(400);
    });
});
describe('GET /api/images with negative numeric value for height to be 400', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&width=300&height=-500'
        );
        expect(response.status).toEqual(400);
    });
});

describe('GET /api/images with valid query parameters to be 200', () => {
    it('responds with json', async () => {
        const response = await request.get(
            '/api/images?filename=palmtunnel&height=300&width=300'
        );
        expect(response.status).toEqual(200);
    });
});

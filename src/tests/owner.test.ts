import { isOwner } from "../security/auth.middleware.js";
import { jest, describe, it, expect, beforeEach } from "@jest/globals";
  
describe("Unit Test: isOwner Middleware", () => {
    let mockRequest: any;
    let mockResponse: any;
    let nextFunction: any = jest.fn();

    beforeEach(() => {
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });
    it("Deve retornar 403 se o utilizador não for o dono do recurso", async () => {
        mockRequest = {
            user: { id: "user_123" },
            params: { id: "servico_999" },
        };
        const mockModel = {
            get: jest.fn<any>().mockResolvedValue({id_utilizador: "outro_user"}),
        };
        const middleware = isOwner(mockModel, "id_utilizador");
        await middleware(mockRequest, mockResponse,nextFunction);

        expect(mockResponse.status).toHaveBeenCalledWith(403);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Permissao insuficiente",
        });
        expect(nextFunction).not.toHaveBeenCalled();
    });
});
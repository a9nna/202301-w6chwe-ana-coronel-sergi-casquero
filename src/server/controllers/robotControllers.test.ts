import { type Request, type Response } from "express";
import Robot from "../../database/models/Robot";
import { createRobot, getRobotById, getRobots } from "./robotsControllers";

describe("Given the getRobots function", () => {
  describe("When it receives a res object", () => {
    test("Then it should call its status method with 200", async () => {
      const req = {} as Request;
      const res = { status: jest.fn() } as Partial<Response>;
      const next = () => ({});
      const statusCode = 200;

      Robot.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockResolvedValue({
          stats: {
            speed: 8,
            endurance: 6,
            creationDate: "1989-12-26T23:00:00.000Z",
          },
          id: "63efcf24773d3719e628a284",
          name: "AstroBot",
          image: "image.png",
        }),
      }));

      await getRobots(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });
});

describe("Given the getRobotById function", () => {
  describe("When it receives a request with idRobot '63f0bf28ec1efcc93e942727' in the query parameters", () => {
    test("Then it should call its status method with 200", async () => {
      const idRobot = "63f0bf28ec1efcc93e942727";
      const req = { params: idRobot } as unknown;
      const res = { status: jest.fn() } as Partial<Response>;
      const next = () => ({});
      const statusCode = 200;

      Robot.findById = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockResolvedValue({
          stats: {
            speed: 8,
            endurance: 6,
            creationDate: "1989-12-26T23:00:00.000Z",
          },
          id: idRobot,
          name: "AstroBot",
          image: "image.png",
        }),
      }));
      await getRobotById(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });
});

describe("Given the createRobot function", () => {
  describe("when it receives a req object with a robot data and a res object", () => {
    test("Then it should call its status method with 200", async () => {
      const robot = {
        name: "AstroBot",
        image: "image.png",
        stats: {
          speed: 8,
          endurance: 6,
          creationDate: "1989-12-26T23:00:00.000Z",
        },
      };
      const req = { body: robot } as Partial<Request>;
      const res = { status: jest.fn() } as Partial<Response>;
      const next = () => ({});
      const statusCode = 201;

      Robot.create = jest.fn().mockReturnValue(robot);
      await createRobot(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });
});

import { MailTrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../providers/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapMailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController };
import { Result } from "../../core/logic/Result";
import { IUserDTO } from "../../dto/IUserDTO";

export default interface IUserService {
  createUser(roleDTO: IUserDTO): Promise<Result<IUserDTO>>;
  getUsers(): Promise<Result<IUserDTO[]>>;
}

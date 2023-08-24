import { AppDataSource } from '../../config/typeorm'
import { User } from '../../entities/User';

export const saveUser = async (userParams:User) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.save(userParams);
    delete user.hashedPassword
    return user;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export const fetchUser = async (email: string) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
      email
    });
    return user;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
      return this.usersService.findAll();
  }

  @Mutation(() => User)
  async signUp(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    const existingUser = await this.usersService.findUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    return this.usersService.createUser(username, email, password);
  }
}
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/User.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/CreateUser.input';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from '../auth/guards/GraphQLAuth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @UseGuards(GraphQLAuthGuard)
  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.userService.getUsers();
  }
}

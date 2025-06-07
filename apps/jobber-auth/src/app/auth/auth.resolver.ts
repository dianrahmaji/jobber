import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/models/User.model';
import { LoginInput } from './dto/Login.input';
import { GraphqlContext } from '@jobber/common';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context: GraphqlContext
  ) {
    return this.authService.login(loginInput, context.res);
  }
}

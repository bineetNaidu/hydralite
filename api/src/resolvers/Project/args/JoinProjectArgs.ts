import { ProjectMemberType } from "~/resolver-types/enums/ProjectMemberType";
import { IsIn } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class JoinProjectArgs {
  @Field()
  projectId: string;

  @Field(() => ProjectMemberType)
  role: ProjectMemberType;
}

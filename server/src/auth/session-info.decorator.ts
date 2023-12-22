import { ExecutionContext, createParamDecorator } from "@nestjs/common";

// кастомный декоратор
export const SessionInfo = createParamDecorator((_, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().session);
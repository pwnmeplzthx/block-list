import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {

    constructor(
        private authServie: AuthService,
        private cookieService: CookieService,
    ){}

    @Post('sign-up')
    @ApiCreatedResponse()
    async signUp(
        // Представление принимаемых параметров
        @Body() body: SignInBodyDto,
        @Res({passthrough: true}) res: Response
    ) {
        const {accessToken} = await this.authServie.signUp(
            body.email,
            body.password
        );
        
        this.cookieService.setToken(res, accessToken);
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    async singIn(
        @Body() body: SignInBodyDto,
        @Res({passthrough: true}) res: Response
    ) {
        const {accessToken} = await this.authServie.signIn(
            body.email,
            body.password
        );

        this.cookieService.setToken(res, accessToken);
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    signOut(
        @Res({passthrough: true}) res: Response
    ) {
        this.cookieService.removeToken(res);
    }

    @Get('session')
    // Описываем возвращаемое представление
    @ApiOkResponse({
        type: GetSessionInfoDto,
    })
    @UseGuards(AuthGuard)
    getSessionInfo(
        @SessionInfo() session: GetSessionInfoDto
    ) {
        return session;
    }
}

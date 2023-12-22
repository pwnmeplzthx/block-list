import { Injectable } from '@nestjs/common';
import {randomBytes, pbkdf2Sync} from 'crypto'

@Injectable()
export class PasswordService {
    // Генерирование соли
    getSalt() {
        return randomBytes(16).toString('hex');
    }

    // Генерирование хеша на основе пароля и соли
    getHash(password: string, salt: string) {
        // 1000 - количество итераций
        // 64 - длина кеша
        // 'sha512' - алгоритм криптографии
        return pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    }
}

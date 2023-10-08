import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NATS_CLIENT',
                transport: Transport.NATS,
                options: {
                    servers: [process.env.NATS_SERVER_URL || 'nats://localhost:4222'],
                }
            }
        ])
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {
}

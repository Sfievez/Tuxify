import {Module} from '@nestjs/common';
import {GoogleController} from './google.controller';
import {GoogleService} from './google.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import { AuthModule } from './auth/auth.module';

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
        ]),
        AuthModule,
    ],
    controllers: [GoogleController],
    providers: [GoogleService],
})
export class GoogleModule {
}

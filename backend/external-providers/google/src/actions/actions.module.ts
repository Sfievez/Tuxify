import {Module} from '@nestjs/common';
import {ActionsController} from './actions.controller';
import {ActionsService} from './actions.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {GmailService} from "../gmail/gmail.service";
import {GmailModule} from "../gmail/gmail.module";
import {TokensService} from "../tokens/tokens.service";

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
        GmailModule,
    ],
    controllers: [ActionsController],
    providers: [ActionsService, GmailService, TokensService],
})
export class ActionsModule {
}

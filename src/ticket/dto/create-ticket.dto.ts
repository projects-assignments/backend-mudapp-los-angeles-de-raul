import { Provider } from "../provider/entities/provider.entity";
import { User } from "../user/entities/user.entity";

export class CreateTicketDto {
    readonly user: User;
    readonly provider: Provider;
    
}

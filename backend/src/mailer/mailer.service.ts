import { Injectable } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { User } from 'src/user/user.entity';
import { Task } from 'src/task/task.entity';
import { SESV2 } from 'aws-sdk'

@Injectable()
export class MailerService {
    constructor(private readonly authService: AuthenticationService) {}
    sendMail(user: User, task: Task) {
        console.log('Reached here')
        const ses = new SESV2();
        const token = this.authService.generateToken(user.email)
        const params = {
            Content: {
                Simple: {
                    Body: {
                        Text: {
                            Charset: "UTF-8",
                            Data: `Once you have completed the task, click on the link to confirm:\n http://localhost:3000/user/login?token=${token}&currentUser=${task.currentUser}`
                        }
                    },
                    Subject: {
                        Charset: "UTF-8",
                        Data: `Apt 3D - Chore: ${task.type}`
                    }
                }
            },
            Destination: {
                ToAddresses: [ user.email ]
            },
            EmailTags: [
                {
                    Name: "Apartment",
                    Value: "3D"
                }
            ],
            FromEmailAddress: "jay@csye6225-su19-chitaliaj.me"
        }
        ses.sendEmail(params, (err, data) => {
            if(err)
                return err
            else
                return data
        })
    }
}
